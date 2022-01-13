<template>
	<view class="content">
		<view class="title">我的APP</view>
		<image class="logo" :src="myHeadPhoto"></image>
		<view class="inputname">
			<text class="hintName">名 称：</text>
			<input class="userName" type="text" v-model="userName"  placeholder="清晨路上" />
		</view>
		<view class="inputname">
			<text class="hintPassword">备 注：</text>
			<input class="userPassword" type="text" v-model="userPassword" placeholder="我的APP开发" />
		</view>
		<view class="buttonSet">
			<u-button @click="submit" :style="[buttonStyle]" class="button-LogReg">进入</u-button>
			<u-button @click="registButton" :style="[buttonStyle]" class="button-LogReg">注册</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName: '',		//用户名
				userPassword:'',	//用户密码
				myHeadPhoto:'/static/mine1.png',		//用户头像
				tempPhotoLink:'',
				tempUserName:'',
			}
		},
			
		computed: {					//按钮风格设定
			buttonStyle() {
				let style = {};
				style.color = "#fff";
				style.backgroundColor = this.$u.color['warning'];
				return style;
			},
		},
		
		components: {
			
		},
		
		methods: {
			onLoad(){				//创建页面时自动调用
				var _this=this
					
				uni.getNetworkType({//获取网络状态
					success(res) {
						if(res.networkType=="none"){
							// _this.$u.toast("您当前处于无网络状态，无法正常启动")
						}
						else if(res.networkType=="unknown"){
							// _this.$u.toast("您处于未知网络环境中");
						}
						else{
							// _this.$u.toast("您处于网络环境中");
						}
					},
					fail(e) {
						_this.$u.toast("无法获取您的网络状态");
					},
				});
				uni.getStorage({
					key:'headPhotoLink',
					success(res) {
						_this.myHeadPhoto=res.data.Photolink
					}
				})
			},
			onShow(){
				//this指针
				var _this=this
			},
			
			//进入
			submit() {
				//this指针
				var _this=this;
				
				// this.$u.toast('发出进入请求')
				// uni.request({
				// 	url: '/api/', 
				// 	method:'GET',
				// 	//加入请求头，完成表单传送
				// 	// header: {
				// 	//     'content-type': 'application/x-www-form-urlencoded'
				// 	// },
				// 	// data:{userName:_this.userName,password:_this.userPassword}, 
				// 	success: (res) => {
				// 		// console.log(res)
				// 		// if(!res.data.data.status){
				// 		// 	_this.$u.toast("登录失败")
				// 		// }
				// 		// else{
							
				// 		// }
				// 	}
				// });
				uni.switchTab({
					url:"myHome/myHome"
				})
			},
			registButton(){			//注册
				// uni.navigateTo({
				// 	url:"../regist/regist"
				// })
				this.$u.toast("点击注册按钮");
			}
		},
	};
</script>

<style lang="scss" scoped>
	page{						//全局页面配置
		background-color: #f0f0f0;
	}
	.content {					//父容器
		flex-direction: column;
		display: flex;
		align-items: center;
		align-content: center;
		width: 100%;
		height: 100%;
		.buttonSet{				//按钮集合设置
			flex-direction: row;
			display: flex;
		}
		.logo {					//头像
			height: 72px;
			width: 72px;
			margin-top: 30rpx;
			margin-left: auto;
			margin-right: auto;
			margin-bottom: 50rpx;
			border-radius: 5px;
			-moz-box-shadow:0 0 10px 10px #06c;
			-webkit-box-shadow:0 0 10px 10px #06c;
			box-shadow:0 0 10px 10px #06c;
		}
		.inputname {			//输入框用户名
			width: 50%;
			flex-direction: row;
			display: flex;
			.hintName{			//输入框提示
				width: 80px;
				font-size: 14px;
				flex-direction: row;
				display:flex;
				align-items: center;
			}
			.hintPassword{		//输入框提示	
				width: 80px;
				margin-top: 20px;
				flex-direction: row;
				display:flex;
				align-items: center;
				font-size: 14px;
			}
			.userName{			//用户名
				width: 100%;
				border-radius: 3px;
				background-color: #FFFFFF;
				font-size: 11px;
				-moz-box-shadow: inset 0 0 10px #CCC;
				-webkit-box-shadow: inset 0 0 10px #CCC;
				box-shadow: inset 0 0 10px #CCC;
			}
			.userPassword{		//密码
				width: 100%;
				background-color: #FFFFFF;
				border-radius: 3px;
				margin-top: 20px;
				font-size: 11px;
				-moz-box-shadow: inset 0 0 10px #CCC;
				-webkit-box-shadow: inset 0 0 10px #CCC;
				box-shadow: inset 0 0 10px #CCC;
			}
		}
		.button-LogReg{			//注册和登录按钮
			width: 40%;
			height: 35px;
			font-size: 14px;
			margin-top: 60px;
		}
		.title {				//页面标题
			margin-top: 100upx;
			text-align: center;
			font-size: 28px;
			font-weight: 500;
			margin-bottom: 100upx;
		}
		input {					//输入框设置
			text-align: left;
			margin-bottom: 10rpx;
			padding-bottom: 6rpx;
		}
	}
</style>
