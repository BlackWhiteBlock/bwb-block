//document.write("<script src='httpcall.js'></script>");

var http = "http://";
var domain = "127.0.0.1";
var walletport = "9000";

function CreateWallet(body, callback)
{
    var result = null;
    //var body = '"' + walletName + '"';
    var key = "/v1/wallet/create";
    var uri =  http + domain + ":" + walletport + key;
    doHttpCall(uri, body, function (status, data) {
        alert(status);
        if (status != 200 && status != 201) {   
            var result = null;
            if (status == 0) {
                result = {"status":status, "error":status, "message":"UnConnect server"};
            } else {
                var errorCode = GetErrorCode(data); 
                var errorMsg = GetErrorMessage(data);
                result = {"status":status, "error":errorCode, "message":errorMsg};
            }
            callback(result);
        } else {
            var result = {"status":status, "message":data};
            callback(result);
        }
    });
}

function OpenWallet(body, callback)
{
    var result = null;
    //var body = '"' + walletName + '"';
    var key = "/v1/wallet/open";
    var uri =  http + domain + ":" + walletport + key;
    doHttpCall(uri, body, function (status, data) {
        if (status != 200 && status != 201) {   
            var result = null;
            if (status == 0) {
                result = {"status":status, "error":status, "message":"UnConnect server"};
            } else {
                var errorCode = GetErrorCode(data); 
                var errorMsg = GetErrorMessage(data);
                result = {"status":status, "error":errorCode, "message":errorMsg};
            }
            callback(result);
        } else {
            var result = {"status":status, "message":data};
            callback(result);
        }
    });
}

function LockWallet(body, callback)
{
    var result = null;
    //var body = '"' + walletName + '"';
    var key = "/v1/wallet/lock";
    var uri =  http + domain + ":" + walletport + key;
    doHttpCall(uri, body, function (status, data) {
        if (status != 200 && status != 201) {   
            var result = null;
            if (status == 0) {
                result = {"status":status, "error":status, "message":"UnConnect server"};
            } else {
                var errorCode = GetErrorCode(data); 
                var errorMsg = GetErrorMessage(data);
                result = {"status":status, "error":errorCode, "message":errorMsg};
            }
            callback(result);
        } else {
            var result = {"status":status, "message":data};
            callback(result);
        }
    });
}

function LockAllWallets(callback)
{
    var result = null;
    var body;
    var key = "/v1/wallet/lock_all";
    var uri =  http + domain + ":" + walletport + key;
    doHttpCall(uri, body, function (status, data) {
        if (status != 200 && status != 201) {   
            var result = null;
            if (status == 0) {
                result = {"status":status, "error":status, "message":"UnConnect server"};
            } else {
                var errorCode = GetErrorCode(data); 
                var errorMsg = GetErrorMessage(data);
                result = {"status":status, "error":errorCode, "message":errorMsg};
            }
            callback(result);
        } else {
            var result = {"status":status, "message":data};
            callback(result);
        }
    });
}

function UnlockWallet(body, callback)
{
    var result = null;
    //var body = '["' + walletName + '","' + password + '"]';
    var key = "/v1/wallet/unlock";
    var uri =  http + domain + ":" + walletport + key;
    doHttpCall(uri, body, function (status, data) {
        if (status != 200 && status != 201) {   
            var result = null;
            if (status == 0) {
                result = {"status":status, "error":status, "message":"UnConnect server"};
            } else {
                var errorCode = GetErrorCode(data); 
                var errorMsg = GetErrorMessage(data);
                result = {"status":status, "error":errorCode, "message":errorMsg};
            }
            callback(result);
        } else {
            var result = {"status":status, "message":data};
            callback(result);
        }
    });
}

function ImwalletportKey(body, callback)
{
    var result = null;
    var body = '["' + walletName + '","' + privateKey + '"]';
    var key = "/v1/wallet/imwalletport_key";
    var uri =  http + domain + ":" + walletport + key;
    doHttpCall(uri, body, function (status, data) {
        if (status != 200 && status != 201) {   
            var result = null;
            if (status == 0) {
                result = {"status":status, "error":status, "message":"UnConnect server"};
            } else {
                var errorCode = GetErrorCode(data); 
                var errorMsg = GetErrorMessage(data);
                result = {"status":status, "error":errorCode, "message":errorMsg};
            }
            callback(result);
        } else {
            var result = {"status":status, "message":data};
            callback(result);
        }
    });
}

