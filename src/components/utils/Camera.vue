<template>
	<div class="flex flex-col gap-2">
		<p class="small-text text-darkGray">Capture Selfie Image</p>
		<!-- <input class="file" type="file" accept="image/*" @change="getImage"> -->
		<img src="../../assets/img/icons/camera.svg" class="w-[70px] cursor-pointer" alt=""
			@click="openCamera = true" v-if="!openCamera">
		<div class="w-full max-w-[300px] mx-auto h-auto  flex flex-col gap-4" v-else>
			<button class="btn-short mx-auto" type="button"
				@click="switchCamera">Switch Camera</button>
			<camera @paused="reCapture = true" @resumed="reCapture = false" :resolution="{ width: 200, height: 200 }" ref="cam" autoplay></camera>
			<button v-if="!reCapture" class="btn-short mx-auto" type="button"
				@click="snapshot">Click</button>
			<button v-else class="btn-short mx-auto" type="button" @click="startCamera">Recapture</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Swal from 'sweetalert2';
import Camera from "simple-vue-camera";

const cam = ref();
const openCamera = ref(false)
const reCapture = ref(false)
const currentCamera = ref(0)
const emit = defineEmits(['update:modelValue'])
defineProps<{
	modelValue: any
}>()



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
	let img = blobToFile(blob, `img_${new Date().getTime()}`)
	emit('update:modelValue', img)
}

const startCamera = async () => {
	await cam.value?.resume();
}

const switchCamera = () => {
	cam.value?.devices(["videoinput"])
	.then((data:any) => {
		if(currentCamera.value >= data.length-1) {
			currentCamera.value = 0
		} else {
			currentCamera.value++
		}
		// console.log(data.length)
		const device = data[currentCamera.value]
		// console.log(data, data.length, device)
		cam.value?.changeCamera(device.deviceId);
	})
	.catch((err:any) => {
		console.log(err)
		Swal.fire({ title: 'Error!', text: 'Could not get the cameras on your device', icon: 'error'})
	})
}
</script>