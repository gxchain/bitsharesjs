'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _ecdsa = require('./ecdsa');

var _hash2 = require('./hash');

var _ecurve = require('ecurve');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _bigi = require('bigi');

var _bigi2 = _interopRequireDefault(_bigi);

var _PublicKey = require('./PublicKey');

var _PublicKey2 = _interopRequireDefault(_PublicKey);

var _ecsignature = require('./ecsignature');

var _ecsignature2 = _interopRequireDefault(_ecsignature);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var secp256k1 = (0, _ecurve.getCurveByName)('secp256k1');
var secp256k1Lib = require("secp256k1");

var Signature = function () {
    function Signature(r1, s1, i1) {
        (0, _classCallCheck3.default)(this, Signature);

        this.r = r1;
        this.s = s1;
        this.i = i1;
        _assert2.default.equal(this.r != null, true, 'Missing parameter');
        _assert2.default.equal(this.s != null, true, 'Missing parameter');
        _assert2.default.equal(this.i != null, true, 'Missing parameter');
    }

    Signature.fromBuffer = function fromBuffer(buf) {
        var i, r, s;
        _assert2.default.equal(buf.length, 65, 'Invalid signature length');
        i = buf.readUInt8(0);
        _assert2.default.equal(i - 27, i - 27 & 7, 'Invalid signature parameter');
        r = _bigi2.default.fromBuffer(buf.slice(1, 33));
        s = _bigi2.default.fromBuffer(buf.slice(33));
        return new Signature(r, s, i);
    };

    Signature.prototype.toBuffer = function toBuffer() {
        var buf;
        buf = new Buffer(65);
        buf.writeUInt8(this.i, 0);
        this.r.toBuffer(32).copy(buf, 1);
        this.s.toBuffer(32).copy(buf, 33);
        return buf;
    };

    Signature.prototype.recoverPublicKeyFromBuffer = function recoverPublicKeyFromBuffer(buffer) {
        return this.recoverPublicKey((0, _hash2.sha256)(buffer));
    };

    /**
     @return {PublicKey}
     */
    Signature.prototype.recoverPublicKey = function recoverPublicKey(sha256_buffer) {
        var Q = void 0,
            e = void 0,
            i = void 0;
        e = _bigi2.default.fromBuffer(sha256_buffer);
        i = this.i;
        i -= 27;
        i = i & 3;
        Q = (0, _ecdsa.recoverPubKey)(secp256k1, e, this, i);
        return _PublicKey2.default.fromPoint(Q);
    };

    /**
     * signature malleability check https://github.com/bitshares/bitshares1-core/issues/1129
     * @returns {boolean}
     */
    Signature.prototype.isCanonical = function isCanonical() {
        var r = this.r.toBuffer(32);
        var s = this.s.toBuffer(32);
        return !(r[0] & 0x80) && !(r[0] == 0 && !(r[1] & 0x80)) && !(s[0] & 0x80) && !(s[0] == 0 && !(s[1] & 0x80));
    };

    /**
     @param {Buffer} buf
     @param {PrivateKey} private_key
     @return {Signature}
     */


    Signature.signBuffer = function signBuffer(buf, private_key) {
        var _hash = (0, _hash2.sha256)(buf);
        var signature = Signature.signBufferSha256V2(_hash, private_key);
        var times = 0;
        while (!signature.isCanonical()) {
            signature = Signature.signBufferSha256V2(_hash, private_key);
            if (times++ > 10) {
                console.log('WARN: ECDSA tried', times, 'times');
            }
        }
        return signature;
    };

    Signature.signBufferSha256V2 = function signBufferSha256V2(_hash, private_key) {
        var nonce = 0,
            sig = null,
            sigDER = null;
        while (true) {
            sig = secp256k1Lib.sign(_hash, private_key.toBuffer(), {
                noncefn: function noncefn() {
                    return (0, _hash2.sha256)(new Buffer(_hash + nonce++));
                }
            });
            sigDER = secp256k1Lib.signatureExport(sig.signature);
            var lenR = sigDER[3];
            var lenS = sigDER[5 + lenR];
            if (lenR === 32 && lenS === 32) {
                break;
            }
            if (nonce % 10 === 0) {
                console.log("WARN: " + nonce + " attempts to find canonical signature");
            }
        }

        var ecsig = _ecsignature2.default.fromDER(sigDER);
        var signature = new Signature(ecsig.r, ecsig.s, sig.recovery + 31);
        return signature;
    };

    /** Sign a buffer of exactally 32 bytes in size (sha256(text))
     @param {Buffer} buf - 32 bytes binary
     @param {PrivateKey} private_key
     @return {Signature}
     */


    Signature.signBufferSha256 = function signBufferSha256(buf_sha256, private_key) {
        if (buf_sha256.length !== 32 || !Buffer.isBuffer(buf_sha256)) throw new Error("buf_sha256: 32 byte buffer requred");
        var der, e, ecsignature, i, lenR, lenS, nonce;
        i = null;
        nonce = 0;
        e = _bigi2.default.fromBuffer(buf_sha256);
        while (true) {
            ecsignature = (0, _ecdsa.sign)(secp256k1, buf_sha256, private_key.d, nonce++);
            der = ecsignature.toDER();

            lenR = der[3];
            lenS = der[5 + lenR];
            if (lenR === 32 && lenS === 32) {
                i = (0, _ecdsa.calcPubKeyRecoveryParam)(secp256k1, e, ecsignature, private_key.toPublicKey().Q);
                i += 4; // compressed
                i += 27; // compact  //  24 or 27 :( forcing odd-y 2nd key candidate)
                break;
            }
            if (nonce % 10 === 0) {
                console.log("WARN: " + nonce + " attempts to find canonical signature");
            }
        }
        return new Signature(ecsignature.r, ecsignature.s, i);
    };

    Signature.sign = function sign(string, private_key) {
        return Signature.signBuffer(new Buffer(string), private_key);
    };

    /**
     @param {Buffer} un-hashed
     @param {./PublicKey}
     @return {boolean}
     */
    Signature.prototype.verifyBuffer = function verifyBuffer(buf, public_key) {
        var _hash = (0, _hash2.sha256)(buf);
        return this.verifyHashV2(_hash, public_key);
        // return this.verifyHash(_hash, public_key);
    };

    Signature.prototype.verifyHash = function verifyHash(hash, public_key) {
        _assert2.default.equal(hash.length, 32, "A SHA 256 should be 32 bytes long, instead got " + hash.length);
        return (0, _ecdsa.verify)(secp256k1, hash, {
            r: this.r,
            s: this.s
        }, public_key.Q);
    };

    Signature.prototype.verifyHashV2 = function verifyHashV2(hash, public_key) {
        _assert2.default.equal(hash.length, 32, "A SHA 256 should be 32 bytes long, instead got " + hash.length);
        return secp256k1Lib.verify(hash, this.toBuffer().slice(1), public_key.toBuffer());
    };

    /* <HEX> */

    Signature.prototype.toByteBuffer = function toByteBuffer() {
        var b;
        b = new ByteBuffer(ByteBuffer.DEFAULT_CAPACITY, ByteBuffer.LITTLE_ENDIAN);
        this.appendByteBuffer(b);
        return b.copy(0, b.offset);
    };

    Signature.fromHex = function fromHex(hex) {
        return Signature.fromBuffer(new Buffer(hex, "hex"));
    };

    Signature.prototype.toHex = function toHex() {
        return this.toBuffer().toString("hex");
    };

    Signature.signHex = function signHex(hex, private_key) {
        var buf;
        buf = new Buffer(hex, 'hex');
        return Signature.signBuffer(buf, private_key);
    };

    Signature.prototype.verifyHex = function verifyHex(hex, public_key) {
        var buf;
        buf = new Buffer(hex, 'hex');
        return this.verifyBuffer(buf, public_key);
    };

    return Signature;
}();

exports.default = Signature;
module.exports = exports['default'];