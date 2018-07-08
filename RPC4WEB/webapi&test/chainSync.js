document.write("<script src='httpcallSync.js'></script>");

function GetInfo()
{
    var body;
    var key = "/v1/chain/get_info";
    return doHttpCallSync(key, body);
}

function GetBlock(body)
{
    //var body = '{"block_num_or_id":' + blockNumOrID + '}';
    var key = "/v1/chain/get_block";
    return doHttpCallSync(key, body);
}

function GetBlockHeaderState(body)
{
    //var body = '{"block_num_or_id":' + blockNumOrID + '}';
    var key = "/v1/chain/get_block_header_state";
    return doHttpCallSync(key, body);
}

function GetCurrentBalance(body)
{
    //var body = '{"block_num_or_id":' + blockNumOrID + '}';
    var key = "/v1/chain/get_currency_balance";
    return doHttpCallSync(key, body);
}

function GetCurrentBalance(body)
{
    //var body = '{"block_num_or_id":' + blockNumOrID + '}';
    var key = "/v1/chain/get_currency_balance";
    return doHttpCallSync(key, body);
}

function GetAccount(body)
{
    //var body = '{"account_name":"' + accountName + '"}';
    var key = "/v1/chain/get_account";
    return doHttpCallSync(key, body);
}

function GetAbi(body)
{
    //var body = '{"account_name":"' + accountName + '"}';
    var key = "/v1/chain/get_code";
    return doHttpCallSync(key, body);
}

function GetTableRows(body)
{
    var key = "/v1/chain/get_table_rows";
    return doHttpCallSync(key, body);     
}

function PushTransaction(body)
{
    var key = "/v1/chain/push_transaction";
    return doHttpCallSync(key, body);     
}

function GetTableRows(body)
{
    var key = "/v1/chain/get_table_rows";
    return doHttpCallSync(key, body);     
}

function AbiJsonToBin(body)
{
    var key = "/v1/chain/abi_json_to_bin";
    return doHttpCallSync(key, body);     
}

function AbiBinToJson(body)
{
    var key = "/v1/chain/abi_bin_to_json";
    return doHttpCallSync(key, body);     
}

function GetRequireKeys(body)
{
    var key = "/v1/chain/get_required_keys";
    return doHttpCallSync(key, body);     
}

function GetCurrentStats(body)
{
    var key = "/v1/chain/get_currency_stats";
    return doHttpCallSync(key, body);     
}

function GetProducers(body)
{
    var key = "/v1/chain/get_producers";
    return doHttpCallSync(key, body);     
}

function PushBlock(body)
{
    var key = "/v1/chain/push_block";
    return doHttpCallSync(key, body);     
}


