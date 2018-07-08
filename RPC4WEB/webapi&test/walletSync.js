document.write("<script src='httpcallSync.js'></script>");


function CreateWalletSync(body)
{
    //var body = '"' + walletName + '"';
    var key = "/v1/wallet/create";
    var result = doHttpCallSync(key, body);
    return result;
}

function OpenWalletSync(body)
{
    //var body = '"' + walletName + '"';
    var key = "/v1/wallet/open";
    var result = doHttpCallSync(key, body);
    return result;
}

function LockWalletSync(body)
{
    //var body = '"' + walletName + '"';
    var key = "/v1/wallet/lock";
    var result = doHttpCallSync(key, body);
    return result;
}

function LockAllWalletsSync()
{
    var body;
    var key = "/v1/wallet/lock_all";
    var result = doHttpCallSync(key, body);
    return result;
}

function UnlockWalletSync(body)
{
    //var body = '["' + walletName + '","' + password + '"]';
    var key = "/v1/wallet/unlock";
    var result = doHttpCallSync(key, body);
    return result;
}

function ImportKeySync(body)
{
    //var body = '["' + walletName + '","' + privateKey + '"]';
    var key = "/v1/wallet/import_key";
    var result = doHttpCallSync(key, body);
    return result;
}

function ListWalletsSync()
{
    var body;
    var key = "/v1/wallet/list_wallets";
    var result = doHttpCallSync(key, body);
    return result;
}

function ListKeysSync()
{
    var body;
    var key = "/v1/wallet/list_keys";
    var result = doHttpCallSync(key, body);
    return result;
}

function SetTimeoutSync(body)
{
    //var body = time;
    var key = "/v1/wallet/set_timeout";
    var result = doHttpCallSync(key, body);
    return result;
}

function SetDirSync(body)
{
    //var body = time;
    var key = "/v1/wallet/set_dir";
    var result = doHttpCallSync(key, body);
    return result;
}

function SetEosioKeySync(body)
{
    //var body = time;
    var key = "/v1/wallet/set_eosio_key";
    var result = doHttpCallSync(key, body);
    return result;
}

function SetDigestSync(body)
{
    //var body = time;
    var key = "/v1/wallet/sign_digest";
    var result = doHttpCallSync(key, body);
    return result;
}

function CreateKeySync(body)
{
    //var body = time;
    var key = "/v1/wallet/create_key";
    var result = doHttpCallSync(key, body);
    return result;
}


