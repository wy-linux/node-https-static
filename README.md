### Node + Express + Typescript https静态资源服务
- ES Module + Typescript编码，使用ts-node编译后启动
```shell
1. npm install  下载相关依赖
2. npx ts-node serve.ts  启动https静态服务
```
##### serverStatic
在前端History Router时，用户手动刷新页面会向后端发送请求。
+ pathRewrite：1 时，'/'下面无法正常访问的路径都会重定向到'/index.html'
+ pathRewrite：2 时，'/***/'下面无法正常访问的路径都会重定向到'/index.html'
+ ......
> serverStatic中间件：https://github.com/wy-linux/node-wangyu-server-static
```javascript
// app.use(express.static(pathStatic))
//手写的serverStatic中间件取代express.static
app.use(
    serverStatic(pathStatic, {
        maxAge: 60 * 60, //强缓存时间60min
        pathRewrite: 2, //开启二级路径强制重定向到index.html
        // gzip: true //开启Gzip压缩
    })
)
```
###### 目录结构
+ ssl目录，存放从腾讯云申请下来的ssl证书
+ public目录，存放要线上部署的静态资源列表
    > 如：react项目打包构建后的build目录
