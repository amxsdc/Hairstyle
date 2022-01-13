<template>
	<view class="content">
		<view class="button-set">
			<u-button class="button-mine" @click="myComment">
				<image class="icon" src="/static/setting.png"></image>
				发送请求
			</u-button>
			<u-button class="button-mine" @click="mytext">
				<image class="icon" src="/static/setting.png"></image>
				我的详情
			</u-button>
			<u-button class="button-mine" @click="mySettings">
				<image class="icon" src="/static/setting.png"></image>
				上传图片
			</u-button>
			<u-button class="button-manager" type="warning" @click="userManage" v-show="isShow">
				<image class="icon" src="/static/setting.png"></image>
				用户管理
			</u-button>
			<view class="Title-Content">
				<textarea class="textArea" v-model="contentArea" maxlength="-1" placeholder="发送请求返回内容" placeholder-style="font-size:12px;"></textarea>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow:false,
				userName:'',
				contentArea:'',
			}
		},
		methods: {
			//导航栏按钮
			onNavigationBarButtonTap(e){
				if(e.text=="退出"){			//退出登录
					uni.showModal({
						title: '确认删除',
						content: '确认要退出登录吗？',
						success: function (res) {
							if (res.confirm) {
								uni.redirectTo({
									url:'../myApp',
								})
							}
							else{
								//取消则关闭弹窗，不做处理
							}
						},
					});
				}
				//点击发布文章按钮则页面跳转
				else{
					uni.switchTab({
						url:'../mine/mine',
					})
				}
			},
			
			onShow(){
				let _this=this;
				
				//发送请求
				// uni.request({
				// 	url:'/api/mySetting',
				// 	method:"POST",
				// 	data:{userName:_this.userName},
				// 	success:(res)=>{
				// 		if(res.data.data.admin=="1"){
				// 			_this.isShow=true;
				// 		}
				// 		else{
				// 			_this.isShow=false;
				// 		}
				// 	}
				// })
			},
			
			//我的评论按钮
			myComment(){
				var _this=this;
				this.$u.toast("点击了按钮并发送请求");
				//发送请求
				uni.request({
					url:'/api/sendRequest',
					// url:'http://192.168.1.103:8000/api/sendRequest',
					method:"GET",
					data:{},
					success:(res)=>{
						// console.log(res)
						_this.contentArea=res.data.message
					}
				})
				// uni.navigateTo({
				// 	url:'myComment/myComment'
				// })
			},
			
			//语音设置按钮
			mytext(){
				this.$u.toast("点击了按钮");
				uni.switchTab({
					url:'../myDetail/myDetail'
				})
				// uni.getLocation({
				// 	type:'wgs84',
				// 	// geocode:true,
				// 	success(res) {
				// 		console.log("经度："+res.longitude);
				// 		console.log("纬度："+res.latitude);
				// 		// console.log("地址："+res.address);
				// 	}
				// })
			},
			
			//我的设置按钮
			uploadPhoto(){
				// this.$u.toast("点击了按钮");
				uni.switchTab({
					url:'../mine/mine'
				})
			},
			
			//用户管理按钮
			userManage(){
				this.$u.toast("点击了按钮");
				// uni.navigateTo({
				// 	url:'userManage/userManage'
				// })
			}
		}
	}
</script>

<style>
	//父容器
	.content{
		width: 100%;
		flex-direction: column;
		display: flex;
		align-items: center;
	}
	
	//按钮集合
	.button-set{
		width: 80%;
		margin-top: 5px;
	}
	.button-mine{
		width: 100%;
		font-size:16px;
		color: #000000;
		margin-top: 4px;
		height: 30px;
		background-color: #aaffff;
	}
	//管理员特有按钮
	.button-manager{
		width: 100%;
		font-size:16px;
		color: #000000;
		margin-top: 4px;
		height: 30px;
	}
	
	//图标
	.icon{
		width: 20px;
		height: 20px;
		margin-right: 20px;
		border-radius: 3px;
		-moz-box-shadow:0 0 1px 1px #06c;
		-webkit-box-shadow:0 0 1px 1px #06c;
		box-shadow:0 0 1px 1px #06c;
	}
	//文本输入域
	.textArea{
		background-color: #f0f0f0;
		width: 100%;
		text-align: left;
		font-size:12px;
		margin-top: 10px;
		padding: 6px;
		border-radius: 8px;
		-moz-box-shadow: inset 0 0 10px #CCC;
		-webkit-box-shadow: inset 0 0 10px #CCC;
		box-shadow: inset 0 0 10px #CCC;
		height: 80px;
	}
	//输入框父容器
	.Title-Content{
		width: 100%;
		height: 100%;
		flex-direction: row;
		display: flex;
	}
</style>
