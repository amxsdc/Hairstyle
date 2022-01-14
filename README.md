前端分支--TangYingfu

注意：
  1、本实现还有很多bug未修复，未实现网络编程即未实现图片的上传和下载；
  
  2、目前实现的是静态内容，因资源问题，许多部分暂未处理，仅做了展示，后期继续完成补全；
  
  3、同时，很多页面还未不全，未添加响应，如头型分析、漫画脸等等部分还未做响应页面；
  
  4、其中，myApp目录下内容是测试内容，无需管理；
  
  5、当前项目还有很多bug，还未修复，同时使用的图片资源未考虑版权问题；
  
  6、页面过于简单且不美观，如不满足需求，可舍弃；
  
  7、其中涉及的权限还未配置，现在有很多权限用不到但是申请了，后期再处理；
  
  8、启动图还未配置，现在采用默认启动图；
  
  9、当前可直接clone到本地使用Hbuilder运行；
  
  最后，如果有更好的开源项目可以使用，本项目可以舍弃。
  
  
0、开屏图片（IOS上架APPStore不可用）和图标、应用名称可配置
![EE3B78719AAEBABD017C6ED9F8233282](https://user-images.githubusercontent.com/81294772/149462141-001aee62-681b-433e-b63b-3269a2cd091d.jpg)


![FB2C1DD73B504703EE526DB725938144](https://user-images.githubusercontent.com/81294772/149462153-dece364f-94b4-4e7e-8965-6859e9c49518.jpg)

  
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
