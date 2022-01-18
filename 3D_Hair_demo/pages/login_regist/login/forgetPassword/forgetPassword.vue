<template>
	<view class="content">
		<view class="title">忘记密码</view>
		<view class="inputcomponent">
			<text class="hintinfo">用户名：</text>
			<input class="userinfo" type="text" v-model="userName"  placeholder="请输入用户名" />
		</view>
		<view class="inputcomponent">
			<text class="hintinfo">邮 箱：</text>
			<input class="userinfo" type="text" v-model="userEmail" placeholder="请输入邮箱" />
		</view>
		<view class="inputcomponent">
			<text class="hintinfo">新密码：</text>
			<input class="userinfo" type="password" v-model="newpassword" placeholder="请输入新密码" />
		</view>
		<view class="inputcomponent">
			<text class="hintinfo">确认密码：</text>
			<input class="userinfo" type="password" v-model="repeatNewPassword"  placeholder="请再次输入" />
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
		.buttonSet{				//按钮
			flex-direction: row;
			display: flex;
		}
		.inputcomponent {		//输入框设置
			width: 50%;
			flex-direction: row;
			display: flex;
			.hintinfo{
				width: 50%;
				margin-top: 20px;
				font-size: 12px;
			}
			.userinfo{			//输入提示
				width: 60%;
				background-color: #FFFFFF;
				border-radius: 3px;
				margin-top: 20px;
				font-size: 12px;
				-moz-box-shadow: inset 0 0 10px #CCC;//阴影
				-webkit-box-shadow: inset 0 0 10px #CCC;
				box-shadow: inset 0 0 10px #CCC;
			}
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
