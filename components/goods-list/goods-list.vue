<template>
	<view class="goods-list">
		<view class="goods-item" v-for="item of goodsList" :key="item.id" @click="goGoodsDetail(item.id)">
			<image :src="item.img" mode=""></image>
			<view class="price">
				<text>¥{{item.price}}</text>
				<text>¥{{item.market_price}}</text>
			</view>
			<view class="goods-name">
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			goodsList:Array
		},
		methods:{
			goGoodsDetail(id){
				this.$emit('goGoodsDetail',id)
			}
		}
	}
</script>

<style lang="scss">
	.goods-list{
		padding: 0 15rpx;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.goods-item{
			background: #FFFFFF;
			width: 355rpx;
			margin: 10rpx 0;
			padding: 15rpx;
			box-sizing: border-box;
			image{
				width: 100%;
				height: 300rpx;
			}
			.price{
				color: $shop-color;
				font-size: 36rpx;
				font-weight: bold;
				margin: 15rpx 0;
				text:nth-child(2){
					text-decoration: line-through;
					color: #ccc;
					font-size: 32rpx;
					font-weight: normal;
					margin-left: 10rpx;
				}
			}
			.goods-name{
				font-size: 28rpx;
				line-height: 50rpx;
				overflow:hidden; 
				text-overflow:ellipsis;
				display:-webkit-box; 
				-webkit-box-orient:vertical;
				-webkit-line-clamp:2; 
				padding-bottom: 15rpx;
				padding-top: 10rpx;
			}
		}
	}
</style>
