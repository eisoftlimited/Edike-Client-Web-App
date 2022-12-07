<template>
	<div class="absolute top-0 left-0 bottom-0 right-0 bg-overlay flex justify-end" v-if="addBeneficiaryStatus">
			<div class="p-6 overflow-auto h-full bg-white w-[50%] max-w-[500px] flex flex-col gap-[40px]">
				<div class="flex flex-col gap-2">
					<h4 class="heading5 md:heading4 text-boldText">Add New Beneficiary</h4>
					<p class="small-text text-[#404040]">Please add a beneficiary. This would be the details of your ward for which you would like us to make the fees payment</p>
				</div>
				<form class="flex flex-col gap-5">
					<div class="flex gap-2">
						<textInput class="w-1/2" v-model="firstName" :if-required="true" label="First Name" place-holder="Enter text here..." input-type="text"/>
						<textInput class="w-1/2" v-model="lastName" :if-required="true" label="Last Name" place-holder="Enter text here..." input-type="text"/>
					</div>	
					<SelectComp :isSchool="true" v-model="schoolName" :toSelect="schools" label="Name of school" selectType="school"/>
					<SelectComp v-model="classLevel" :toSelect="classes" label="Class" selectType="class"/>
					<SelectComp v-model="gender"  label="Gender" selectType="gender"/>
					<DateComp/>
				</form> 
				<div class="flex gap-4 items-center justify-between">
					<p class="normal-text text-primary w-full max-w-fit font-medium cursor-pointer" @click="closeAddBeneficiaries">Cancel</p>
					<button class="btn-short" >Save</button>
				</div>
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


const firstName = ref('')
const lastName = ref('')
const schoolName = ref('')
const classLevel = ref('')
const gender = ref('')
const { addBeneficiaryStatus, closeAddBeneficiaries } = useBeneficiaries()
const { classes, schools } = useDemos()
</script>