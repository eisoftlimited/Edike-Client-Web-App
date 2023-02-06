<template>
	<form class="flex flex-col gap-4" @submit.prevent="submitForm">
		<h5 class="heading5">PROVIDE NEXT OF KIN DETAILS</h5>
		<textInput input-type="text" :if-required="true" place-holder="" label="First name" v-model.trim="firstName" />
		<textInput input-type="text" :if-required="true" place-holder="" label="Last name" v-model.trim="lastName" />
		<textInput input-type="text" :if-required="true" place-holder="" label="Address" v-model.trim="address" />
		<phoneInput v-model="phone"/>
		<button class="btn-short" type="submit">Submit</button>
	</form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import textInput from '../utils/textInput.vue';
import phoneInput from '../utils/phoneInput.vue';
import { useFetch } from '../../composables/FetchController';

const { makeFetchWithAuthAndBody } = useFetch()
const firstName = ref('')
const lastName = ref('')
const address = ref('')
const phone = ref('')


const submitForm = () => {
	console.log(firstName.value, lastName.value, address.value, phone.value)
	makeFetchWithAuthAndBody('POST', 'auth/user/next-of-kin/details', {
		nextofkinfirstname: firstName.value,
		nextofkinlastname: lastName.value,
		nextofkinaddress: address.value,
		nextofkinphonenumber: phone.value
	})
	.then(res => res.json())
	.then(data => {
		console.log(data)
	})
	.catch(err => {
		console.log(err)
	})
}

</script>