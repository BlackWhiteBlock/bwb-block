document.write("<script src='historySync.js'></script>");
//sync
function login()
{
    alert("login click");
    var walletname = config_wallet_name;
    var password = $("#pwdname").val()
    console.log(password);
    var password = config_wallet_password;
    var body = '["' + walletname + '","' + password + '"]';
    var data = UnlockWalletSync(body);
    if (data.status == 200 || data.status == 201)
    {
        location.href="transfer.html";
    } else {
        alert("密码错误，请重新输入");  
        location.href="transfer.html";        
    }
};



