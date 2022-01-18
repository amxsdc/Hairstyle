<template>
	<view class="content">
		<model-stl class="stl" src="../../static/1.stl"></model-stl>
	</view>
</template>

<script>
	import { ModelStl } from './vue-3d-model';
	
	export default {
		components: { 
			ModelStl,
		}
	}
</script>

<style>
	.stl{
		width: 100%;
		height: 100%;
	}
</style>