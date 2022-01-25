<template>
	<view class="content">
		<view class="title">忘记密码</view>
		<view class="input-wrap">
			<view class="inputname">
				<!-- <text class="hintinfo">用户名：</text> -->
				<input class="userinfo-account" type="text" v-model="userName"  placeholder="手机号/邮箱" />
				<button class="getCode" @click="clickGetCode">验证码</button>
			</view>
			<view class="inputname">
				<!-- <text class="hintinfo">用户权限：</text> -->
				<input class="userinfo" type="text" v-model="userRootKey"  placeholder="验证码" />
			</view>
			<view class="inputname">
				<!-- <text class="hintinfo">密   码：</text> -->
				<input class="userinfo" type="password" v-model="userPassword" placeholder="请输入密码" />
			</view>
			<view class="inputname">
				<!-- <text class="hintinfo">确认密码：</text> -->
				<input class="userinfo" type="password" v-model="userPpassword"  placeholder="请确认密码" />
			</view>
		</view>
		<view class="buttonSet">
			<u-button @click="queryButton" :style="[buttonStyle]" class="button-LogReg">确认</u-button>
			<u-button @click="cancelButton" :style="[buttonStyle]" class="button-LogReg">取消</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName:'',					//用户名
				userRootKey:'',					//用户权限密钥
				userAge:'',						//用户年龄
				userEmail:'',					//用户邮箱
				userGender:'',					//用户性别
				userPassword:'',				//用户密码
				userPpassword:'',				//用户第二次去人密码
				genderList:["男","女"],			//用户性别列表
				index:-1,						//下拉索引
				
				userName: '',			//用户名
				userEmail:'',			//用户邮箱
				newpassword:'',			//用户密码
				repeatNewPassword:''	//用户确认密码
			}
		},
		computed: {						//按钮风格
			buttonStyle() {
				let style = {};
				style.color = "#fff";
				style.backgroundColor = this.$u.color['warning'];
				return style;
			},
		},
		methods: {
			onLoad(){
				
			},
			
			clickGetCode(){
				this.$u.toast("点击了获取验证码");
			},
			
			cancelButton(){				//取消注册返回登陆界面
				this.$u.toast("取消找回密码并返回登录界面");
				uni.redirectTo({
					url:"../login",
				})
			},
			queryButton(){				//重置密码
				//this指针
				var _this=this
				
				//判断输入状态
				if(this.userName==""||this.userEmail==""||this.newpassword==""||this.repeatNewPassword==""){
					this.$u.toast("请完善信息")
					return
				}
				if(this.newpassword!=this.repeatNewPassword){
					this.$u.toast("您两次输入的密码不匹配")
					return
				}
				//检验密码位数是否符合要求
				if(this.newpassword.length!=6){
					this.$u.toast("您的密码格式不正确，请输入6位密码");
					return;
				}
				
				//密码变量
				uni.showModal({
					title: '重置密码',
					content: '确认信息无误并重置密码？',
					success: function (res) {
						if (res.confirm) {
							uni.request({
								url: '/api/forgetPassword', 
								method:'POST',
								//发送用户名、邮箱（验证身份）、新密码
								data:{userName:_this.userName,regEmail:_this.userEmail,newPassword:_this.repeatNewPassword}, 
								success: (res) => {
									if(res.data.data.status){
										_this.$u.toast("重置密码成功");
										uni.redirectTo({
											url:'../login',
										})
									}
									else{
										_this.$u.toast("重置密码失败");
									}
								}
							});
						} else if (res.cancel) {
							_this.$u.toast("取消重置密码")
						}
					}
				});
			},
		},
	};
</script>

<style lang="scss" scoped>
	page{
		background-color: #f0f0f0;
	}
	.content {					//容器
		flex-direction: column;
		display: flex;
		align-items: center;
		align-content: center;
		width: 100%;
		height: 100%;
		
		
		.input-wrap{
			width: 80%;
		}
		
		.buttonSet{					//按钮父容器
			flex-direction: row;
			display: flex;
		}
		.inputname {
			width: 100%;
			flex-direction: row;
			display: flex;
			align-items: center;
									//提示内容
			// .hintinfo{
			// 	width: 20%;
			// 	margin-top: 20px;
			// 	font-size: 12px;
			// }
								//输入内容
			.userinfo{
				width: 100%;
				height: 2em;
				background-color: #FFFFFF;
				border-radius: 10px;
				margin-top: 20px;
				font-size: 14px;
				padding-left: 3px;
				border-style: groove;
				-moz-box-shadow: inset 0 0 10px #CCC;
				-webkit-box-shadow: inset 0 0 10px #CCC;
				box-shadow: inset 0 0 10px #CCC;
			}
			
			//账号栏
			.userinfo-account{
				width: 60%;
				height: 2em;
				background-color: #FFFFFF;
				border-radius: 10px;
				margin-top: 20px;
				font-size: 14px;
				padding-left: 3px;
				border-style: groove;
				-moz-box-shadow: inset 0 0 10px #CCC;
				-webkit-box-shadow: inset 0 0 10px #CCC;
				box-shadow: inset 0 0 10px #CCC;
			}
			.getCode{
				width: 40%;
				font-size: 16px;
				margin-top: 20px;
				text-align: center;
				background-color: #0055ff;
				height: 2em;
			}
		}
		
		.buttonSet{				//按钮
			flex-direction: row;
			display: flex;
		}
		
		.button-LogReg{				//按钮集合
			width: 40%;
			height: 35px;
			font-size:14px;
			margin-top: 60px;
		}
		.title {					//页面标题
			margin-top: 100upx;
			text-align: center;
			font-size: 28px;
			font-weight: 500;
			margin-bottom: 100upx;
		}
		input {
			text-align: left;		//输入风格
			margin-bottom: 5rpx;
			padding-bottom: 6rpx;
		}
	}
</style>
