//document.write("<script src='wallet.js'></script>");
//sync
function test()
{
    alert("click");
    var data = CreateWallet("ningsssdddd");
    if (data.status == 200 || data.status == 201)
    {
        alert(data.status);
        alert(data.message);
    } else {
        alert(data.error);  
        alert(data.status);
        alert(data.message);          
    }
};

//async
/*
function test()
{
    alert("click");
    CreateWallet("ningsssdddd", function (data) {
        if (data.status == 200 || data.status == 201)
        {
            alert(data.status);
            alert(data.message);
        } else {
            alert(data.error);  
            alert(data.status);
            alert(data.message);          
        }
    });
};
*/