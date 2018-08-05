document.write("<script src='./EOS/config.js'></script>");
document.write("<script src='./EOS/httpcallSync.js'></script>");


function GetInfoSync()
{
    var body;
    var key = "/v1/chain/get_info";
    var uri =  config_http + config_chain_domain + ":" + config_chain_port + key;    
    return doHttpCallSync(uri, body);
}

function GetBlockSync(body)
{
    var key = "/v1/chain/get_block";
    var uri =  config_http + config_chain_domain + ":" + config_chain_port + key;    
    return doHttpCallSync(uri, body);
}

function GetBlockHeaderStateSync(body)
{
    var key = "/v1/chain/get_block_header_state";
    var uri =  config_http + config_chain_domain + ":" + config_chain_port + key;    
    return doHttpCallSync(uri, body);
}

function GetCurrencyBalanceSync(body)
{
    var key = "/v1/chain/get_currency_balance";
    var uri =  config_http + config_chain_domain + ":" + config_chain_port + key;    
    return doHttpCallSync(uri, body);
}

function GetAccountSync(body)
{
    //var body = '{"account_name":"' + accountName + '"}';
    var key = "/v1/chain/get_account";
    var uri =  config_http + config_chain_domain + ":" + config_chain_port + key;    
    return doHttpCallSync(uri, body);
}

function GetAbiSync(body)
{
    var key = "/v1/chain/get_code";
    var uri =  config_http + config_chain_domain + ":" + config_chain_port + key;    
    return doHttpCallSync(uri, body);
}

function GetTableRowsSync(body)
{
    var key = "/v1/chain/get_table_rows";
    var uri =  config_http + config_chain_domain + ":" + config_chain_port + key;    
    return doHttpCallSync(uri, body);     
}

function PushTransactionSync(body)
{
    var key = "/v1/chain/push_transaction";
    var uri =  config_http + config_chain_domain + ":" + config_chain_port + key;    
    return doHttpCallSync(uri, body);     
}

function GetTableRowsSync(body)
{
    var key = "/v1/chain/get_table_rows";
    var uri =  config_http + config_chain_domain + ":" + config_chain_port + key;    
    return doHttpCallSync(uri, body);     
}

function AbiJsonToBinSync(body)
{
    var key = "/v1/chain/abi_json_to_bin";
    var uri =  config_http + config_chain_domain + ":" + config_chain_port + key;    
    return doHttpCallSync(uri, body);     
}

function AbiBinToJsonSync(body)
{
    var key = "/v1/chain/abi_bin_to_json";
    var uri =  config_http + config_chain_domain + ":" + config_chain_port + key;    
    return doHttpCallSync(uri, body);     
}

function GetRequireKeysSync(body)
{
    var key = "/v1/chain/get_required_keys";
    var uri =  config_http + config_chain_domain + ":" + config_chain_port + key;    
    return doHttpCallSync(uri, body);     
}

function GetCurrentStatsSync(body)
{
    var key = "/v1/chain/get_currency_stats";
    var uri =  config_http + config_chain_domain + ":" + config_chain_port + key;    
    return doHttpCallSync(uri, body);     
}

function GetProducersSync(body)
{
    var key = "/v1/chain/get_producers";
    var uri =  config_http + config_chain_domain + ":" + config_chain_port + key;    
    return doHttpCallSync(uri, body);     
}

function PushBlockSync(body)
{
    var key = "/v1/chain/push_block";
    var uri =  config_http + config_chain_domain + ":" + config_chain_port + key;    
    return doHttpCallSync(uri, body);     
}


