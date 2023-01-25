<template>
	<div class="p-6 flex flex-col gap-6">
		<p class="text-[22px] font-medium">Loan Details</p>
		<div>
			<img :src="data?.beneficiaryDetails[0].beneficiaryImage" class="mx-auto w-[150px] h-[150px] rounded-full object-cover object-top"  alt="">
		</div>
		
		<div class="flex flex-col gap-3 mx-auto w-full ">
			<p class="normal-text font-bold">Loan Details</p>
			<dataBox key-data="Loan Status" :key-value="`${data?.status}`" :color="data?.status == 'completed' ? 'text-success' : data?.status == 'declined' ? 'text-error' : 'text-[#F9AC3B]'" />
			<dataBox key-data="Loan Amount" :key-value="`N ${formatNumber(String(data?.beneficiary_amount))}`" />
			<dataBox key-data="Loan Duration" :key-value="`${data?.beneficiary_duration} Month(s)`" />
			<dataBox v-if="data?.status == 'ongoing' || data?.status == 'completed'"
			 key-data="Date Disbursed" :key-value="`${formatDate(data?.dateDisbursed!)}`" />
		</div>

		<div class="flex flex-col gap-3 mx-auto w-full " v-if="data?.status == 'ongoing' || data?.status == 'completed'">
			<p class="normal-text font-bold">Loan Payback</p>
			<dataBox key-data="Total Payback" :key-value="data?.totalPayback!" />
			<!-- <dataBox key-data="Payment Balance" :key-value="`coming`" /> -->
			<dataBox key-data="Payment Date" :key-value="`${formatDate(data?.paymentDate!)}`" />
			<dataBox key-data="Next Payment" :key-value="`${data?.nextPayment}`" />
			
		</div>

		<div class="flex flex-col gap-3 mx-auto w-full ">
			<p class="normal-text font-bold">Beneficiary</p>
			<dataBox key-data="Beneficiary" :key-value="`${data?.beneficiaryDetails[0].lastname} ${data?.beneficiaryDetails[0].firstname}`" />
			<dataBox key-data="School" :key-value="`${data?.beneficiaryDetails[0].school}`" />
			<dataBox key-data="Class" :key-value="`${data?.beneficiaryDetails[0].studentClass}`" />
			
		</div>
	</div>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	import { useSideModal } from '../../composables/SideModal';
	import { useGlobalModal } from '../../composables/GlobalModal';
	import Loan from '../../interface/typeLoan';
	import { useUtils } from '../../composables/Utils';
	import dataBox from './dataBox.vue'

	const data = ref<Loan>()
	const { sideModalProps } = useSideModal()
	const { globalModalProps } = useGlobalModal()
	const { formatDate } = useUtils()

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