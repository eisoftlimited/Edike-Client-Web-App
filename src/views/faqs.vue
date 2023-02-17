<template>
	<landing-layout>
		<div class="flex flex-col gap-8 py-4">
			<div class="flex flex-col gap-4 text-center text-[#120A00]">
				<h3 class="text-2xl md:text-3xl font-medium">Frequently Asked Questions</h3>
				<p class="small-text">Home / FAQs</p>
			</div>

			<div class="bg-[#ffffff] rounded-3xl p-4 md:p-8 w-full max-w-[900px] mx-auto">
				<faqComp v-for="n,index in faqs" :key="index" :item="n" />
				<details :ontoggle="switchIcon" class="p-2 my-2">
					<summary class="cursor-pointer text-[#000000] text-lg font-normal flex gap-4 items-center justify-between">
						What are the requirements to apply for an edike offer?
						<img src="../assets/img/icons/faqs/faq_arrow_down.svg" class="transition-all duration-[500]" :class="[open ? 'rotate-180' : 'rotate-0']" alt="">
					</summary>
					<div class="mt-[20px] text-[#6F6F6F] small-text flex flex-col gap-2">
						<p class="font-medium">You will need to provide the following documents:</p>
						<ul class="ml-[20px]">
							<li>Last 6 Months bank statement</li>
							<li>Utility bill</li>
							<li>Valid Govt. issued Id and Staff ID</li>
							<li>School bill</li>
							<li>Beneficiaries</li>
							<li>Tokenized debit cards</li>
						</ul>
					</div>
				</details>
			</div>
		</div>
	</landing-layout>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import faqComp from '../components/landing/faqComp.vue';
const faqs = [
	{question: 'What is edike?', ans: 'Edike is a platform that provides financing for payment of school fees with convenient repayment split up to three (3) months.'},
	{question: 'Who is eligible for an edike offer?', ans: 'To be eligible, you must be a Nigerian citizen, 22 years and above with a verifiable monthly income paid into a commercial bank in Nigeria.'},
	{question: 'How do I apply for an edike offer?', ans: 'You can begin by creating and verifying your account on our website via https://www.edike.ng'},
	{question: 'How many beneficiaries can I add?', ans: 'As many as your monthly income can accommodate using our system checklist.'},
	{question: 'Are there any hidden charges or fees?', ans: 'There are no hidden charges or fees. The repayments are clearly stated in the offer letters sent to customers.'},
	{question: 'How much can I request and for how long?', ans: 'The amount we offer is dependent on the bill from the school and verifiable monthly income. Repayment is flexible and split up to maximum of three (3) months.'}
]

const open = ref(false)

const switchIcon = () => {
	open.value = !open.value
}
</script>

<style scoped>
li{
	list-style-type: disc !important;
}
</style>