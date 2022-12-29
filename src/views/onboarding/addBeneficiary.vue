<template>
	<onboarding-layout>
		<div class="flex flex-col gap-8 py-6 md:flex-row md:items-center">
			<img src="@/assets/img/illustrations/add_beneficiary.svg" class="w-1/2  hidden lg:flex" alt="" />
			<FormCard v-if="beneficiaries.length < 1" >
				<div class="flex flex-col gap-2">
					<h4 class="heading5 md:heading4 text-center text-boldText">One Last Step</h4>
					<p class="small-text text-[#404040] text-center">Please add a beneficiary. This would be the details
						of your ward for which you would like us to make the fees payment</p>
				</div>
				<form class="flex flex-col gap-5" @submit.prevent="onboardAddBeneficiaries">
					<div class="flex gap-2">
						<textInput class="w-1/2" v-model="firstName" :if-required="true" label="First Name" place-holder="Enter text here..." input-type="text"/>
						<textInput class="w-1/2" v-model="lastName" :if-required="true" label="Last Name" place-holder="Enter text here..." input-type="text"/>
					</div>	
					<SelectComp :isSchool="true" v-model="school" :toSelect="schools" label="Name of school" selectType="school"/>
					<SelectComp v-model="studentClass" :toSelect="classes" label="Class" selectType="class"/>
					<SelectComp v-model="gender"  label="Gender" selectType="gender"/>
					<DateComp v-model="dob"/>
					<Upload v-model="imageFile" title="Upload ID card image" accept="Accepted file is image" info="" accept-type="image/x-png,image/jpeg" :drop-type="['image/x-png','image/jpeg']"/>
					<button type="submit" class="hide hidden">submit</button>
				</form>
				<div class="flex gap-4 items-center justify-between">
					<router-link class="normal-text text-primary w-full max-w-fit font-medium" to="/dashboard">I’ll do this later</router-link>
					<button class="btn-short" :disabled="!enableSaveButton" @click="invokeSubmit">Save</button>
				</div>
			</FormCard>

			<FormCard class="px-3 md:px-3 lg:px-3 " v-else>
				<div class="flex max-w-[85%] mx-auto flex-col gap-2">
					<h4 class="heading5 md:heading4 text-center text-boldText">One Last Step</h4>
					<p class="small-text text-[#404040] text-center">Please add a beneficiary. This would be the details
						of your ward for which you would like us to make the fees payment</p>
				</div>
				<div class="flex flex-col md:flex-row gap-4 items-center justify-between">
					<div class=" md:w-[calc(100%-100px)] max-w-[320px] overflow-auto flex gap-4">
						<PreviewBeneficiary class="w-full min-w-[250px]" v-for="item in beneficiaries" :key="item._id" :data="item"/>
					</div>
					
					<div @click="beneficiaries = []" class="w-[80px] h-[80px] cursor-pointer rounded border-2 border-stroke border-dotted flex items-center justify-center">
						<img src="../../assets/img/icons/plus.svg" alt="">
					</div>
				</div>
				<div class="flex gap-4 items-center justify-between w-full max-w-[400px] mx-auto">
					<router-link to="/dashboard" class="normal-text text-primary w-full max-w-fit font-medium opacity-30">I’ll do this later</router-link>
					<router-link to="/dashboard" class="btn-short w-fit px-3 flex items-center justify-center">Go to Dashbaord</router-link>
				</div>
			</FormCard>
		</div>
	</onboarding-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FormCard from '../../components/utils/formCard.vue';
import textInput from '../../components/utils/textInput.vue';
import SelectComp from '@/components/utils/selectComp.vue';
import Upload from '@/components/utils/upload.vue'
import DateComp from '../../components/utils/dateComp.vue';
import { useDemos } from '../../composables/Demos';
import { useBeneficiaries } from '../../composables/Beneficiaries';
import PreviewBeneficiary from '../../components/beneficiaries/previewBeneficiary.vue';

const { classes, schools } = useDemos()
const { firstName, lastName, studentClass, school, gender, dob, onboardAddBeneficiaries, enableSaveButton, beneficiaries, imageFile } = useBeneficiaries()


const invokeSubmit = () => {
	let btn:HTMLButtonElement = document.querySelector('.hide')!
	btn.click()
}

</script>