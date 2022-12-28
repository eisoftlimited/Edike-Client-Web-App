<template>
	<div class="loan">
		
		<div class="bg-[#FFFFFF] rounded-xl py-10 px-5 lg:px-16 flex flex-col gap-10 h-full overflow-auto ">
			<div v-if="!requestLoanStatus && !currentLoan.length"
				class="w-[90%] max-w-[400px] mx-auto h-auto flex flex-col items-center justify-center gap-6">
				<img src="../../assets/img/illustrations/empty_loan.svg" alt="">
				<div class="flex flex-col gap-2 items-center">
					<h4 class=" heading5 md:heading4  text-center">No Loans Running</h4>
					<p class="small-text text-center">Lorem ipsum is placeholder text commonly used in the graphic,
						print, and publishing industries for previewing layouts and visual mockups.</p>
					<button class="btn-medium" @click="requestLoanForm">Request Loan</button>
				</div>
			</div>

			<div class="flex flex-col gap-4 items-center w-full max-w-[500px] mx-auto md:mx-0" v-if="currentLoan.length && !requestLoanStatus">
				<CurrentLoanCard v-for="item in currentLoan" :key="item._id" :data="item"/>
				<button class="btn-medium" @click="requestLoanForm">Request Loan</button>
			</div>

			<div class="flex items-center gap-[20px] justify-between" v-if="requestLoanStatus">
				<requestForm />
				<div class="hidden lg:flex w-1/2 max-w-[430px]">
					<div class="flex flex-col gap-2 " v-if="!bene_id">
						<h4 class="heading4 text-center">No Beneficiaries Selected</h4>
						<p class="small-text text-center">Lorem ipsum is placeholder text commonly used in the graphic,
							print, and publishing industries for previewing layouts and visual mockups.</p>
					</div>
					<div v-else>
						<previewBeneficiary v-if="selectedBeneficiary[0]"  :data="selectedBeneficiary[0]"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import requestForm from '../../components/loan/requestForm.vue';
import { autoFetchLoan } from '../../composables/LoanController';
import previewBeneficiary from '../../components/beneficiaries/previewBeneficiary.vue';
import CurrentLoanCard from '../../components/loan/currentLoanCard.vue';

const { bene_id, selectedBeneficiary, currentLoan, requestLoanStatus, requestLoanForm } = autoFetchLoan()
requestLoanStatus.value = false
</script>

<style scoped>
.loan {
	height: calc(100% - 80px);
}
</style>