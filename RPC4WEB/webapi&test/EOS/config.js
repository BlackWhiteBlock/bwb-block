/*net config*/
var config_http = "http://";
var config_wallet_domain = "127.0.0.1";
var config_wallet_port = "9000";

var config_http = "http://";
var config_chain_domain = "127.0.0.1";
var config_chain_port = "8888";

var config_wallet_name = "bwb";
var config_wallet_password = "PW5HpurETUUQgT8f6ezPP129gbQD2RdXkRUWLGrGUorc5hvj3phXh";
var config_wallet_publickey = "EOS8Jdey8ZMUi9xNRjRWmo3vgA7NSXg5wLhjHbbx9r3W8hq9BKon7";

/*contract config*/
var config_currency_symbol = "BWB";
var config_account_code = "eos.token";

/*json config*/
var config_get_currency_json_obj = {
    "code":"contatct accont", 
    "account":"account name"
};

var config_get_block_json_obj = {
    "block_num_or_id":46142
};

var config_push_transaction_json_obj = {
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


var config_sign_transaction_json_obj = [
    {
        "ref_block_num":"46142",
        "ref_block_prefix":"3709621714",
        "expiration":"2018-08-01T08:50:12.000",
        "scope": ["from", "to"],
        "read_scope": [],
        "actions": [],
        "signatures": []
    },
    ["public_keys"],
    "chain_id"
];

var config_required_keys_json_obj = {
    "transaction":
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
};

var config_transfer_json_obj = {
    "code": "eos.token",
    "action": "transfer",
    "args": {
            "from": "",
            "to": "",
            "quantity": "",
            "memo": ""
        }
};

var config_action_obj = {
    "account": "contract account",
    "name": "transfer",
    "authorization": 
        [
            {"actor": "from",
                "permission": "active"
            }
        ],
    "data": "json_to_abi"
};