<template>
	<auth-layout>
		<div class="flex flex-col gap-8 py-6 md:flex-row md:items-end">
			<img src="@/assets/img/illustrations/verify.svg" class="w-1/2 hidden lg:flex" alt="">
			<FormCard class="lg:mb-[150px]">
				<div class="flex flex-col gap-2">
					<h4 class="heading5 md:heading4 text-center text-boldText">Almost There</h4>
					<p class="small-text text-[#404040] text-center">We have successful created your new account. But
						before you start you will have to activate it. We have sent a verification code to the email you
						provided during registration. Please input the six digit code to verify your account.</p>
				</div>
				<OTP/>
				<p class="small-text text-darkGray text-center">Remember you login details?
					<router-link to="/signin" class="text-secondary">Sign In</router-link>
				</p>
			</FormCard>
		</div>
	</auth-layout>
</template>

<script setup lang="ts">
import OTP from '@/components/utils/OTP.vue';
import FormCard from '@/components/utils/formCard.vue';


</script>


