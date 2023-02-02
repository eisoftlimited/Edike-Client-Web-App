<template>
	<form class="flex flex-col gap-4">
		<h5 class="heading5">PROVIDE NEXT OF KIN DETAILS</h5>
		<textInput input-type="text" :if-required="true" place-holder="" label="First name" v-model="firstName" />
		<textInput input-type="text" :if-required="true" place-holder="" label="Last name" v-model="lastName" />
		<textInput input-type="text" :if-required="true" place-holder="" label="Address" v-model="address" />
		<phoneInput v-model="phone"/>
		<button class="btn-short" type="submit">Submit</button>
	</form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import textInput from '../utils/textInput.vue';
import phoneInput from '../utils/phoneInput.vue';

const firstName = ref('')
const lastName = ref('')
const address = ref('')
const phone = ref('')
</script>