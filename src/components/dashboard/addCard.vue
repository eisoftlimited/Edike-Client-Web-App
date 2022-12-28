<template>
	<div class="min-h-full flex flex-col gap-[40px] justify-between" v-if="!addCardSuccessful">
		<div class="flex flex-col gap-[40px]">
			<div class="flex flex-col gap-1">
				<h5 class="heading5">ADD CARD 
					<span class="normal-text font-normal">(Debit/Credit Card)</span>
				</h5>
				<p class="small-text text-[#404040]">Fill the form below to add your CARD to your Edike account.</p>
			</div>

			<form class="flex flex-col justify-between h-auto" @submit.prevent="addCard">
				<div class="flex flex-col gap-4">
					<TextInput input-type="number" :if-required="true" label="Card number" place-holder="card number" v-model="cardNumber"/>
					<TextInput input-type="text" :if-required="true" label="Card holder" place-holder="card holder name" v-model="card_holder"/>
					<div class="flex items-start gap-4 justify-between">
						<CvcInput/>
						<CardExpireInput/>
					</div>
					
				</div>
				<button type="submit" class="hide hidden">submit</button>
			</form>
		</div>

		<div class="flex gap-4 items-center justify-between">
			<button type="button" class="btn-short bg-transparent text-primary" @click="closeModals">Cancel</button>
			<button type="submit" :disabled="!cardButtonEnabled" @click="submitForm" class="btn-short">Submit</button>
		</div>
	</div>

	<div class="h-full flex items-center justify-center" v-else>
		<div class="flex flex-col gap-[50px] items-center">
			<img src="../../assets/img/illustrations/successful.svg" class="mx-auto" alt="">
			<div class="flex flex-col gap-1 text-center">
				<h5 class="heading5 font-bold">Successful!!!</h5>
				<p class="small-text text-[#404040] text-center">Your card has been added to your account successfully.</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSideModal } from '../../composables/SideModal'
import {useCard} from '../../composables/Card'
import TextInput from '../utils/textInput.vue';
import CardExpireInput from '../utils/cardExpireInput.vue'
import CvcInput from '../utils/cvcInput.vue';
import { useGlobalModal } from '../../composables/GlobalModal';

const { closeSideModal } = useSideModal()
const { closeModal } = useGlobalModal()
const { cardButtonEnabled, cardNumber, card_holder, addCard, addCardSuccessful } = useCard()

const closeModals = () => {
	closeModal()
	closeSideModal()
}

const submitForm = () => {
	let btn:HTMLButtonElement = document.querySelector('.hide')!
	btn.click()
}

</script>