<template>
	<div class="w-full flex flex-col gap-2">
		<p class="small-text text-darkGray">{{ label }}</p>
		<div class="w-full h-fit relative">
			<input required :type="passwordVisible ? 'text' : 'password'" :placeholder="placeHolder"
				class="w-full bg-transparent rounded-xl border border-lightGray focus:outline-0 h-[40px] px-4 py-2 small-text focus:border-secondary transition-all" />
				<span v-if="!passwordVisible" @click="toggleVisibility" class="absolute top-1/2 -translate-y-1/2 right-4">
					<img src="../../assets/img/icons/eye_closed.svg" alt="">
				</span>
				<span v-if="passwordVisible" @click="toggleVisibility" class="absolute top-1/2 -translate-y-1/2 right-4">
					<img src="../../assets/img/icons/eye_open.svg" alt="">
				</span>
		</div>
		<div class="flex h-[6px] justify-between">
			<span class="h-full w-[33%] bg-[#E45C5E]"></span>
			<span class="h-full w-[33%] bg-[#F3C652]"></span>
			<span class="h-full w-[33%] bg-[#68C38C]"></span>
		</div>
		<p v-if="showForgotPassword" class="text-right text-[10px] text-black">Forgot Password? 
			<router-link to="/" class="text-secondary">Click Here</router-link>
		</p>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
	label: string
	placeHolder: string
	showForgotPassword: boolean
}>()

const passwordVisible = ref(false)

const toggleVisibility = () => {
	passwordVisible.value = !passwordVisible.value
}
</script>

<style scoped>
/* input{
	-webkit-text-security: square;
} */
</style>