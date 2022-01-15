前端分支--TangYingfu

01月15日晚：

1、完善测脸型界面---主要解决滑动切换页面窗口（swipe-view实现）

![image](https://user-images.githubusercontent.com/81294772/149626500-a18bbf51-2868-4816-83ec-3547180f701d.png)


01月15日早：

1、配置了跨域，使用fastMock模拟网络接口实现通信，目前实现登录的请求响应（注：网页需要配置跨域，而APP好像不行--要直接放链接），此处实现如下，图中的版本的网页版，network包含了请求信息。

![image](https://user-images.githubusercontent.com/81294772/149561356-a8fcdbbb-6c10-4502-8d6d-8b388cd3bc6f.png)

fastMock模拟接口配置如下：

![image](https://user-images.githubusercontent.com/81294772/149561449-8818bd1c-4e77-40bd-b10d-03958b379173.png)

跨域部分实现如下：

![image](https://user-images.githubusercontent.com/81294772/149561571-cbf51df5-0fcc-410c-9f2b-4da586a80edf.png)


2、开始编写“测脸型”模块（未完成），解决状态栏透明度问题，参考：https://www.jianshu.com/p/8d0bbc7dccf7 （此实现只针对APP，对微信小程序无用--未测试）

![image](https://user-images.githubusercontent.com/81294772/149561714-65b9c14b-1347-4204-9b2b-a28709538fee.png)

3、解决APP启动页和图标问题----配置即可，页面背景使用一个view来实现更可靠

![image](https://user-images.githubusercontent.com/81294772/149561928-105b75c2-c625-4fd8-bfad-860998f5c7a8.png)



01月14日早：

注意：
  1、本实现还有很多bug未修复，未实现网络编程即未实现图片的上传和下载；uniapp会存在一些兼容性问题；
  
  2、目前实现的是静态内容，因资源问题，许多部分暂未处理，仅做了展示，后期继续完成补全；
  
  3、同时，很多页面还未不全，未添加响应，如头型分析、漫画脸等等部分还未做响应页面；
  
  4、其中，myApp目录下内容是测试内容，无需管理；
  
  5、当前项目还有很多bug，还未修复，同时使用的图片资源未考虑版权问题；
  
  6、页面过于简单且不美观，如不满足需求，可舍弃；
  
  7、其中涉及的权限还未配置，现在有很多权限用不到但是申请了，后期再处理；
  
  8、启动图还未配置，现在采用默认启动图；
  
  9、当前可直接clone到本地使用Hbuilder运行；
  
  最后，如果有更好的开源项目可以使用，本项目可以舍弃。
  
  
0、开屏图片（IOS上架APPStore不可用）和图标、应用名称可配置，其中图标、开屏页需打包安装才能看到，真机调试看不到

![image](https://user-images.githubusercontent.com/81294772/149462244-d4286298-1f71-4727-9f30-56ed7d720402.png)

![image](https://user-images.githubusercontent.com/81294772/149462278-a04bccf7-fdd4-4013-98cc-420b31aa1863.png)


  
1、实现注册登录，其中有注册，找回密码等，现在登录默认账户为：admin，密码为：123456

![image](https://user-images.githubusercontent.com/81294772/149372040-93af2a8a-ca74-458c-b329-095bd791bdd6.png)

2、实现主页，添加轮播图，功能按钮以及热门发型展示（热门发型资源未整合），功能按钮对应页面未添加，实现底部导航栏

![image](https://user-images.githubusercontent.com/81294772/149372084-b97af6fc-610d-4bbb-95eb-496869f1fe32.png)

3、实现热门发型展示页面，页面可点击拍照按钮进入相机（有摄像头可打开，网页似乎不会打开--无摄像头自动打开相册），选择图片后可预览，可再次选择“相册”选择图片（仅限一张），有上传按钮（暂未实现逻辑功能）

![image](https://user-images.githubusercontent.com/81294772/149372146-131334cc-2a3d-4557-b937-f119d7d50210.png)

4、实现“我的信息”页面，包含信息页，功能按钮，功能按钮逻辑未实现

![image](https://user-images.githubusercontent.com/81294772/149372200-ee24036b-b3fb-4f37-8fb1-8e7e73e9228f.png)

【项目结构】
其中，pages.js是作为项目管理的清单，相当于android的Manifest.xml。

![image](https://user-images.githubusercontent.com/81294772/149372698-44ad6227-449b-4678-9ab4-b05a935d1243.png)
