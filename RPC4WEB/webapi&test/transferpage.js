document.write("<script src='historySync.js'></script>");
document.write("<script src='eoscommon.js'></script>");

$(document).ready(function () {
    var accountnames = eos_common_get_account();
    if (accountnames != null) {
        var i = 0;
        for (var name in jsonObj.account_names)
        {
            i++;
            $("#userselect").append("<option value=" + name + ">" + name + "</option>");
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
        alert("转帐成功");
    } else {
        alert("转帐失败");
    }
}
