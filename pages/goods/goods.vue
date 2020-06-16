<template>
	<view class="goods-list">
		<goods-list :goodsList="goodsList"></goods-list>
		<view class="isOver" v-if="flag">
			-----已经触底了------
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		components:{
			goodsList
		},
		data() {
			return {
				page:1,
				count:8,
				goodsList:[],
				flag:false,
				totalPage:1,
			}
		},
		onLoad() {
			this.getGoodsList()
		},
		// 触底
		onReachBottom() {
			if(this.page == this.totalPage){
				this.flag = true
				return
			}
			console.log(123123)
			this.page++
			this.getGoodsList()
		},
		onPullDownRefresh() {
			this.page = 1;
			this.goodsList = [];
			this.flag = false;
			setTimeout(()=>{
				this.getGoodsList(()=>{
					uni.stopPullDownRefresh()
				})
			},1000)
		},
		methods: {
			// 获取商品的数据
			async getGoodsList(callback){
				const res = await this.$myRuquest({
					url:'api/goods_list?type=1&page='+this.page+'&count='+this.count
				}).then(res=>res.data.data)
				this.totalPage =Math.ceil(res.total/this.count)
				this.goodsList = this.goodsList.concat(res.goods)
				callback&&callback()
			}
		}
	}
</script>

<style lang="scss">
	.goods-list{
		background-color: #eee;
	}
	.isOver{
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		// background-color: #fff;
		font-size: 28rpx;
	}
</style>
