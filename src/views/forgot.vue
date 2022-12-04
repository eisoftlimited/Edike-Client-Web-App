<template>
	<auth-layout>
		<div class="flex flex-col gap-8 py-6 md:flex-row md:items-end">
			<img src="../assets/img/illustrations/forgot.svg" class="w-1/2 hidden lg:flex" alt="">
			<div
				class="bg-[#FAFAFA] rounded-[24px] p-4 py-8 flex flex-col gap-8 z-20 mx-auto md:w/1-2 md:py-[40px] md:px-[60px] lg:mb-[100px]">
				<div class="flex flex-col gap-2">
					<h4 class="heading5 md:heading4 text-center text-boldText">Reset Your Password</h4>
					<p class="small-text text-[#404040] text-center">Please enter the email address registered on your account.</p>
				</div>
				<form class="flex flex-col gap-4 ">
					<TextInput input-type="email" :if-required="true" label="Email Address" place-holder="Enter email address" v-model="email"/>
					<button class="btn-long" :disabled="!enableButton">Login</button>
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
import TextInput from '../components/utils/textInput.vue';

const email = ref('')

// computed
const enableButton = computed(() => {
	return email.value.length > 0 ? true : false
})




</script>

<style scoped>
input[type=checkbox] {
	accent-color: var(--primary);
}
</style>
