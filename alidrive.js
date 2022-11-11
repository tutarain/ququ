/***********************************

> 应用名称：阿里云盘
> 脚本作者：Cuttlefish
> 特别说明：⛔⛔⛔
            本脚本仅供学习交流使用，禁止转载售卖
            ⛔⛔⛔



[rewrite_local]

# ～ 阿里云盘（2022-10-16）@ddgksf2013
^https?:\/\/api\.aliyundrive\.com\/apps\/v\d\/users\/apps\/widgets$ url script-response-body https://raw.githubusercontent.com/tutarain/ququ/main/alidrive.js

[mitm]

hostname=api.aliyundrive.com

***********************************/

let ddgksf2013 = JSON.parse($response.body);
if (ddgksf2013.result) {
    ddgksf2013.result = Object.values(ddgksf2013.result).filter(item => (item["appCode"]=="file" || item["appCode"]=="video"));
}
$done({ body: JSON.stringify(ddgksf2013) });
