1.在web http api使用过程中
由于浏览器同源策略需要修改相应的config.ini,如本目录下的config.ini是wallet的config文件修改后的配置
具体修改项有：
access-control-allow-origin = *

access-control-allow-headers = access-control-allow-origin

access-control-allow-credentials = true


2.api接口文件有wallet.js, chain.js, 以及httpcall.js(为前两者服务)

jquery-3.3.1.min为公共jquery文件

index.html, walletAPI.js为测试用文件