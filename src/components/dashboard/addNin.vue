<template>
	<div class="min-h-full flex flex-col gap-[40px] justify-between w-full" v-if="!ninSuccessful">
		<div class="flex flex-col gap-[40px]">
			<div class="flex flex-col gap-1">
				<h5 class="heading5">ADD NIN <span class="normal-text font-normal">(National Identification
						Number)</span>
				</h5>
				<p class="small-text text-[#404040]">Fill the form below to add your NIN to your Edike account.</p>
			</div>

			<form class="flex flex-col justify-between h-auto" @submit.prevent="addNin">
				<div class="flex flex-col gap-4">
					<div class="flex flex-col gap-2">
						<p class="small-text text-darkGray">Enter NIN</p>
						<input required type="number" placeholder="XXX XXX XXX X" v-model="ninNumber"
							class="w-full caret-secondary bg-transparent rounded-xl border border-lightGray focus:outline-0 h-[40px] py-2 px-3 small-text focus:border-secondary transition-all" />
						<div class="flex items-center gap-2">
							<div class="h-2 w-2 rounded-full bg-darkGray"></div>
							<p class="text-xs">Dial *560*2*4# on your line to get your nin.</p>
						</div>
					</div>

					<Camera v-model="imageFile"/>
				</div>
				<button type="submit" class="hide hidden">submit</button>
			</form>
		</div>

		<div class="flex gap-4 items-center justify-between">
			<button type="button" class="btn-short bg-transparent text-primary" @click="closeModals">Cancel</button>
			<button type="submit" :disabled="!ninButtonEnabled" @click="submitForm" class="btn-short">Submit</button>
		</div>
	</div>

	<div class="h-full flex items-center justify-center" v-else>
		<div class="flex flex-col gap-[50px] items-center">
			<img src="../../assets/img/illustrations/successful.svg" class="mx-auto" alt="">
			<div class="flex flex-col gap-1 text-center">
				<h5 class="heading5 font-bold">Successful!!!</h5>
				<p class="small-text text-[#404040] text-center">NIN has been added to your account successfully.</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSideModal } from '../../composables/SideModal'
import { useNin } from '../../composables/NinController'
import { useGlobalModal } from '../../composables/GlobalModal';
import Camera from '../utils/Camera.vue';

const { closeSideModal } = useSideModal()
const { closeModal } = useGlobalModal()
const { ninSuccessful, ninButtonEnabled, ninNumber, addNin, imageFile } = useNin()




const submitForm = () => {
	let btn:HTMLButtonElement = document.querySelector('.hide')!
	btn.click()
}

const closeModals = () => {
	closeModal()
	closeSideModal()
}
</script>