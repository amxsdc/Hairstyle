<template>
	<view class="content">
		<image src="../../static/logo.png" @click="uploadImg" mode=""></image>
		<image v-for="(item,index) in imgArr" :src="item">
			
		</image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgArr:[]
			}
		},
		onLoad() {

		},
		methods: {
			uploadImg(){
				let that = this
				uni.chooseImage({
					success(res) {
						console.log(res.tempFilePaths)
						that.imgArr = res.tempFilePaths;
						console.log(that.imgArr)
						}
				})
			}
		}
	}
</script>
