<template>
	<auth-layout>
		<div class="flex flex-col gap-8 py-6 md:flex-row md:items-end">
			<img src="../assets/img/illustrations/signup.svg" class="w-1/2" alt="">
			<div class="bg-[#FAFAFA] rounded-[24px] p-4 flex flex-col gap-8 z-20 md:w/1-2 md:py-[40px] md:px-[60px]">
				<h4 class="heading5 md:heading4 text-center text-boldText">Create Account</h4>
				<div class="flex flex-col gap-5">
					<div class="flex gap-2">
						<textInput class="w-1/2" :if-required="true" label="First Name" place-holder="Enter text here..." input-type="text"/>
						<textInput class="w-1/2" :if-required="true" label="Last Name" place-holder="Enter text here..." input-type="text"/>
					</div>
					<textInput class="" :if-required="true" label="Email Address" place-holder="johndoe@email.com" input-type="email"/>
					<phoneInput/>
					<PasswordInput label="Password" place-holder="Create Password" :show-forgot-password="false"/>
					
					<div class="ml-[10px] flex flex-col gap-4">
						<p class="flex items-center gap-2 text-small text-[#666666]">
							<span class="w-[8px] h-[8px] rounded-full bg-[#666666]"></span>
							Use 8 or more characters
						</p>
						<p class="flex items-center gap-2 text-small text-[#666666]">
							<span class="w-[8px] h-[8px] rounded-full bg-[#666666]"></span>
							Use upper and lower case letters (e.g. Aa)
						</p>
						<p class="flex items-center gap-2 text-small text-[#666666]">
							<span class="w-[8px] h-[8px] rounded-full bg-[#666666]"></span>
							Use a symbol (e.g. !@#$)
						</p>
						<p class="flex items-center gap-2 text-small text-[#666666]">
							<span class="w-[8px] h-[8px] rounded-full bg-[#666666]"></span>
							Use a number (e.g. 1234)
						</p>
					</div>

					<div class="flex gap-2 items-center">
						<input type="checkbox" class="bg-green">
						<p class="small-text text-darkGray">I accept 
							<router-link to="/" class="text-secondary">Terms and Conditions</router-link>
						</p>
					</div>
					
					<button class="btn-long" disabled>Create Account</button>
				</div>
				<p class="small-text text-darkGray text-center">Already have an account?
					<router-link to="/" class="text-secondary">Sign In</router-link>
				</p>
			</div>
		</div>
	</auth-layout>
</template>

<script setup lang="ts">
import PasswordInput from '../components/utils/passwordInput.vue';
import textInput from '../components/utils/textInput.vue';
import phoneInput from '../components/utils/phoneInput.vue'
	
</script>

<style scoped>
input[type=checkbox] {
  accent-color: var(--primary);
}
</style>
