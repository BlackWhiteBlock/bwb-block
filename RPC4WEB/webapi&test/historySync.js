document.write("<script src='httpcallSync.js'></script>");

var http = "http://";
var domain = "127.0.0.1";
var port = "9000";

function GetKeyAccountsSync(body)
{
    var key = "/v1/history/get_key_accounts";
    var uri =  http + domain + ":" + port + key;    
    return doHttpCallSync(uri, body);
}

