<template>
	<auth-layout>
		<div class="flex flex-col gap-8 py-6 md:flex-row md:items-end">
			<img src="../assets/img/illustrations/verify.svg" class="w-1/2 hidden lg:flex" alt="">
			<div
				class="bg-[#FAFAFA] rounded-[24px] p-4 py-8 flex flex-col gap-8 z-20 mx-auto md:w/1-2 md:py-[40px] md:px-[60px] lg:mb-[100px]">
				<div class="flex flex-col gap-2">
					<h4 class="heading5 md:heading4 text-center text-boldText">Reset Password</h4>
					<p class="small-text text-[#404040] text-center md:w-[70%] mx-auto">Please enter the OTP sent to you email <span class="text-primary">abisoye@eisoft.com.ng</span> to continue</p>
				</div>
				<OTP/>
				<p class="small-text text-darkGray text-center">Remember you login details?
					<router-link to="/signin" class="text-secondary">Sign In</router-link>
				</p>
			</div>
		</div>
	</auth-layout>
</template>

<script setup lang="ts">
import OTP from '../components/utils/OTP.vue';


</script>


