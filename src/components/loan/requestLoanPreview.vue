<template>
	<div class="flex flex-col gap-4">
		<div class="flex flex-col gap-1">
			<p class="small-text">Amount</p>
			<div class="h-[40px] border border-lightGray rounded-lg p-2">NGN {{ formatNumber(amount) }}</div>
		</div>

		<div class="flex flex-col gap-1">
			<p class="small-text">Duration</p>
			<div class="h-[40px] border border-lightGray rounded-lg p-2">{{ duration }} month(s)</div>
		</div>

		<div class="flex flex-col gap-1">
			<p class="small-text">Installment Amount</p>
			<div class="h-[40px] border border-lightGray rounded-lg p-2">NGN {{ Number((Number(amount)/Number(duration)).toFixed(2)) + Number(amount) * (5/100) }}</div>
		</div>

		<div class="flex flex-col gap-1">
			<p class="small-text">Total Payable</p>
			<div class="h-[40px] border border-lightGray rounded-lg p-2">NGN {{ formatNumber(String(Number(amount) + (Number(amount) * (5/100) * Number(duration)))) }}</div>
		</div>
		<button class="btn-medium mx-auto" @click="requestLoan">Submit</button>
		
	</div>
</template>

<script setup lang="ts">
	import { useLoan } from '../../composables/LoanController';
	import {useUtils} from '../../composables/Utils'

	const { formatNumber } = useUtils()
	const { amount, duration, requestLoan } = useLoan()
</script>