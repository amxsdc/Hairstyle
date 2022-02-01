<template>
    <view class="content">
		<!-- 背景图片 -->
		<!-- <image class="bgimg"></image> -->
		
		<!-- 右上角按钮 -->
		<view class="statusBar">
			<view class="myInfo-wrap">
				<view class="info-wrap">
					<image class="drawer-head-menu" @click="myInfo(1)" src="../../../static/myInfo.png" mode="scaleToFill" />
					<image class="drawer-head-menu" @click="myInfo(2)" src="../../../static/add.png" mode="scaleToFill" />
				</view>
			</view>
		</view>
		
		<view class="bgContent">
			<view class="myPhoto">
				<image class="header-photo" @click="changeH_N(1)" mode="aspectFit" src="../../../static/header-cabbit.png"></image>
				<view class="userName" @click="changeH_N(2)">
					<text class="userText">昵称：兔子1号</text>
					<text class="userText">I D：123456</text>
				</view>
			</view>
			<image class="bgPhoto" @click="changeBgImage" mode="bottom" src="../../../static/bg_2.png"></image>
		</view>
		<view class="APIset">
			<view class="APIRow">
				<view v-for="i in [0,1]" :key='i' class="temp-wrap">
					<view class="button-icon-temp">
						<view class="button-icon" @click="clickAPI(i)">
							<image class="button" :src="icon[i]"></image>
							<text class="APIname">{{APIname[i]}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 注意事项等 -->
		<view class="appDetail">
			<view class="detailButton" v-for="i in [0,1,2,3,4]" :key="i" @click="clickDetail(i)">
				<image class="buttonIcon" :src="buttonIcon[i]"></image>
				<text class="buttonText">{{detailButton[i]}}</text>
			</view>
		</view>
		
		<!-- 版权 -->
		<view class="copyright">
			<text>@Copyright Of 3D小组</text>
		</view>
    </view>
</template>

<script>
	export default {
		data() {
			return {
				icon: ['../../../static/add.png', '../../../static/personal.png'],
				APIname:['修改资料','修改密码'],
				
				//细节按钮
				buttonIcon:['../../../static/myData.png','../../../static/introduction.png','../../../static/system.png',
					'../../../static/introduction.png','../../../static/system.png'],
				detailButton:['我的资料','分享应用','关于我们','版本信息','我的客服'],
			}
		},
		//导航栏按钮点击事件
		onNavigationBarButtonTap(button) {
			uni.showToast({
				title:button.text=="主页"?"点击主页":"点击退出",
				icon:"none"
			})
		},
		methods: {
			//我的右侧按钮
			myInfo(type){
				if(type==1){
					this.$u.toast("点击了右侧状态按钮");
				}
				else if(type==2){
					this.$u.toast("点击了右侧预约按钮");
				}
			},
			//更换头像或昵称
			changeH_N(index){
				uni.showToast({
					title:index==1?"修改头像":"修改昵称",
					icon:"none"
				})
			},
			//更换背景图
			changeBgImage(){
				uni.showToast({
					title:"更换背景图",
					icon:"none"
				})
			},
			//点击API
			clickAPI(i){
				this.$u.toast("点击了"+this.APIname[i]);
				if(i==0){
					uni.navigateTo({
						url:'',
					});
					return;
				}
				else{
					uni.navigateTo({
						url:'',
					});
					return;
				}
			},
			//点击细节按钮
			clickDetail(index){
				this.$u.toast("点击了"+this.detailButton[index]);
				if(index==0){
					uni.navigateTo({
						url:'./myData/myData',
					});
					return;
				}
				else if(index==1){
					uni.navigateTo({
						url:'',
					});
					return;
				}
				else{
					uni.navigateTo({
						url:'',
					});
					return;
				}
			},
		}
	}
</script>

<style>
	/* 背景图片 */
	/* .bgimg{ */
		/* background-image: url("../../../static/bgSky.png"); */
		/* z-index: -1; */
		/* position: fixed; */
	/* } */
	
	//状态栏
	.statusBar{
		/* width: 100%;
		height: 70px;
		position: fixed;
		top: 0;
		background-color: #ffffff;
		z-index: 998; */
	}
	//右上角按钮
	.myInfo-wrap{
		display: inline-block;
		position: absolute;
		top: 70rpx;
		right: 10rpx;
		z-index: 999;
	}
	.info-wrap{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.drawer-head-menu{
		/* display: inline-block;
		position: fixed; */
		border-radius: 50%;
		/* top: 6px;
		left: 10px; *//* 
		z-index: 999; */ 
		margin-right: 3px;
		width:64rpx;
		height: 64rpx;
	}
	
	.bgContent{
		background-color: #f3f2f0;
		display: flex;
		height: 175px;
		/* overflow: hidden; */
		flex-direction: row;
		justify-content: center;
		border-radius: 0px;
	}
	.myPhoto{
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		margin-bottom: 5px;
	}
	.bgPhoto{
		width: 100%;
		/* filter: blur(5rpx) brightness(70%);//模糊半径和变暗度 */
	}
	.header-photo{
		margin-left: 20px;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		position: absolute;
		z-index: 2;
		box-shadow: 0px 0px 2px 2px #0000ff;
	}
	.userName{
		position: absolute;
		z-index: 2;
		color: #FFFFFF;
		font-size: 16px;
		margin-left: 80px;
		display: flex;
		flex-direction: column;
	}
	.userText{
		font-size: 14px;
		margin-top: 5px;
	}
	
	/* API按钮 */
	.APIset{
		margin-top: 70rpx;
		/* height: 200rpx; //因为我需要控件自适应，所以就不固定高度了，空间大小通过子控件的css来设定*/
		box-shadow: 0px 0px 0px 2px #f0fff2;
	}
	.APIRow{
		height: 120rpx;
		/* flex: 1; */
		margin-top: 20px;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.temp-wrap{
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.button-icon-temp{
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.button-icon{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.button{
		width: 32px;
		height: 32px;
	}
	.APIname{
		font-size: 14px;
		font-weight: bold;
	}
	
	/* detail按钮 */
	.appDetail{
		font-size: 16px;
		margin-top: 20px;
	}
	.buttonIcon{
		width: 20px;
		height: 20px;
	}
	.buttonText{
		margin-left: 10px;
	}
	.detailButton{
		box-shadow: 0px 0px 0px 2px #fffced;
		margin-top: 10px;
		padding-left: 10px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	/* 版权 */
	.copyright{
		font-size: .7em;
		color: #999791;
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 15px;
	}
</style>
