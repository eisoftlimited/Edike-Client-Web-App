<template>
	<div class="bene_card bg-[#FFFFFF] rounded-xl flex flex-col sm:flex-row items-start gap-6 p-4 w-full max-w-[480px] cursor-pointer md:hover:bg-stroke" @click="showMore">
		<img :src="data.beneficiaryDetails[0].beneficiaryImage" class="mx-auto w-[150px] h-[150px] rounded-full object-cover object-top"  alt="">
		<div class="flex flex-col gap-3 mx-auto w-full max-w-fit">
			<div class="flex items-start gap-3">
				<p class="small-text font-medium text-[#3F434A] min-w-[100px]">Loan Amount</p>
				<p class="small-text text-[#8A9099] w-full">N {{ formatNumber(String(data.beneficiary_amount)) }}</p>
			</div>
			<div class="flex items-start gap-3">
				<p class="small-text font-medium text-[#3F434A] min-w-[100px]">Loan Tenure</p>
				<p class="small-text text-[#8A9099] w-full">{{ data.beneficiary_duration }} Month(s)</p>
			</div>
			<div class="flex  items-start gap-3">
				<p class="small-text font-medium text-[#3F434A] min-w-[100px]">Beneficiary</p>
				<p class="small-text text-[#8A9099] w-full">{{ data.beneficiaryDetails[0].lastname }} {{ data.beneficiaryDetails[0].firstname }}</p>
			</div>
			<div class="flex items-start gap-3">
				<p class="small-text font-medium text-[#3F434A] min-w-[100px]">School</p>
				<p class="small-text text-[#8A9099] w-full">{{ data.beneficiaryDetails[0].school }}</p>
			</div>
			<div class="flex items-start gap-3">
				<p class="small-text font-medium text-[#3F434A] min-w-[100px]">Class</p>
				<p class="small-text text-[#8A9099] w-full">{{ data.beneficiaryDetails[0].studentClass }}</p>
			</div>
			<div class="flex items-start gap-3">
				<p class="small-text font-medium text-[#3F434A] min-w-[100px]">Loan Status</p>
				<p class="small-text font-bold w-full" :class="{'text-primary' : data?.status == 'ongoing', 'text-[#F9AC3B]' : data?.status != 'ongoing'}">{{ data.status }}</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Loan from '../../interface/typeLoan';
import { useSideModal } from '../../composables/SideModal';
import { useGlobalModal } from '../../composables/GlobalModal';
import LoanPreview from '../../components/loan/loanPreview.vue'
import { useUtils } from '../../composables/Utils';

const { openModal, closeModal } = useGlobalModal()
const { openSideModal, closeSideModal } = useSideModal()
const { getSize } =  useUtils()
const props = defineProps<{
	data: Loan
}>()


const showMore = () => {
	if(getSize() > 1024) {
		openSideModal(LoanPreview, props.data)
	} else {
		openModal(LoanPreview, undefined, props.data)
	}
}

function formatNumber(n:string) {
		// format number 1000000 to 1,234,567
		return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	}
</script>


<style scoped>
div.bene_card{
	box-shadow: 7px 7px 15px rgba(196, 196, 196, 0.15), -7px -7px 15px rgba(196, 196, 196, 0.15);
}
</style>
