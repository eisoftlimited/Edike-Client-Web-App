<template>
	<div class="h-auto bg-white w-full flex flex-col gap-[40px]">
		<div class="flex flex-col gap-2">
			<h4 class="heading5 md:heading4 text-boldText">{{sideModalProps == undefined ? 'Add New Beneficiary' : 'Edit Beneficiary'}}</h4>
			<p class="small-text text-[#404040]">Please add a beneficiary. This would be the details of your ward for
				which you would like us to make the fees payment</p>
		</div>
		<form class="flex flex-col gap-5" @submit.prevent="submitForm">
			<div class="flex gap-2">
				<textInput class="w-1/2" v-model.trim="firstName" :if-required="true" label="First Name"
					place-holder="Enter text here..." input-type="text" />
				<textInput class="w-1/2" v-model.trim="lastName" :if-required="true" label="Last Name"
					place-holder="Enter text here..." input-type="text" />
			</div>
			<SelectComp :isSchool="true" v-model="school" :toSelect="schools" label="Name of school" selectType="school" />
			<SelectComp v-model="studentClass" :toSelect="classes" label="Class" selectType="class" />
			<SelectComp v-model="gender" label="Gender" selectType="gender" />
			<DateComp v-model="dob"/>
			<Upload v-model="imageFile" title="Upload ID card image" accept="Accepted file is image" info="" accept-type="image/x-png,image/jpeg" :drop-type="['image/x-png','image/jpeg']"/>
			
			<button type="submit" class="hide hidden">submit</button>
		</form>
		<div class="flex gap-4 items-center justify-between">
			<button class="btn-short bg-transparent text-primary" @click="closeSideModal">Cancel</button>
			<button class="btn-short" @click="invokeSubmit" :disabled="!enableSaveButton">Save</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import textInput from '@/components/utils/textInput.vue';
import SelectComp from '@/components/utils/selectComp.vue';
import DateComp from '@/components/utils/dateComp.vue';
import Upload from '@/components/utils/upload.vue'
import { useDemos } from '../../composables/Demos';
import { useBeneficiaries } from '../../composables/Beneficiaries';
import { useSideModal } from '../../composables/SideModal';


const { firstName, lastName, gender, dob, school,studentClass, addBeneficiaries,
	updateBeneficiaries, enableSaveButton, imageFile } = useBeneficiaries()
const { classes, schools } = useDemos()
const { sideModalProps, closeSideModal } = useSideModal()

const submitForm = () => {
	if(sideModalProps.value == undefined) {
		addBeneficiaries()
	} else {
		updateBeneficiaries(sideModalProps.value as string)
	}
}

const invokeSubmit = () => {
	let btn:HTMLButtonElement = document.querySelector('.hide')!
	btn.click()
}

</script>