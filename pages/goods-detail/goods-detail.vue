<template>
	<view class="goods-detail">
		<swiper :indicator-dots="true" :autoplay="true" :circular="true" :interval="3000" :duration="1000" class="swiper">
			<swiper-item v-for="(item,index) of swiperList" :key="index" class="swiper-item">
				<image :src="item" mode=""></image>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>¥{{goods.goods_price}}</text>
				<text>¥{{goods.market_price}}</text>
			</view>
			<view class="goods-name">
				{{goods.goods_name}}
			</view>
		</view>
		<view class="box2">
			<view>销量: {{goods.sale_num}}件</view>
			<view>库存: {{goods.stock}}件</view>
		</view>
		<view class="box3">
			<text class="title">---详情介绍---</text>
			<view class="goods-img" v-for="(item,index) of content" :key="index">
				<image :src="item" mode=""></image>
			</view>
		</view>
		<view class="goods-nav">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		components:{
			uniGoodsNav
		},
		data() {
			return {
				id:0,
				swiperList:[],
				content:[],
				goods:[],
				options: [
					    {
				            icon: 'headphones',
				            text: '客服'
				        }, {
				            icon: 'shop',
				            text: '店铺',
				            infoBackgroundColor:'#007aff',
				            infoColor:"red"
				        }, {
				            icon: 'cart',
				            text: '购物车',
				        }],
				        buttonGroup: [{
				          text: '加入购物车',
				          backgroundColor: '#ff0000',
				          color: '#fff'
				        },
				        {
				          text: '立即购买',
				          backgroundColor: '#ffa200',
				          color: '#fff'
				        },
				]
			}
		},
		onLoad(options) {
			this.id = parseInt(options.id||0)
			this.getGoods()
		},
		methods: {
			async getGoods(){
				const res = await this.$myRuquest({
					url:'api/goods?goods_id='+this.id
				}).then(res=>res.data.data)
				this.swiperList = res.gallery
				this.content = res.goods.content
				this.goods=res.goods
				console.log(res)
			},
			 onClick (e) {
			        uni.showToast({
			          title: `点击${e.content.text}`,
			          icon: 'none'
			        })
			      },
			buttonClick (e) {
			    console.log(e)
			    this.options[2].info++
			}
		}
	}
</script>

<style lang="scss">
	.goods-detail{
		background: #ccc;
		swiper{
			width: 100%;
			height: 100vw;
			image{
			  width: 100%;
			  height: 100%;
			}
		}
		.box1{
			padding: 10rpx;
			box-sizing: border-box;
			background: #fff;
			.price{
				font-size: 35rpx;
				color: $shop-color;
				font-weight: bold;
				text:nth-child(2){
					color: #ccc;
					font-weight: normal;
					text-decoration: line-through;
					margin-left: 20rpx;
					font-size: 30rpx;
					line-height: 80rpx;
				}
			}
			.goods-name{
				font-size: 32rpx;
				line-height: 60rpx;
				overflow:hidden;
				text-overflow:ellipsis;
				display:-webkit-box; 
				-webkit-box-orient:vertical;
				-webkit-line-clamp:2;
			}
		}
		.box2{
			background-color: #fff;
			margin-top: 10rpx;
			padding: 0 10rpx;
			font-size: 32rpx;
			line-height: 70rpx;
		}
		.box3{
			background: #fff;
			margin-top: 10rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			padding-bottom: 50rpx;
			box-sizing: border-box;
			.title{
				line-height: 50rpx;
				height: 50rpx;
				margin-bottom: 20rpx;
			}
			.goods-img{
				width: 100%;
				height: 100vw;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
		.goods-nav{
			width: 100%;
			position: fixed;
			left: 0;
			bottom: 0;
		}
		/deep/.uni-tab__cart-sub-left{
			width: 50%;
			// background-color: #f40;
		}
			
	}
</style>
