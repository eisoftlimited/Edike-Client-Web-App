<template>
	<div class="flex items-start justify-center gap-6 w-full">
		<div class="flex flex-col gap-6 w-full max-w-[500px] mx-auto lg:w-1/2 " v-if="userData?.firstname">
			<div class="flex flex-col gap-1">
				<h3 class="text-[22px] font-medium">Personal Details</h3>
				<p class="small-text text-[#5F6165]">Update your photo and personal details here.</p>
			</div>
			<form class="flex flex-col gap-6" @submit.prevent="submitForm">
				<TextInput input-type="text" :if-required="true" label="First Name" place-holder="" v-model="profile_firstName"/>
				<TextInput input-type="text" :if-required="true" label="Last Name" place-holder="" v-model="profile_lastName"/>
				<!-- <TextInput input-type="email" :if-required="true" label="Email" place-holder="" v-model="profile_email"/> -->
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
import { getUserAutomatically } from '../../../composables/UserController';

const { userData, updateUserData } = getUserAutomatically()
const profile_firstName = ref(userData.value?.firstname!)
const profile_lastName = ref(userData.value?.lastname!)
const profile_email = ref(userData.value?.email!)
const profile_phone = ref(String(userData.value?.phone!))


const submitForm = () => {
	// console.log(profile_firstName.value, profile_lastName.value, profile_phone.value)
	updateUserData({firstname: profile_firstName.value, lastname: profile_lastName.value, phone: profile_phone.value})
}
const updates = computed(() => {
	return profile_firstName.value != userData.value?.firstname ||  profile_lastName.value != userData.value?.lastname ||  profile_email.value != userData.value?.email ||  profile_phone.value != String(userData.value?.phone) ? true : false
})
</script>
