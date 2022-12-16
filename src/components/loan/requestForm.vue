<template>
	<form class=" flex flex-col gap-[50px] w-full max-w-[400px] mx-auto">
		<div class="flex flex-col gap-2">
			<h5 class="heading5">Request Loan</h5>
			<p class="small-text text-[#404040]">Please fill out the form below to request for your loan.</p>
		</div>

		<div class="flex flex-col gap-4">
			<SelectBeneficiary v-model="bene"/>
			<AmountInput v-model="amount"/>
		</div>
	</form>
</template>

<script setup lang="ts">
import {ref } from 'vue'
import SelectBeneficiary from '../utils/selectBeneficiary.vue';
import AmountInput from '../utils/amountInput.vue';


const bene = ref('')
const amount = ref('')
</script>