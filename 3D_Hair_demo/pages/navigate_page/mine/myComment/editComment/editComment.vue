<template>
	<view class="content">
		<view class="title">
			<text class="txttitle">编辑评论</text>
		</view>
		<text class="hintInfo">评论内容：</text>
		<view class="Title-Content">
			<!-- 将评论框设定为屏幕高度 -->
			<textarea class="textArea" :style="{height: screenHeight+'px'}" v-model="contentArea" maxlength="-1" placeholder="请输入评论内容" placeholder-style="font-size:12px;"></textarea>
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
				userName:'',		//用户名
				contentArea:'',		//文本域
				screenHeight:'',	//屏幕高度
				cmID:'',		//文章ID
			}
		},
		computed: {
			//按钮风格
			buttonStyle() {
				let style = {};
				style.color = "#fff";
				style.backgroundColor = this.$u.color['warning'];
				return style;
			},
		},
		methods: {
			onLoad(option){
				//this指针
				var _this=this;
				
				//获取文章ID
				_this.cmID=option.ID;
				
				//获取屏幕高度
				uni.getSystemInfo({
					success:(res)=> {
						_this.screenHeight=res.windowHeight-100;
					}
				})
				
				//请求评论文本
				uni.request({
					url:'/api/commentText/'+_this.cmID,
					method:"GET",
					data:{cmID:_this.cmID},
					success(e) {
						//显示评论文本
						_this.contentArea=e.data.data;
					}
				})
			},
			onShow(){
				
			},
			
			//提交文章
			submit(){
				//外层指针this
				let _this=this
				//判断输入状态
				if(_this.contentArea==""){
					_this.$u.toast("请输入评论内容再提交");
					return;
				}
				
				//提交确认
				uni.showModal({
					title: '确认修改',
					content: '确认要修改评论吗？',
					success: function (res) {
						if (res.confirm){
							//获取用户名缓存
							uni.getStorage({
								key:'userInfo',
								success(e){
									_this.userName=e.data.name;
								}
							})
							
							//发送请求
							uni.request({
								url:'/api/updateComment',
								method:'POST',
								//传送参数：用户名，评论内容，对应的文章ID
								data:{userName:_this.userName,cmText:_this.contentArea,cmID:_this.cmID}, 
								success: (res) => {
									if(res.data.data.status==true){
										_this.$u.toast("发布成功")
										uni.navigateBack({
											delta:1,//自动返回上一页
										})
									}
									else{
										_this.$u.toast("发布失败")
									}
								}
							});
						} else if (res.cancel) {
							_this.$u.toast('取消发布');
						}
					}
				});
			},
			//取消修改评论
			cancel(){
				uni.showModal({
					title: '确认取消',
					content: '确认要取消并退出编辑吗？',
					success: function (res) {
						if (res.confirm){
							//确认按钮
							uni.navigateBack({
								delta:1,
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
	//父容器
	.content {
		flex-direction: column;
		display: flex;
		align-items: center;
		align-content: center;
		width: 100%;
		height: 100%;
		
		//文本输入域
		.textArea{
			background-color: #f0f0f0;
			width: 100%;
			text-align: left;
			
			font-size:12px;
			margin-top: 10px;
			padding: 6px;
			border-radius: 8px;
			// height: 100%;
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
		//输入框父容器
		.Title-Content{
			width: 90%;
			height: 100%;
			flex-direction: row;
			display: flex;
		}
		//提示内容的字体设置
		.hintInfo{
			font-size: 14px;
			width: 70px;
			width: 90%;
			margin-top: 20px;
		}
	}
</style>
