
function createwallet()
{
  /* var xhr = new XMLHttpRequest();
    xhr.open('post', 'http://localhost:8888/v1/wallet/create',false);
    //发送请求
   // xhr.setRequestHeader("Content-type","application/json");
    var name = '"hitd"';
    xhr.send(name);
    xhr.onreadystatechange = function () {
            //这步为判断服务器是否正确响应
            console.log(xhr.readyState);
            console.log(xhr.responseText);
            console.log(xhr.status);

        if (xhr.readyState == 4) {
            var h = document.getElementById("show");
        
            h.innerHTML = xhr.responseText;
            console.log(xhr.responseText);
        } 
    };*/
    $.ajax({   
        
        url:"http://localhost:8888/v1/wallet/list_wallets", 
        //async:false,
        type:"post",   
        //contentType: "application/json; charset=utf-8",
        dataType:"json",   
        data:JSON.stringify(null),  
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        //crossDomain: true,
        //headers: {'Content-type': 'application/json; charset=utf-8'},   
        //headers: {'Access-Control-Allow-Origin':'*'},
        success: function (ret, teststatus, xhr) {     
        console.log(xhr.status);
        var h = document.getElementById("show");
        h.innerHTML = ret;
        console.log(ret);   
  
        } ,

        failure: function(ret){
            //alert(ret.message);
            console.log(ret.readyState);
            console.log(ret.status);
        } ,

        error: function(ret, textStatus){
            alert(ret.responseText);
            console.log(ret.readyState);
            console.log(textStatus);
         
            console.log(ret.status);
        } 
    
    })
    /*
    var data = JSON.stringify(false);
    console.log(data);
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });
    
    xhr.open("POST", "http://127.0.0.1:8888/v1/wallet/create");
    
    xhr.send(data);*/
}