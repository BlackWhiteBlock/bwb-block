document.write("<script src='historySync.js'></script>");

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

}

function getAccountCurrency()
{
    alert("getAccountCurrency");
    var code = "eosio.token";
    var accountName = $('#userselect').val();
    var body = {"code":"code", "account_name":"accountName"};
    body.code = code;
    body.account_name = accountName;
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

