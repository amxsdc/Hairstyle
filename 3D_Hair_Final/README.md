前端分支--TangYingfu---此版本为修改版，正逐步进行优化，当前优化未完成

01月19日：

1、修改注册登录、忘记密码等页面，按照原型设计进行优化，但优化不完全，有待进一步优化---原“发型广场”已迁移至首页“发型设计”模块

![image](https://user-images.githubusercontent.com/81294772/150099016-695ee4ad-f99a-42ab-8f37-06777032e43e.png)
![image](https://user-images.githubusercontent.com/81294772/150099052-4adc2fc7-ae2d-4ba2-b548-6f65881320f4.png)


![image](https://user-images.githubusercontent.com/81294772/150099106-c5b1248d-51f4-4617-89ad-c618578ccb38.png)
![image](https://user-images.githubusercontent.com/81294772/150099197-764a7f27-8e24-4f1d-aefd-d5a173fef1ab.png)



01月18日晚：

1、在登陆界面添加第三方登录按钮---还未实现第三方登录

![image](https://user-images.githubusercontent.com/81294772/149988596-47cec450-70fb-4cb5-a41b-eda1b956e310.png)

2、在主界面添加了左侧菜单栏，可右滑屏幕唤醒或者点击菜单按钮唤醒。

![image](https://user-images.githubusercontent.com/81294772/149988856-407a12ee-3a5e-4820-9bcf-2c9079d1cdcd.png)



01月17日晚---由于界面过于简陋和功能实现技术性太差，正考虑界面优化，但由于UI感太差，我先实现功能，后期继续完成界面迁移和优化。

1、开始“漫画脸”界面的编写和实现，其中图片可选择相册或拍照，转化考虑本地转化或者上传转化，后期确定再复现

![image](https://user-images.githubusercontent.com/81294772/149811211-2108892b-0eb6-4f46-b33e-6bb99fb389d7.png)

2、在登录界面加背景+动图

![image](https://user-images.githubusercontent.com/81294772/149818964-c0e37695-73a2-485f-9a22-5aa9a61a1eed.png)




01月16日晚：

1、vue-3D-model组件似乎主要是针对H5，所以对APP的兼容性不够----寻找新方法/继续深入改进

2、完善了换发型界面---主要解决滑动切换窗口---目前bug：

a.多行图片未能滑动查看，考虑加入list；

b.针对男女的界面切换还未完善和实现，有待进一步优化

【实现效果】

![image](https://user-images.githubusercontent.com/81294772/149670620-22b86bff-5b33-4d26-80f3-86d146d8ec8b.png)



01月15日晚：

1、使用别人的vue-3D-model封装好的组件库（npm下载）实现了3D模型（stl文件）的展示，其他内容正在学习使用，目前展示成功----问题，使用他人的组件库会不会存在问题（版权），我们自己能都从头造轮子。

vue-3D-model的github地址：https://github.com/hujiulong/vue-3d-model

vue-3D-model的参考网页：https://blog.csdn.net/weixin_44963099/article/details/106275000?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2.pc_relevant_default&utm_relevant_index=3

实现效果（待完善）---现由于3D模型较大，加载比较慢：

![image](https://user-images.githubusercontent.com/81294772/149628925-d635d6d3-008b-468a-8f5e-0e45cd58afde.png)

【实现方式】

导入组件，并加入到项目中，实例化使用：

![image](https://user-images.githubusercontent.com/81294772/149628967-109f1c23-95cb-4a92-b201-03d0ab8b5e8f.png)


2、完善测脸型界面---主要解决滑动切换页面窗口（swipe-view实现）

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
