<template>
	<view class="home">
		<swiper indicator-dots="true" circular="true">
			<swiper-item v-for="item of swiperList" :key="item.id">
				<image :src="item.img" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav-item" v-for="(item,index) of nav" :key="index" @click="navItemTo(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot-goods">
			<view class="title">
				推荐商品
			</view>
			<goods-list @goGoodsDetail="goGoodsDetail" :goodsList="goodsList"></goods-list>
		</view>
	</view>
</template>

<script>
	import goodsList from "../../components/goods-list/goods-list"
	export default {
		components:{
			goodsList
		},
		data() {
			return {
				swiperList:[],
				goodsList:[],
				nav:[
					{
						icon:'icon iconchaoshi',
						title:'黑马超市',
						path:'/pages/goods/goods'
					},
					{
						icon:'icon iconlianxiwomen',
						title:'联系我们',
						path:'/pages/contact/contact'
					},
					{
						icon:'icon icontupian',
						title:'社区图片',
						path:'/pages/pics/pics'
					},
					{
						icon:'icon iconshipin',
						title:'学习视频',
						path:'/pages/videos/videos'
					}
				]
			}
		},
		onLoad() {
			this.getSwiper()
			this.getGoodsList()
		},
		methods: {
			// 获取轮播图的数据
			async getSwiper(){
				console.log('213213')
				// const res = await uni.request({
				// 	url:"http://api.4yue.top/index.php/api/swiper?type=1",
				// 	header:{
				// 		appkey:'f68bSYqte0m6EibwhARrzTcYDPoV0FobCi06uDfM3eF4QGQQKSywmd71ytM'
				// 	},
				// 	success: (res) => {
				// 		console.log(res)
				// 		if(res.data.error_code!=0){
				// 			uni.showToast({
				// 				title:'获取数据失败',
				// 			})
				// 			return
				// 		}
				// 		this.swiperList = res.data.data
				// 	}
				// })
				const res = await this.$myRuquest({
					url:'api/swiper?type=1'
				}).then(res=>res.data.data)
				this.swiperList = res
			},
			// 获取热门商品列表数据
			async getGoodsList(){
				const res = await this.$myRuquest({
					url:'api/goods_list?type=1&page=1&count=8'
				}).then(res=>res.data.data.goods)
				this.goodsList = res
			},
			// 导航点击的处理函数
			navItemTo(url){
				console.log(url)
				uni.navigateTo({
					url
				})
			},
			// 导航到商品详情
			goGoodsDetail(id){
				console.log(id)
				uni.navigateTo({
					url:'/pages/goods-detail/goods-detail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			width: 750rpx;
			height: 380rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.nav{
			width: 100%;
			display: flex;
			margin-top:20rpx ;
			.nav-item{
				width: 25%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				view{
					width: 120rpx;
					height: 120rpx;
					border-radius:50%;
					background: #b50e03;
					display: flex;
					align-items: center;
					justify-content: center;
					color: #FFFFFF;
					font-size: 50rpx;
				}
				text{
					margin-top: 10rpx;
					font-size: 30rpx;
				}
			}
		}
		.hot-goods{
			background: #eee;
			overflow: hidden;
			margin-top: 20rpx;
			.title{
				height: 100rpx;
				color: $shop-color;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				letter-spacing: 20rpx;
				background: #fff;
				margin:10rpx 0;
			}
		}
		
	}
</style>
