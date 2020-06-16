<template>
	<view class="pics">
		<scroll-view scroll-y="true"  class="left">
			<view :class="item.cat_id==catId?'active':''" v-for="item of category" :key="item.cat_id" @click="leftClickHandle(item.cat_id)">{{item.cat_name}}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y="">
			<view class="item" v-for="item of subCategory" :key="item.cat_id">
				<image :src="item.img"></image>
				<text>{{item.cat_name}}</text>
			</view>
			<text v-if="subCategory.length == 0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				category:[],
				subCategory:[],
				catId:1
			}
		},
		onLoad(){
			this.getPicsCate()
			this.leftClickHandle()
		},
		methods: {
			async leftClickHandle(catId=1){
				this.catId = catId;
				// 获取右侧的数据
				const res = await this.$myRuquest({
					url:'api/goods_category?type=1&cat_id='+catId
				}).then(res=>res.data.data)
				this.subCategory = res
				console.log(res)
			},
			async getPicsCate(){
				const res = await this.$myRuquest({
					url:'api/goods_category?type=1'
				}).then(res=>res.data.data)
				this.category = res
				console.log(res)
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.pics{
		height: 100%;
		display: flex;
		.left{
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
			view{
				height: 120rpx;
				color: #333;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 30rpx;
				border-top:1px solid #eee;
			}
			.active{
				background-color: $shop-color;
				color: #FFFFFF;
			}
		}
		.right{
			width: 0;
			flex: 1;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			margin: 10rpx;
			.item{
				width: 530rpx;
				height: 530rpx;
				border-radius:5rpx ;
			}
			image{
				width: 100%;
				height: 400rpx;
			}
			text{
				font-size: 30rpx;
				line-height: 60rpx;
			}
		}
	}
</style>
