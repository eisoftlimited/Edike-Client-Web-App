<template>
	<div class="loan">
		<div class="bg-[#FFFFFF] rounded-xl py-10 px-5 flex flex-col gap-10 h-full overflow-auto">
			<div v-if="true" class="w-[90%] max-w-[400px] mx-auto h-auto flex flex-col items-center justify-center gap-6">
				<img src="../../assets/img/illustrations/empty_loan.svg" alt="">
				<div class="flex flex-col gap-2 items-center">
					<h4 class="heading4">No Loans Running</h4>
					<p class="small-text text-center">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
					<button class="btn-medium">Request Loan</button>
				</div>
			</div>

			<div class="flex items-center gap-[20px] justify-between" v-id="false">
				<requestForm/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import requestForm from '../../components/loan/requestForm.vue';
</script>

<style scoped>
.loan{
	height: calc(100% - 80px);
}
</style>