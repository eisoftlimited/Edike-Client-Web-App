<template>
	<auth-layout>
		<div class="flex flex-col gap-8 py-6 md:flex-row md:items-center">
			<img src="@/assets/img/illustrations/signup.svg" class="w-1/2 hidden lg:flex" alt="">
			<FormCard class="md:mb-[100px]">
				<h4 class="heading5 md:heading4 text-center text-boldText">Create Account</h4>
				<form class="flex flex-col gap-5" @submit.prevent="registerUser">
					<div class="flex gap-2">
						<textInput class="w-1/2" v-model.trim="firstName" :if-required="true" label="First Name" place-holder="Enter text here..." input-type="text"/>
						<textInput class="w-1/2" v-model.trim="lastName" :if-required="true" label="Last Name" place-holder="Enter text here..." input-type="text"/>
					</div>
					<textInput class="" v-model.trim="email" :if-required="true" label="Email Address" place-holder="johndoe@email.com" input-type="email"/>
					<phoneInput v-model.trim="phone"/>
					<PasswordInput v-model.trim="password" label="Password" place-holder="Create Password" :allow-password-strength="true" :show-forgot-password="false"/>
					
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
					
					<button class="btn-long" :disabled="!enableSignupButton">Create Account</button>
				</form>
				<p class="small-text text-darkGray text-center">Already have an account?
					<router-link to="/signin" class="text-secondary">Sign In</router-link>
				</p>
			</FormCard>
		</div>
	</auth-layout>
</template>

<script setup lang="ts">
import PasswordInput from '@/components/utils/passwordInput.vue';
import textInput from '@/components/utils/textInput.vue';
import phoneInput from '@/components/utils/phoneInput.vue';
import FormCard from '@/components/utils/formCard.vue';
import { useAuth } from '../../composables/AuthController';
import { usePassword } from '../../composables/PasswordController';


const { firstName, lastName, phone, password, email, registerUser } = useAuth()
const { containsNumber, containsOver8, containsSymbol, upperAndLowerCase, enableSignupButton, } = usePassword()


 
	
</script>

<style scoped>
input[type=checkbox] {
  accent-color: var(--primary);
}
</style>
