<template>
	<div class="absolute top-0 left-0 bottom-0 right-0 bg-overlay flex" v-if="beneficiaryModal">
		<div class="over w-full h-full bg-transparent" @click="closeBeneficiaryModal"></div>
		<beneficiaryForm :type="beneficiaryModalType"/>
	</div>
</template>

<script setup lang="ts">
import { useBeneficiaries } from '../../composables/Beneficiaries';
import beneficiaryForm from './beneficiaryForm.vue';



const { beneficiaryModal, beneficiaryModalType, closeBeneficiaryModal } = useBeneficiaries()

</script>

<style scoped>
.over{
	max-width: calc(100% - 500px);
}
</style>