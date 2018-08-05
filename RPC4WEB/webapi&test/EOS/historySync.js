document.write("<script src='./EOS/httpcallSync.js'></script>");



function GetKeyAccountsSync(body)
{
    var key = "/v1/history/get_key_accounts";
    var uri =  config_http + config_chain_domain + ":" + config_chain_port + key;    
    return doHttpCallSync(uri, body);
}


