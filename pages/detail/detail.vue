<template>
	<view class="detail">
		<view class="goods-info">
			<view class="desc">
				<text class="name">{{goods.goods_name}}</text>
				<text class="price">¥{{goods.goods_price}}元</text>
				<text>评价</text>
				<block v-for="item of comment" :key="item.id" v-if="item.id">
					<text class="name">{{item.username}}:</text>
					<text class="content">{{item.content}}</text>
				</block>
				<text class="name">销量:{{goods.sale_num}}</text>
			</view>
			<view class="goods-show">
				----商品展示---
			</view>
			<view class="gallery">
				<block v-for="(item,index) of goodsImg" :key="index">
					<image :src="item" mode="" @click="Pregallery(item)"></image>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				goodsImg:[],
				goods:[],
				comment:[]
			}
		},
		onLoad(options) {
			this.id = parseInt(options.id || 0)
			this.getDetail()
		},
		methods: {
			Pregallery(item){
				uni.previewImage({
					urls:this.goodsImg,
					current:item,
					loop:true
				})
			},
			async getDetail(){
				const res = await this.$myRuquest({
					url:'api/goods?goods_id='+this.id
				}).then(res=>res.data.data)
				this.goodsImg = res.gallery
				this.goods = res.goods
				console.log(this.goods)
				this.comment = res.comment
				console.log(res)
			}
		}
	}
</script>

<style lang="scss">
	.detail{
		width: 100%;
		padding: 10rpx;
		box-sizing: border-box;
		.goods-info{
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			.desc{
				display: flex;
				flex-direction: column;
				line-height: 2em;
			}
			.gallery{
				width: 100%;
				margin-top:20rpx;
				image{
					width: 100%;
					height: 100vw;
				}
			}
		}
	}
</style>
