//document.write("<script src='wallet.js'></script>");

function test()
{
    alert("click");
    GetInfo(function (data){

        console.log(data.status);
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