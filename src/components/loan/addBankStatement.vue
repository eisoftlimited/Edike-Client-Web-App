<template>
	<div class="min-h-full flex flex-col gap-[40px] justify-between" v-if="true">
		<div class="flex flex-col gap-[40px]">
			<div class="flex flex-col gap-1">
				<h5 class="heading5">UPLOAD BANK STATEMENT
					<span class="normal-text font-normal">(min 3 months)</span>
				</h5>
				<p class="small-text text-[#404040]">Login to your internet banking and generate a 3 month bank statement to upload here.</p>
			</div>
			<!-- <input type="file" accept="image/jpeg, application/pdf"> -->

			<Upload title="Upload Bank Statement" accept="Accepted file is Pdf" info="please upload the bank statement generated"/>

			<!-- <form class="flex flex-col justify-between h-auto" @submit.prevent="addBvn">
				<div class="flex flex-col gap-4">
					<div class="flex flex-col gap-2">
						<p class="small-text text-darkGray">Enter BVN</p>
						<input required type="number" placeholder="XXX XXX XXX X" v-model="bvnNumber"
							class="w-full caret-secondary bg-transparent rounded-xl border border-lightGray focus:outline-0 h-[40px] py-2 px-3 small-text focus:border-secondary transition-all" />
						<div class="flex items-center gap-2">
							<div class="h-2 w-2 rounded-full bg-darkGray"></div>
							<p class="text-xs">Dial *560*2*4# on your line to get your nin.</p>
						</div>
					</div>

					
				</div>
				<button type="submit" class="hide hidden">submit</button>
			</form> -->
		</div>

		<div class="flex gap-4 items-center justify-between">
			<button type="button" class="btn-short bg-transparent text-primary" @click="closeSideModal">Cancel</button>
			<button type="submit" :disabled="!bvnButtonEnabled" @click="submitForm" class="btn-short">Save</button>
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
import { useBvn } from '../../composables/BvnController'
import Upload from '../utils/upload.vue';


const { closeSideModal } = useSideModal()
const { bvnSuccessful, bvnButtonEnabled, bvnNumber, addBvn,  } = useBvn()




const submitForm = () => {
	let btn:HTMLButtonElement = document.querySelector('.hide')!
	btn.click()
}

// const getImage = () => {
// 	let x:HTMLInputElement = document.querySelector('input.file')!
// 	console.log(x.files[0])
// 	imageFile.value = x.files[0]
// }
</script>