<template>
	<form class="flex flex-col gap-4" @submit.prevent="submitForm">
		<h5 class="heading5">UPLOAD UTILITY BILL
			<span class="normal-text font-normal">(that includes your address)</span>
		</h5>
		<Upload v-model="idImage" title="Upload utility bill image" accept="Accepted file is image" info="" accept-type="image/x-png,image/jpeg" :drop-type="['image/x-png','image/jpeg']"/>
		<textInput input-type="text" :if-required="true" place-holder="" label="Address" v-model="address" />
		<button class="btn-short" type="submit">Submit</button>
	</form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import textInput from '../utils/textInput.vue';
import Upload from '../utils/upload.vue';
import Swal from 'sweetalert2';
import { useFetch } from '../../composables/FetchController';
import { useLoader } from '../../composables/LoaderController';
import { useUtils} from '../../composables/Utils'

const { openSubLoader, closeSubLoader } = useLoader()
const { makeFetchWithFormData } = useFetch()
const { eightPercentCongrats } = useUtils()

const idImage = ref<any>()
const address = ref('')

const submitForm = () => {
	if(idImage.value != undefined) {
		openSubLoader()
		// console.log(idImage.value)
		const formData = new FormData()
		formData.append('houseAddressLink', idImage.value)
		formData.append('houseAddress', address.value)
		
		makeFetchWithFormData('POST', 'auth/user/address', formData)
		.then(res => res.json())
		.then((data) => {
			// console.log(data)
			closeSubLoader()
			if(data.status == 'valid') {
				Swal.fire({ title: 'Success!', text: 'Address added successfully', icon: 'success'})
				eightPercentCongrats()
			} else {
				Swal.fire({ title: 'Error!', text: data.msg, icon: 'error'})
			}
		})
		.catch(err => {
			closeSubLoader()
			// console.log(err)
			Swal.fire({ title: 'Error!', text: 'Please try again', icon: 'error'})
		})
	} else {
		Swal.fire({ title: 'Error!', text: 'Provide utility bill image', icon: 'error'})
	}
	
}
</script>