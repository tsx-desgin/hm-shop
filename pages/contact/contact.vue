<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg" mode=""></image>
		<view class="info">
			<view @click="phone">联系电话: 17358829937 (点击拨打)</view>
			<view>联系地址: 湖南省长沙市天心区芙蓉中路三段266号弘林大厦1003房</view>
		</view>
		<map class="map" :longitude="longitude" :scale="scale" :latitude="latitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:112.991724,
				latitude:28.171161,
				scale:12,
				"enable-3D":true,
				"show-compass":true,
				markers:[
					{
						longitude:112.991724,
						latitude:28.171161,
						iconPath:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592307898942&di=e28c73db93159c47dc0164f920ecf8d6&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F57%2F93%2F24%2F58face867aabf.png',
						width:30,
						height:30
					}
				]
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber:'17358829937',
				})
			}
		}
	}
</script>

<style lang="scss">
	.img{
		width: 750rpx;
		height: 320rpx;
	}
	.info{
		padding: 10rpx 20rpx;
		box-sizing: border-box;
		font-size: 30rpx;
		view{
			line-height: 50rpx;
			border-bottom: 1px solid #eee;
		}
	}
	.map{
		width: 750rpx;
		height: 100vw;
	}
</style>
