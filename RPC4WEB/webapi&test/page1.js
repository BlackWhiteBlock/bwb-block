document.write("<script src='historySync.js'></script>");

var publicKey = "";

$(document).ready(function () {
    getAccounts();
 });

function getAccounts()
{
    alert("login click");

    var body = "EOS8Jdey8ZMUi9xNRjRWmo3vgA7NSXg5wLhjHbbx9r3W8hq9BKon7";
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
    publicKey = body;
}

function getAccountCurrency()
{
   // alert("getAccountCurrency");
    var code = "eosio";
    var accountName = $('#userselect').val();
    var body = {"code":"user1", "account_name":"user2"};
    //body.code = code;
    //body.account_name = accountName;
    var data = GetCurrencyBalanceSync(JSON.stringify(body));
    if (data.status == 200 || data.status == 201)
    {
        var jsonobj = data.message;
        alert(JSON.stringify(jsonobj));
        $("#currency").text("账户余额:" + JSON.stringify(jsonobj));
    } else {
        alert(data.error);  
        alert(data.status);
        alert(data.message);          
    }    
}

function Transfer()
{
    var binary = "";
    var blocknum = 0;
    var blockPrefix = 0;
    var jsonSignResult = {};
    var timestamp = "";

    var from = $('#userselect').val();
    var to = $("#sendInputName").val();
    var number = $("#numIputName").val();
    var memo = $("#psText").val();

    var jsontransfer = {
                        "code": "user1",
                        "action": "transfer",
                        "args": {
                                "from": "user2",
                                "to": "user3",
                                "quantity": "200.0000 BWB",
                                "memo": "user2 to user3 XXX RRV"
                            }
                        };
/*
    jsontransfer.args.from = from;
    jsontransfer.args.to = to;
    jsontransfer.args.quantity = number;
    jsontransfer.args.memo = memo;
*/
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
        console.log(blocknum);
    } else {
        alert(data.error);  
        alert(data.status);
        alert(data.message);          
    }
    
    var jsonblock = {"block_num_or_id":46142};
    jsonblock.block_num_or_id = blocknum;
    data = GetBlockSync(JSON.stringify(jsonblock));
    if (data.status == 200 || data.status == 201)
    {
        var jsonobj = data.message;
        blockPrefix = jsonobj.ref_block_prefix;
        timestamp = jsonobj.timestamp;
        console.log(blockPrefix);
    } else {
        //alert(data.error);  
        //alert(data.status);
        //alert(data.message);          
    }    

    var walletname = "bwb";
    var password = "PW5HpurETUUQgT8f6ezPP129gbQD2RdXkRUWLGrGUorc5hvj3phXh";

    var jsonUnlockWallet = ['"' + walletname + '","' + password + '"'];
    data = UnlockWalletSync(JSON.stringify(jsonUnlockWallet));
    if (data.status == 200 || data.status == 201)
    {
        console.log(JSON.stringify(jsonobj));
    } else {
        //alert(data.error);  
        //alert(data.status);
        //alert(data.message);          
    }
/*
    var jsonRequiredKey = {"transaction":
                            {"ref_block_num":"46142",
                            "ref_block_prefix":"3709621714",
                            "expiration":"2018-08-01T08:50:12.000",
                            "scope":["user1", "user2"],
                            "actions": 
                                [
                                    {
                                        "account": "eosio.token",
                                        "name": "transfer",
                                        "recipients": ["user1", "user2"],
                                        "authorization": 
                                            [
                                                {"actor": "user1",
                                                 "permission": "active"
                                                }
                                            ],
                                        "data": "00000000807015d600000000007115d680841e0000000000045252560000000016757365723120746f2075736572322032303020525256"
                                    }
                                ],
                                "signatures": [],
                                "authorizations": []
                            }, 
                            "available_keys":
                                [
                                    "EOS8bLquC3ByN51tDsDzTpX4Rt3GawTnd75XPpKMpDeB2fFYfbGjS",
                                    "EOS7N3i3EbYHxekd4zPnzzPee4PPw2wWBbJ6jsLAJVcZhDdwJw1Dy", 
                                    "EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV"
                                ]
                        };
*/
    var jsonsigntranfer = GetSignTranObj();
    jsonsigntranfer[0].ref_block_num = blocknum;
    jsonsigntranfer[0].ref_block_prefix = blockPrefix;
    jsonsigntranfer[0].expiration = timestamp;
    jsonsigntranfer[0].data = binary;
    var jsonpublickey = jsonsigntranfer[1];
    jsonpublickey[0] = publicKey;
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

    var jsonpushtransaction = GetPushTranactionObj();
    jsonpushtransaction.transaction = jsonSignResult;
    data = PushTransactionSync(JSON.stringify(jsonpushtransaction));
    if (data.status == 200 || data.status == 201)
    {
        var jsonobj = data.message;
        console.log(JSON.stringify(jsonobj));
    } else {
        //alert(data.error);  
       // alert(data.status);
       // alert(data.message);          
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
                "actions": 
                    [
                        {
                            "account": "eosio.token",
                            "name": "transfer",
                            "authorization": 
                                [
                                    {
                                        "actor": "user1",
                                        "permission": "active"
                                    }
                                ],
                            "data": "00000000807015d600000000007115d680841e0000000000045252560000000016757365723120746f2075736572322032303020525256"
                        }
                    ],
                "transaction_extensions": []
            },
        "signatures": ["SIG_K1_K9HgnX7uYxwCoMAhtjxsmiwFdYKc33VGy36MVDDZW8AofBfqN77c2FMsHLUKoT6GJXcJwBmzsgRPe3xZ3tyAiME32sR5uE"],
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
            "scope": ["user2", "user3"],
            "read_scope": [],
            "actions": 
                [
                    {
                        "account": "user2",
                        "name": "transfer",
                        "authorization": 
                            [
                                {
                                    "actor": "user2",
                                    "permission": "active"
                                }
                            ],
                        "data": "00000000807015d600000000007115d680841e0000000000045252560000000016757365723120746f2075736572322032303020525256"
                    }
                ],
                
            "signatures": []
        },
        ["EOS8bLquC3ByN51tDsDzTpX4Rt3GawTnd75XPpKMpDeB2fFYfbGjS"],
        ""
    ];
    return jsonsigntranfer;
}