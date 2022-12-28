<template>
	<div class="w-full flex flex-col gap-2">
		<p class="small-text text-darkGray">Phone</p>
		<div class="relative">
			<input required type="number" placeholder="080 1234 5678"
				:value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
				class="w-full caret-secondary bg-transparent rounded-xl border border-lightGray focus:outline-0 h-[40px] px-4 py-2 small-text focus:border-secondary transition-all"
			/>
			<!-- <p class="absolute top-1/2 -translate-y-1/2 left-4 text-small border-r pr-2 h-full flex items-center justify-center">+234</p> -->
			
		</div>
		
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		modelValue: string
	}>()
</script>