<template>
	<form class=" flex flex-col gap-[50px] w-full max-w-[400px] mx-auto lg:mx-0" @submit.prevent="requestLoan">
		<div class="flex flex-col gap-2">
			<h5 class="heading5">Request Loan</h5>
			<p class="small-text text-[#404040]">Please fill out the form below to request for your loan.</p>
		</div>

		<div class="flex flex-col gap-4">
			<SelectBeneficiary v-model="bene_id"/>
			<AmountInput v-model="amount"/>
			<DurationInput v-model="duration"/>
			<Upload v-model="(billImage as File)"  title="Upload Bill" accept="Accepted file type include Doc, docx" info="please upload the bill provided by the school" accept-type="application/msword" :drop-type="['application/msword']"/>
		</div>
		
		<div class="flex gap-4 items-center justify-between">
			<button type="button" @click="requestLoanStatus = false"  class="btn-short bg-transparent text-primary">Cancel</button>
			<button type="submit" :disabled="!enableLoanButton" class="btn-short">Submit</button>
		</div>
	</form>
</template>

<script setup lang="ts">
import {ref } from 'vue'
import SelectBeneficiary from '../utils/selectBeneficiary.vue';
import AmountInput from '../utils/amountInput.vue';
import DurationInput from '../utils/durationInput.vue';
import Upload from '../utils/upload.vue'
import { useLoan } from '../../composables/LoanController';

const { bene_id, amount, duration, billImage, enableLoanButton, requestLoan, requestLoanStatus } = useLoan()
</script>