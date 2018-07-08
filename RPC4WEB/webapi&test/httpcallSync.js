

var http = "http://";
var domain = "localhost";
var port = "8888";


function doHttpCallSync(key, body)
{
    var result;
    $.ajax({   
        url: http + domain + ":" + port + key, 
        type: "post",  
        async: false, 
        dataType: "json",  
        data: JSON.stringify(body),  
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
            request.setRequestHeader("Accept", "*/*");
            request.setRequestHeader("Connection", "close");
        },
        success: function (ret) { 
            console.log(ret);     
            result = {"status":200, "message":ret};
        } ,
        error: function(ret, textStatus){
            console.log(ret.status);
            if (ret.status != 0) {
                var jsonobj = $.parseJSON(ret.responseText); 
                var errorobj = jsonobj.error;
                var message = errorobj.what;
                var errorCode = errorobj.code;
                result = {"status":ret.status, "error":errorCode, "message":message};
            } else {
                console.log("============1===========");
                result = {"status":ret.status, "error":ret.status, "message":"UnConnect server!"};
            }
        } 
    })
    console.log("=======================");
    return result;
}
