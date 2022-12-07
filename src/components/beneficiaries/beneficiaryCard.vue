<template>
	<div class="bene_card bg-[#FAFAFA] rounded-[12px] p-6 flex flex-col gap-5 relative h-fit w-fit">
		<div class="flex w-full justify-end">
			<button class="w-fit py-2" @click="modifyCard = !modifyCard">
				<img src="@/assets/img/icons/dots.svg" alt="">
			</button>
		</div>
		<img src="@/assets/img/illustrations/female_avatar.svg" alt="">
		<div class="flex gap-3 w-fit mx-auto">
			<div class="flex flex-col gap-3">
				<p class="small-text font-medium text-[#3F434A]">Name</p>
				<p class="small-text font-medium text-[#3F434A]">Date of Birth</p>
				<p class="small-text font-medium text-[#3F434A]">School</p>
				<p class="small-text font-medium text-[#3F434A]">Class</p>
			</div>
			<div class="flex flex-col gap-3">
				<p class="small-text text-[#8A9099]">Tiaraoluwa Ogunjobi</p>
				<p class="small-text text-[#8A9099]">1 March 2002</p>
				<p class="small-text text-[#8A9099]">Elbethel School</p>
				<p class="small-text text-[#8A9099]">Basic 2</p>
			</div>
		</div>
		<div class="absolute right-6 top-14 flex flex-col gap-4 p-4 rounded-lg bg-[#FAFAFA] w-[130px]" v-if="modifyCard">
			<button class="flex items-center gap-4 small-text text-darkGray" @click="editBeneficiary">
				<img src="../../assets/img/icons/edit.svg" alt="">
				Edit
			</button>
			<hr class="border border-[#E8E9EB]"/>
			<button class="flex items-center gap-4 small-text text-error">
				<img src="../../assets/img/icons/delete.svg" alt="">
				Delete
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useBeneficiaries } from '../../composables/Beneficiaries';

const modifyCard = ref(false)
const { openEditBeneficiaries } = useBeneficiaries()

const editBeneficiary = () => {
	openEditBeneficiaries()
	modifyCard.value = false
}
</script>

<style scoped>
div.bene_card{
	box-shadow: 7px 7px 15px rgba(196, 196, 196, 0.15), -7px -7px 15px rgba(196, 196, 196, 0.15);
}
</style>