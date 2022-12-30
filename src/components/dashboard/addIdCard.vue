<template>
	<div class="min-h-full flex flex-col gap-[40px] justify-between" v-if="!addIdSuccessful">
		<div class="flex flex-col gap-[40px]">
			<div class="flex flex-col gap-1">
				<h5 class="heading5">UPLOAD IDENTITY CARD
					<span class="normal-text font-normal">(any valid ID card)</span>
				</h5>
			</div>

			<div class="flex flex-col gap-5">
				<Upload v-model="idImage" title="Upload ID card image" accept="Accepted file is image" info="" accept-type="image/x-png,image/jpeg" :drop-type="['image/x-png','image/jpeg']"/>
			</div>
			
		</div>

		<div class="flex gap-4 items-center justify-between">
			<button type="button" class="btn-short bg-transparent text-primary" @click="closeModals">Cancel</button>
			<button type="submit" :disabled="idImage == undefined" @click="addId" class="btn-short">Save</button>
		</div>
	</div>

	<div class="h-full flex items-center justify-center" v-else>
		<div class="flex flex-col gap-[50px] items-center">
			<img src="../../assets/img/illustrations/successful.svg" class="mx-auto" alt="">
			<div class="flex flex-col gap-1 text-center">
				<h5 class="heading5 font-bold">Successful!!!</h5>
				<p class="small-text text-[#404040] text-center">ID card has been added to your account successfully.</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSideModal } from '../../composables/SideModal'
import Upload from '../utils/upload.vue';
import { useGlobalModal } from '../../composables/GlobalModal';
import { useLoader } from '../../composables/LoaderController';
import { useFetch } from '../../composables/FetchController';
import Swal from 'sweetalert2';
import { useUser } from '../../composables/UserController';
import { useUtils } from '../../composables/Utils'


const { eightPercentCongrats } = useUtils()
const idImage = ref<any>()
const addIdSuccessful = ref(false)
const { closeSideModal } = useSideModal()
const { closeModal } = useGlobalModal()
const { openSubLoader, closeSubLoader } = useLoader()
const { makeFetchWithFormData } = useFetch()
const { getUser } = useUser()



const addId = () => {
	// alert('adding')
	openSubLoader()
	console.log(idImage.value)
	const formData = new FormData()
	formData.append('img', idImage.value)
	
	makeFetchWithFormData('POST', 'auth/upload/id_card', formData)
	.then(res => res.json())
	.then(data => {
		console.log(data)
		closeSubLoader()
		if(data.status == 'valid') {
			addIdSuccessful.value = true
			Swal.fire({ title: 'Success!', text: 'ID card added successfully', icon: 'success'})
			getUser()
			eightPercentCongrats()
		} else {
			Swal.fire({ title: 'Error!', text: data.msg, icon: 'error'})
		}
	})
	.catch(err => {
		closeSubLoader()
		console.log(err)
		Swal.fire({ title: 'Error!', text: 'Please try again', icon: 'error'})
	})
}

const closeModals = () => {
	closeModal()
	closeSideModal()
}


</script>