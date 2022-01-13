<template>
	<view class="content">
		<view class="title">
			<text class="txttitle">上传图片</text>
		</view>
		<image class="logo" @click="changeImage" :src="srcImage"></image>
		<view class="buttonSet">
			<u-button @click="submit" :style="[buttonStyle]" class="button-LogCancel">上传</u-button>
			<u-button @click="cancel" :style="[buttonStyle]" class="button-LogCancel">首页</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName:'',
				userPohto:'',
				srcImage:'',
				myHeadPhoto:'',
			}
		},
		computed: {
			buttonStyle() {
				let style = {};
				style.color = "#fff";
				style.backgroundColor = this.$u.color['warning'];
				return style;
			},
		},
		methods: {
			onLoad(){
				var _this=this;
				uni.getStorage({
					key:"headPhotoLink",
					success(e){
						//有缓存头像
						if(e.data.Photolink!=""){
							_this.srcImage=e.data.Photolink;
						}
						//头像加载失败
						else{
							_this.srcImage="/static/mine1.png"
						}
					},
					fail(e){
						_this.srcImage="/static/mine1.png"
					}
				});
			},
			onShow(){
				
			},
			
			//选择头像
			changeImage(){
				var _this = this;
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success:(res)=> {
						_this.myHeadPhoto=res.tempFilePaths[0];
						_this.srcImage=res.tempFilePaths[0];
				    }
				});
			},
			
			//提交头像
			submit(){
				//外层指针this
				let _this=this
				
				//先判断是否选择了图片
				if(_this.myHeadPhoto==""){
					_this.$u.toast("请选择图片后再点击上传");
					return;
				}
				
				//上传头像
				uni.showModal({
					title: '确认设置',
					content: '确认要上传图片吗？',
					success: function (res) {
						if (res.confirm) {
							
							//确认按钮
							uni.uploadFile({				//将本地资源上传到开发者服务器
								url:'/api/updatePhoto', 	//接口地址
								// url:'http://192.168.1.103:8000/api/updatePhoto',
								filePath: _this.myHeadPhoto,//图片地址
								fileType:"image",
								name: 'file',
								formData:{
									// userName:_this.userName//加入token
								},
								// header:{
								// 	"Content-Type": "multipart/form-data",
								// },
								success: (uploadFileRes) => {
									let data = JSON.parse(uploadFileRes.data)
									if(data.data.status == true){
										_this.srcImage=data.data.Photopath;
										_this.$u.toast("图片上传成功");
										//缓存图片链接
										uni.setStorage({
											key:"headPhotoLink",
											data:{Photolink:_this.srcImage}
										})
									}
									else{
										_this.$u.toast("头像上传失败");
									}
								}
							});
						} else if (res.cancel) {
							_this.$u.toast('取消上传');
						}
					}
				});
			},
			//取消更改头像
			cancel(){
				uni.switchTab({
					url:'../myHome/myHome'
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
			height: 100px;
			width: 100px;
			margin-top: 100rpx;
			margin-left: auto;
			margin-right: auto;
			margin-bottom: 50rpx;
			border-radius: 5px;
			-moz-box-shadow:0 0 10px 10px #06c;
			-webkit-box-shadow:0 0 10px 10px #06c;
			box-shadow:0 0 10px 10px #06c;
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
	}
</style>
