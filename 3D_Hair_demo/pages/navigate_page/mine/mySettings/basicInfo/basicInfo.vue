<template>
	<view class="content">
		<view class="title">
			<text class="txttitle">基本信息</text>
		</view>
		<image class="logo" :src="userPhoto"></image>
		<view class="showinfo">
			<text class="hintinfo">用户名：</text>
			<text class="userinfo">{{name}}</text>
		</view>
		<view class="showinfo">
			<text class="hintinfo">性 别：</text>
			<text class="userinfo">{{gender}}</text>
		</view>
		<view class="showinfo">
			<text class="hintinfo">年 龄：</text>
			<text class="userinfo">{{age}}</text>
		</view>
		<view class="showinfo">
			<text class="hintinfo">邮 箱：</text>
			<text class="userinfo" v-model="email">{{email}}</text>
		</view>
		<view class="showinfo">
			<text class="hintinfo">注册时间：</text>
			<text class="userinfo">{{registTime.split("\"")[1]}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'',			//用户名
				gender:'',			//性别
				age:'',				//年龄
				email:'',			//邮箱
				registTime:'',		//注册时间
				// userRoot:'普通用户',	//用户权限
				userPhoto:''		//用户头像
			}
		},
		methods: {
			onLoad(option){
				//外层指针this
				let _this=this;
				_this.name=option.userName;
				//请求用户信息
				uni.request({
					url:'/api/getUserInfor',
					method:'POST',
					data:{userName:_this.name},
					success(e) {
						if(!e.data){		//加载信息失败则不显示
							_this.$u.toast("加载信息失败");
							return;
						}
						//用户头像未获取
						_this.age=e.data.data[1];
						_this.gender=e.data.data[2];
						_this.email=e.data.data[3];
						// _this.userRoot=e.data.userRoot
						if(e.data.data[4]){
							_this.userPhoto=e.data.data[4];
						}
						else{
							_this.userPhoto="/static/mine1.png";
						}
						_this.registTime=e.data.data[5];
					}
				})
			},
			onShow(){
				
			},
		},
	};
</script>

<style lang="scss" scoped>
	//全局页面设置
	page{
		background-color: #ffffff;
	}
	//父容器
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
			//提示信息
			.hintinfo{
				width: 50%;
				margin-top: 20px;
				font-size: 12px;
			}
			//用户信息
			.userinfo{
				width: 60%;
				height: 20px;
				background-color: #FFFFFF;
				border-radius: 3px;
				margin-top: 20px;
				font-size: 12px;
				-moz-box-shadow: inset 0 0 10px #CCC;
				 -webkit-box-shadow: inset 0 0 10px #CCC;
				 box-shadow: inset 0 0 10px #CCC;
			}
		}
		//模块标题
		.title{
			width: 100%;
			height: 50px;
			padding-left: 20px;
			font-size: 14px;
			padding-top: 18px;
			border-radius: 4px;
			display: flex;
			align-content: center;
			background-color: #2979FF;
		}
	}
</style>
