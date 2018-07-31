document.write("<script src='historySync.js'></script>");
//sync
function login()
{
    alert("login click");
    var walletname = "bwb";
    var password = $("#pwdname").val()
    console.log(password);
    var password = "PW5HpurETUUQgT8f6ezPP129gbQD2RdXkRUWLGrGUorc5hvj3phXh";
    var body = '["' + walletname + '","' + password + '"]';
    var data = UnlockWalletSync(body);
    if (data.status == 200 || data.status == 201)
    {
        alert(data.status);
        alert(data.message);
        location.href="transfer.html";
    } else {
        alert("密码错误，请重新输入");  
        location.href="transfer.html";        
    }
};



