<template>
    <view class="content">
		<swiperTabHead :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></swiperTabHead>
		<!-- <view class="uni-tab-bar">
			<swiper class="swiper-box"  :current="tabIndex" @change="tabChange">
				<swiper-item v-for="i in 3" :key="i">
					<scroll-view scroll-x class="list">
						<image src="../../static/takePhoto.png"></image>
					</scroll-view> 
				</swiper-item>
			</swiper>
		</view> -->
		<view class="uni-tab-bar">
			<swiper class="swiper-box"  :current="tabIndex" @change="tabChange">
				<swiper-item v-for="i in 3" :key="i">
					<scroll-view scroll-x="true" class="list">
						<image src="../../static/takePhoto.png"></image>
					</scroll-view> 
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import swiperTabHead from "../swipeTab/swipeTab.vue";
	
    export default {
		data(){
			return{
				tabIndex: 0,// 选中的
				tabBars: [
					{ name:"三庭测量",id:"0" },
					{ name:"脸部定位",id:"1" },
					{ name:"综合分析",id:"2" },
				],
				
				swiperheight:500,//高度
			}
		},
		
        methods:{
            //接受子组件传过来的值点击切换导航
			tabtap(index){
				this.tabIndex = index;
			},
			//滑动切换导航
			tabChange(e){
			   this.tabIndex = e.detail.current;
			},
			
			onLoad(){
				uni.getSystemInfo({
				    success:(res)=>{
				        let height = res.windowHeight-uni.upx2px(100)
				        this.swiperheight = height;
					}
				})
			}
        },
		
		//注册组件
		components:{
			 swiperTabHead,
		},
    }
</script>　

<style>
	.content{
		display: flex;
		flex-direction: column;
	}
</style>