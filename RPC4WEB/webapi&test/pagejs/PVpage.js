
document.write("<script src='./EOS/eoscommon.js'></script>");

$(document).ready(function () {
    $("#accountaddress").text("账户地址:" + config_wallet_publickey);
    $("#currency").text("账户余额:" + eos_common_get_currecny($("#accountname").text()));
 });

 function getAccountCurrency()
 {
    $("#currency").text("账户余额:" + eos_common_get_currecny($("#accountname").text()));  
 }

function Exchange()
{
    var from = $('#accountname').text();
    var to = "user1";
    var PVnumber = $('#numInputName').val();
    var memo = $('#addressInputName').val();
    number = (parseFloat(PVnumber).toFixed(4)) + ' ' + config_currency_symbol;
    console.log(number);
    if (eos_common_transfer(from, to, number, memo)) {
        //alert("兑换成功");
        $('#totalcost').text("花费" + number);
        $('#exchangeresult').text("您已经成功兑换" + PVnumber + "光伏，请保持电话畅通，客服会联系您，预约时间上门安装。");
    } else {
        //alert("兑换失败");
        $('#exchangeresult').text("兑换失败，请联系客服！");
    }
}
