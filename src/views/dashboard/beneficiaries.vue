<template>
	<div class="page flex flex-col md:flex-row gap-4 pb-[30px] relative items-center lg:items-start">
		<BeneficiaryCard/>
		<BeneficiaryCard/>
		<button class="fixed bottom-2 right-2 btn-short md:hidden flex items-center gap-3 justify-center" @click="openModal(smallBeneficiaryForm, 'Add Beneficiaries')">
			<img src="../../assets/img/icons/dashboard/plus_white.svg" alt=""/>
			Add
		</button>
		<beneficiaryOverlay/>
	</div>
</template>

<script setup lang="ts">
import BeneficiaryCard from '../../components/beneficiaries/beneficiaryCard.vue';
import beneficiaryOverlay from '../../components/beneficiaries/beneficiaryOverlay.vue';
import smallBeneficiaryForm from '../../components/beneficiaries/smallBeneficiaryForm.vue';
import { useGlobalModal } from '../../composables/GlobalModal';

const { openModal } = useGlobalModal()
</script>

<style scoped>
.page{
	height: calc(100% - 140px);
	overflow: auto;
}
</style>