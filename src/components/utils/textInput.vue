<template>
	<div class="w-full flex flex-col gap-2">
		<p class="small-text text-darkGray">{{label}}</p>
		<input :required="ifRequired" :type="inputType" :placeholder="placeHolder"
			class="w-full bg-transparent rounded-xl border border-lightGray focus:outline-0 h-[40px] px-4 py-2 small-text focus:border-secondary transition-all"
		/>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		inputType: 'text' | 'email'
		ifRequired: boolean
		label: string
		placeHolder: string
	}>()
</script>