<template>
	<div class="p-6 rounded-[10px] flex flex-col gap-4 w-full  bg-[#FFFFFF]">
		<div class="flex items-center justify-between">
			<p class="medium-text text-black font-bold">Recent Transactions</p>
			<p class="small-text text-darkGray flex items-center gap-3">View All
				<span><img src="../../assets/img/icons/dashboard/arrow_right.svg" alt=""></span>
			</p>
		</div>
		<div class="w-full overflow-x-auto">
			<table class="min-w-[700px] w-full" v-if="transactions.length">
				<tr class="w-full text-left small-text font-bold text-[#929EAE] h-[40px]">
					<th class="w-[40%]">DESCRIPTION</th>
					<th class="w-[20%]">TYPE</th>
					<th class="w-[20%]">AMOUNT</th>
					<th class="w-[20%]">DATE</th>
				</tr>
				<template >
					<tr v-for="item, index in transactions" class="small-text font-medium h-[40px]" :class="[index%2 != 1 ? 'bg-[#F8F8F8]' : '']">
						<td>{{ item.amount == '5000' ? 'Card Tokenization' : 'Loan Repayment' }}</td>
						<td class="text-error">Debit</td>
						<td>NGN {{ Number(item.amount)/100 }}</td>
						<td>{{ formatDate(item.paid_at) }}</td>
					</tr>
				</template>
				
				
			</table>
			<div v-else class="w-fit mx-auto flex flex-col gap-2">
				<img src="../../assets/img/illustrations/dashboard/no_transaction.svg" alt="">
				<p class="small-text text-[#929EAE] text-center">No Transactions to Display</p>
			</div>
		</div>
		
		
	</div>
</template>

<script setup lang="ts">
import { useUtils } from '../../composables/Utils';
import { fetchTransactions, transactions } from '../../composables/Transaction'

const { formatDate } = useUtils()
	fetchTransactions()
</script>