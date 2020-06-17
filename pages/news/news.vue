<template>
	<view class="news">
		<new-list @goDetail="goDetail" :newsList="newsList"></new-list>
	</view>
</template>

<script>
	import newList from '../../components/news-item/news-item.vue'
	export default {
		components:{
			newList
		},
		data() {
			return {
				newsList:[]
			}
		},
		onLoad() {
			this.getNews()
		},
		methods: {
			goDetail(id){
				console.log(id)
				if(!id){
					uni.showToast({
						title:'id不存在',
						icon:'none'
					})
					return
				}
				uni.navigateTo({
					url:'/pages/detail/detail?id='+id
				})
			},
			async getNews(){
				const res = await this.$myRuquest({
					url:'api/goods_list?type=1'
				}).then(res=>res.data.data.goods)
				this.newsList = res
				console.log(res)
			}
		}
	}
</script>

<style lang="scss">
	
</style>
