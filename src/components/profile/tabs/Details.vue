<template>
	<div class="flex items-start justify-center gap-6 w-full">
		<div class="flex flex-col gap-6 w-full max-w-[500px] mx-auto lg:w-1/2 ">
			<div class="flex flex-col gap-1">
				<h3 class="text-[22px] font-medium">Personal Details</h3>
				<p class="small-text text-[#5F6165]">Update your photo and personal details here.</p>
			</div>
			<form class="flex flex-col gap-6" @submit.prevent="updateUserData">
				<TextInput input-type="text" :if-required="true" label="First Name" place-holder="" v-model="profile_firstName"/>
				<TextInput input-type="text" :if-required="true" label="Last Name" place-holder="" v-model="profile_lastName"/>
				<TextInput input-type="email" :if-required="true" label="Email" place-holder="" v-model="profile_email"/>
				<PhoneInput v-model="profile_phone"/>
				<button class="btn-long" :disabled="!updates">Update Profile</button>
			</form>
		</div>
		<img src="../../../assets/img/illustrations/profile/details.svg" class="w-1/2 hidden lg:flex " alt="">
	</div>
</template>

<script setup lang="ts">
import TextInput from '../../utils/textInput.vue';
import PhoneInput from '../../utils/phoneInput.vue';
import { ref, computed } from 'vue';
import { useUser } from '../../../composables/UserController';

const { firstName, lastName, email, phone, updateUser, updateUserData } = useUser()
const profile_firstName = ref(firstName.value)
const profile_lastName = ref(lastName.value)
const profile_email = ref(email.value)
const profile_phone = ref(phone.value)


const updates = computed(() => {
	return profile_firstName.value != firstName.value ||  profile_lastName.value != lastName.value ||  profile_email.value != email.value ||  profile_phone.value != phone.value ? true : false
})
</script>
