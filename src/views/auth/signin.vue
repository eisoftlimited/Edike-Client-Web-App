<template>
	<auth-layout>
		<div class="flex flex-col gap-8 py-6 md:flex-row md:items-end">
			<img src="@/assets/img/illustrations/signup.svg" class="w-1/2 hidden lg:flex" alt="">
			<FormCard class="md:mb-[200px]">
				<h4 class="heading5 md:heading4 text-center text-boldText">Sign In to your Account</h4>
				<form class="flex flex-col gap-5" @submit.prevent="loginUser">
					<textInput class="" v-model="email" :if-required="true" label="Email Address" place-holder="johndoe@email.com" input-type="email"/>
					<PasswordInput v-model="password" label="Password" place-holder="Create Password" :allow-password-strength="false" :show-forgot-password="true"/>
					
					<button class="btn-long" :disabled="!enableLoginButton">Login</button>
				</form>
				<p class="small-text text-darkGray text-center">Don't have an account?
					<router-link to="/signup" class="text-secondary">Sign Up</router-link>
				</p>
			</FormCard>
		</div>
	</auth-layout>
</template>

<script setup lang="ts">
import PasswordInput from '@/components/utils/passwordInput.vue';
import textInput from '@/components/utils/textInput.vue';
import FormCard from '@/components/utils/formCard.vue';
import { useAuth } from '../../composables/AuthController';

const { enableLoginButton, email, password, loginUser } = useAuth()


 
	
</script>

<style scoped>
input[type=checkbox] {
  accent-color: var(--primary);
}
</style>
