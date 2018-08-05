document.write("<script src='historySync.js'></script>");

$(document).ready(function () {
    getAccounts();
 });

function getAccounts()
{
    alert("login click");

    var body = config_wallet_publickey;
    var data = GetKeyAccountsSync(JSON.stringify(body));
    if (data.status == 200 || data.status == 201)
    {
        alert(data.status);
        alert(data.message);
        var jsonObj = data.message;
        var i = 0;
        for (var name in jsonObj.account_names)
        {
            i++;
            $("#userselect").append("<option value=" + name + ">" + name + "</option>");
        }
    } else {
        alert(data.error);         
    }
    $("#userselect").val("1");
    $("#accountaddress").text("账户地址:" + body);
}

function getAccountCurrency()
{
    var accountName = $('#userselect').val();
    var body = {"code":"contatct accont", "account_name":"from"};
    body.code = config_account_code;
    body.account_name = accountName;
    var data = GetCurrencyBalanceSync(JSON.stringify(body));
    if (data.status == 200 || data.status == 201)
    {
        var jsonobj = data.message;
        //alert(JSON.stringify(jsonobj));
        $("#currency").text("账户余额:" + JSON.stringify(jsonobj));
    } else {
        alert("账户余额查询失败");          
    }    
}

function Transfer()
{
    var binary = "";
    var blocknum = 0;
    var blockPrefix = 0;
    var jsonSignResult = {};
    var timestamp = "";
    var chainid = "";

    var from = $('#userselect').val();
    var to = $("#sendInputName").val();
    var number = $("#numIputName").val();
    var memo = $("#psText").val();

    //set json for tranfer
    jsontransfer = GetTransferObj();

    jsontransfer.code = config_account_code;
    jsontransfer.args.from = $('#userselect').val();
    jsontransfer.args.to = $("#sendInputName").val();
    jsontransfer.args.quantity = $("#numIputName").val();
    jsontransfer.args.memo = $("#psText").val();

    var data = AbiJsonToBinSync(JSON.stringify(jsontransfer));
    if (data.status == 200 || data.status == 201)
    {
        var jsonobj = data.message;
        binary = jsonobj.binargs;
        console.log(binary);
    } else {
        alert(data.error);  
        alert(data.status);
        alert(data.message);          
    }

    data = GetInfoSync();
    if (data.status == 200 || data.status == 201)
    {
        var jsonobj = data.message;
        blocknum = jsonobj.head_block_num;
        chainid = jsonobj.chain_id;
        //console.log(blocknum);
    } else {
        alert(data.error);  
        alert(data.status);
        alert(data.message);          
    }
    
    //set json for block
    var jsonblock = {"block_num_or_id":46142};
    jsonblock.block_num_or_id = blocknum;
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
        //alert(data.error);  
        //alert(data.status);
        //alert(data.message);          
    }    

    var jsonUnlockWallet = '["' + config_wallet_name + '","' + config_wallet_password + '"]';
    data = UnlockWalletSync(jsonUnlockWallet);
    if (data.status == 200 || data.status == 201)
    {
        console.log(JSON.stringify(jsonobj));
    } else {
        //alert(data.error);         
    }


    var actionobj = GetActionObj();
    actionobj.account = config_account_code;
    actionobj.data = binary;
    actionobj.authorization[0].actor = from;


    var jsonrequiredkey = GetRequriedKeyObj();
    jsonrequiredkey.available_keys[0] = config_wallet_publickey;
    var jsontranobj = jsonrequiredkey.transaction;
    jsontranobj.ref_block_num = blocknum;
    jsontranobj.ref_block_prefix = blockPrefix;
    jsontranobj.expiration = timestamp;
    jsontranobj.actions[0] = actionobj;
    jsontranobj.scope[0] = from;
    jsontranobj.scope[1] = to;
    

    console.log(JSON.stringify(jsonrequiredkey));
    data = GetRequireKeysSync(JSON.stringify(jsonrequiredkey));
    if (data.status == 200 || data.status == 201)
    {
        jsonRequiredKeyResult = data.message;
        config_wallet_publickey = jsonRequiredKeyResult.required_keys[0];
        console.log(JSON.stringify(jsonRequiredKeyResult));
    } else {
        //alert(data.error);  
       // alert(data.status);
        //alert(data.message);          
    }  


    //set json for sign
    var jsonsigntranfer = GetSignTranObj();
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
    data = SignTransactionSync(JSON.stringify(jsonsigntranfer));
    if (data.status == 200 || data.status == 201)
    {
        jsonSignResult = data.message;
        console.log(JSON.stringify(jsonSignResult));
    } else {
        //alert(data.error);  
       // alert(data.status);
        //alert(data.message);          
    }  

    //set json for tansaction
    var jsonpushtransaction = GetPushTranactionObj();
    //delete jsonSignResult.delay_sec;
    //delete jsonSignResult.context_free_data;
    jsonpushtransaction.signatures = jsonSignResult.signatures;
    //delete jsonSignResult.signatures;
    jsonpushtransaction.transaction = jsonSignResult;
    console.log(JSON.stringify(jsonpushtransaction));
    data = PushTransactionSync(JSON.stringify(jsonpushtransaction));
    if (data.status == 200 || data.status == 201)
    {
        var jsonobj = data.message;
        console.log(JSON.stringify(jsonobj));
        alert("转帐成功");
    } else {
        alert("转帐失败" + data.error);         
    }   
}


function GetPushTranactionObj()
{
    var jsonpushtransaction = {
        "compression":"none",
        "transaction": 
            {
                "expiration": "2018-08-01T08:50:12",
                "ref_block_num": 46142,
                "ref_block_prefix": 3709621714,
                "max_net_usage_words": 0,
                "max_cpu_usage_ms": 0,
                "delay_sec": 360000,
                "context_free_actions": [],
                "actions": [],
                "transaction_extensions": []
            },
        "signatures": [],
        "context_free_data": []
    };
    return jsonpushtransaction;
}

function GetSignTranObj()
{
    var jsonsigntranfer = [
        {
            "ref_block_num":"46142",
            "ref_block_prefix":"3709621714",
            "expiration":"2018-08-01T08:50:12.000",
            "scope": ["from", "to"],
            "read_scope": [],
            "actions": [],
            "signatures": []
        },
        ["EOS8bLquC3ByN51tDsDzTpX4Rt3GawTnd75XPpKMpDeB2fFYfbGjS"],
        ""
    ];
    return jsonsigntranfer;
}

function GetRequriedKeyObj()
{
    var jsonRequiredKey = {"transaction":
                            {"ref_block_num":"46142",
                            "ref_block_prefix":"3709621714",
                            "expiration":"2018-08-01T08:50:12.000",
                            "scope":[],
                            "actions": [],
                            "signatures": [],
                            "authorizations": []
                            }, 
                            "available_keys":
                                [
                                    "EOS8bLquC3ByN51tDsDzTpX4Rt3GawTnd75XPpKMpDeB2fFYfbGjS",
                                ]
                        }
    return  jsonRequiredKey;
}

function GetTransferObj()
{
    var jsontransfer = {
        "code": "eos.token",
        "action": "transfer",
        "args": {
                "from": "",
                "to": "",
                "quantity": "",
                "memo": ""
            }
        };
    return jsontransfer;
}

function GetActionObj()
{
    var actionObj = {
        "account": "contract account",
        "name": "transfer",
        "authorization": 
            [
                {"actor": "from",
                 "permission": "active"
                }
            ],
        "data": "json_to_abi"
    }
    return actionObj;
}