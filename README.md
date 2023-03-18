### Node + Express + Typescript https静态资源服务
- ES Module + Typescript编码，使用ts-node编译后启动
```shell
1. npm install  下载相关依赖
2. npx ts-node serve.ts  启动https静态服务
```
###### 目录结构
+ ssl目录，存放从腾讯云申请下来的ssl证书
+ public目录，存放要线上部署的静态资源列表
    > 如：react项目打包构建后的build目录
