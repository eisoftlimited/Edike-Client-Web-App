<template>
	<div class="flex items-start justify-center gap-6 w-full">
		<div class="flex flex-col gap-6 w-full max-w-[500px] mx-auto lg:w-1/2 ">
			<div class="flex flex-col gap-1">
				<h3 class="text-[22px] font-medium">Personal Details</h3>
				<p class="small-text text-[#5F6165]">Update your photo and personal details here.</p>
			</div>
			<form class="flex flex-col gap-6">
				<TextInput input-type="text" :if-required="true" label="First Name" place-holder="" v-model="firstName"/>
				<TextInput input-type="text" :if-required="true" label="Last Name" place-holder="" v-model="lastName"/>
				<TextInput input-type="email" :if-required="true" label="Email" place-holder="" v-model="email"/>
				<PhoneInput v-model="phone"/>
				<button class="btn-long">Update Profile</button>
			</form>
		</div>
		<img src="../../../assets/img/illustrations/profile/details.svg" class="w-1/2 hidden lg:flex " alt="">
	</div>
</template>

<script setup lang="ts">
import TextInput from '../../utils/textInput.vue';
import PhoneInput from '../../utils/phoneInput.vue';
import { ref } from 'vue';

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')

</script>
