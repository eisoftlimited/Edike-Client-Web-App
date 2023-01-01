<template>
	<div class="min-h-full flex flex-col gap-[40px] justify-between" v-if="!bvnSuccessful">
		<div class="flex flex-col gap-[40px]">
			<div class="flex flex-col gap-1">
				<h5 class="heading5">ADD BVN 
					<span class="normal-text font-normal">(Bank Verification Number)</span>
				</h5>
				<p class="small-text text-[#404040]">Fill the form below to add your BVN to your Edike account.</p>
			</div>

			<form class="flex flex-col justify-between h-auto" @submit.prevent="addBvn">
				<div class="flex flex-col gap-4">
					<div class="flex flex-col gap-2">
						<p class="small-text text-darkGray">Enter BVN</p>
						<input required type="number" placeholder="XXX XXX XXX X" v-model="bvnNumber"
							class="w-full caret-secondary bg-transparent rounded-xl border border-lightGray focus:outline-0 h-[40px] py-2 px-3 small-text focus:border-secondary transition-all" />
						<div class="flex items-center gap-2">
							<div class="h-2 w-2 rounded-full bg-darkGray"></div>
							<p class="text-xs">Dial *560*2*4# on your line to get your bvn.</p>
						</div>
					</div>

					<Camera v-model="imageFile"/>
				</div>
				<button type="submit" class="hide hidden">submit</button>
			</form>
		</div>

		<div class="flex gap-4 items-center justify-between">
			<button type="button" class="btn-short bg-transparent text-primary" @click="closeModals">Cancel</button>
			<button type="submit" :disabled="!bvnButtonEnabled" @click="submitForm" class="btn-short">Submit</button>
		</div>
	</div>

	<div class="h-full flex items-center justify-center" v-else>
		<div class="flex flex-col gap-[50px] items-center">
			<img src="../../assets/img/illustrations/successful.svg" class="mx-auto" alt="">
			<div class="flex flex-col gap-1 text-center">
				<h5 class="heading5 font-bold">Successful!!!</h5>
				<p class="small-text text-[#404040] text-center">BVN has been added to your account successfully.</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSideModal } from '../../composables/SideModal'
import { useBvn } from '../../composables/BvnController'
import { useGlobalModal } from '../../composables/GlobalModal';
import Camera from '../../components/utils/Camera.vue'


const { closeSideModal } = useSideModal()
const { closeModal } = useGlobalModal()
const { bvnSuccessful, bvnButtonEnabled, bvnNumber, addBvn, imageFile } = useBvn()





const submitForm = () => {
	let btn:HTMLButtonElement = document.querySelector('.hide')!
	btn.click()
}

const closeModals = () => {
	closeModal()
	closeSideModal()
}
// const getImage = () => {
// 	let x:HTMLInputElement = document.querySelector('input.file')!
// 	console.log(x.files[0])
// 	imageFile.value = x.files[0]
// }
</script>