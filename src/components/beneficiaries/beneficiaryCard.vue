<template>
	<div class="bene_card bg-[#FAFAFA] rounded-[12px] p-6 flex flex-col gap-5 relative h-fit w-fit max-w-[300px]">
		<div class="flex w-full justify-end">
			<button class="w-fit py-2" @click="modifyCard = !modifyCard">
				<img src="@/assets/img/icons/dots.svg" alt="">
			</button>
		</div>
		<img v-if="data.gender == 'Female'" src="@/assets/img/illustrations/female_avatar.svg" alt=""/>
		<img v-if="data.gender == 'Male'" src="@/assets/img/illustrations/male_avatar.svg" alt=""/>
		<div class="flex flex-col gap-3 w-fit mx-auto">
			<div class="flex items-start gap-3">
				<p class="small-text font-medium text-[#3F434A] min-w-[100px]">Name</p>
				<p class="small-text text-[#8A9099] w-full">{{data.firstname}} {{data.lastname}}</p>
			</div>
			<div class="flex  items-start gap-3">
				<p class="small-text font-medium text-[#3F434A] min-w-[100px]">Date of Birth</p>
				<p class="small-text text-[#8A9099] w-full">{{data.dob}}</p>
			</div>
			<div class="flex items-start gap-3">
				<p class="small-text font-medium text-[#3F434A] min-w-[100px]">School</p>
				<p class="small-text text-[#8A9099] w-full">{{data.school}}</p>
			</div>
			<div class="flex items-start gap-3">
				<p class="small-text font-medium text-[#3F434A] min-w-[100px]">Class</p>
				<p class="small-text text-[#8A9099] w-full">{{data.studentClass}}</p>
			</div>
		</div>
		<div class="absolute right-6 top-14 flex flex-col gap-4 p-4 rounded-lg bg-[#FAFAFA] w-[130px]" v-if="modifyCard">
			<button class="flex md:hidden items-center gap-4 small-text text-darkGray" @click="editBeneficiarySmallScreen">
				<img src="../../assets/img/icons/edit.svg" alt="">
				Edit
			</button>
			<button class="hidden md:flex items-center gap-4 small-text text-darkGray" @click="editBeneficiary">
				<img src="../../assets/img/icons/edit.svg" alt="">
				Edit
			</button>
			<hr class="border border-[#E8E9EB]"/>
			<button class="flex items-center gap-4 small-text text-error" @click="deleteBeneficiaries(data._id)">
				<img src="../../assets/img/icons/delete.svg" alt="">
				Delete
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useBeneficiaries } from '../../composables/Beneficiaries';
import { useGlobalModal } from '../../composables/GlobalModal';
import smallBeneficiaryForm from './smallBeneficiaryForm.vue';
import Bene from '../../interface/typeBeneficiaries';

const props = defineProps<{
	data: Bene
}>()
const modifyCard = ref(false)
const { openBeneficiaryModal, toFetchId, deleteBeneficiaries, fetchBeneficiary } = useBeneficiaries()
const { openModal } = useGlobalModal()

const editBeneficiary = () => {
	toFetchId.value = props.data._id
	openBeneficiaryModal('edit')
	modifyCard.value = false
}

const editBeneficiarySmallScreen = () => {
	openModal(smallBeneficiaryForm, 'Edit Beneficiary', props.data._id, true)
	fetchBeneficiary(props.data._id)
	modifyCard.value = false
}
</script>

<style scoped>
div.bene_card{
	box-shadow: 7px 7px 15px rgba(196, 196, 196, 0.15), -7px -7px 15px rgba(196, 196, 196, 0.15);
}
</style>