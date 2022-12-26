<template>
	<div class="w-full flex flex-col gap-2">
		<p class="small-text text-darkGray">{{label}}</p>
		<input :required="ifRequired" :type="inputType" :placeholder="placeHolder"
			:value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
			class="w-full caret-secondary bg-transparent rounded-xl border border-lightGray focus:outline-0 h-[40px] px-4 py-2 small-text focus:border-secondary transition-all"
		/>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		inputType: 'text' | 'email' | 'number'
		ifRequired: boolean
		label: string
		placeHolder: string
		modelValue: string | number
	}>()
</script>