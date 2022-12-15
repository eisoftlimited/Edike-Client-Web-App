<template>
	<div class="page pb-[30px] relative ">
		
		<div class="flex flex-col md:flex-row gap-4 items-center lg:items-start flex-wrap" v-if="beneficiaries.length">
			<BeneficiaryCard v-for="item in beneficiaries" :key="item._id" :data="item"/>
		</div>
		<p v-else>no beneficiaries</p>
		
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
import { useBackendBeneficiaries } from '../../composables/Beneficiaries';

const { openModal } = useGlobalModal()
const { beneficiaries } =  useBackendBeneficiaries()
</script>

<style scoped>
.page{
	height: calc(100% - 140px);
	overflow: auto;
}
</style>