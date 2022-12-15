<template>
	<div class="py-2 px-1 overflow-auto h-full bg-white w-full max-w-[500px] flex flex-col gap-[40px]">
		<div class="flex flex-col gap-2">
			<p class="small-text text-[#404040]">Please add a beneficiary. This would be the details of your ward for
				which you would like us to make the fees payment</p>
		</div>
		<form class="flex flex-col gap-5">
			<div class="flex gap-2">
				<textInput class="w-1/2" v-model.trim="firstName" :if-required="true" label="First Name"
					place-holder="Enter text here..." input-type="text" />
				<textInput class="w-1/2" v-model.trim="lastName" :if-required="true" label="Last Name"
					place-holder="Enter text here..." input-type="text" />
			</div>
			<SelectComp :isSchool="true" v-model="schoolName" :toSelect="schools" label="Name of school"
				selectType="school" />
			<SelectComp v-model="classLevel" :toSelect="classes" label="Class" selectType="class" />
			<SelectComp v-model="gender" label="Gender" selectType="gender" />
			<DateComp />
		</form>
		<div class="flex gap-4 items-center justify-between">
			<button class="btn-short bg-transparent text-primary" @click="closeModal">Cancel</button>
			<button class="btn-short">Save</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import textInput from '@/components/utils/textInput.vue';
import SelectComp from '@/components/utils/selectComp.vue';
import DateComp from '@/components/utils/dateComp.vue';
import { useDemos } from '../../composables/Demos';
import { useGlobalModal } from '../../composables/GlobalModal';

defineProps<{
	type: 'add' | 'edit'
}>()

const { closeModal } = useGlobalModal()
const { classes, schools } = useDemos()
const firstName = ref('')
const lastName = ref('')
const schoolName = ref('')
const classLevel = ref('')
const gender = ref('')
</script>