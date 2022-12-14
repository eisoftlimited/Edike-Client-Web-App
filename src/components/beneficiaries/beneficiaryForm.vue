<template>
	<div class="p-6 overflow-auto h-full bg-white w-full max-w-[500px] flex flex-col gap-[40px]">
		<div class="flex flex-col gap-2">
			<h4 class="heading5 md:heading4 text-boldText">{{type == 'add' ? 'Add New Beneficiary' : 'Edit Beneficiary'}}</h4>
			<p class="small-text text-[#404040]">Please add a beneficiary. This would be the details of your ward for
				which you would like us to make the fees payment</p>
		</div>
		<form class="flex flex-col gap-5" @submit.prevent="submitForm">
			<div class="flex gap-2">
				<textInput class="w-1/2" v-model="firstName" :if-required="true" label="First Name"
					place-holder="Enter text here..." input-type="text" />
				<textInput class="w-1/2" v-model="lastName" :if-required="true" label="Last Name"
					place-holder="Enter text here..." input-type="text" />
			</div>
			<SelectComp :isSchool="true" v-model="school" :toSelect="schools" label="Name of school" selectType="school" />
			<SelectComp v-model="studentClass" :toSelect="classes" label="Class" selectType="class" />
			<SelectComp v-model="gender" label="Gender" selectType="gender" />
			
			<DateComp v-model="dob"/>
			
			<button type="submit" class="hide hidden">submit</button>
		</form>
		<div class="flex gap-4 items-center justify-between">
			<button class="btn-short bg-transparent text-primary" @click="closeBeneficiaryModal">Cancel</button>
			<button class="btn-short" @click="invokeSubmit" :disabled="!enableSaveButton">Save</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import textInput from '@/components/utils/textInput.vue';
import SelectComp from '@/components/utils/selectComp.vue';
import DateComp from '@/components/utils/dateComp.vue';
import { useDemos } from '../../composables/Demos';
import { useBeneficiaries } from '../../composables/Beneficiaries';

const props = defineProps<{
	type: 'add' | 'edit'
}>()

const { closeBeneficiaryModal, firstName, lastName, gender, dob, school,studentClass, addBeneficiaries,
	updateBeneficiaries, enableSaveButton } = useBeneficiaries()
const { classes, schools } = useDemos()

const submitForm = () => {
	if(props.type == 'add') {
		addBeneficiaries()
	} else if(props.type == 'edit') {
		updateBeneficiaries()
	}
}

const invokeSubmit = () => {
	let btn:HTMLButtonElement = document.querySelector('.hide')!
	btn.click()
}

</script>