<template>
	<div class="flex flex-col gap-8 py-6 md:flex-row md:items-end" v-if="!enterNewPassComp">
		<img src="@/assets/img/illustrations/verify.svg" class="w-1/2 hidden lg:flex" alt="">
		<FormCard class="lg:mb-[150px]">
			<div class="flex flex-col gap-2">
				<h4 class="heading5 md:heading4 text-center text-boldText">Reset Password</h4>
				<p class="small-text text-[#404040] text-center md:w-[70%] mx-auto">Please enter the OTP sent to you
					email <span class="text-primary">{{email}}</span> to continue</p>
			</div>
			<OTP type="reset" />
			<p class="small-text text-darkGray text-center">Remember you login details?
				<router-link to="/signin" class="text-secondary">Sign In</router-link>
			</p>
		</FormCard>
	</div>
	<newpass v-else/>
</template>

<script setup lang="ts">
import OTP from '@/components/utils/OTP.vue';
import FormCard from '@/components/utils/formCard.vue';
import { useAuth } from '../../composables/AuthController';
import newpass from './newpass.vue';

const { email, enterNewPassComp } = useAuth()

</script>


