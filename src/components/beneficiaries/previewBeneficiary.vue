<template>
	<div class="bene_card bg-[#FAFAFA] rounded-[12px] p-6 flex flex-col gap-5 relative h-fit w-fit max-w-[300px]">
		<img :src="data.beneficiaryImage" class="w-[150px] h-[150px] rounded-full object-cover object-top mx-auto" alt=""/>
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
	</div>
</template>

<script setup lang="ts">
import Bene from '../../interface/typeBeneficiaries';
import { ref } from 'vue';

const props = defineProps<{
	data: Bene
}>()
// const data = ref<Bene>(props.bene_data[0])

</script>

<style scoped>
div.bene_card{
	box-shadow: 7px 7px 15px rgba(196, 196, 196, 0.15), -7px -7px 15px rgba(196, 196, 196, 0.15);
}
</style>