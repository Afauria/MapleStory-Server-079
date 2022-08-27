# MapleStory服务端

## 说明

本项目来源于GitHub的[MapleStory](https://github.com/aoaostar/MapleStory)。

Windows版使用phpStudy集成环境，对小白比较友好，不过包含太多冗余的东西了。

## 文件

* scripts：脚本
* wz：冒险岛压缩文件，存储资源
* maple.jar：服务端打包文件，把依赖库也打包到一个jar里面了
* config：配置文件，还是比较清晰的
* src：服务端代码
* UnlimitedJCEPolicy.tar：修复加密算法问题
* [JDK1.7 armv7下载](https://www.oracle.com/java/technologies/javase/javase7-archive-downloads.html)

## 修改记录

* Fix：删掉了仓库中的JDK，因为CPU架构不一定适用，而且有的可能已经安装过JDK了
* Fix：修复了游戏键位清空、商场无反应问题。

## 端口号

1. 9595：登录端口号
2. 8600：商城端口号
3. 2525~2530：频道端口号

## 使用步骤

1. 安装JDK1.7和MySQL，配置环境变量。（注意CPU架构）
2. 创建数据库：`create database maple`
3. 导入SQL表结构：`source <path>/ms_20210813_234816.sql`
4. 修改`config/db.properties`配置：确认用户名和密码，数据库名称是否正确
5. 修改`config/server.properties`：将`127.0.0.1`改为本机IP
6. 运行`./start.sh`启动服务端
7. 下载079客户端，指定服务器IP地址和端口号

## 问题

### 加密算法异常

```shell
Error initalizing the encryption cipher. Make sure you're using the Unlimited Strength crptography jar files.
```

解决：解压`UnlimitedJCEPolicy.tar`，覆盖掉`jdk1.7.0_75/jre/lib/security`中的jar文件

