<template>
	<div class="page flex flex-col md:flex-row gap-4 pb-[30px] relative">
		<BeneficiaryCard/>
		<BeneficiaryCard/>
		<button class="fixed bottom-2 right-2 btn-short md:hidden flex items-center gap-3 justify-center" >
			<img src="../../assets/img/icons/dashboard/plus_white.svg" alt=""/>
			Add
		</button>
		<AddBeneficiary/>
		<EditBeneficiary/>
	</div>
</template>

<script setup lang="ts">
import BeneficiaryCard from '../../components/beneficiaries/beneficiaryCard.vue';
import AddBeneficiary from '../../components/beneficiaries/add.vue';
import EditBeneficiary from '../../components/beneficiaries/edit.vue';



</script>

<style scoped>
.page{
	height: calc(100% - 140px);
	overflow: auto;
}
</style>