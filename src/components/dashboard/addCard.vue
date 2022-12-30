<template>
	<div class="min-h-full flex flex-col gap-[40px] justify-between" v-if="!addCardSuccessful">
		<div class="flex flex-col gap-[40px]">
			<div class="flex flex-col gap-1">
				<h5 class="heading5 text-center">ADD CARD 
					<span class="normal-text font-normal ">(Debit/Credit Card)</span>
				</h5>
				<p class="small-text text-[#404040] text-center">You will be charged 50 naira only for this.</p>
			</div>
			<button class="btn-medium  mx-auto px-3" @click="payCard">Add Card</button>
			
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
import { useGlobalModal } from '../../composables/GlobalModal';

const { closeSideModal } = useSideModal()
const { closeModal } = useGlobalModal()
const { addCardSuccessful, payCard } = useCard()

const closeModals = () => {
	closeModal()
	closeSideModal()
}



</script>