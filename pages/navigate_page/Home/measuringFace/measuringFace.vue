<template>
	<view class="content">
		<!-- 背景图片 -->
		<image class="bg"></image>
		<image class="logo" :src="myHeadPhoto"></image>
		<!-- 提示语 -->
		<text class="tips">智能分析 识别中···</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				myHeadPhoto: "../../../../static/head_man2.png",
			}
		},
			
		computed: {		
			
		},
		
		components: {
			
		},
		
		methods: {
			onLoad(){				//创建页面时自动调用
				
			},
			onShow(){
				
			},
		},
	};
</script>

<style lang="scss" scoped>
	.content {					//父容器
		flex-direction: column;
		display: flex;
		align-items: center;
		align-content: center;
		width: 100%;
		height: 100%;
		
		//背景
		.bg{
			width: 100%;
			height: 100%;
			z-index: -1;
			position: fixed;
			background-image: url("../../../../static/bgMeasuring.png");
		}
		
		.logo {					//头像
			height: 72px;
			width: 72px;
			margin-top: 80px;
			margin-left: auto;
			margin-right: auto;
			margin-bottom: 50rpx;
			border-radius: 50%;
			-moz-box-shadow:0 0 3px 3px #06c;
			-webkit-box-shadow:0 0 3px 3px #06c;
			box-shadow:0 0 3px 3px #06c;
		}
		//提示文字
		.tips{
			margin-top: 30px;
			color: #ffffff;
			text-align: center;
			font-size: 14px;
			background-color: #55557f;
			border-radius: 5px;
		}
	}
</style>
