document.write("<script src='httpcallSync.js'></script>");

var http = "http://";
var domain = "127.0.0.1";
var chainport = "8888";

function GetInfoSync()
{
    var body;
    var key = "/v1/chain/get_info";
    var uri =  http + domain + ":" + chainport + key;    
    return doHttpCallSync(uri, body);
}

function GetBlockSync(body)
{
    var key = "/v1/chain/get_block";
    var uri =  http + domain + ":" + chainport + key;    
    return doHttpCallSync(uri, body);
}

function GetBlockHeaderStateSync(body)
{
    var key = "/v1/chain/get_block_header_state";
    var uri =  http + domain + ":" + chainport + key;    
    return doHttpCallSync(uri, body);
}

function GetCurrencyBalanceSync(body)
{
    var key = "/v1/chain/get_currency_balance";
    var uri =  http + domain + ":" + chainport + key;    
    return doHttpCallSync(uri, body);
}

function GetAccountSync(body)
{
    //var body = '{"account_name":"' + accountName + '"}';
    var key = "/v1/chain/get_account";
    var uri =  http + domain + ":" + chainport + key;    
    return doHttpCallSync(uri, body);
}

function GetAbiSync(body)
{
    var key = "/v1/chain/get_code";
    var uri =  http + domain + ":" + chainport + key;    
    return doHttpCallSync(uri, body);
}

function GetTableRowsSync(body)
{
    var key = "/v1/chain/get_table_rows";
    var uri =  http + domain + ":" + chainport + key;    
    return doHttpCallSync(uri, body);     
}

function PushTransactionSync(body)
{
    var key = "/v1/chain/push_transaction";
    var uri =  http + domain + ":" + chainport + key;    
    return doHttpCallSync(uri, body);     
}

function GetTableRowsSync(body)
{
    var key = "/v1/chain/get_table_rows";
    var uri =  http + domain + ":" + chainport + key;    
    return doHttpCallSync(uri, body);     
}

function AbiJsonToBinSync(body)
{
    var key = "/v1/chain/abi_json_to_bin";
    var uri =  http + domain + ":" + chainport + key;    
    return doHttpCallSync(uri, body);     
}

function AbiBinToJsonSync(body)
{
    var key = "/v1/chain/abi_bin_to_json";
    var uri =  http + domain + ":" + chainport + key;    
    return doHttpCallSync(uri, body);     
}

function GetRequireKeysSync(body)
{
    var key = "/v1/chain/get_required_keys";
    var uri =  http + domain + ":" + chainport + key;    
    return doHttpCallSync(uri, body);     
}

function GetCurrentStatsSync(body)
{
    var key = "/v1/chain/get_currency_stats";
    var uri =  http + domain + ":" + chainport + key;    
    return doHttpCallSync(uri, body);     
}

function GetProducersSync(body)
{
    var key = "/v1/chain/get_producers";
    var uri =  http + domain + ":" + chainport + key;    
    return doHttpCallSync(uri, body);     
}

function PushBlockSync(body)
{
    var key = "/v1/chain/push_block";
    var uri =  http + domain + ":" + chainport + key;    
    return doHttpCallSync(uri, body);     
}


