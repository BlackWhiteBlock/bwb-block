document.write("<script src='httpcallSync.js'></script>");


function CreateWallet(body)
{
    //var body = '"' + walletName + '"';
    var key = "/v1/wallet/create";
    var result = doHttpCallSync(key, body);
    return result;
}

function OpenWallet(body)
{
    //var body = '"' + walletName + '"';
    var key = "/v1/wallet/open";
    var result = doHttpCallSync(key, body);
    return result;
}

function LockWallet(body)
{
    //var body = '"' + walletName + '"';
    var key = "/v1/wallet/lock";
    var result = doHttpCallSync(key, body);
    return result;
}

function LockAllWallets()
{
    var body;
    var key = "/v1/wallet/lock_all";
    var result = doHttpCallSync(key, body);
    return result;
}

function UnlockWallet(body)
{
    //var body = '["' + walletName + '","' + password + '"]';
    var key = "/v1/wallet/unlock";
    var result = doHttpCallSync(key, body);
    return result;
}

function ImportKey(body)
{
    var body = '["' + walletName + '","' + privateKey + '"]';
    var key = "/v1/wallet/import_key";
    var result = doHttpCallSync(key, body);
    return result;
}

function ListWallets()
{
    var body;
    var key = "/v1/wallet/list_wallets";
    var result = doHttpCallSync(key, body);
    return result;
}

function ListKeys()
{
    var body;
    var key = "/v1/wallet/list_keys";
    var result = doHttpCallSync(key, body);
    return result;
}

function SetTimeout(body)
{
    //var body = time;
    var key = "/v1/wallet/set_timeout";
    var result = doHttpCallSync(key, body);
    return result;
}

function SetDir(body)
{
    //var body = time;
    var key = "/v1/wallet/set_dir";
    var result = doHttpCallSync(key, body);
    return result;
}

function SetEosioKey(body)
{
    //var body = time;
    var key = "/v1/wallet/set_eosio_key";
    var result = doHttpCallSync(key, body);
    return result;
}

function SetDigest(body)
{
    //var body = time;
    var key = "/v1/wallet/sign_digest";
    var result = doHttpCallSync(key, body);
    return result;
}

function CreateKey(body)
{
    //var body = time;
    var key = "/v1/wallet/create_key";
    var result = doHttpCallSync(key, body);
    return result;
}


