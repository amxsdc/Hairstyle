<template>
	<view class="content">
		<view class="title">
			<text class="txttitle">更改密码</text>
		</view>
		<view class="vessel">
			<view class="inputcomponent">
				<view class="inputinfo">
					<text class="hintinfo">原密码：</text>
					<view class="downPull">
						<input class="userinfo" type="password" v-model="oldpassword"  placeholder="请输入原密码" />
					</view>
				</view>
			</view>
			<view class="inputcomponent">
				<view class="inputinfo">
					<text class="hintinfo">新密码：</text>
					<view class="downPull">
						<input class="userinfo" type="password" v-model="newpassword" placeholder="请输入新密码" />
					</view>
				</view>
			</view>
			<view class="inputcomponent">
				<view class="inputinfo">
					<text class="hintinfo">确认密码：</text>
					<view class="downPull">
						<input class="userinfo" type="password" v-model="repeatpassword"  placeholder="请再次输入" />
					</view>
				</view>
			</view>
			<view class="button-set">
				<u-button class="submit-cancel" @click="submitinfo">提交</u-button>
				<u-button class="submit-cancel" @click="cancelinfo">取消</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName:'',
				oldpassword:'',
				newpassword:'',
				repeatpassword:'',
			}
		},
		methods: {
			onLoad(){
				
			},
			
			//提交信息
			submitinfo(){
				//this指针变量
				let _this=this
				
				//判断是否有不合法输入
				if(_this.oldpassword=="" || _this.newpassword=="" || _this.repearpassword==""){
					_this.$u.toast("未填写信息，提交无效")
					return
				}
				//检测两次此乃密码确认是否正确
				if(_this.repeatpassword != _this.newpassword){
					_this.$u.toast("您两次输入的密码不匹配")
					return
				}
				
				//弹窗
				uni.showModal({
					title: '确认提交？',
					content: '确认信息无误并提交设置？',
					success: function (res) {
						if (res.confirm) {
							uni.getStorage({
								key:"userInfo",
								success(e){
									_this.userName=e.data.name
								}
							})
							uni.request({
								url:'/api/updatePassword',
								method:'POST',
								data:{userName:_this.userName,oldPassword:_this.oldpassword,newPassword:_this.newpassword},
								success(e) {
									uni.setStorage({
										key:'userInfo',
										data:{name:_this.userName,password:"",ischecked:false}
									})
									uni.redirectTo({
										url:'../../../../login_regist/login/login'
									})
								},
								fail(e) {
									console.log("设置失败")
								}
							});
						} else if (res.cancel) {
							console.log('取消设置');
						}
					}
				});
			},
			//取消改密则返回上一页
			cancelinfo(){
				uni.navigateBack({
					delta:1,
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #f0f0f0;
	}
	.content{
		width: 100%;
		flex-direction: column;
		display: flex;
		align-items: center;
		}
		.pull{
			
		}
		//按钮
		.button-set{
			width: 100%;
			flex-direction: row;
			display: flex;
			align-items: center;
		}
		//标题
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
		
		//信息容器框
		.vessel{
			background-color: #ffffff;
			width: 80%;
			height: 100%;
			margin-top: 10px;
			padding-left: 10px;
			border-radius: 10px;
			}
			
			//输入
			.inputinfo {
				width: 80%;
				flex-direction: row;
				display: flex;
				}
				.hintinfo{
					width: 40%;
					margin-top: 20px;
					font-size: 12px;
				}
				.userinfo{
					width: 80%;
					background-color: #FFFFFF;
					border-radius: 3px;
					margin-top: 20px;
					font-size: 12px;
					-moz-box-shadow: inset 0 0 10px #CCC;
					-webkit-box-shadow: inset 0 0 10px #CCC;
					box-shadow: inset 0 0 10px #CCC;
				}
				.inputcomponent{
					width: 100%;
					flex-direction: row;
					display:flex;
				}
				.submit-cancel{
					width: 30%;
					height: 35px;
					font-size:14px;
					margin-top: 60px;
					background-color: #ffaa00;
				}
			input {
				text-align: left;
				margin-bottom: 5rpx;
				padding-bottom: 6rpx;
			}
</style>
