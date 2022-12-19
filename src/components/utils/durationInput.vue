<template>
	<div class="w-full flex flex-col gap-2">
		<p class="small-text text-darkGray">When do you want to payback?</p>
		<div class="flex gap-3 items-center justify-between">
			<button type="button" class="h-[40px] rounded-lg w-full text-black">1 Month</button>
			<button type="button" class="h-[40px] rounded-lg w-full text-black">2 Months</button>
			<button type="button" class="h-[40px] rounded-lg w-full text-black">2 Months</button>
		</div>
		
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		modelValue: string
	}>()
</script>

<style scoped>
	button{
		background-color: rgba(178, 179, 179, 0.2);
	}
</style>