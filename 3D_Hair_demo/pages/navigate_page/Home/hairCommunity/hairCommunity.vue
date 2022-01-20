<template>
	<view class="content">
		<!-- 滑动窗口界面 -->
		<view class="slideWin">
			<swiperTabHead class="Tag" :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></swiperTabHead>
			<view class="tab-bar">
				<swiper class="swiper-box"  :current="tabIndex" @change="tabChange">
					<swiper-item v-for="i in [0,1,2,3,4]" :key="i" class="temp">
						<scroll-view scroll-y="true" class="list">
							<!-- <image src="../../../../static/takePhoto.png"></image> -->
							<view v-for="i in 10" :key="i" style="display: flex; flex-direction: row; margin-top:10px;">
								<view class="recommand">
									<image class="recommand_img" @click="clickPost" :src="recommandHair[(i)%4]"></image>
									<view class="tips-date">
										<text class="userCount">120人使用</text>
										<text class="clickTry" @click="clickTry">收藏发型</text>				
									</view>
									<text class="hairTypeIntroduction" @click="clickPost">此发型是怎样怎样怎眼的测试文本测试文本测试文本</text>
								</view>
								<view class="recommand">
									<image class="recommand_img" @click="clickPost" :src="recommandHair[(i+2)%4]"></image>
									<view class="tips-date">
										<text class="userCount">12人使用</text>
										<text class="clickTry" @click="clickTry">收藏发型</text>				
									</view>
									<text class="hairTypeIntroduction" @click="clickPost">此发型是怎样怎样怎眼的测试文本测试文本测试文本</text>
								</view>
							</view>
						</scroll-view> 
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	//导入自定义组件--滑动窗口
	import swiperTabHead from "../../../swipeTab/swipeTab_changeHair.vue";
	
	export default {
		data() {
			return {
				//滑动界面的参数
				tabIndex: 0,// 选中的
				tabBars: [
					{ name:"女生",id:"0" },
					{ name:"男生",id:"1" },
					{ name:"发色",id:"2" },
					{ name:"儿童",id:"3" },
					{ name:"寸头",id:"4" },
				],
				
				//图片
				recommandHair:["../../../../static/kid.png","../../../../static/kid.png",
						"../../../../static/head_man1.png","../../../../static/head_man2.png"]
			}
		},
		methods: {
			//接受子组件传过来的值点击切换导航
			tabtap(index){
				this.tabIndex = index;
			},
			//滑动切换导航
			tabChange(e){
			   this.tabIndex = e.detail.current;
			},
			
			//点击推荐
			clickPost(){
				this.$u.toast("点击了详情")
				uni.navigateTo({
					url: "hairDetail/hairDetail"
				})
			},
			clickTry(){
				this.$u.toast("点击了收藏")
			}
		},
		
		//组件
		components:{
			swiperTabHead,
		}
	}
</script>

<style>
	.content{
		width: 100%;
		height: 100%;
	}
	//滑动页
	.slideWin{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
	.tab-bar{
		width: 100%;
		height: 800px;
	}
	.swiper-box{
		/* height: 400px; */
		height: 100%;
	}
	
	.temp{
		height: 100%;
	}
	.list{
		width: 100%;
		// height: 80px;
		height: 100%;
	}
	.Tag{
		margin-top: 20upx;
		width: 100%;
		height: 100%;
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
		display: flex;
		align-items: center;
		justify-content: center;
		padding-right: 10px;
		border-radius: 5px;
		background-color: #ff5500;
	}
	.userCount{
		flex: 1;
		font-size: 12px;
	}
	.recommand_img{
		width: 100%;
		height: 90%;
		border-radius: 10px;
	}
	
	//推荐语
	.hairTypeIntroduction{
		color: #000000;
		margin: 5px;
		border-style: groove;
		border-radius: 3px;
		overflow: hidden;
	}
</style>
