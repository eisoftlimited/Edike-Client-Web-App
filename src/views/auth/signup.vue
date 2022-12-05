<template>
	<auth-layout>
		<div class="flex flex-col gap-8 py-6 md:flex-row md:items-center">
			<img src="@/assets/img/illustrations/signup.svg" class="w-1/2 hidden lg:flex" alt="">
			<FormCard class="md:mb-[100px]">
				<h4 class="heading5 md:heading4 text-center text-boldText">Create Account</h4>
				<form class="flex flex-col gap-5">
					<div class="flex gap-2">
						<textInput class="w-1/2" v-model="firstName" :if-required="true" label="First Name" place-holder="Enter text here..." input-type="text"/>
						<textInput class="w-1/2" v-model="lastName" :if-required="true" label="Last Name" place-holder="Enter text here..." input-type="text"/>
					</div>
					<textInput class="" v-model="email" :if-required="true" label="Email Address" place-holder="johndoe@email.com" input-type="email"/>
					<phoneInput v-model="phone"/>
					<PasswordInput v-model="password" label="Password" place-holder="Create Password" :allow-password-strength="true" :show-forgot-password="false"/>
					
					<div class="ml-[5px] flex flex-col gap-4">
						<p class="flex items-center gap-2 text-xs md:text-sm text-[#666666]" :class="{'text-success' : containsOver8}">
							<span class="w-[8px] h-[8px] rounded-full bg-[#666666]" :class="{'bg-success' : containsOver8}"></span>
							Use 8 or more characters
							<img v-if="containsOver8" src="@/assets/img/icons/check.svg" alt="check">
						</p>
						<p class="flex items-center gap-2 text-xs md:text-sm text-[#666666]" :class="{'text-success' : upperAndLowerCase}">
							<span class="w-[8px] h-[8px] rounded-full bg-[#666666]" :class="{'bg-success' : upperAndLowerCase}"></span>
							Use upper and lower case letters (e.g. Aa)
							<img v-if="upperAndLowerCase" src="@/assets/img/icons/check.svg" alt="check">
						</p>
						<p class="flex items-center gap-2 text-xs md:text-sm text-[#666666]" :class="{'text-success' : containsSymbol}">
							<span class="w-[8px] h-[8px] rounded-full bg-[#666666]" :class="{'bg-success' : containsSymbol}"></span>
							Use a symbol (e.g. !@#$)
							<img v-if="containsSymbol" src="@/assets/img/icons/check.svg" alt="check">
						</p>
						<p class="flex items-center gap-2 text-xs md:text-sm text-[#666666]" :class="{'text-success' : containsNumber}">
							<span class="w-[8px] h-[8px] rounded-full bg-[#666666]" :class="{'bg-success' : containsNumber}"></span>
							Use a number (e.g. 1234)
							<img v-if="containsNumber" src="@/assets/img/icons/check.svg" alt="check">
						</p>
					</div>

					<div class="flex gap-2 items-center">
						<input type="checkbox" required class="bg-green">
						<p class="small-text text-darkGray">I accept 
							<router-link to="/" class="text-secondary">Terms and Conditions</router-link>
						</p>
					</div>
					
					<button class="btn-long" :disabled="!enableButton">Create Account</button>
				</form>
				<p class="small-text text-darkGray text-center">Already have an account?
					<router-link to="/signin" class="text-secondary">Sign In</router-link>
				</p>
			</FormCard>
		</div>
	</auth-layout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import PasswordInput from '@/components/utils/passwordInput.vue';
import textInput from '@/components/utils/textInput.vue';
import phoneInput from '@/components/utils/phoneInput.vue'
import FormCard from '@/components/utils/formCard.vue';

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
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

<style scoped>
input[type=checkbox] {
  accent-color: var(--primary);
}
</style>
