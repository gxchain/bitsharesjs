'use strict';

exports.__esModule = true;
exports.signature = exports.stealth_memo_data = exports.signed_transaction = exports.transaction = exports.proxy_transfer = exports.signed_proxy_transfer_params = exports.proxy_transfer_params = exports.data_transaction_datasource_validate_error = exports.data_transaction_datasource_upload = exports.data_transaction_pay = exports.data_transaction_update = exports.data_transaction_create = exports.balance_unlock = exports.balance_lock = exports.data_transaction_complain = exports.datasource_copyright_clear = exports.league_update = exports.league_create = exports.league_data_product_update = exports.league_data_product_create = exports.free_data_product_update = exports.free_data_product_create = exports.data_market_category_update = exports.data_market_category_create = exports.stale_league_update = exports.stale_league_create = exports.stale_league_data_product_update = exports.stale_league_data_product_create = exports.stale_free_data_product_update = exports.stale_free_data_product_create = exports.stale_data_market_category_update = exports.stale_data_market_category_create = exports.account_upgrade_data_transaction_member = exports.account_upgrade_datasource = exports.account_upgrade_merchant = exports.witness_unbanned = exports.witness_set_commission = exports.staking_claim = exports.staking_update = exports.staking_create = exports.inter_contract_call = exports.inline_transfer = exports.trust_node_pledge_withdraw = exports.update_contract = exports.call_contract = exports.create_contract = exports.contract_asset = exports.abi_def = exports.error_message = exports.clause_pair = exports.table_def = exports.action_def = exports.struct_def = exports.field_def = exports.type_def = exports.asset_claim_fees = exports.asset_settle_cancel = exports.transfer_from_blind = exports.blind_transfer = exports.blind_input = exports.transfer_to_blind = exports.blind_output = exports.stealth_confirmation = exports.override_transfer = exports.balance_claim = exports.assert = exports.block_id_predicate = exports.asset_symbol_eq_lit_predicate = exports.account_name_eq_lit_predicate = exports.custom = exports.worker_create = exports.burn_worker_initializer = undefined;
exports.vesting_balance_worker_initializer = exports.refund_worker_initializer = exports.vesting_balance_withdraw = exports.vesting_balance_create = exports.cdd_vesting_policy_initializer = exports.linear_vesting_policy_initializer = exports.committee_member_update_global_parameters = exports.chain_parameters = exports.committee_member_update = exports.committee_member_create = exports.withdraw_permission_delete = exports.withdraw_permission_claim = exports.withdraw_permission_update = exports.withdraw_permission_create = exports.proposal_delete = exports.proposal_update = exports.proposal_create = exports.op_wrapper = exports.witness_update = exports.witness_create = exports.asset_publish_feed = exports.price_feed = exports.asset_global_settle = exports.asset_settle = exports.asset_fund_fee_pool = exports.asset_reserve = exports.asset_issue = exports.asset_update_feed_producers = exports.asset_update_bitasset = exports.asset_update = exports.asset_create = exports.bitasset_options = exports.asset_options = exports.price = exports.account_transfer = exports.fba_distribute_operation = exports.account_upgrade = exports.account_whitelist = exports.account_update = exports.account_create = exports.account_options = exports.authority = exports.fill_order = exports.call_order_update = exports.limit_order_cancel = exports.limit_order_create = exports.transfer = exports.memo_data = exports.signed_block_header = exports.block_header = exports.signed_block = exports.processed_transaction = exports.asset = exports.void_result = exports.fee_schedule = exports.asset_claim_fees_operation_fee_parameters = exports.asset_settle_cancel_operation_fee_parameters = exports.transfer_from_blind_operation_fee_parameters = exports.blind_transfer_operation_fee_parameters = exports.transfer_to_blind_operation_fee_parameters = exports.override_transfer_operation_fee_parameters = exports.balance_claim_operation_fee_parameters = exports.assert_operation_fee_parameters = exports.custom_operation_fee_parameters = exports.worker_create_operation_fee_parameters = exports.vesting_balance_withdraw_operation_fee_parameters = exports.vesting_balance_create_operation_fee_parameters = exports.committee_member_update_global_parameters_operation_fee_parameters = exports.committee_member_update_operation_fee_parameters = exports.committee_member_create_operation_fee_parameters = exports.withdraw_permission_delete_operation_fee_parameters = exports.withdraw_permission_claim_operation_fee_parameters = exports.withdraw_permission_update_operation_fee_parameters = exports.withdraw_permission_create_operation_fee_parameters = exports.proposal_delete_operation_fee_parameters = exports.proposal_update_operation_fee_parameters = exports.proposal_create_operation_fee_parameters = exports.witness_update_operation_fee_parameters = exports.witness_create_operation_fee_parameters = exports.asset_publish_feed_operation_fee_parameters = exports.asset_global_settle_operation_fee_parameters = exports.asset_settle_operation_fee_parameters = exports.asset_fund_fee_pool_operation_fee_parameters = exports.asset_reserve_operation_fee_parameters = exports.asset_issue_operation_fee_parameters = exports.asset_update_feed_producers_operation_fee_parameters = exports.asset_update_bitasset_operation_fee_parameters = exports.asset_update_operation_fee_parameters = exports.asset_create_operation_fee_parameters = exports.account_transfer_operation_fee_parameters = exports.account_upgrade_operation_fee_parameters = exports.account_whitelist_operation_fee_parameters = exports.account_update_operation_fee_parameters = exports.account_create_operation_fee_parameters = exports.fill_order_operation_fee_parameters = exports.call_order_update_operation_fee_parameters = exports.limit_order_cancel_operation_fee_parameters = exports.limit_order_create_operation_fee_parameters = exports.transfer_operation_fee_parameters = exports.operation = undefined;

var _types = require('./types');

var _types2 = _interopRequireDefault(_types);

var _serializer = require('./serializer');

