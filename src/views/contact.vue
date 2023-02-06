<template>
	<landing-layout>
		<div class="flex flex-col gap-8 py-4">
			<div class="flex flex-col gap-4 text-center text-[#120A00]">
				<h3 class="text-2xl md:text-3xl font-medium">Contact Us</h3>
				<p class="small-text">Home / Contact Us</p>
			</div>

			<div class="bg-[#ffffff] rounded-3xl p-4 md:p-8 w-full max-w-[500px] mx-auto">
				<div class="flex flex-col gap-7">
					<div class="flex flex-col gap-1">
						<p class="text-base text-[#1E3446]">Feedback form</p>
						<h3 class="text-[#120A00] heading5 md:heading4 !font-medium">We Love to hear from you</h3>
					</div>

					<form class="flex flex-col gap-4">
						<textInput label="Name" :if-required="true" input-type="text" v-model="name" place-holder="Enter name here" />
						<textInput label="Email" :if-required="true" input-type="email" v-model="email" place-holder="Enter email here" />
						<phoneInput v-model="phone" />
						<div class="w-full flex flex-col gap-2">
							<p class="small-text text-darkGray">Message</p>
							<textarea class="w-full caret-secondary bg-transparent rounded-xl border border-lightGray focus:outline-0  px-4 py-2 small-text focus:border-secondary transition-all h-[120px] resize-none" placeholder="Enter text here" v-model="message"></textarea>
						</div>
						<button class="btn-short !w-full">Submit</button>
					</form>

					<div class="flex items-center justify-between">
						<div class="flex items-center gap-2">
							<img src="../assets/img/icons/contact/phone.svg" alt="">
							<div class="flex flex-col">
								<p class="small-text font-bold">PHONE</p>
								<p class="small-text text-[#F58634]">03 5432 1234</p>
							</div>
						</div>
						<div class="flex items-center gap-2">
							<img src="../assets/img/icons/contact/message.svg" alt="">
							<div class="flex flex-col">
								<p class="small-text font-bold">EMAIL</p>
								<p class="small-text text-[#F58634]">info@edike.ng</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</landing-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import textInput from '../components/utils/textInput.vue';
import phoneInput from '../components/utils/phoneInput.vue';

const name = ref('')
const phone = ref('')
const email = ref('')
const message = ref('')
</script>