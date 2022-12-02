<template>
	<div class="w-full flex flex-col gap-2">
		<p class="small-text text-darkGray">Phone</p>
		<div class="relative">
			<input required type="number" placeholder="XXX XXX XXXX"
				class="w-full bg-transparent rounded-xl border border-lightGray focus:outline-0 h-[40px] pl-[70px] py-2 small-text focus:border-secondary transition-all"
			/>
			<p class="absolute top-1/2 -translate-y-1/2 left-4 text-small border-r pr-2 h-full flex items-center justify-center">+234</p>
			
		</div>
		
	</div>
</template>

<script setup lang="ts">
	// defineProps<{
	// 	inputType: 'text' | 'email'
	// }>()
</script>