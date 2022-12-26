<template>
	<div class="page pb-[30px] relative border">
		
		<div class="flex flex-col md:flex-row gap-4 items-center lg:items-start flex-wrap" v-if="beneficiaries.length">
			<BeneficiaryCard v-for="item in beneficiaries" :key="item._id" :data="item"/>
		</div>
		<div v-else class="h-full w-full flex items-center justify-center overflow-auto">
			<div class="flex flex-col gap-4 items-center">
				<img class="max-w-[60%]" src="../../assets/img/illustrations/empty_beneficiary.svg" alt="">
				<div class="flex flex-col items-center gap-2 max-w-[400px] mx-auto">
					<h4 class="heading4 text-center">No Beneficiaries Added</h4>
					<p class="text-[#404040] text-center">You do not have any beneficairies on your account yet, Please add a beneficiary to proceed.</p>
					<button class="btn-medium hidden lg:block" @click="openSideModal(beneficiaryForm)">Add Beneficiary</button>
				</div>
			</div>
		</div>
		
		<button class="fixed bottom-2 right-2 btn-short md:hidden flex items-center gap-3 justify-center" @click="openModal(smallBeneficiaryForm, 'Add Beneficiaries')">
			<img src="../../assets/img/icons/dashboard/plus_white.svg" alt=""/>
			Add
		</button>
	</div>
</template>

<script setup lang="ts">
import BeneficiaryCard from '../../components/beneficiaries/beneficiaryCard.vue';
import smallBeneficiaryForm from '../../components/beneficiaries/smallBeneficiaryForm.vue';
import { useGlobalModal } from '../../composables/GlobalModal';
import { useBackendBeneficiaries } from '../../composables/Beneficiaries';
import { useSideModal } from '../../composables/SideModal';
import beneficiaryForm from '../../components/beneficiaries/beneficiaryForm.vue';

const { openModal } = useGlobalModal()
const { beneficiaries } =  useBackendBeneficiaries()
const { openSideModal } = useSideModal()
</script>

<style scoped>
.page{
	height: calc(100% - 140px);
	overflow: auto;
}
</style>