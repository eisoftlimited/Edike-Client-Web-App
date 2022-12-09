<template>
	<div class="flex items-center justify-between gap-6">
		<div class="flex flex-col gap-6 w-full max-w-[500px] mx-auto lg:w-1/2">
			<div class="flex flex-col gap-1">
				<h3 class="text-[22px] font-medium">Security Settings</h3>
				<p class="small-text text-[#5F6165]">Change your password using the form below</p>
			</div>
			<form class="flex flex-col gap-6">
				<passwordInput label="Enter New Password" place-holder="Create Password" :show-forgot-password="false"
					:allow-password-strength="false" v-model="oldPass" />
				<passwordInput label="Enter New Password" place-holder="Create Password" :show-forgot-password="false"
					:allow-password-strength="true" v-model="password" />

				<div class="ml-[5px] my-2 flex flex-col gap-4">
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
				
				<button class="btn-long">Update Password</button>
			</form>
		</div>
		<img src="../../../assets/img/illustrations/profile/security.svg" class="w-1/2 hidden lg:flex" alt="">
	</div>
</template>

<script setup lang="ts">
import passwordInput from '../../utils/passwordInput.vue';
import { ref } from 'vue';
import { useAuth } from '../../../composables/AuthController';

const { oldPass, password, containsNumber, containsSymbol, containsOver8, upperAndLowerCase } = useAuth()

</script>
