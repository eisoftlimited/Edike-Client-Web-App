<template>
	<div class="w-full flex flex-col gap-2">
		<p class="small-text text-darkGray">When do you want to payback?</p>
		<div class="flex gap-3 items-center justify-between">
			<button v-for="index in 3" :key="index" @click="$emit('update:modelValue', `${index}`)" type="button" 
				class="h-[40px] rounded-lg w-full text-black" :class="{'active' : modelValue == `${index}`}"
			>
				{{ index }} {{ index > 1 ? 'Months' : 'Month' }}
			</button>
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

	button.active{
		background-color: #F9AC3B;
	}
</style>