<template>
	<view>
		<view class="new-item" v-for="item of newsList" :key="item.id" @click="goDetail(item.id)">
			<image :src="item.img" mode=""></image>
			<view class="desc">
				<view class="name">
					{{item.name}}
				</view>
				<view class="info">
					<text>¥{{item.price}}</text>
					<text>销量:{{item.sale_num}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			newsList:Array
		},
		methods:{
			goDetail(id){
				this.$emit('goDetail',id)
			}
		}
	}
</script>

<style lang="scss">
	.new-item{
		display: flex;
		padding: 10rpx;
		box-sizing: border-box;
		border-bottom: 1px solid $shop-color;
		image{
			width: 200rpx;
			height: 150rpx;
		}
		.desc{
			width: 0;
			flex: 1;
			margin-left: 10rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
		}
		.name{
			font-size: 30rpx;
			overflow:hidden; 
			text-overflow:ellipsis;
			display:-webkit-box; 
			-webkit-box-orient:vertical;
			-webkit-line-clamp:2; 
		}
		.info{
			width: 100%;
			display: flex;
			font-size: 24rpx;
			text:nth-child(2){
				margin-left: 30rpx;
			}
		}
	}
</style>
