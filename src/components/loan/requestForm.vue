<template>
	<form class=" flex flex-col gap-[50px] w-full max-w-[400px] mx-auto lg:mx-0" @submit.prevent="previewLoan">
		<div class="flex flex-col gap-2">
			<h5 class="heading5">Request Loan</h5>
			<p class="small-text text-[#404040]">Please fill out the form below to request for your loan.</p>
		</div>

		<div class="flex flex-col gap-4">
			<SelectBeneficiary v-model="bene_id"/>
			<AmountInput v-model="amount"/>
			<DurationInput v-model="duration"/>
			<Upload v-model="billImage"  title="Upload Bill" accept="Accepted file type is image" info="please upload the bill provided by the school" accept-type="image/x-png,image/jpeg" :drop-type="['image/x-png','image/jpeg']"/>
		</div>
		
		<div class="flex gap-4 items-center justify-between">
			<button type="button" @click="closeLoanRequest"  class="btn-short bg-transparent text-primary">Cancel</button>
			<button type="submit" :disabled="!enableLoanButton" class="btn-short">Proceed</button>
		</div>
		<!-- <requestLoanPreview/> -->
	</form>
	
</template>

<script setup lang="ts">
import {ref } from 'vue'
import SelectBeneficiary from '../utils/selectBeneficiary.vue';
import AmountInput from '../utils/amountInput.vue';
import DurationInput from '../utils/durationInput.vue';
import Upload from '../utils/upload.vue'
import { useLoan } from '../../composables/LoanController';
import requestLoanPreview from './requestLoanPreview.vue'

const { bene_id, amount, duration, billImage, enableLoanButton, requestLoan, closeLoanRequest, clearVariables, previewLoan } = useLoan()
clearVariables()
</script>