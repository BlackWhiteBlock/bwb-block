

var http = "http://";
var domain = "localhost";
var port = "8888";

function doHttpCall(key, body, callback)
{
    $.ajax({   
        url: http + domain + ":" + port + key, 
        type: "post",  
        asyn:false, 
        dataType: "json",   
        data: JSON.stringify(body),  
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
            request.setRequestHeader("Accept", "*/*");
            request.setRequestHeader("Connection", "close");
        },
        success: function (ret) {      
            callback(200, ret);
        } ,
        error: function(ret, textStatus){
            callback(ret.status, ret.responseText);
        } 
    })
}

function GetErrorCode(data)
{
    var jsonobj = $.parseJSON(data); 
    var errorobj = jsonobj.error;
    var result = errorobj.code;
    return result;
}

function GetErrorMessage(data)
{
    var jsonobj = $.parseJSON(data); 
    var errorobj = jsonobj.error;
    var result = errorobj.what;
    return result;
}