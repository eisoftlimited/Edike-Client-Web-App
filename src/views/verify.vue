<template>
	<auth-layout>
		<div class="flex flex-col gap-8 py-6 md:flex-row md:items-end">
			<img src="../assets/img/illustrations/verify.svg" class="w-1/2 hidden lg:flex" alt="">
			<div
				class="bg-[#FAFAFA] rounded-[24px] p-4 flex flex-col gap-8 z-20 mx-auto md:w/1-2 md:py-[40px] md:px-[60px] lg:mb-[100px]">
				<div class="flex flex-col gap-2">
					<h4 class="heading5 md:heading4 text-center text-boldText">Almost There</h4>
					<p class="small-text text-[#404040] text-center">We have successful created your new account. But
						before you start you will have to activate it. We have sent a verification code to the email you
						provided during registration. Please input the six digit code to verify your account.</p>
				</div>
				<form class="flex flex-col gap-4 relative overflow-hidden">
					<!-- could not set the input to hidden cos i couldnt focus on it when it hidden so i just hid it by making it absolute -->
					<input type="number" @input="getCode" class="code absolute -top-[200px]">
					<div class="flex flex-col gap-2">
						<div class="flex items-center gap-2 w-fit mx-auto" @click="focusOnInput">
							<div v-for="index in 6" :key="index"
								class="w-[40px] h-[40px] md:w-[64px] md:h-[64px] rounded-lg border border-stroke flex items-center justify-center"
								:class="{ 'border-success': code[index - 1] != null, 'border-secondary': code.length > 0 && code.length == index - 1, 'border-error': inCorrectOTP }">
								<h3 class="heading4 md:heading3 text-[#2D233B]">{{ code[index - 1] }}</h3>
							</div>
						</div>
						<p v-if="inCorrectOTP" class="text-[10px] sm:small-text font-bold flex gap-1 items-center justify-center text-error">
							<span class="w-[8px] h-[8px] rounded-full bg-error"></span>
							Incorrect OTP, Please confirm the OTP and try again.
						</p>
						<p v-if="expiredOTP" class="text-[10px] sm:small-text font-bold flex gap-1 items-center justify-center text-error">
							<span class="w-[8px] h-[8px] rounded-full bg-error"></span>
							This OTP has expired. Please request a new OTP.
						</p>
					</div>

					<p class="small-text text-darkGray text-center">The verification code will be expire in <span
							class="text-secondary">01:23</span></p>
					<div class="flex gap-4 items-center justify-between">
						<p class="normal-text text-primary w-full max-w-fit font-medium">Resend Code</p>
						<button class="btn-long" :disabled="!enableButton">Submit</button>
					</div>
				</form>
				<p class="small-text text-darkGray text-center">Remember you login details?
					<router-link to="/signin" class="text-secondary">Sign In</router-link>
				</p>
			</div>
		</div>
	</auth-layout>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

const code = ref('')
const inCorrectOTP = ref(false)
const expiredOTP = ref(false)


const getCode = () => {
	let inputs: HTMLFormElement = document.querySelector('input.code')!
	code.value = String(inputs.value)
}

const focusOnInput = () => {
	let inputs: HTMLFormElement = document.querySelector('input.code')!
	inputs.focus()
}

// computed
const enableButton = computed(() => {
	return code.value.length == 6 ? true : false
})

onMounted(() => {
	focusOnInput()
})


</script>

<style scoped>
input[type=checkbox] {
	accent-color: var(--primary);
}
</style>
