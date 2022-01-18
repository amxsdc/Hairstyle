<template>
	<view class="content">
		<view class="title">
			<text class="txttitle">编辑用户</text>
		</view>
		<image class="logo" @click="clickPortraint" :src="userPhoto"></image>
		<view class="showinfo">
			<text class="hintinfo">用户名：</text>
			<input class="userinfo" type="text" v-model="name"  placeholder="请输入用户名" />
		</view>
		<view class="showinfo">
			<text class="hintinfo">性 别：</text>
			<view class="pullDownMenu">
				<text class="userinfo">{{gender}}</text>
				<!-- 下拉菜单 -->
				<picker class="pullEntry" @change="genderChange" :range="genderList">
					<label><u-icon class="pullIcon" name="/static/pullDown.png"></u-icon></label>
					<label class="">{{genderList[index]}}</label>
				</picker>
			</view>
		</view>
		<view class="showinfo">
			<text class="hintinfo">年 龄：</text>
			<input class="userinfo" type="text" v-model="age"  placeholder="请输入邮箱" />
		</view>
		<view class="showinfo">
			<text class="hintinfo">邮 箱：</text>
			<input class="userinfo" type="text" v-model="email"  placeholder="请输入邮箱" />
		</view>
		<view class="showinfo">
			<text class="hintinfo">用户权限：</text>
			<!-- 下拉菜单 -->
			<view class="pullDownMenu">
				<text class="userinfo">{{userRoot}}</text>
				<picker class="pullEntry" @change="rootChange" :range="rootList">
					<label><u-icon class="pullIcon" name="/static/pullDown.png"></u-icon></label>
					<label class="">{{rootList[index]}}</label>
				</picker>
			</view>
		</view>
		<view class="buttonSet">
			<u-button @click="submit" :style="[buttonStyle]" class="button-LogCancel">提交</u-button>
			<u-button @click="cancel" :style="[buttonStyle]" class="button-LogCancel">取消</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'',						//用户名
				password:'',					//用户密码
				genderList:["男","女"],			//用户性别列表
				rootList:["管理员","普通用户"],	//用户权限列表
				gender:'男',					//用户性别
				age:'',							//用户年龄
				email:'',						//用户邮箱
				userRoot:'普通用户',				//用户权限
				userPhoto:'',					//用户头像
				index:-1,
				userName:'',					//用户名
				oldUserName:'',					//原始用户名
			}
		},
		//按钮风格
		computed: {
			buttonStyle() {
				let style = {};
				style.color = "#fff";
				style.backgroundColor = this.$u.color['warning'];
				return style;
			},
		},
		methods: {
			onLoad(option){
				var _this=this;
				_this.oldUserName=option.userName;
				//请求用户信息
				uni.request({
					url:'/api/managerGetUserInfor',
					method:'POST',
					data:{userName:option.userName},//来自用户管理的用户名
					success(e) {
						//用户头像未获取
						_this.name=e.data.data[0][0]
						_this.age=e.data.data[0][2]
						_this.gender=e.data.data[0][3]
						_this.email=e.data.data[0][4]
						
						if(e.data.data[0][6]=="0"){
							_this.userRoot="普通用户"
						}
						else{
							_this.userRoot="管理员"
						}
						if(e.data.data[0][5]==null){
							_this.userPhoto="/static/mine1.png";
						}
						else{
							_this.userPhoto=e.data.data[0][5]
						}
					}
				})
			},
			
			//性别选择下拉框
			genderChange: function(e) {
				this.gender=this.genderList[e.target.value];
			},
			//用户权限选择下拉框
			rootChange(e){
				if(this.userRoot="管理员"&&this.rootList[e.target.value]=="普通用户"){
					this.$u.toast("您不可以将管理员改为普通用户");
					this.userRoot="管理员"
					return;
				}
				this.userRoot=this.rootList[e.target.value];
			},
			
			//点击头像，头像不可编辑
			clickPortraint(){
				this.$u.toast("不可编辑用户头像");
			},
			
			//确认修改用户信息
			submit(){
				//外层指针this
				let _this=this
				
				//此处应在后期作出更改，未改变信息不做改变
				if(_this.name==""||_this.age==""||_this.email==""){
					_this.$u.toast("请完善用户信息再提交");
					return;
				}
				
				//邮箱检测格式是否符合要求//正则表达校验，邮箱格式
				var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
				if(!reg.test(this.email)){
					this.$u.toast("您的邮箱格式不符合要求,请检查")
					return
				}
				
				//提交确认
				uni.showModal({
					title: '确认提交',
					content: '确认要更改用户信息吗？',
					success: function (res) {
						if (res.confirm){
							//发送请求
							uni.request({
								url:'/api/editUserInfor',
								method:'POST',
								data:{oldName:_this.oldUserName,newName:_this.name,regSex:_this.gender,regAge:_this.age,regEmail:_this.email,admin:_this.userRoot}, 
								success: (res) => {
									if(res.data.data.status==true){
										_this.$u.toast("发布成功")
										uni.navigateBack({
											delta:1,
										})
									}
									else{
										_this.$u.toast("发布失败,请重新提交")
									}
								}
							});
						} else if (res.cancel) {
							_this.$u.toast('取消上传');
						}
					}
				});
			},
			//取消上传文章
			cancel(){
				uni.showModal({
					title: '确认取消',
					content: '确认要取消并推出编辑吗？',
					success: function (res) {
						if (res.confirm){
							//确认按钮
							uni.redirectTo({
								url:'../userManage'
							})
						}
					}
				})
			}
		},
	};
</script>

<style lang="scss" scoped>
	page{
		background-color: #ffffff;
	}
	.content {
		flex-direction: column;
		display: flex;
		align-items: center;
		align-content: center;
		width: 100%;
		height: 100%;
		.logo {				//头像
			height: 72px;
			width: 72px;
			margin-top: 60rpx;
			margin-left: auto;
			margin-right: auto;
			margin-bottom: 50rpx;
			border-radius: 5px;
			-moz-box-shadow:0 0 10px 10px #06c;
			-webkit-box-shadow:0 0 10px 10px #06c;
			box-shadow:0 0 10px 10px #06c;
		}
		
		.showinfo {			//显示信息设置
			width: 50%;
			flex-direction: row;
			display: flex;
			.hintinfo{
				width: 50%;
				margin-top: 20px;
				font-size: 12px;
			}
			.userinfo{
				width: 80%;
				height: 20px;
				background-color: #FFFFFF;
				border-radius: 3px;
				margin-top: 20px;
				font-size: 12px;
				-moz-box-shadow: inset 0 0 10px #CCC;
				-webkit-box-shadow: inset 0 0 10px #CCC;
				box-shadow: inset 0 0 10px #CCC;
			}
			//下拉菜单父付组件
			.pullDownMenu{
				width: 80%;
				flex-direction: row;
				display: flex;
			}
			//下拉菜单点击入口
			.pullEntry{
				margin-top: 20px;
				width: 20px;
				height: 20px;
			}
			//下拉图标
			.pullIcon{
				height: 20px;
				width: 20px;
			}
		}
		
		//提交和取消按钮
		.buttonSet{
			flex-direction: row;
			display: flex;
		}
		//按钮风格
		.button-LogCancel{
			width: 40%;
			height: 35px;
			font-size: 14px;
			margin-top: 60px;
		}
		
		//模块标题
		.title{
			width: 100%;
			height: 50px;
			padding-left: 20px;
			font-size: 14px;
			flex-direction: row; 
			align-items: center;
			border-radius: 4px;
			display: flex;
			align-content: center;
			background-color: #2979FF;
		}
	}
</style>
