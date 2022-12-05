<template>
	<auth-layout>
		<div class="flex flex-col gap-8 py-6 md:flex-row md:items-end">
			<img src="@/assets/img/illustrations/verify.svg" class="w-1/2 hidden lg:flex" alt="">
			<FormCard class="lg:mb-[150px]">
				<div class="flex flex-col gap-2">
					<h4 class="heading5 md:heading4 text-center text-boldText">Reset Password</h4>
					<p class="small-text text-[#404040] text-center md:w-[70%] mx-auto">Please enter the OTP sent to you
						email <span class="text-primary">abisoye@eisoft.com.ng</span> to continue</p>
				</div>
				<form class="flex flex-col gap-4">
					<passwordInput label="Password" place-holder="Create Password" :allow-password-strength="true"
						:show-forgot-password="false" v-model="password" />
					<div class="ml-[5px] flex flex-col gap-4">
						<p class="flex items-center gap-2 text-xs md:text-sm text-[#666666]"
							:class="{ 'text-success': containsOver8 }">
							<span class="w-[8px] h-[8px] rounded-full bg-[#666666]"
								:class="{ 'bg-success': containsOver8 }"></span>
							Use 8 or more characters
							<img v-if="containsOver8" src="@/assets/img/icons/check.svg" alt="check">
						</p>
						<p class="flex items-center gap-2 text-xs md:text-sm text-[#666666]"
							:class="{ 'text-success': upperAndLowerCase }">
							<span class="w-[8px] h-[8px] rounded-full bg-[#666666]"
								:class="{ 'bg-success': upperAndLowerCase }"></span>
							Use upper and lower case letters (e.g. Aa)
							<img v-if="upperAndLowerCase" src="@/assets/img/icons/check.svg" alt="check">
						</p>
						<p class="flex items-center gap-2 text-xs md:text-sm text-[#666666]"
							:class="{ 'text-success': containsSymbol }">
							<span class="w-[8px] h-[8px] rounded-full bg-[#666666]"
								:class="{ 'bg-success': containsSymbol }"></span>
							Use a symbol (e.g. !@#$)
							<img v-if="containsSymbol" src="@/assets/img/icons/check.svg" alt="check">
						</p>
						<p class="flex items-center gap-2 text-xs md:text-sm text-[#666666]"
							:class="{ 'text-success': containsNumber }">
							<span class="w-[8px] h-[8px] rounded-full bg-[#666666]"
								:class="{ 'bg-success': containsNumber }"></span>
							Use a number (e.g. 1234)
							<img v-if="containsNumber" src="@/assets/img/icons/check.svg" alt="check">
						</p>
					</div>
					<button class="btn-long" :disabled="!enableButton">Create Password</button>
				</form>
				<p class="small-text text-darkGray text-center">Remember you login details?
					<router-link to="/signin" class="text-secondary">Sign In</router-link>
				</p>
			</FormCard>
		</div>
	</auth-layout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import passwordInput from '@/components/utils/passwordInput.vue';
import FormCard from '@/components/utils/formCard.vue';

const password = ref('')
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

// computed
const containsOver8 = computed(() => {
	return password.value.length >= 8 ? true : false 
})

const upperAndLowerCase = computed(() => {
	return /[A-Z]/.test(password.value) && /[a-z]/.test(password.value) ? true : false 
})

const containsSymbol = computed(() => {
	return specialChars.test(password.value) ? true : false 
})

const containsNumber = computed(() => {
	return /\d/.test(password.value) ? true : false 
})

const enableButton = computed(() => {
	return containsOver8.value && upperAndLowerCase.value && containsSymbol.value && containsNumber.value ? true : false
})

</script>


