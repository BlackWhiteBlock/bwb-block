document.write("<script src='httpcall.js'></script>");

function GetInfo(callback)
{
    var result = null;
    var body = null;
    var key = "/v1/chain/get_info";
    doHttpCall(key, body, function (status, data) {
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

function GetBlock(body, callback)
{
    var result = null;
    //var body = '{"block_num_or_id":' + blockNumOrID + '}';
    var key = "/v1/chain/get_block";
    doHttpCall(key, body, function (status, data) {
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

function GetBlockHeaderState(body, callback)
{
    var result = null;
    //var body = '{"block_num_or_id":' + blockNumOrID + '}';
    var key = "/v1/chain/get_block_header_state";
    doHttpCall(key, body, function (status, data) {
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

function GetCurrentBalance(body, callback)
{
    var result = null;
    //var body = '{"block_num_or_id":' + blockNumOrID + '}';
    var key = "/v1/chain/get_currency_balance";
    doHttpCall(key, body, function (status, data) {
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

function GetCurrentBalance(body, callback)
{
    var result = null;
    //var body = '{"block_num_or_id":' + blockNumOrID + '}';
    var key = "/v1/chain/get_currency_balance";
    doHttpCall(key, body, function (status, data) {
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

function GetAccount(body, callback)
{
    var result = null;
    //var body = '{"account_name":"' + accountName + '"}';
    var key = "/v1/chain/get_account";
    doHttpCall(key, body, function (status, data) {
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

function GetAbi(body, callback)
{
    var result = null;
    //var body = '{"account_name":"' + accountName + '"}';
    var key = "/v1/chain/get_code";
    doHttpCall(key, body, function (status, data) {
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

function GetTableRows(body, callback)
{
    var result = null;
    var key = "/v1/chain/get_table_rows";
    doHttpCall(key, body, function (status, data) {
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

function PushTransaction(body, callback)
{
    var result = null;
    var key = "/v1/chain/push_transaction";
    doHttpCall(key, body, function (status, data) {
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

function GetTableRows(body, callback)
{
    var result = null;
    var key = "/v1/chain/get_table_rows";
    doHttpCall(key, body, function (status, data) {
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

function AbiJsonToBin(body, callback)
{
    var result = null;
    var key = "/v1/chain/abi_json_to_bin";
    doHttpCall(key, body, function (status, data) {
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

function AbiBinToJson(body, callback)
{
    var result = null;
    var key = "/v1/chain/abi_bin_to_json";
    doHttpCall(key, body, function (status, data) {
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

function GetRequireKeys(body, callback)
{
    var result = null;
    var key = "/v1/chain/get_required_keys";
    doHttpCall(key, body, function (status, data) {
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

function GetCurrentStats(body, callback)
{
    var result = null;
    var key = "/v1/chain/get_currency_stats";
    doHttpCall(key, body, function (status, data) {
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

function GetProducers(body, callback)
{
    var result = null;
    var key = "/v1/chain/get_producers";
    doHttpCall(key, body, function (status, data) {
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

function PushBlock(body, callback)
{
    var result = null;
    var key = "/v1/chain/push_block";
    doHttpCall(key, body, function (status, data) {
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


