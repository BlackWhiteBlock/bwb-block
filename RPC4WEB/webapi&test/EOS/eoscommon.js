document.write("<script src='./EOS/historySync.js'></script>");
document.write("<script src='./EOS/chainSync.js'></script>");
document.write("<script src='./EOS/walletSync.js'></script>");

function eos_common_get_account()
{
    var body = {"public_key":""};
    body.public_key = config_wallet_publickey;
    var data = GetKeyAccountsSync(JSON.stringify(body));
    if (data.status == 200 || data.status == 201)
    {
        var jsonObj = data.message;
        return jsonObj;
    } else {
        return null;        
    }
}

function eos_common_get_currecny(account)
{
    //set json for get currency
    var body = config_get_currency_json_obj;
    body.code = config_account_code;
    body.account = account;
    var data = GetCurrencyBalanceSync(JSON.stringify(body));
    if (data.status == 200 || data.status == 201)
    {
        var jsonobj = data.message;
        //alert(JSON.stringify(jsonobj));
        return JSON.stringify(jsonobj);
    } else {
        alert("账户余额查询失败");
        return null;        
    }    
}

function eos_common_transfer(from, to, number, memo)
{
    var binary = "";
    var blocknum = 0;
    var blockPrefix = 0;
    var timestamp = "";
    var chainid = "";

    //set json for tranfer
    var jsontransfer = config_transfer_json_obj;
    jsontransfer.code = config_account_code;
    jsontransfer.args.from = from;
    jsontransfer.args.to = to;
    jsontransfer.args.quantity = number;
    jsontransfer.args.memo = memo;

    //json to bin
    var data = AbiJsonToBinSync(JSON.stringify(jsontransfer));
    if (data.status == 200 || data.status == 201)
    {
        var jsonobj = data.message;
        binary = jsonobj.binargs;
        console.log(binary);
    } else {
        alert("json to bin failed:" + data.error);
        return false;            
    }

    //get info
    data = GetInfoSync();
    if (data.status == 200 || data.status == 201)
    {
        var jsonobj = data.message;
        blocknum = jsonobj.head_block_num;
        chainid = jsonobj.chain_id;
        //console.log(blocknum);
    } else {
        alert("Get Info failed:" + data.error); 
        return false; 
        //alert(data.status);
        //alert(data.message);          
    }
    
    //set json for block
    var jsonblock = config_get_block_json_obj;
    jsonblock.block_num_or_id = blocknum;

    //get block
    data = GetBlockSync(JSON.stringify(jsonblock));
    if (data.status == 200 || data.status == 201)
    {
        var jsonobj = data.message;
        blockPrefix = jsonobj.ref_block_prefix;
        timestamp = jsonobj.timestamp;
        var d = new Date(timestamp);
        timestamp = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + 'T' + (d.getHours()+1) + ':' + d.getMinutes() + ':' + d.getSeconds() + '.' + d.getMilliseconds(); 
        console.log(timestamp);
    } else {
        alert("get block failed:" + data.error);
        return false;           
    }    

    var jsonUnlockWallet = '["' + config_wallet_name + '","' + config_wallet_password + '"]';
    data = UnlockWalletSync(jsonUnlockWallet);
    if (data.status == 200 || data.status == 201)
    {
        console.log(JSON.stringify(jsonobj));
    } else {
        //alert(data.error);         
    }

//Set config_action_obj
    var actionobj = config_action_obj;
    actionobj.account = config_account_code;
    actionobj.data = binary;
    actionobj.authorization[0].actor = from;

//Set config_required_keys_json_obj
    var jsonrequiredkey = config_required_keys_json_obj;
    jsonrequiredkey.available_keys[0] = config_wallet_publickey;
    var jsontranobj = jsonrequiredkey.transaction;
    jsontranobj.ref_block_num = blocknum;
    jsontranobj.ref_block_prefix = blockPrefix;
    jsontranobj.expiration = timestamp;
    jsontranobj.actions[0] = actionobj;
    jsontranobj.scope[0] = from;
    jsontranobj.scope[1] = to;
    console.log(JSON.stringify(jsonrequiredkey));

    //get requried keys
    data = GetRequireKeysSync(JSON.stringify(jsonrequiredkey));
    if (data.status == 200 || data.status == 201)
    {
        jsonRequiredKeyResult = data.message;
        config_wallet_publickey = jsonRequiredKeyResult.required_keys[0];
        console.log(JSON.stringify(jsonRequiredKeyResult));
    } else {
        alert("Get required keys failed:" + data.error);
        return false;           
    }  


    //set json for sign
    var jsonsigntranfer = config_sign_transaction_json_obj;
    jsonsigntranfer[0].ref_block_num = blocknum;
    jsonsigntranfer[0].ref_block_prefix = blockPrefix;
    jsonsigntranfer[0].expiration = timestamp;
    jsonsigntranfer[0].scope[0] = from;
    jsonsigntranfer[0].scope[1] = to;   
    jsonsigntranfer[0].actions[0] = actionobj;
    var jsonpublickey = jsonsigntranfer[1];
    jsonpublickey[0] = config_wallet_publickey;
    jsonsigntranfer[2] = chainid;
    console.log(JSON.stringify(jsonsigntranfer));

    //sign tranaction
    data = SignTransactionSync(JSON.stringify(jsonsigntranfer));
    if (data.status == 200 || data.status == 201)
    {
        jsonSignResult = data.message;
        console.log(JSON.stringify(jsonSignResult));
    } else {
        alert("Sign transaction failed:" + data.error);  
        return false;       
    }  

    //set json for tansaction
    var jsonpushtransaction = config_push_transaction_json_obj;
    //delete jsonSignResult.delay_sec;
    //delete jsonSignResult.context_free_data;
    jsonpushtransaction.signatures = jsonSignResult.signatures;
    //delete jsonSignResult.signatures;
    jsonpushtransaction.transaction = jsonSignResult;
    console.log(JSON.stringify(jsonpushtransaction));

    //push tranaction
    data = PushTransactionSync(JSON.stringify(jsonpushtransaction));
    if (data.status == 200 || data.status == 201)
    {
        var jsonobj = data.message;
        console.log(JSON.stringify(jsonobj));
        return true;
    } else {
        return false;       
    }   
}
