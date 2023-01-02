<template>
	<div class="relative w-full h-fit border border-darkGray rounded-xl">
		<img src="@/assets/img/icons/select_search.svg" class="absolute top-1/2 left-4 -translate-y-1/2" alt="">
		<input type="text" :placeholder="placeHolder"
			:value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
			class="w-full caret-secondary bg-[#F4F5F5] rounded-xl  focus:outline-0 h-[40px] pl-12 py-2 small-text transition-all"
		/>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	modelValue: string
	placeHolder?:string
}>()
</script>