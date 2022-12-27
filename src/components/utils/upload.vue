<template>
	<div class="w-full flex flex-col gap-2">
		<input type="file" class="hidden filehide" :accept="acceptType" @change="getImage">
		<p class="small-text text-darkGray">{{title}} <span class="text-[10px] text-lightGray">({{ info }})</span></p>
		
		<div class="border border-dashed flex flex-col gap-4 items-center p-4 rounded-xl" :class="{'bg-stroke': active}"
		@dragenter.prevent="setActive" @dragover.prevent="setActive" @dragleave.prevent="setInactive" @drop.prevent="onDrop">
			<img src="../../assets/img/icons/upload.svg" alt="">
			<p class="text-[#44566C]">Drag and Drop or <span @click="selectFile" class="text-secondary cursor-pointer">Browse</span> to upload</p>
		</div>
		<div class="flex items-center gap-2">
			<img src="../../assets/img/icons/info.svg" alt="">
			<p class="text-[10px] text-lightGray">{{ accept }}</p>
		</div>
		<div v-if="file_dropped" class="w-[70px] h-[70px] flex items-center justify-center bg-[#F6F6F6] border border-stroke rounded-lg">
			<img src="../../assets/img/icons/uploaded_file.svg" alt="">
		</div>
	</div>
</template>

<script setup lang="ts">
import Swal from 'sweetalert2';
import { ref } from 'vue';
	const props = defineProps<{
		title: string
		info: string
		accept: string
		acceptType?: string
		dropType?: string[]
		modelValue: any
	}>()
	const emit = defineEmits(['update:modelValue'])
	const file_dropped = ref(false)
	const active = ref(false)

	function setActive() {
		active.value = true
	}
	function setInactive() {
		active.value = false
	}
	const selectFile = () => {
		let x:HTMLInputElement = document.querySelector('.filehide')!
		x.click()
	}
	const onDrop = (e:any) => {
		let file:any = e.dataTransfer.files[0]
		if(props.dropType?.includes(file.type)) {
			emit('update:modelValue', file)
			file_dropped.value = true
			console.log(file)
		} else {
			Swal.fire({ title: 'Error!', text: 'Invalid type', icon: 'error'})
		}
		setInactive()
	}

	const getImage = () => {
		let x:HTMLInputElement = document.querySelector('.filehide')!
		console.log(x.files![0])
		emit('update:modelValue', x.files![0])
		file_dropped.value = true
	}

	
</script>
