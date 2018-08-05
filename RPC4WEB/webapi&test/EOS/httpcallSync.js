

function doHttpCallSync(uri, body)
{
    var result;
    console.log(JSON.stringify(body));
    $.ajax({   
        url: uri, 
        type: "post",  
        async: false, 
        dataType: "json",  
        data: body,  
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
