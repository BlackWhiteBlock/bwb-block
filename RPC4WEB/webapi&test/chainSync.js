document.write("<script src='httpcallSync.js'></script>");

function GetInfoSync()
{
    var body;
    var key = "/v1/chain/get_info";
    return doHttpCallSync(key, body);
}

function GetBlockSync(body)
{
    //var body = '{"block_num_or_id":' + blockNumOrID + '}';
    var key = "/v1/chain/get_block";
    return doHttpCallSync(key, body);
}

function GetBlockHeaderStateSync(body)
{
    //var body = '{"block_num_or_id":' + blockNumOrID + '}';
    var key = "/v1/chain/get_block_header_state";
    return doHttpCallSync(key, body);
}

function GetCurrentBalanceSync(body)
{
    //var body = '{"block_num_or_id":' + blockNumOrID + '}';
    var key = "/v1/chain/get_currency_balance";
    return doHttpCallSync(key, body);
}

function GetCurrentBalanceSync(body)
{
    //var body = '{"block_num_or_id":' + blockNumOrID + '}';
    var key = "/v1/chain/get_currency_balance";
    return doHttpCallSync(key, body);
}

function GetAccountSync(body)
{
    //var body = '{"account_name":"' + accountName + '"}';
    var key = "/v1/chain/get_account";
    return doHttpCallSync(key, body);
}

function GetAbiSync(body)
{
    //var body = '{"account_name":"' + accountName + '"}';
    var key = "/v1/chain/get_code";
    return doHttpCallSync(key, body);
}

function GetTableRowsSync(body)
{
    var key = "/v1/chain/get_table_rows";
    return doHttpCallSync(key, body);     
}

function PushTransactionSync(body)
{
    var key = "/v1/chain/push_transaction";
    return doHttpCallSync(key, body);     
}

function GetTableRowsSync(body)
{
    var key = "/v1/chain/get_table_rows";
    return doHttpCallSync(key, body);     
}

function AbiJsonToBinSync(body)
{
    var key = "/v1/chain/abi_json_to_bin";
    return doHttpCallSync(key, body);     
}

function AbiBinToJsonSync(body)
{
    var key = "/v1/chain/abi_bin_to_json";
    return doHttpCallSync(key, body);     
}

function GetRequireKeysSync(body)
{
    var key = "/v1/chain/get_required_keys";
    return doHttpCallSync(key, body);     
}

function GetCurrentStatsSync(body)
{
    var key = "/v1/chain/get_currency_stats";
    return doHttpCallSync(key, body);     
}

function GetProducersSync(body)
{
    var key = "/v1/chain/get_producers";
    return doHttpCallSync(key, body);     
}

function PushBlockSync(body)
{
    var key = "/v1/chain/push_block";
    return doHttpCallSync(key, body);     
}


