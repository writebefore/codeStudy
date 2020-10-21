<!--
 * @Author: LHN
 * @Date: 2020-10-17 11:21:46
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-17 11:49:26
 * @description: In User Settings Edit
 * @FilePath: \helloworld\pages\index\index.vue
-->
<template>
	<view class="content">
		<image @tap="goTest" class="logo" src="/static/logo.png"></image>
		<logo/>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
import logo from '../../components/logo'
import {mapGetters} from 'vuex'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			goTest(){
				uni.navigation({
					url:'/pages/home/index.vue?id=1'
				})
			}
		},
		computed: {
			...mapGetters(['getA'])
		},
		components:{
			logo
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
