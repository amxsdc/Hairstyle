<template>
	<view class="content">
		<view class="item-wrap" v-for="i in 10">
			<view class="item" @click="clickContent(i)">
				<view class="icon-wrap">
					<image class="arrow-icon" src="../../../../static/bank4.png"></image>
				</view>
				<text class="item-text">{{content[i-1]}}</text>
				<view class="icon-wrap">
					<image v-if="i==2" class="head-photo" src="../../../../static/head_man1.png"></image>
					<image class="arrow-icon" src="../../../../static/arrow.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				content: ['昵称','头像','号码','邮箱','星座','收藏','权限','生日','ID','设置',]
			}
		},
		
		methods:{
			clickContent(index){
				this.$u.toast("点击了"+this.content[index-1])
			}
		}
	} 
</script>

<style>
	//item
	.item-wrap{
		width: 100%;
		height: 40px;
		border-style: groove;
	}
	.item{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.item-text{
		font-size: 16px;
		text-align: left;
		flex: 4;
		padding-left: 5rpx;
	}
	.icon-wrap{
		flex: 1;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.arrow-icon{
		width: 24px;
		height: 24px;
	}
	//头像
	.head-photo{
		width: 24px;
		height: 24px;
		border-radius: 10%;
		border-style: groove;
	}
</style>