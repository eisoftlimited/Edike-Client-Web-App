<template>
	<auth-layout>
		<div class="flex flex-col gap-8 py-6 md:flex-row md:items-end">
			<img src="@/assets/img/illustrations/verify.svg" class="w-1/2 hidden lg:flex" alt="">
			<FormCard class="lg:mb-[150px]">
				<div class="flex flex-col gap-2">
					<h4 class="heading5 md:heading4 text-center text-boldText">Almost There</h4>
					<p class="small-text text-[#404040] text-center">Thank you for signing up on edike.ng <br>
						To proceed, kindly activate your account with the six digit verification code sent to {{ email ?? 'your email' }}</p>
				</div>
				<OTP type="verify"/>
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
import { useAuth } from '../../composables/AuthController'

const { email } = useAuth()


</script>


