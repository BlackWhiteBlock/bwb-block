document.write("<script src='httpcallSync.js'></script>");

var http = "http://";
var domain = "127.0.0.1";
var walletport = "9000";

function CreateWalletSync(body)
{
    //var body = '"' + walletName + '"';
    var key = "/v1/wallet/create";
    var uri =  http + domain + ":" + walletport + key;
    var result = doHttpCallSync(uri, body);
    return result;
}

function OpenWalletSync(body)
{
    //var body = '"' + walletName + '"';
    var key = "/v1/wallet/open";
    var uri =  http + domain + ":" + walletport + key;
    var result = doHttpCallSync(uri, body);
    return result;
}

function LockWalletSync(body)
{
    //var body = '"' + walletName + '"';
    var key = "/v1/wallet/lock";
    var uri =  http + domain + ":" + walletport + key;
    var result = doHttpCallSync(uri, body);
    return result;
}

function LockAllWalletsSync()
{
    var body;
    var key = "/v1/wallet/lock_all";
    var uri =  http + domain + ":" + walletport + key;
    var result = doHttpCallSync(uri, body);
    return result;
}

function UnlockWalletSync(body)
{
    //var body = '["' + walletName + '","' + password + '"]';
    var key = "/v1/wallet/unlock";
    var uri =  http + domain + ":" + walletport + key;
    var result = doHttpCallSync(uri, body);
    return result;
}

function ImwalletportKeySync(body)
{
    //var body = '["' + walletName + '","' + privateKey + '"]';
    var key = "/v1/wallet/imwalletport_key";
    var uri =  http + domain + ":" + walletport + key;
    var result = doHttpCallSync(uri, body);
    return result;
}

function ListWalletsSync()
{
    var body;
    var key = "/v1/wallet/list_wallets";
    var uri =  http + domain + ":" + walletport + key;
    var result = doHttpCallSync(uri, body);
    return result;
}

function ListKeysSync()
{
    var body;
    var key = "/v1/wallet/list_keys";
    var uri =  http + domain + ":" + walletport + key;
    var result = doHttpCallSync(uri, body);
    return result;
}

function SetTimeoutSync(body)
{
    //var body = time;
    var key = "/v1/wallet/set_timeout";
    var uri =  http + domain + ":" + walletport + key;
    var result = doHttpCallSync(uri, body);
    return result;
}

function SetDirSync(body)
{
    //var body = time;
    var key = "/v1/wallet/set_dir";
    var uri =  http + domain + ":" + walletport + key;
    var result = doHttpCallSync(uri, body);
    return result;
}

function SetEosioKeySync(body)
{
    //var body = time;
    var key = "/v1/wallet/set_eosio_key";
    var uri =  http + domain + ":" + walletport + key;
    var result = doHttpCallSync(uri, body);
    return result;
}

function SetDigestSync(body)
{
    //var body = time;
    var key = "/v1/wallet/sign_digest";
    var uri =  http + domain + ":" + walletport + key;
    var result = doHttpCallSync(uri, body);
    return result;
}

function SignTransactionSync(body)
{
    //var body = time;
    var key = "/v1/wallet/sign_transaction";
    var uri =  http + domain + ":" + walletport + key;
    var result = doHttpCallSync(uri, body);
    return result;
}

function CreateKeySync(body)
{
    //var body = time;
    var key = "/v1/wallet/create_key";
    var uri =  http + domain + ":" + walletport + key;
    var result = doHttpCallSync(uri, body);
    return result;
}


