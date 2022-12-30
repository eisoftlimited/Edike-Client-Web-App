<template>
	<div class="p-6 flex flex-col gap-6">
		<p class="text-[22px] font-medium">Loan Details</p>
		<div>
			<img :src="data?.beneficiaryDetails[0].beneficiaryImage" class="mx-auto w-[150px] h-[150px] rounded-full object-cover object-top"  alt="">
		</div>
		
		<div class="flex flex-col gap-3 mx-auto w-full ">
			<div class="flex items-start gap-3">
				<p class="small-text font-medium text-[#3F434A] min-w-[150px]">Loan Amount</p>
				<p class="small-text text-[#8A9099] w-full">N {{ formatNumber(String(data?.beneficiary_amount)) }}</p>
			</div>
			<div class="flex items-start gap-3">
				<p class="small-text font-medium text-[#3F434A] min-w-[150px]">Loan Tenure</p>
				<p class="small-text text-[#8A9099] w-full">{{ data?.beneficiary_duration }} Month(s)</p>
			</div>
			<div class="flex  items-start gap-3">
				<p class="small-text font-medium text-[#3F434A] min-w-[150px]">Beneficiary</p>
				<p class="small-text text-[#8A9099] w-full">{{ data?.beneficiaryDetails[0].lastname }} {{ data?.beneficiaryDetails[0].firstname }}</p>
			</div>
			<div class="flex items-start gap-3">
				<p class="small-text font-medium text-[#3F434A] min-w-[150px]">School</p>
				<p class="small-text text-[#8A9099] w-full">{{ data?.beneficiaryDetails[0].school }}</p>
			</div>
			<div class="flex items-start gap-3">
				<p class="small-text font-medium text-[#3F434A] min-w-[150px]">Class</p>
				<p class="small-text text-[#8A9099] w-full">{{ data?.beneficiaryDetails[0].studentClass }}</p>
			</div>
			<div class="flex items-start gap-3">
				<p class="small-text font-medium text-[#3F434A] min-w-[150px]">Loan Status</p>
				<p class="small-text font-bold text-[#F9AC3B] w-full">{{ data?.status }}</p>
			</div>
			<div class="flex items-start gap-3">
				<p class="small-text font-medium text-[#3F434A] min-w-[150px]">Payment Balance</p>
				<p class="small-text text-[#8A9099] w-full">N {{ data?.beneficiary_amount }}</p>
			</div>
			<div class="flex items-start gap-3">
				<p class="small-text font-medium text-[#3F434A] min-w-[150px]">Next Payment</p>
				<p class="small-text text-[#8A9099] w-full">{{ `${new Date(data?.createdAt!).getFullYear()}-${new Date(data?.createdAt!).getMonth()}-${new Date(data?.createdAt!).getDate()}` }}</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	import { useSideModal } from '../../composables/SideModal';
	import { useGlobalModal } from '../../composables/GlobalModal';
	import Loan from '../../interface/typeLoan';

	const data = ref<Loan>()
	const { sideModalProps } = useSideModal()
	const { globalModalProps } = useGlobalModal()

	if(globalModalProps.value == undefined) {
		data.value = sideModalProps.value as Loan
	} else {
		data.value = globalModalProps.value as Loan
	}

	function formatNumber(n:string) {
		// format number 1000000 to 1,234,567
		return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	}
	
</script>