<template>
	<div class="flex flex-col gap-4" v-if="rate">
		<div class="flex flex-col gap-1">
			<p class="small-text">Amount</p>
			<div class="h-[40px] border border-lightGray rounded-lg p-2">{{ formatNaira(Number(amount)) }}</div>
		</div>

		<div class="flex flex-col gap-1">
			<p class="small-text">Duration</p>
			<div class="h-[40px] border border-lightGray rounded-lg p-2">{{ duration }} month(s)</div>
		</div>

		<div class="flex flex-col gap-1">
			<p class="small-text">Installment Amount</p>
			<div class="h-[40px] border border-lightGray rounded-lg p-2">{{ formatNaira(Number((Number(amount)/Number(duration)).toFixed(2)) + Number(amount) * rate) }}</div>
		</div>

		
		<div class="flex flex-col gap-1">
			<p class="small-text">Total Payable</p>
			<div class="h-[40px] border border-lightGray rounded-lg p-2">{{ formatNaira(Number(Number(amount) + (Number(amount) * rate * Number(duration)))) }}</div>
		</div>
		
		<div class="flex flex-col gap-2">
			<p class="text-xs font-medium text-center">Note: Payment of school fees shall be made into beneficiaries school account details on the school bill you provided.</p>
			<p class="text-xs font-medium text-center">By submitting, you agree to <router-link to="/terms&conditions" class="text-primary">T&C’s</router-link> of edike.</p>
			<button class="btn-medium mx-auto" @click="requestLoan">Submit</button>
		</div>
	</div>
	<div v-else class="flex items-center justify-center h-[300px]">
		<spinner />
	</div>
</template>

<script setup lang="ts">
	import { onMounted } from 'vue';
	import { useInterest, rate } from '../../composables/Interest'
	import { useLoan } from '../../composables/LoanController';
	import {useUtils, formatNaira} from '../../composables/Utils'
	import spinner from '../utils/spinner.vue';

	const { formatNumber } = useUtils()
	const { amount, duration, requestLoan } = useLoan()

	onMounted(() => {
		useInterest()
	})
</script>