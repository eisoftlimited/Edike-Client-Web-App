<template>
	<div class="w-full flex flex-col gap-2">
		<input type="file" class="hidden filehide" :accept="acceptType" @change="getImage">
		<p class="small-text text-darkGray">{{title}} <span class="text-[10px] text-lightGray" v-if="info">({{ info }})</span></p>
		
		<div class="border border-dashed flex flex-col gap-4 items-center p-4 rounded-xl" :class="{'bg-stroke': active}"
		@dragenter.prevent="setActive" @dragover.prevent="setActive" @dragleave.prevent="setInactive" @drop.prevent="onDrop">
			<img src="../../assets/img/icons/upload.svg" alt="">
			<p class="text-[#44566C]">Drag and Drop or <span @click="selectFile" class="text-secondary cursor-pointer">Browse</span> to upload</p>
		</div>
		<div class="flex items-center gap-2">
			<img src="../../assets/img/icons/info.svg" alt="">
			<p class="text-[10px] text-lightGray">{{ accept }}</p>
		</div>
		<div v-if="file_dropped" class="flex items-center gap-4">
			<div class="w-[70px] h-[70px] flex items-center justify-center bg-[#F6F6F6] border border-stroke rounded-lg">
				<img src="../../assets/img/icons/uploaded_file.svg" alt=""/>
			</div>
			<p class="max-w-[180px] text-ellipsis overflow-hidden ...">{{ file_name }}</p>
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
	const file_name = ref('')

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
			file_name.value = file.name
			file_dropped.value = true
			console.log(file)
		} else {
			Swal.fire({ title: 'Error!', text: 'Invalid file type', icon: 'error'})
		}
		setInactive()
	}

	const getImage = () => {
		let x:HTMLInputElement = document.querySelector('.filehide')!
		console.log(x.files![0])
		emit('update:modelValue', x.files![0])
		file_name.value = x.files![0].name
		file_dropped.value = true
	}

	
</script>
