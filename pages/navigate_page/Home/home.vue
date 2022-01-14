<template>
    <view>
		<view class="swiperContent">
			<view class="page-section-spacing">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item>
						<image class="swiper-item" @click="selectPoster" src="../../../static/hairPost.png"></image>
					</swiper-item>
					<swiper-item>
						<image class="swiper-item" @click="selectPoster" src="../../../static/effect.png"></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
		
		
		<!-- API按钮接口 -->
		<view class="APIset">
			<view class="APIRow">
				<view v-for="i in [0,1,2,3]" :key='i' class="temp-wrap">
					<view class="button-icon-temp">
						<view class="button-icon" @click="clickAPI(i)">
							<image class="button" :src="icon[i]"></image>
							<text class="APIname">{{APIname[i]}}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="APIRow">
				<view v-for="j in [4,5,6,7]" :key='j' class="temp-wrap">
					<view class="button-icon-temp">
						<view class="button-icon" @click="clickAPI(j)">
							<image class="button" :src="icon[j]"></image>
							<text class="APIname">{{APIname[j]}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view v-for="i in 10" :key="i" style="display: flex; flex-direction: row; margin-top:10px;">
			<view class="recommand">
				<image class="recommand_img" @click="clickPost" :src="recommandHair[(i)%4]"></image>
				<view class="tips-date">
					<text class="userCount">120人使用</text>
					<text class="clickTry" @click="clickTry">点击试戴</text>				
				</view>
			</view>
			<view class="recommand">
				<image class="recommand_img" @click="clickPost" :src="recommandHair[(i+2)%4]"></image>
				<view class="tips-date">
					<text class="userCount">12人使用</text>
					<text class="clickTry" @click="clickTry">点击试戴</text>				
				</view>
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
				icon: ['../../../static/schedule1.png', '../../../static/newsAPI.png', '../../../static/map.png',
					'../../../static/memory.png','../../../static/english.png','../../../static/settingsAPI.png'
					,'../../../static/schedule1.png','../../../static/settingsAPI.png'],
				APIname:['发型设计','测脸型','换发型','换刘海','图库','贴纸','配饰','漫画脸'],
				
				//banner
				indicatorDots: true,
				autoplay: true,
				interval: 5000,
				duration: 500,
				
				//图片
				recommandHair:["../../../static/recommand1.png","../../../static/recommand2.png",
						"../../../static/head_man1.png","../../../static/head_man2.png"]
			}
		},
		//导航栏按钮点击事件
		onNavigationBarButtonTap(button) {
			uni.showToast({
				title:button.text=="预约"?"点击预约":"点击退出",
				icon:"none"
			})
			if(button.text="退出"){
				uni.redirectTo({
					url:"../../login_regist/login/login",
				})
			}
		},
		methods: {
			//轮播图点击事件
			selectPoster(){
				uni.showToast({
					title:"点击广告页",
					icon:"none"
				})
			},
			//API按钮点击事件
			clickAPI(func){
				var _this=this;
				_this.$u.toast("点击功能"+(_this.APIname[func]));
				return;	//先直接杀掉函数，后期改
				
				switch(func){
					case 0:
						// return;
						uni.switchTab({
							url:"../TakePicture/takePicture",
						});
						break;
					case 1:
						_this.$u.toast("点击功能"+(func+1));
						// return;
						uni.navigateTo({
							url:'measuringFace/measuringFace',
						});
						break;
					case 2:
						_this.$u.toast("点击功能"+(func+1));
						return;
						uni.navigateTo({
							url:'map/map',
						});
						break;
					case 3:
						_this.$u.toast("点击功能"+(func+1));
						return;
						uni.navigateTo({
							url:'memorandum/memorandum',
						});
						break;
					case 4:
						_this.$u.toast("点击功能"+(func+1));
						return;
						uni.navigateTo({
							url:'englishLearn/englishLearn',
						});
						break;
					case 5:
						_this.$u.toast("点击功能"+(func+1));
						return;
						uni.switchTab({
							url:'../settings/settings',
						});
						break;
				}
				
			},
			//点击推荐
			clickPost(){
				this.$u.toast("点击了推荐")
			},
			clickTry(){
				this.$u.toast("点击了试戴")
			}
		}
	}
</script>

<style>
	//banner
	.swiperContent{
		background-color: #f3f2f0;
		padding-bottom: 10px;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.page-section-spacing{	//不能直接对swiper的父亲组件进行对齐方式更改,会出错
		width: 80%;
		margin-top: 10px;
	}
	.swiper-item{
		background-color: #fff1cd;
		border-radius: 5px;
		width: 100%;
		height: 100%;
		text-align: center;
	}
	
	/* 推荐 */
	.recommand{
		width: 50%;
		margin: 10rpx;
		height: 200px;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		box-shadow: 0px 0px 0px 2px #f0f0f0;
	}
	
	.schedule-today{
		flex-direction: 1;
		width: 20px;
		height: 20px;
	}
	.tips-date{
		font-size: 14px;
		display: flex;
		flex-direction: row;
		padding-left: 10px;
		padding-top: 3px;
	}
	.clickTry{
		flex: 1;
		text-align: right;
		padding-right: 10px;
		border-radius: 5px;
		background-color: #ffaaff;
	}
	.userCount{
		flex: 1;
	}
	.recommand_img{
		width: 100%;
		height: 90%;
		border-radius: 10px;
	}
	
	/* API按钮 */
	.APIset{
		margin-top: 70rpx;
		/* height: 200rpx; //因为我需要控件自适应，所以就不固定高度了，空间大小通过子控件的css来设定*/
		box-shadow: 0px 0px 0px 2px #f0fff2;
	}
	.APIRow{
		height: 100rpx;
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
