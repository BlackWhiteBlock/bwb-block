
document.write("<script src='./EOS/eoscommon.js'></script>");

$(document).ready(function () {
    var accountnamesObj = eos_common_get_account();
    if (accountnamesObj != null) {
        var index = 0;
        for (index = 0; index < accountnamesObj.account_names.length; index++)
        {
            console.log(accountnamesObj.account_names[index]);
            $("#userselect").append("<option value=" + accountnamesObj.account_names[index] + ">" + accountnamesObj.account_names[index] + "</option>");
        }
    } else {
        alert("Get accounts failed");
    }

    $("#userselect").val("user1");
    $("#accountaddress").text("账户地址:" + config_wallet_publickey);
    $("#currency").text("账户余额:" + eos_common_get_currecny($("#userselect").val()));
 });

 function getAccountCurrency()
 {
    $("#currency").text("账户余额:" + eos_common_get_currecny($("#userselect").val()));  
 }

function Transfer(from, to, number, memo)
{
    if (eos_common_transfer(from, to, number, memo)) {
        getAccountCurrency();
        alert("转帐成功");
    } else {
        alert("转帐失败");
    }
}
