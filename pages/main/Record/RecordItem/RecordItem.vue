<template>
	<view class="RecordItem">
		<view class="RecordItem-img">
			<uv-image
			class=""
			:src="item.img" 
			width="150rpx" 
			height="200rpx"
			radius="10rpx"
			></uv-image>
		</view>
		<view class="RecordItem-content">
			<view class="RecordItem-content-title">
				{{item.title}}
			</view>
			<view class="RecordItem-content-location">
				{{item.location}}
			</view>
			<view class="RecordItem-content-time">
				{{item.time}}
			</view>
			<view class="RecordItem-content-rob btn" @click.stop="onDetail">
				查看详情
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'RecordItem',
	props:{
		item:{
			type:Object,
			require:true
		}
	},
	methods:{
		onDetail(id){
			// uni.navigateTo({
			// 	url: `/pages/pagesSelected/TicketGrabbing/TicketGrabbing?=${1}`
			// });
		}
	}
};
</script>

<style lang="scss" scoped>
.RecordItem {
	display: flex;
	padding: 40rpx 30rpx;
	position: relative;
	box-sizing: border-box;
	height: 370rpx;
	&-img {
		margin-right: 20rpx;
	}

	&-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 200rpx;
		font-size: 22rpx;
		color: #9D9D9D;
		&-title {
			font-size: 34rpx;
			font-weight: 500;
			color: #333333;  // 使用主题颜色
		}
		&-time{
			color: #333333;
			font-size: 22rpx;
		}
		&-location{
			color: #9D9D9D;
			font-size: 22rpx;
		}
		&-rob{
			position: absolute;
			bottom: 30rpx;
			right: 12rpx;
			padding: 15rpx 34rpx;
		}
	}
}
</style>