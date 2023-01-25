<template>
	<div class="flex items-start gap-3">
		<p class="small-text font-medium text-[#3F434A] min-w-[150px]">{{ keyData }}</p>
		<p class="small-text w-full" :class="[color ? color : 'text-[#8A9099]']">{{ keyValue }}</p>
	</div>
	<!-- text-[#8A9099] -->
</template>

<script setup lang="ts">
	defineProps<{
			keyData: string
			keyValue: string
			color?: string
	}>()
</script>