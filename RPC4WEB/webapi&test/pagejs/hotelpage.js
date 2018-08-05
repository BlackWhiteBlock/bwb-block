
document.write("<script src='./EOS/eoscommon.js'></script>");

$(document).ready(function () {
    $("#accountaddress").text("账户地址:" + config_wallet_publickey);
    $("#currency").text("账户余额:" + eos_common_get_currecny($("#accountname").text()));
 });

 function getAccountCurrency()
 {
    $("#currency").text("账户余额:" + eos_common_get_currecny($("#accountname").text()));  
 }

function Reserve()
{
    var from = $('#accountname').text();
    var to = "user1";
    var cionnumber = 298;
    number = (parseFloat(cionnumber).toFixed(4)) + ' ' + config_currency_symbol;
    var memo = $('#moneyInputName').val() + "花费:" + cionnumber;
    console.log(number);
    if (eos_common_transfer(from, to, number, memo)) {
        //alert("预定成功");
        $('#totalcost').text("花费" + number);
        $('#reserveresult').text("您已经成功预定" + $('#moneyInputName').val() + "酒店一天，请于当天12点之前到酒店前台办理入住");
    } else {
        //alert("预定成功");
        $('#reserveresult').text("预定失败，请联系客服！");
    }
}
