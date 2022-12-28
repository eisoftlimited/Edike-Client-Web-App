<template>
	<div class="w-full flex flex-col gap-2">
		<p class="small-text text-darkGray">How much are you  applying for?</p>
		<div class="relative">
			<input required type="number" placeholder="100,000.00" pattern="([0-9]{1,3}).([0-9]{1,3})" v-model="num"
				 @input="getAmount" class="w-full caret-secondary bg-transparent rounded-xl border border-lightGray focus:outline-0 h-[40px] pl-[45px] py-2 small-text focus:border-secondary transition-all text-transparent" :class="{'caret-transparent': String(num).length > 0}"
			/>
			<p class="absolute top-1/2 -translate-y-1/2 left-4 text-small border-r pr-2 h-full flex items-center justify-center">N</p>
			<p class="absolute top-1/2 -translate-y-1/2 left-[45px] small-text">{{ formatNumber(String(num)) }}</p>
		</div>
		
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	defineProps<{
		modelValue: string
	}>()
	const emit = defineEmits(['update:modelValue'])
	const num = ref<number>()

	function formatNumber(n:string) {
		// format number 1000000 to 1,234,567
		return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	}

	const getAmount = () => {
		emit('update:modelValue', String(num.value))
	}
</script>