function ListWallets(callback)
{
    var result = null;
    var body;
    var key = "/v1/wallet/list_wallets";
    var uri =  http + domain + ":" + walletport + key;
    doHttpCall(uri, body, function (status, data) {
        if (status != 200 && status != 201) {   
            var result = null;
            if (status == 0) {
                result = {"status":status, "error":status, "message":"UnConnect server"};
            } else {
                var errorCode = GetErrorCode(data); 
                var errorMsg = GetErrorMessage(data);
                result = {"status":status, "error":errorCode, "message":errorMsg};
            }
            callback(result);
        } else {
            var result = {"status":status, "message":data};
            callback(result);
        }
    });
}

function ListKeys(callback)
{
    var result = null;
    var body;
    var key = "/v1/wallet/list_keys";
    var uri =  http + domain + ":" + walletport + key;
    doHttpCall(uri, body, function (status, data) {
        if (status != 200 && status != 201) {   
            var result = null;
            if (status == 0) {
                result = {"status":status, "error":status, "message":"UnConnect server"};
            } else {
                var errorCode = GetErrorCode(data); 
                var errorMsg = GetErrorMessage(data);
                result = {"status":status, "error":errorCode, "message":errorMsg};
            }
            callback(result);
        } else {
            var result = {"status":status, "message":data};
            callback(result);
        }
    });
}

function SetTimeout(body, callback)
{
    var result = null;
    //var body = time;
    var key = "/v1/wallet/set_timeout";
    var uri =  http + domain + ":" + walletport + key;
    doHttpCall(uri, body, function (status, data) {
        if (status != 200 && status != 201) {   
            var result = null;
            if (status == 0) {
                result = {"status":status, "error":status, "message":"UnConnect server"};
            } else {
                var errorCode = GetErrorCode(data); 
                var errorMsg = GetErrorMessage(data);
                result = {"status":status, "error":errorCode, "message":errorMsg};
            }
            callback(result);
        } else {
            var result = {"status":status, "message":data};
            callback(result);
        }
    });
}

function SetDir(body, callback)
{
    var result = null;
    //var body = time;
    var key = "/v1/wallet/set_dir";
    var uri =  http + domain + ":" + walletport + key;
    doHttpCall(uri, body, function (status, data) {
        if (status != 200 && status != 201) {   
            var result = null;
            if (status == 0) {
                result = {"status":status, "error":status, "message":"UnConnect server"};
            } else {
                var errorCode = GetErrorCode(data); 
                var errorMsg = GetErrorMessage(data);
                result = {"status":status, "error":errorCode, "message":errorMsg};
            }
            callback(result);
        } else {
            var result = {"status":status, "message":data};
            callback(result);
        }
    });
}

function SetEosioKey(body, callback)
{
    var result = null;
    //var body = time;
    var key = "/v1/wallet/set_eosio_key";
    var uri =  http + domain + ":" + walletport + key;
    doHttpCall(uri, body, function (status, data) {
        if (status != 200 && status != 201) {   
            var result = null;
            if (status == 0) {
                result = {"status":status, "error":status, "message":"UnConnect server"};
            } else {
                var errorCode = GetErrorCode(data); 
                var errorMsg = GetErrorMessage(data);
                result = {"status":status, "error":errorCode, "message":errorMsg};
            }
            callback(result);
        } else {
            var result = {"status":status, "message":data};
            callback(result);
        }
    });
}

function SetDigest(body, callback)
{
    var result = null;
    //var body = time;
    var key = "/v1/wallet/sign_digest";
    var uri =  http + domain + ":" + walletport + key;
    doHttpCall(uri, body, function (status, data) {
        if (status != 200 && status != 201) {   
            var result = null;
            if (status == 0) {
                result = {"status":status, "error":status, "message":"UnConnect server"};
            } else {
                var errorCode = GetErrorCode(data); 
                var errorMsg = GetErrorMessage(data);
                result = {"status":status, "error":errorCode, "message":errorMsg};
            }
            callback(result);
        } else {
            var result = {"status":status, "message":data};
            callback(result);
        }
    });
}

function CreateKey(body, callback)
{
    var result = null;
    //var body = time;
    var key = "/v1/wallet/create_key";
    var uri =  http + domain + ":" + walletport + key;
    doHttpCall(uri, body, function (status, data) {
        if (status != 200 && status != 201) {   
            var result = null;
            if (status == 0) {
                result = {"status":status, "error":status, "message":"UnConnect server"};
            } else {
                var errorCode = GetErrorCode(data); 
                var errorMsg = GetErrorMessage(data);
                result = {"status":status, "error":errorCode, "message":errorMsg};
            }
            callback(result);
        } else {
            var result = {"status":status, "message":data};
            callback(result);
        }
    });
    return result;
}


