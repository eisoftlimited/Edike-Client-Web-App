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
							<p class="text-xs">Dial *560*2*4# on your line to get your nin.</p>
						</div>
					</div>

					<div class="flex flex-col gap-2">
						<p class="small-text text-darkGray">Capture Selfie Image</p>
						<!-- <input class="file" type="file" accept="image/*" @change="getImage"> -->
						<img src="../../assets/img/icons/camera.svg" class="w-[70px] cursor-pointer" alt=""
							@click="openCamera = true" v-if="!openCamera">
						<div class="w-full max-w-[300px] mx-auto h-auto  flex flex-col gap-4" v-else>
							<camera @paused="reCapture = true" @resumed="reCapture = false" :resolution="{ width: 200, height: 200 }" ref="cam" autoplay></camera>
							<button v-if="!reCapture" class="btn-short mx-auto" type="button"
								@click="snapshot">Click</button>
							<button v-else class="btn-short mx-auto" type="button" @click="startCamera">Recapture</button>
						</div>

					</div>
				</div>
				<button type="submit" class="hide hidden">submit</button>
			</form>
		</div>

		<div class="flex gap-4 items-center justify-between">
			<button type="button" class="btn-short bg-transparent text-primary" @click="closeSideModal">Cancel</button>
			<button type="submit" :disabled="!bvnButtonEnabled" @click="submitForm" class="btn-short">Submit</button>
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
import { useBvn } from '../../composables/bvnController'
import Camera from "simple-vue-camera";


const { closeSideModal } = useSideModal()
const { bvnSuccessful, bvnButtonEnabled, bvnNumber, addBvn, imageFile } = useBvn()


const cam = ref();
const openCamera = ref(false)
const reCapture = ref(false)

const snapshot = async () => {
	await cam.value?.pause();
	const blob = await cam.value?.snapshot();
	reCapture.value = true
	const blobToFile = (theBlob: Blob, fileName: string): File => {
		return new File(
			[theBlob as any], // cast as any
			fileName,
			{
				lastModified: new Date().getTime(),
				type: theBlob.type
			}
		)
	}
	imageFile.value = blobToFile(blob, `img_${new Date().getTime()}`)
}

const startCamera = async () => {
	imageFile.value = undefined
	await cam.value?.resume();
}

const submitForm = () => {
	let btn:HTMLButtonElement = document.querySelector('.hide')!
	btn.click()
}
</script>