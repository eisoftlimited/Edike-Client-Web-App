<template>
	<onboarding-layout>
		<div class="flex flex-col gap-8 py-6 md:flex-row md:items-center">
			<img src="@/assets/img/illustrations/add_beneficiary.svg" class="w-1/2 hidden lg:flex" alt="" />
			<FormCard v-if="true">
				<div class="flex flex-col gap-2">
					<h4 class="heading5 md:heading4 text-center text-boldText">One Last Step</h4>
					<p class="small-text text-[#404040] text-center">Please add a beneficiary. This would be the details
						of your ward for which you would like us to make the fees payment</p>
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
					<p class="normal-text text-primary w-full max-w-fit font-medium">I’ll do this later</p>
					<button class="btn-short" >Save</button>
				</div>
			</FormCard>

			<FormCard v-if="false">
				<div class="flex flex-col gap-2">
					<h4 class="heading5 md:heading4 text-center text-boldText">One Last Step</h4>
					<p class="small-text text-[#404040] text-center">Please add a beneficiary. This would be the details
						of your ward for which you would like us to make the fees payment</p>
				</div>
				<div class="flex flex-col md:flex-row gap-4 items-center justify-between">
					<BeneficiaryCard/>
					<div class="w-[80px] h-[80px] rounded border-2 border-stroke border-dotted flex items-center justify-center">
						<img src="../../assets/img/icons/plus.svg" alt="">
					</div>
				</div>
				<div class="flex gap-4 items-center justify-between">
					<p class="normal-text text-primary w-full max-w-fit font-medium opacity-30">I’ll do this later</p>
					<button class="btn-short w-fit px-3">Go to Dashbaord</button>
				</div>
			</FormCard>

			<FormCard v-if="false">
				<div class="flex flex-col gap-2">
					<h4 class="heading5 md:heading4 text-center text-boldText">One Last Step</h4>
					<p class="small-text text-[#404040] text-center">Please add a beneficiary. This would be the details
						of your ward for which you would like us to make the fees payment</p>
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
					<p class="normal-text text-primary w-full max-w-fit font-medium">Cancel</p>
					<button class="btn-short" >Save</button>
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
import DateComp from '../../components/utils/dateComp.vue';
import BeneficiaryCard from '../../components/beneficiaries/beneficiaryCard.vue';

const firstName = ref('')
const lastName = ref('')
const classLevel = ref('')
const schoolName = ref('')
const gender = ref('')
const classes = ref(['Nursery 1', 'Nursery 2', 'Basic 1', 'Basic 2', 'Basic 3', 'Basic 4', 'Basic 5'])
const schools = ref(['El- Bethel Schools', 'Gem Stars Private School', 'St. Anthonio Junior School', 'Grace Group of Schools', 'Hope International Group of Schools'])
</script>