<template>
	<view class="content">
		<text class="count">{{now}}/{{count}}</text>
		<image class="logo" :src="sourcePhoto"></image>
		<text class="detailText">{{detailText}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				now: "1",
				count: "5",
				sourcePhoto: "../../../../../static/kid.png",
				detailText: "这是测试文本文本文本笨笨哦不呢吧\nfefdedewedw"
			}
		},
		methods: {
			
		}
	}
</script>
	
<style>
	.content{
		width: 100%;
		height: 1000px;
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;
		background-color: #000000;
	}
	
	//计数
	.count{
		font-size: 16px;
		color: #FFFFFF;
		right: 10px;
		position: fixed;
		top: 10px;
	}
	
	.logo {					//头像
		height: 30%;
		width: 95%;
		margin-top: 100px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
		border-radius: 5%;
		-moz-box-shadow:0 0 3px 3px #06c;
		-webkit-box-shadow:0 0 3px 3px #06c;
		box-shadow:0 0 3px 3px #06c;
		border-style: groove;//凹槽
	}
	.detailText{
		width: 95%;
		color: #FFFFFF;
		font-size: 15px;
		/* border-style: groove; */
	}
</style>
