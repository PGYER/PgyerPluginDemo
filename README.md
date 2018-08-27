### 安装Cordova
Cordova的命令行运行在Node.js 上面并且可以通过NPM安装。 根据 平台具体指导 安装相应平台的依赖。打开命令提示符或终端，然后键入```npm install -g cordova```。

### 创建一个项目
使用命令行创建一个空的Cordova项目。导航到你希望创建项目的目录，然后键入 ```cordova create <path>```。
要知道这个命令完整的选项，键入```cordova help create```。

### 添加一个平台
在创建完一个Cordova项目后，导航到项目目录。在项目目录中，你需要添加你想构建app的平台
为了添加平台， 键入 ```cordova platform add <platform name>```。
为了知道你可以添加的平台，你可以运行```cordova platform```。

### 添加插件

在工程根目录下执行

```
cordova plugin add pgyerplugin --variable ANDROID_APPID=[Android App Key] --variable IOS_APPID=[iOS App Key]

```

在蒲公英上的每一个 App 都有一个唯一的 App Key，开发者可以在应用管理页面首页查看[Android App Key] 和 [iOS App Key]。

![](https://static.pgyer.com/image/view/admin_images/1a2818d1f66c77a80970481b48a4145b)


### 运行App
在命令中,键入```cordova run <platform name>```。
