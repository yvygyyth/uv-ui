<template>
	<z-paging 
	ref="paging" 
	v-model="dataList"
	@query="queryList"
	empty-view-text="你的票夹空空哒！"
	>
		<view class="item" v-for="(item,index) in dataList" :key="index">
			<RecordItem
				:item="item"
			></RecordItem>
		</view>
	</z-paging>
</template>

<script>
	import RecordItem from './RecordItem/RecordItem.vue'
	export default {
		components:{
			RecordItem
		},
		data() {
			return {
				dataList: [],
				params:{
					
				}
			};
		},
		methods: {
			getUserCoupons(){
				return new Promise((resolve)=>resolve([
					{
						img:'/static/mock/O1CN01KZrkNm2GdSaJfYWkf_!!2251059038.jpg',
						title:'【北京】2024当我们谈论爱情梁静茹演唱会-北京站',
						time:'2024.07.13-07.14',
						location:'北京市 | 华熙LIVE·五棵松·场馆',
						price:150,	
					},
					{
						img:'/static/mock/O1CN01q7DdOt2GdSbf4n03b_!!2251059038.jpg',
						title:'【北京】英文原版音乐剧《剧院魅影》',
						time:'2024.12.03-12.15',
						location:'北京市 | 天桥艺术中心-大剧场',
						price:250,	
					},
					{
						img:'/static/mock/QQ20240624155124.jpg',
						title:'【北京】2024中超联赛北京国安主场赛事',
						time:'2024.06.26 周三 20:00',
						location:'北京市 | 工人体育场 ',
						price:280,	
					}
					,{
						img:'/static/mock/O1CN01BWu2nb2GdSbl17MWI_!!2251059038.png',
						title:'【北京】2024当我们谈论爱情梁静茹演唱会-北京站',
						time:'2024.07.13-07.14',
						location:'北京市 | 华熙LIVE·五棵松·场馆',
						price:250,	
					}
				]))
			},
			// @query所绑定的方法不要自己调用！！需要刷新列表数据时，只需要调用this.$refs.paging.reload()即可
			queryList(page, limit) {
				this.getUserCoupons({ page, limit}).then(res => {
					this.$refs.paging.complete(res);
				}).catch(res => {
					this.$refs.paging.complete(false);
				})
			}
		},
	};
</script>
<style lang="scss" scoped>
	.item{
		margin:20rpx 20rpx 0 20rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
	}
</style>