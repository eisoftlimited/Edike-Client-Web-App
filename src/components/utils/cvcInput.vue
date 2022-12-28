<template>
	<div class="w-full flex flex-col gap-2 relative">
		<p class="small-text text-darkGray">CVC</p>
		<input required type="text" placeholder="123" v-model="cvc" minlength="3" maxlength="3"
			class="w-full caret-secondary bg-transparent rounded-xl border border-lightGray focus:outline-0 h-[40px] px-4 py-2 small-text focus:border-secondary transition-all" />
	</div>
</template>

<script setup lang="ts">
import { useCard } from '../../composables/Card';

	const { cvc } = useCard()
	// const getCode = () => {
	// 	if(cvc.value.length > 3) {
	// 		cvc.value = cvc.value.slice(0,-1)
	// 	}
	// }
</script>