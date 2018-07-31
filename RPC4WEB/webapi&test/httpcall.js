

function doHttpCall(uri, body, callback)
{
    $.ajax({   
        url:uri, 
        type: "post",  
        dataType: "json",  
        data: body,  
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
            request.setRequestHeader("Accept", "*/*");
            request.setRequestHeader("Connection", "close");
        },
        success: function (ret) { 
            console.log(ret);     
            callback(200, ret);
        } ,
        error: function(ret, textStatus){
            console.log(ret.status);
            console.log(ret.responseText);
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
