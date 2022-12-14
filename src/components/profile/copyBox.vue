<template>
	<div class="flex flex-col gap-2">
		<p class="small-text text-[#627E84]">{{label}}</p>
		<div class="h-[38px] rounded-xl px-4 bg-[#FAFAFA] flex items-center justify-between">
			<p class="small-text text-black font-medium">{{value}}</p>
			<img src="@/assets/img/icons/dashboard/copy.svg" class="cursor-pointer" alt="">
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	label: string
	value: string
}>()
</script>