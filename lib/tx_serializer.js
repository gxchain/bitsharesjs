import types from './serializer/src/types';
import * as ops from './serializer/src/operations';

import { Serializer } from './serializer';

function isArrayType(type) {
  return type.indexOf('[]') !== -1;
}

/**
 * serialize call data
 * @param {String} action - call action
 * @param {Object} params - call params
 * @param {Object} abi
 */
export const serializeCallData = (action, params, abi) => {
  const ser = makeSerializer(abi, action);
  return ser.toBuffer(params);
};

/**
 * deserialize call data
 * @param {String} action - call action
 * @param {String} data - data hex string
 * @param {Object} abi - contract abi
 */
export function deserializeCallData(action, data, abi) {
  // construct serializer
  const serializer = makeSerializer(abi, action);
  // dserialize from hex
  return serializer.toObject(serializer.fromHex(data));
}

export const serializeTransaction = (transaction) => {
  return ops.transaction.toBuffer(ops.transaction.fromObject(transaction));
};

/**
 * make serializer by abi and action
 * @param {Object} abi
 * @param {String} action
 */
export function makeSerializer(abi, action) {
  abi = JSON.parse(JSON.stringify(abi));
  let struct = Array.find(abi.structs, (s) => s.name === action);
  const typeObj = {};

  struct.fields.forEach((f) => {
    let isArrayFlag = false;
    if (isArrayType(f.type)) {
      isArrayFlag = true;
      f.type = f.type.split('[')[0];
    }

    let type = types[f.type];
    if (!type) {
      let t = Array.find(abi.types, (t) => t.new_type_name === f.type);
      if (t) {
        type = types[t.type];
      }
    }
    if (!type) {
      type = ops[f.type];
    }

    if (type) {
      if (isArrayFlag) {
        type = types.array(type, true);
      }
    }

    typeObj[f.name] = type;
  });

  return new Serializer('temp', typeObj);
}
