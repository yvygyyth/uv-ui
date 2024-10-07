<template>
	<view class="my">
		<i class="yy-icon-anchor" style="color: red;font-size: 50rpx;"></i>
		<view>{{ store.count }}</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	import { useCounterStore } from '@/stores/counter'
	
	const store = useCounterStore()
</script>

<style lang="scss" scoped>
.my{
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>