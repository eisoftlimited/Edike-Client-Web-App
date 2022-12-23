<template>
	<div class="w-full flex flex-col gap-2">
		<p class="small-text text-darkGray">{{title}} <span class="text-[10px] text-lightGray">({{ info }})</span></p>
		
		<div class="border border-dashed flex flex-col gap-4 items-center p-4 rounded-xl">
			<img src="../../assets/img/icons/upload.svg" alt="">
			<p class="text-[#44566C]">Drag and Drop or <span class="text-secondary cursor-pointer">Browse</span> to upload</p>
		</div>
		<div class="flex items-center gap-2">
			<img src="../../assets/img/icons/info.svg" alt="">
			<p class="text-[10px] text-lightGray">{{ accept }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		title: string
		info: string
		accept: string
	}>()
</script>
