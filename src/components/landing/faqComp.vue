<template>
	<details :ontoggle="switchIcon" class="p-2 my-2">
		<summary class="cursor-pointer text-[#000000] text-lg font-normal flex gap-4 items-center justify-between">
			{{ item.question }}
			<img src="../../assets/img/icons/faqs/faq_arrow_down.svg" class="transition-all duration-[500]" :class="[open ? 'rotate-180' : 'rotate-0']" alt="">
		</summary>
		<p class="mt-[20px] text-[#6F6F6F] small-text">{{ item.ans }}</p>
	</details>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const open = ref(false)
defineProps<{
	item: {question: string; ans:string}
}>()

const switchIcon = () => {
	open.value = !open.value
}
</script>

<style scoped>
details > summary {
  list-style: none;
}

details > summary::marker, /* Latest Chrome, Edge, Firefox */ 
details > summary::-webkit-details-marker /* Safari */ {
  display: none;
}
</style>