var _serializer2 = _interopRequireDefault(_serializer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uint8 = _types2.default.uint8,
    uint16 = _types2.default.uint16,
    uint32 = _types2.default.uint32,
    int64 = _types2.default.int64,
    uint64 = _types2.default.uint64,
    string = _types2.default.string,
    bytes = _types2.default.bytes,
    bool = _types2.default.bool,
    array = _types2.default.array,
    fixed_array = _types2.default.fixed_array,
    protocol_id_type = _types2.default.protocol_id_type,
    object_id_type = _types2.default.object_id_type,
    vote_id = _types2.default.vote_id,
    future_extensions = _types2.default.future_extensions,
    static_variant = _types2.default.static_variant,
    map = _types2.default.map,
    set = _types2.default.set,
    public_key = _types2.default.public_key,
    address = _types2.default.address,
    time_point_sec = _types2.default.time_point_sec,
    name_type = _types2.default.name_type,
    optional = _types2.default.optional;


future_extensions = _types2.default.void;

/*
 When updating generated code
 Replace:  operation = static_variant [
 with:     operation.st_operations = [

 Delete:
 public_key = new Serializer(
 "public_key"
 key_data: bytes 33
 )

 */
// Place-holder, their are dependencies on "operation" .. The final list of
// operations is not avialble until the very end of the generated code.
// See: operation.st_operations = ...
var operation = static_variant();
// module.exports["operation"] = operation;

exports.operation = operation;
// For module.exports

var Serializer = function Serializer(operation_name, serilization_types_object) {
  return new _serializer2.default(operation_name, serilization_types_object);
  // return module.exports[operation_name] = s;
};

// Custom-types follow Generated code:

// ##  Generated code follows
// # programs/js_operation_serializer > npm i -g decaffeinate
// ## -------------------------------
var transfer_operation_fee_parameters = exports.transfer_operation_fee_parameters = new Serializer('transfer_operation_fee_parameters', {
  fee: uint64,
  price_per_kbyte: uint32
});

var limit_order_create_operation_fee_parameters = exports.limit_order_create_operation_fee_parameters = new Serializer('limit_order_create_operation_fee_parameters', { fee: uint64 });

var limit_order_cancel_operation_fee_parameters = exports.limit_order_cancel_operation_fee_parameters = new Serializer('limit_order_cancel_operation_fee_parameters', { fee: uint64 });

var call_order_update_operation_fee_parameters = exports.call_order_update_operation_fee_parameters = new Serializer('call_order_update_operation_fee_parameters', { fee: uint64 });

var fill_order_operation_fee_parameters = exports.fill_order_operation_fee_parameters = new Serializer('fill_order_operation_fee_parameters');

var account_create_operation_fee_parameters = exports.account_create_operation_fee_parameters = new Serializer('account_create_operation_fee_parameters', {
  basic_fee: uint64,
  premium_fee: uint64,
  price_per_kbyte: uint32
});

var account_update_operation_fee_parameters = exports.account_update_operation_fee_parameters = new Serializer('account_update_operation_fee_parameters', {
  fee: int64,
  price_per_kbyte: uint32
});

var account_whitelist_operation_fee_parameters = exports.account_whitelist_operation_fee_parameters = new Serializer('account_whitelist_operation_fee_parameters', { fee: int64 });

var account_upgrade_operation_fee_parameters = exports.account_upgrade_operation_fee_parameters = new Serializer('account_upgrade_operation_fee_parameters', {
  membership_annual_fee: uint64,
  membership_lifetime_fee: uint64
});

var account_transfer_operation_fee_parameters = exports.account_transfer_operation_fee_parameters = new Serializer('account_transfer_operation_fee_parameters', { fee: uint64 });

var asset_create_operation_fee_parameters = exports.asset_create_operation_fee_parameters = new Serializer('asset_create_operation_fee_parameters', {
  symbol3: uint64,
  symbol4: uint64,
  long_symbol: uint64,
  price_per_kbyte: uint32
});

var asset_update_operation_fee_parameters = exports.asset_update_operation_fee_parameters = new Serializer('asset_update_operation_fee_parameters', {
  fee: uint64,
  price_per_kbyte: uint32
});

var asset_update_bitasset_operation_fee_parameters = exports.asset_update_bitasset_operation_fee_parameters = new Serializer('asset_update_bitasset_operation_fee_parameters', { fee: uint64 });

var asset_update_feed_producers_operation_fee_parameters = exports.asset_update_feed_producers_operation_fee_parameters = new Serializer('asset_update_feed_producers_operation_fee_parameters', { fee: uint64 });

var asset_issue_operation_fee_parameters = exports.asset_issue_operation_fee_parameters = new Serializer('asset_issue_operation_fee_parameters', {
  fee: uint64,
  price_per_kbyte: uint32
});

var asset_reserve_operation_fee_parameters = exports.asset_reserve_operation_fee_parameters = new Serializer('asset_reserve_operation_fee_parameters', { fee: uint64 });

var asset_fund_fee_pool_operation_fee_parameters = exports.asset_fund_fee_pool_operation_fee_parameters = new Serializer('asset_fund_fee_pool_operation_fee_parameters', { fee: uint64 });

var asset_settle_operation_fee_parameters = exports.asset_settle_operation_fee_parameters = new Serializer('asset_settle_operation_fee_parameters', { fee: uint64 });

var asset_global_settle_operation_fee_parameters = exports.asset_global_settle_operation_fee_parameters = new Serializer('asset_global_settle_operation_fee_parameters', { fee: uint64 });

var asset_publish_feed_operation_fee_parameters = exports.asset_publish_feed_operation_fee_parameters = new Serializer('asset_publish_feed_operation_fee_parameters', { fee: uint64 });

var witness_create_operation_fee_parameters = exports.witness_create_operation_fee_parameters = new Serializer('witness_create_operation_fee_parameters', { fee: uint64 });

var witness_update_operation_fee_parameters = exports.witness_update_operation_fee_parameters = new Serializer('witness_update_operation_fee_parameters', { fee: int64 });

var proposal_create_operation_fee_parameters = exports.proposal_create_operation_fee_parameters = new Serializer('proposal_create_operation_fee_parameters', {
  fee: uint64,
  price_per_kbyte: uint32
});

var proposal_update_operation_fee_parameters = exports.proposal_update_operation_fee_parameters = new Serializer('proposal_update_operation_fee_parameters', {
  fee: uint64,
  price_per_kbyte: uint32
});

var proposal_delete_operation_fee_parameters = exports.proposal_delete_operation_fee_parameters = new Serializer('proposal_delete_operation_fee_parameters', { fee: uint64 });

var withdraw_permission_create_operation_fee_parameters = exports.withdraw_permission_create_operation_fee_parameters = new Serializer('withdraw_permission_create_operation_fee_parameters', { fee: uint64 });

var withdraw_permission_update_operation_fee_parameters = exports.withdraw_permission_update_operation_fee_parameters = new Serializer('withdraw_permission_update_operation_fee_parameters', { fee: uint64 });

var withdraw_permission_claim_operation_fee_parameters = exports.withdraw_permission_claim_operation_fee_parameters = new Serializer('withdraw_permission_claim_operation_fee_parameters', {
  fee: uint64,
  price_per_kbyte: uint32
});

var withdraw_permission_delete_operation_fee_parameters = exports.withdraw_permission_delete_operation_fee_parameters = new Serializer('withdraw_permission_delete_operation_fee_parameters', { fee: uint64 });

var committee_member_create_operation_fee_parameters = exports.committee_member_create_operation_fee_parameters = new Serializer('committee_member_create_operation_fee_parameters', { fee: uint64 });

var committee_member_update_operation_fee_parameters = exports.committee_member_update_operation_fee_parameters = new Serializer('committee_member_update_operation_fee_parameters', { fee: uint64 });

var committee_member_update_global_parameters_operation_fee_parameters = exports.committee_member_update_global_parameters_operation_fee_parameters = new Serializer('committee_member_update_global_parameters_operation_fee_parameters', { fee: uint64 });

var vesting_balance_create_operation_fee_parameters = exports.vesting_balance_create_operation_fee_parameters = new Serializer('vesting_balance_create_operation_fee_parameters', { fee: uint64 });

var vesting_balance_withdraw_operation_fee_parameters = exports.vesting_balance_withdraw_operation_fee_parameters = new Serializer('vesting_balance_withdraw_operation_fee_parameters', { fee: uint64 });

var worker_create_operation_fee_parameters = exports.worker_create_operation_fee_parameters = new Serializer('worker_create_operation_fee_parameters', { fee: uint64 });

var custom_operation_fee_parameters = exports.custom_operation_fee_parameters = new Serializer('custom_operation_fee_parameters', {
  fee: uint64,
  price_per_kbyte: uint32
});

var assert_operation_fee_parameters = exports.assert_operation_fee_parameters = new Serializer('assert_operation_fee_parameters', { fee: uint64 });

var balance_claim_operation_fee_parameters = exports.balance_claim_operation_fee_parameters = new Serializer('balance_claim_operation_fee_parameters');

var override_transfer_operation_fee_parameters = exports.override_transfer_operation_fee_parameters = new Serializer('override_transfer_operation_fee_parameters', {
  fee: uint64,
  price_per_kbyte: uint32
});

var transfer_to_blind_operation_fee_parameters = exports.transfer_to_blind_operation_fee_parameters = new Serializer('transfer_to_blind_operation_fee_parameters', {
  fee: uint64,
  price_per_output: uint32
});

var blind_transfer_operation_fee_parameters = exports.blind_transfer_operation_fee_parameters = new Serializer('blind_transfer_operation_fee_parameters', {
  fee: uint64,
  price_per_output: uint32
});

var transfer_from_blind_operation_fee_parameters = exports.transfer_from_blind_operation_fee_parameters = new Serializer('transfer_from_blind_operation_fee_parameters', { fee: uint64 });

var asset_settle_cancel_operation_fee_parameters = exports.asset_settle_cancel_operation_fee_parameters = new Serializer('asset_settle_cancel_operation_fee_parameters');

var asset_claim_fees_operation_fee_parameters = exports.asset_claim_fees_operation_fee_parameters = new Serializer('asset_claim_fees_operation_fee_parameters', { fee: uint64 });

var fee_parameters = static_variant([transfer_operation_fee_parameters, limit_order_create_operation_fee_parameters, limit_order_cancel_operation_fee_parameters, call_order_update_operation_fee_parameters, fill_order_operation_fee_parameters, account_create_operation_fee_parameters, account_update_operation_fee_parameters, account_whitelist_operation_fee_parameters, account_upgrade_operation_fee_parameters, account_transfer_operation_fee_parameters, asset_create_operation_fee_parameters, asset_update_operation_fee_parameters, asset_update_bitasset_operation_fee_parameters, asset_update_feed_producers_operation_fee_parameters, asset_issue_operation_fee_parameters, asset_reserve_operation_fee_parameters, asset_fund_fee_pool_operation_fee_parameters, asset_settle_operation_fee_parameters, asset_global_settle_operation_fee_parameters, asset_publish_feed_operation_fee_parameters, witness_create_operation_fee_parameters, witness_update_operation_fee_parameters, proposal_create_operation_fee_parameters, proposal_update_operation_fee_parameters, proposal_delete_operation_fee_parameters, withdraw_permission_create_operation_fee_parameters, withdraw_permission_update_operation_fee_parameters, withdraw_permission_claim_operation_fee_parameters, withdraw_permission_delete_operation_fee_parameters, committee_member_create_operation_fee_parameters, committee_member_update_operation_fee_parameters, committee_member_update_global_parameters_operation_fee_parameters, vesting_balance_create_operation_fee_parameters, vesting_balance_withdraw_operation_fee_parameters, worker_create_operation_fee_parameters, custom_operation_fee_parameters, assert_operation_fee_parameters, balance_claim_operation_fee_parameters, override_transfer_operation_fee_parameters, transfer_to_blind_operation_fee_parameters, blind_transfer_operation_fee_parameters, transfer_from_blind_operation_fee_parameters, asset_settle_cancel_operation_fee_parameters, asset_claim_fees_operation_fee_parameters]);

var fee_schedule = exports.fee_schedule = new Serializer('fee_schedule', {
  parameters: set(fee_parameters),
  scale: uint32
});

var void_result = exports.void_result = new Serializer('void_result');

var asset = exports.asset = new Serializer('asset', {
  amount: int64,
  asset_id: protocol_id_type('asset')
});

var operation_result = static_variant([void_result, object_id_type, asset]);

var processed_transaction = exports.processed_transaction = new Serializer('processed_transaction', {
  ref_block_num: uint16,
  ref_block_prefix: uint32,
  expiration: time_point_sec,
  operations: array(operation),
  extensions: set(future_extensions),
  signatures: array(bytes(65)),
  operation_results: array(operation_result)
});

var signed_block = exports.signed_block = new Serializer('signed_block', {
  previous: bytes(20),
  timestamp: time_point_sec,
  witness: protocol_id_type('witness'),
  transaction_merkle_root: bytes(20),
  extensions: set(future_extensions),
  witness_signature: bytes(65),
  transactions: array(processed_transaction)
});

var block_header = exports.block_header = new Serializer('block_header', {
  previous: bytes(20),
  timestamp: time_point_sec,
  witness: protocol_id_type('witness'),
  transaction_merkle_root: bytes(20),
  extensions: set(future_extensions)
});

var signed_block_header = exports.signed_block_header = new Serializer('signed_block_header', {
  previous: bytes(20),
  timestamp: time_point_sec,
  witness: protocol_id_type('witness'),
  transaction_merkle_root: bytes(20),
  extensions: set(future_extensions),
  witness_signature: bytes(65)
});

var memo_data = exports.memo_data = new Serializer('memo_data', {
  from: public_key,
  to: public_key,
  nonce: uint64,
  message: bytes()
});

var transfer = exports.transfer = new Serializer('transfer', {
  fee: asset,
  from: protocol_id_type('account'),
  to: protocol_id_type('account'),
  amount: asset,
  memo: optional(memo_data),
  extensions: set(future_extensions)
});

var limit_order_create = exports.limit_order_create = new Serializer('limit_order_create', {
  fee: asset,
  seller: protocol_id_type('account'),
  amount_to_sell: asset,
  min_to_receive: asset,
  expiration: time_point_sec,
  fill_or_kill: bool,
  extensions: set(future_extensions)
});

var limit_order_cancel = exports.limit_order_cancel = new Serializer('limit_order_cancel', {
  fee: asset,
  fee_paying_account: protocol_id_type('account'),
  order: protocol_id_type('limit_order'),
  extensions: set(future_extensions)
});

var call_order_update = exports.call_order_update = new Serializer('call_order_update', {
  fee: asset,
  funding_account: protocol_id_type('account'),
  delta_collateral: asset,
  delta_debt: asset,
  extensions: set(future_extensions)
});

var fill_order = exports.fill_order = new Serializer('fill_order', {
  fee: asset,
  order_id: object_id_type,
  account_id: protocol_id_type('account'),
  pays: asset,
  receives: asset
});

var authority = exports.authority = new Serializer('authority', {
  weight_threshold: uint32,
  account_auths: map(protocol_id_type('account'), uint16),
  key_auths: map(public_key, uint16),
  address_auths: map(address, uint16)
});

var account_options = exports.account_options = new Serializer('account_options', {
  memo_key: public_key,
  voting_account: protocol_id_type('account'),
  num_witness: uint16,
  num_committee: uint16,
  votes: set(vote_id),
  extensions: set(future_extensions)
});

var account_create = exports.account_create = new Serializer('account_create', {
  fee: asset,
  registrar: protocol_id_type('account'),
  referrer: protocol_id_type('account'),
  referrer_percent: uint16,
  name: string,
  owner: authority,
  active: authority,
  options: account_options,
  extensions: set(future_extensions)
});

var account_update = exports.account_update = new Serializer('account_update', {
  fee: asset,
  account: protocol_id_type('account'),
  owner: optional(authority),
  active: optional(authority),
  new_options: optional(account_options),
  extensions: set(future_extensions)
});

var account_whitelist = exports.account_whitelist = new Serializer('account_whitelist', {
  fee: asset,
  authorizing_account: protocol_id_type('account'),
  account_to_list: protocol_id_type('account'),
  new_listing: uint8,
  extensions: set(future_extensions)
});

var account_upgrade = exports.account_upgrade = new Serializer('account_upgrade', {
  fee: asset,
  account_to_upgrade: protocol_id_type('account'),
  upgrade_to_lifetime_member: bool,
  extensions: set(future_extensions)
});

var fba_distribute_operation = exports.fba_distribute_operation = new Serializer('fba_distribute_operation', {
  fee: asset,
  extensions: set(future_extensions)
});

var account_transfer = exports.account_transfer = new Serializer('account_transfer', {
  fee: asset,
  account_id: protocol_id_type('account'),
  new_owner: protocol_id_type('account'),
  extensions: set(future_extensions)
});

var price = exports.price = new Serializer('price', {
  base: asset,
  quote: asset
});

var asset_options = exports.asset_options = new Serializer('asset_options', {
  max_supply: int64,
  market_fee_percent: uint16,
  max_market_fee: int64,
  issuer_permissions: uint16,
  flags: uint16,
  core_exchange_rate: price,
  whitelist_authorities: set(protocol_id_type('account')),
  blacklist_authorities: set(protocol_id_type('account')),
  whitelist_markets: set(protocol_id_type('asset')),
  blacklist_markets: set(protocol_id_type('asset')),
  description: string,
  extensions: set(future_extensions)
});

var bitasset_options = exports.bitasset_options = new Serializer('bitasset_options', {
  feed_lifetime_sec: uint32,
  minimum_feeds: uint8,
  force_settlement_delay_sec: uint32,
  force_settlement_offset_percent: uint16,
  maximum_force_settlement_volume: uint16,
  short_backing_asset: protocol_id_type('asset'),
  extensions: set(future_extensions)
});

var asset_create = exports.asset_create = new Serializer('asset_create', {
  fee: asset,
  issuer: protocol_id_type('account'),
  symbol: string,
  precision: uint8,
  common_options: asset_options,
  bitasset_opts: optional(bitasset_options),
  is_prediction_market: bool,
  extensions: set(future_extensions)
});

var asset_update = exports.asset_update = new Serializer('asset_update', {
  fee: asset,
  issuer: protocol_id_type('account'),
  asset_to_update: protocol_id_type('asset'),
  new_issuer: optional(protocol_id_type('account')),
  new_options: asset_options,
  extensions: set(future_extensions)
});

var asset_update_bitasset = exports.asset_update_bitasset = new Serializer('asset_update_bitasset', {
  fee: asset,
  issuer: protocol_id_type('account'),
  asset_to_update: protocol_id_type('asset'),
  new_options: bitasset_options,
  extensions: set(future_extensions)
});

var asset_update_feed_producers = exports.asset_update_feed_producers = new Serializer('asset_update_feed_producers', {
  fee: asset,
  issuer: protocol_id_type('account'),
  asset_to_update: protocol_id_type('asset'),
  new_feed_producers: set(protocol_id_type('account')),
  extensions: set(future_extensions)
});

var asset_issue = exports.asset_issue = new Serializer('asset_issue', {
  fee: asset,
  issuer: protocol_id_type('account'),
  asset_to_issue: asset,
  issue_to_account: protocol_id_type('account'),
  memo: optional(memo_data),
  extensions: set(future_extensions)
});

var asset_reserve = exports.asset_reserve = new Serializer('asset_reserve', {
  fee: asset,
  payer: protocol_id_type('account'),
  amount_to_reserve: asset,
  extensions: set(future_extensions)
});

var asset_fund_fee_pool = exports.asset_fund_fee_pool = new Serializer('asset_fund_fee_pool', {
  fee: asset,
  from_account: protocol_id_type('account'),
  asset_id: protocol_id_type('asset'),
  amount: int64,
  extensions: set(future_extensions)
});

var asset_settle = exports.asset_settle = new Serializer('asset_settle', {
  fee: asset,
  account: protocol_id_type('account'),
  amount: asset,
  extensions: set(future_extensions)
});

var asset_global_settle = exports.asset_global_settle = new Serializer('asset_global_settle', {
  fee: asset,
  issuer: protocol_id_type('account'),
  asset_to_settle: protocol_id_type('asset'),
  settle_price: price,
  extensions: set(future_extensions)
});

var price_feed = exports.price_feed = new Serializer('price_feed', {
  settlement_price: price,
  maintenance_collateral_ratio: uint16,
  maximum_short_squeeze_ratio: uint16,
  core_exchange_rate: price
});

var asset_publish_feed = exports.asset_publish_feed = new Serializer('asset_publish_feed', {
  fee: asset,
  publisher: protocol_id_type('account'),
  asset_id: protocol_id_type('asset'),
  feed: price_feed,
  extensions: set(future_extensions)
});

var witness_create = exports.witness_create = new Serializer('witness_create', {
  fee: asset,
  witness_account: protocol_id_type('account'),
  url: string,
  block_signing_key: public_key
});

var witness_update = exports.witness_update = new Serializer('witness_update', {
  fee: asset,
  witness: protocol_id_type('witness'),
  witness_account: protocol_id_type('account'),
  new_url: optional(string),
  new_signing_key: optional(public_key)
});

var op_wrapper = exports.op_wrapper = new Serializer('op_wrapper', { op: operation });

var proposal_create = exports.proposal_create = new Serializer('proposal_create', {
  fee: asset,
  fee_paying_account: protocol_id_type('account'),
  expiration_time: time_point_sec,
  proposed_ops: array(op_wrapper),
  review_period_seconds: optional(uint32),
  extensions: set(future_extensions)
});

var proposal_update = exports.proposal_update = new Serializer('proposal_update', {
  fee: asset,
  fee_paying_account: protocol_id_type('account'),
  proposal: protocol_id_type('proposal'),
  active_approvals_to_add: set(protocol_id_type('account')),
  active_approvals_to_remove: set(protocol_id_type('account')),
  owner_approvals_to_add: set(protocol_id_type('account')),
  owner_approvals_to_remove: set(protocol_id_type('account')),
  key_approvals_to_add: set(public_key),
  key_approvals_to_remove: set(public_key),
  extensions: set(future_extensions)
});

var proposal_delete = exports.proposal_delete = new Serializer('proposal_delete', {
  fee: asset,
  fee_paying_account: protocol_id_type('account'),
  using_owner_authority: bool,
  proposal: protocol_id_type('proposal'),
  extensions: set(future_extensions)
});

var withdraw_permission_create = exports.withdraw_permission_create = new Serializer('withdraw_permission_create', {
  fee: asset,
  withdraw_from_account: protocol_id_type('account'),
  authorized_account: protocol_id_type('account'),
  withdrawal_limit: asset,
  withdrawal_period_sec: uint32,
  periods_until_expiration: uint32,
  period_start_time: time_point_sec
});

var withdraw_permission_update = exports.withdraw_permission_update = new Serializer('withdraw_permission_update', {
  fee: asset,
  withdraw_from_account: protocol_id_type('account'),
  authorized_account: protocol_id_type('account'),
  permission_to_update: protocol_id_type('withdraw_permission'),
  withdrawal_limit: asset,
  withdrawal_period_sec: uint32,
  period_start_time: time_point_sec,
  periods_until_expiration: uint32
});

var withdraw_permission_claim = exports.withdraw_permission_claim = new Serializer('withdraw_permission_claim', {
  fee: asset,
  withdraw_permission: protocol_id_type('withdraw_permission'),
  withdraw_from_account: protocol_id_type('account'),
  withdraw_to_account: protocol_id_type('account'),
  amount_to_withdraw: asset,
  memo: optional(memo_data)
});

var withdraw_permission_delete = exports.withdraw_permission_delete = new Serializer('withdraw_permission_delete', {
  fee: asset,
  withdraw_from_account: protocol_id_type('account'),
  authorized_account: protocol_id_type('account'),
  withdrawal_permission: protocol_id_type('withdraw_permission')
});

var committee_member_create = exports.committee_member_create = new Serializer('committee_member_create', {
  fee: asset,
  committee_member_account: protocol_id_type('account'),
  url: string
});

var committee_member_update = exports.committee_member_update = new Serializer('committee_member_update', {
  fee: asset,
  committee_member: protocol_id_type('committee_member'),
  committee_member_account: protocol_id_type('account'),
  new_url: optional(string)
});

var chain_parameters = exports.chain_parameters = new Serializer('chain_parameters', {
  current_fees: fee_schedule,
  block_interval: uint8,
  maintenance_interval: uint32,
  maintenance_skip_slots: uint8,
  committee_proposal_review_period: uint32,
  maximum_transaction_size: uint32,
  maximum_block_size: uint32,
  maximum_time_until_expiration: uint32,
  maximum_proposal_lifetime: uint32,
  maximum_asset_whitelist_authorities: uint8,
  maximum_asset_feed_publishers: uint8,
  maximum_witness_count: uint16,
  maximum_committee_count: uint16,
  maximum_authority_membership: uint16,
  reserve_percent_of_fee: uint16,
  network_percent_of_fee: uint16,
  lifetime_referrer_percent_of_fee: uint16,
  cashback_vesting_period_seconds: uint32,
  cashback_vesting_threshold: int64,
  count_non_member_votes: bool,
  allow_non_member_whitelists: bool,
  witness_pay_per_block: int64,
  worker_budget_per_day: int64,
  max_predicate_opcode: uint16,
  fee_liquidation_threshold: int64,
  accounts_per_fee_scale: uint16,
  account_fee_scale_bitshifts: uint8,
  max_authority_depth: uint8,
  extensions: set(future_extensions)
});

var committee_member_update_global_parameters = exports.committee_member_update_global_parameters = new Serializer('committee_member_update_global_parameters', {
  fee: asset,
  new_parameters: chain_parameters
});

var linear_vesting_policy_initializer = exports.linear_vesting_policy_initializer = new Serializer('linear_vesting_policy_initializer', {
  begin_timestamp: time_point_sec,
  vesting_cliff_seconds: uint32,
  vesting_duration_seconds: uint32
});

var cdd_vesting_policy_initializer = exports.cdd_vesting_policy_initializer = new Serializer('cdd_vesting_policy_initializer', {
  start_claim: time_point_sec,
  vesting_seconds: uint32
});

var vesting_policy_initializer = static_variant([linear_vesting_policy_initializer, cdd_vesting_policy_initializer]);

var vesting_balance_create = exports.vesting_balance_create = new Serializer('vesting_balance_create', {
  fee: asset,
  creator: protocol_id_type('account'),
  owner: protocol_id_type('account'),
  amount: asset,
  policy: vesting_policy_initializer
});

var vesting_balance_withdraw = exports.vesting_balance_withdraw = new Serializer('vesting_balance_withdraw', {
  fee: asset,
  vesting_balance: protocol_id_type('vesting_balance'),
  owner: protocol_id_type('account'),
  amount: asset
});

var refund_worker_initializer = exports.refund_worker_initializer = new Serializer('refund_worker_initializer');

var vesting_balance_worker_initializer = exports.vesting_balance_worker_initializer = new Serializer('vesting_balance_worker_initializer', { pay_vesting_period_days: uint16 });

var burn_worker_initializer = exports.burn_worker_initializer = new Serializer('burn_worker_initializer');

var worker_initializer = static_variant([refund_worker_initializer, vesting_balance_worker_initializer, burn_worker_initializer]);

var worker_create = exports.worker_create = new Serializer('worker_create', {
  fee: asset,
  owner: protocol_id_type('account'),
  work_begin_date: time_point_sec,
  work_end_date: time_point_sec,
  daily_pay: int64,
  name: string,
  url: string,
  initializer: worker_initializer
});

var custom = exports.custom = new Serializer('custom', {
  fee: asset,
  payer: protocol_id_type('account'),
  required_auths: set(protocol_id_type('account')),
  id: uint16,
  data: bytes()
});

var account_name_eq_lit_predicate = exports.account_name_eq_lit_predicate = new Serializer('account_name_eq_lit_predicate', {
  account_id: protocol_id_type('account'),
  name: string
});

var asset_symbol_eq_lit_predicate = exports.asset_symbol_eq_lit_predicate = new Serializer('asset_symbol_eq_lit_predicate', {
  asset_id: protocol_id_type('asset'),
  symbol: string
});

var block_id_predicate = exports.block_id_predicate = new Serializer('block_id_predicate', {
  id: bytes(20)
});

var predicate = static_variant([account_name_eq_lit_predicate, asset_symbol_eq_lit_predicate, block_id_predicate]);

var assert = exports.assert = new Serializer('assert', {
  fee: asset,
  fee_paying_account: protocol_id_type('account'),
  predicates: array(predicate),
  required_auths: set(protocol_id_type('account')),
  extensions: set(future_extensions)
});

var balance_claim = exports.balance_claim = new Serializer('balance_claim', {
  fee: asset,
  deposit_to_account: protocol_id_type('account'),
  balance_to_claim: protocol_id_type('balance'),
  balance_owner_key: public_key,
  total_claimed: asset
});

var override_transfer = exports.override_transfer = new Serializer('override_transfer', {
  fee: asset,
  issuer: protocol_id_type('account'),
  from: protocol_id_type('account'),
  to: protocol_id_type('account'),
  amount: asset,
  memo: optional(memo_data),
  extensions: set(future_extensions)
});

var stealth_confirmation = exports.stealth_confirmation = new Serializer('stealth_confirmation', {
  one_time_key: public_key,
  to: optional(public_key),
  encrypted_memo: bytes()
});

var blind_output = exports.blind_output = new Serializer('blind_output', {
  commitment: bytes(33),
  range_proof: bytes(),
  owner: authority,
  stealth_memo: optional(stealth_confirmation)
});

var transfer_to_blind = exports.transfer_to_blind = new Serializer('transfer_to_blind', {
  fee: asset,
  amount: asset,
  from: protocol_id_type('account'),
  blinding_factor: bytes(32),
  outputs: array(blind_output)
});

var blind_input = exports.blind_input = new Serializer('blind_input', {
  commitment: bytes(33),
  owner: authority
});

var blind_transfer = exports.blind_transfer = new Serializer('blind_transfer', {
  fee: asset,
  inputs: array(blind_input),
  outputs: array(blind_output)
});

var transfer_from_blind = exports.transfer_from_blind = new Serializer('transfer_from_blind', {
  fee: asset,
  amount: asset,
  to: protocol_id_type('account'),
  blinding_factor: bytes(32),
  inputs: array(blind_input)
});

var asset_settle_cancel = exports.asset_settle_cancel = new Serializer('asset_settle_cancel', {
  fee: asset,
  settlement: protocol_id_type('force_settlement'),
  account: protocol_id_type('account'),
  amount: asset,
  extensions: set(future_extensions)
});

var asset_claim_fees = exports.asset_claim_fees = new Serializer('asset_claim_fees', {
  fee: asset,
  issuer: protocol_id_type('account'),
  amount_to_claim: asset,
  extensions: set(future_extensions)
});

var type_def = exports.type_def = new Serializer('type_def', {
  new_type_name: string,
  type: string
});

var field_def = exports.field_def = new Serializer('field_def', {
  name: string,
  type: string
});
field_def.nosort = true;

var struct_def = exports.struct_def = new Serializer('struct_def', {
  name: string,
  base: string,
  fields: set(field_def)
});

var action_def = exports.action_def = new Serializer('action_def', {
  name: name_type,
  type: string,
  payable: bool
});

var table_def = exports.table_def = new Serializer('table_def', {
  name: name_type,
  index_type: string,
  key_names: set(string),
  key_types: set(string),
  type: string
});

var clause_pair = exports.clause_pair = new Serializer('clause_pair', {
  id: string,
  body: string
});

var error_message = exports.error_message = new Serializer('error_message', {
  error_code: uint64,
  error_msg: string
});

var abi_def = exports.abi_def = new Serializer('abi_def', {
  version: string,
  types: set(type_def),
  structs: set(struct_def),
  actions: set(action_def),
  tables: set(table_def),
  error_messages: set(error_message),
  abi_extensions: set(future_extensions)
});

var contract_asset = exports.contract_asset = new Serializer('contract_asset', {
  amount: int64,
  asset_id: uint64
});

var create_contract = exports.create_contract = new Serializer('create_contract', {
  fee: asset,
  name: string,
  account: protocol_id_type('account'),
  vm_type: string,
  vm_version: string,
  code: bytes(),
  abi: abi_def,
  extensions: set(future_extensions)
});

var call_contract = exports.call_contract = new Serializer('call_contract', {
  fee: asset,
  account: protocol_id_type('account'),
  contract_id: protocol_id_type('account'),
  amount: optional(asset),
  method_name: name_type,
  data: bytes(),
  extensions: set(future_extensions)
});

var update_contract = exports.update_contract = new Serializer('update_contract', {
  fee: asset,
  owner: protocol_id_type('account'),
  new_owner: optional(protocol_id_type('account')),
  contract: protocol_id_type('account'),
  code: bytes(),
  abi: abi_def,
  extensions: set(future_extensions)
});

var trust_node_pledge_withdraw = exports.trust_node_pledge_withdraw = new Serializer('trust_node_pledge_withdraw', {
  fee: asset,
  witness_account: protocol_id_type('account')
});

var inline_transfer = exports.inline_transfer = new Serializer('inline_transfer', {
  fee: asset,
  from: protocol_id_type('account'),
  to: protocol_id_type('account'),
  amount: asset,
  memo: string,
  extensions: set(future_extensions)
});

var inter_contract_call = exports.inter_contract_call = new Serializer('inter_contract_call', {
  fee: asset,
  sender_contract: protocol_id_type('account'),
  contract_id: protocol_id_type('account'),
  amount: asset,
  method_name: string,
  data: bytes(),
  extensions: set(future_extensions)
});

var staking_create = exports.staking_create = new Serializer('staking_create', {
  fee: asset,
  owner: protocol_id_type('account'),
  trust_node: protocol_id_type('witness'),
  amount: asset,
  program_id: string,
  create_date_time: time_point_sec,
  weight: uint32,
  staking_days: uint32,
  extensions: set(future_extensions)
});

var staking_update = exports.staking_update = new Serializer('staking_update', {
  fee: asset,
  owner: protocol_id_type('account'),
  trust_node: protocol_id_type('witness'),
  staking_id: protocol_id_type('staking'),
  extensions: set(future_extensions)
});

var staking_claim = exports.staking_claim = new Serializer('staking_claim', {
  fee: asset,
  owner: protocol_id_type('account'),
  staking_id: protocol_id_type('staking'),
  extensions: set(future_extensions)
});

var witness_set_commission = exports.witness_set_commission = new Serializer('witness_set_commission', {
  fee: asset,
  witness: protocol_id_type('witness'),
  witness_account: protocol_id_type('account'),
  commission_rate: uint32,
  extensions: set(future_extensions)
});

var witness_unbanned = exports.witness_unbanned = new Serializer('witness_unbanned', {
  fee: asset,
  witness: protocol_id_type('witness'),
  witness_account: protocol_id_type('account'),
  extensions: set(future_extensions)
});

// ---------------------
//  data products & leagues, not implemented yet, since now
// ---------------------

var account_upgrade_merchant = exports.account_upgrade_merchant = new Serializer('account_upgrade_merchant', {});
var account_upgrade_datasource = exports.account_upgrade_datasource = new Serializer('account_upgrade_datasource', {});
var account_upgrade_data_transaction_member = exports.account_upgrade_data_transaction_member = new Serializer('account_upgrade_data_transaction_member', {});

var stale_data_market_category_create = exports.stale_data_market_category_create = new Serializer('stale_data_market_category_create', {});
var stale_data_market_category_update = exports.stale_data_market_category_update = new Serializer('stale_ata_market_category_update', {});

var stale_free_data_product_create = exports.stale_free_data_product_create = new Serializer('stale_free_data_product_create', {});
var stale_free_data_product_update = exports.stale_free_data_product_update = new Serializer('free_data_product_update', {});

var stale_league_data_product_create = exports.stale_league_data_product_create = new Serializer('stale_league_data_product_create', {});
var stale_league_data_product_update = exports.stale_league_data_product_update = new Serializer('stale_league_data_product_update', {});

var stale_league_create = exports.stale_league_create = new Serializer('stale_league_create', {});
var stale_league_update = exports.stale_league_update = new Serializer('stale_league_update', {});

var data_market_category_create = exports.data_market_category_create = new Serializer('data_market_category_create', {});
var data_market_category_update = exports.data_market_category_update = new Serializer('data_market_category_update', {});

var free_data_product_create = exports.free_data_product_create = new Serializer('free_data_product_create', {});
var free_data_product_update = exports.free_data_product_update = new Serializer('free_data_product_update', {});

var league_data_product_create = exports.league_data_product_create = new Serializer('league_data_product_create', {});
var league_data_product_update = exports.league_data_product_update = new Serializer('league_data_product_update', {});

var league_create = exports.league_create = new Serializer('league_create', {});
var league_update = exports.league_update = new Serializer('league_update', {});

var datasource_copyright_clear = exports.datasource_copyright_clear = new Serializer('datasource_copyright_clear', {});
var data_transaction_complain = exports.data_transaction_complain = new Serializer('data_transaction_complain', {});

var balance_lock = exports.balance_lock = new Serializer('balance_lock', {
  fee: asset,
  account: protocol_id_type('account'),
  create_date_time: time_point_sec,
  program_id: string,
  amount: asset,
  lock_days: uint32,
  interest_rate: uint32,
  memo: string,
  extensions: set(future_extensions)
});

var balance_unlock = exports.balance_unlock = new Serializer('balance_unlock', {
  fee: asset,
  account: protocol_id_type('account'),
  lock_id: protocol_id_type('lock_balance'),
  extensions: set(future_extensions)
});

// ---------------------
//  data trasaction
// ---------------------

var data_transaction_create = exports.data_transaction_create = new Serializer('data_transaction_create', {
  request_id: string,
  product_id: object_id_type,
  version: string,
  params: string,
  fee: asset,
  requester: protocol_id_type('account'),
  create_date_time: time_point_sec,
  league_id: optional(protocol_id_type('league')),
  extensions: set(future_extensions)
});

var data_transaction_update = exports.data_transaction_update = new Serializer('data_transaction_update', {
  request_id: string,
  new_status: uint8,
  fee: asset,
  new_requester: protocol_id_type('account'),
  memo: string,
  extensions: set(future_extensions)
});

var data_transaction_pay = exports.data_transaction_pay = new Serializer('data_transaction_pay', {
  fee: asset,
  from: protocol_id_type('account'),
  to: protocol_id_type('account'),
  amount: asset,
  request_id: string,
  extensions: set(future_extensions)
});

var data_transaction_datasource_upload = exports.data_transaction_datasource_upload = new Serializer('data_transaction_datasource_upload', {
  request_id: string,
  requester: protocol_id_type('account'),
  datasource: protocol_id_type('account'),
  fee: asset,
  extensions: set(future_extensions)
});

var data_transaction_datasource_validate_error = exports.data_transaction_datasource_validate_error = new Serializer('data_transaction_datasource_validate_error', {
  request_id: string,
  datasource: protocol_id_type('account'),
  fee: asset,
  extensions: set(future_extensions)
});

var proxy_transfer_params = exports.proxy_transfer_params = new Serializer('proxy_transfer_params', {
  from: protocol_id_type('account'), // 从该帐户转帐，转帐数量为amount
  to: protocol_id_type('account'), // 转帐至该帐户
  proxy_account: protocol_id_type('account'), // 代理记帐方
  amount: asset,
  percentage: uint16, // amount的百分比，转至proxy_account
  memo: string, // string
  expiration: time_point_sec // 授权过期时间， 也是signatures的有效期，expiration < now + maximum_time_until_expiration
});

var signed_proxy_transfer_params = exports.signed_proxy_transfer_params = new Serializer('signed_proxy_transfer_params', {
  from: protocol_id_type('account'), // 从该帐户转帐，转帐数量为amount
  to: protocol_id_type('account'), // 转帐至该帐户
  proxy_account: protocol_id_type('account'), // 代理记帐方
  amount: asset,
  percentage: uint16, // amount的百分比，转至proxy_account
  memo: string, // string
  expiration: time_point_sec, // 授权过期时间， 也是signatures的有效期，expiration < now + maximum_time_until_expiration
  signatures: array(bytes(65))
});

var proxy_transfer = exports.proxy_transfer = new Serializer('proxy_transfer', {
  proxy_memo: string,
  fee: asset,
  request_params: signed_proxy_transfer_params,
  extensions: set(future_extensions)
});

operation.st_operations = [transfer, limit_order_create, limit_order_cancel, call_order_update, fill_order, account_create, account_update, account_whitelist, account_upgrade, account_transfer, asset_create, asset_update, asset_update_bitasset, asset_update_feed_producers, asset_issue, asset_reserve, asset_fund_fee_pool, asset_settle, asset_global_settle, asset_publish_feed, witness_create, witness_update, proposal_create, proposal_update, proposal_delete, withdraw_permission_create, withdraw_permission_update, withdraw_permission_claim, withdraw_permission_delete, committee_member_create, committee_member_update, committee_member_update_global_parameters, vesting_balance_create, vesting_balance_withdraw, worker_create, custom, assert, balance_claim, override_transfer, transfer_to_blind, blind_transfer, transfer_from_blind, asset_settle_cancel, asset_claim_fees, fba_distribute_operation, account_upgrade_merchant, account_upgrade_datasource, stale_data_market_category_create, stale_data_market_category_update, stale_free_data_product_create, stale_free_data_product_update, stale_league_data_product_create, stale_league_data_product_update, stale_league_create, stale_league_update, data_transaction_create, data_transaction_update, data_transaction_pay, account_upgrade_data_transaction_member, data_transaction_datasource_upload, data_transaction_datasource_validate_error, data_market_category_create, data_market_category_update, free_data_product_create, free_data_product_update, league_data_product_create, league_data_product_update, league_create, league_update, datasource_copyright_clear, data_transaction_complain, balance_lock, balance_unlock, proxy_transfer, create_contract, call_contract, update_contract, trust_node_pledge_withdraw, inline_transfer, inter_contract_call, staking_create, staking_update, staking_claim, witness_set_commission, witness_unbanned];

var transaction = exports.transaction = new Serializer('transaction', {
  ref_block_num: uint16,
  ref_block_prefix: uint32,
  expiration: time_point_sec,
  operations: array(operation),
  extensions: set(future_extensions)
});

var signed_transaction = exports.signed_transaction = new Serializer('signed_transaction', {
  ref_block_num: uint16,
  ref_block_prefix: uint32,
  expiration: time_point_sec,
  operations: array(operation),
  extensions: set(future_extensions),
  signatures: array(bytes(65))
});
//# -------------------------------
//#  Generated code end
//# -------------------------------

// Custom Types

var stealth_memo_data = exports.stealth_memo_data = new Serializer('stealth_memo_data', {
  from: optional(public_key),
  amount: asset,
  blinding_factor: bytes(32),
  commitment: bytes(33),
  check: uint32
});

var signature = exports.signature = bytes(65);
// var stealth_confirmation = new Serializer(
//     "stealth_confirmation", {
//     one_time_key: public_key,
//     to: optional( public_key ),
//     encrypted_memo: stealth_memo_data
// })