import { computed, ref } from 'vue'
import { useFetch } from './FetchController'
import { useLoader } from './LoaderController'
import Swal from 'sweetalert2'
import { useUser } from './UserController'
import { useUtils } from './Utils'

const { eightPercentCongrats } = useUtils()
const { makeFetchWithFormData } = useFetch()
const { openSubLoader, closeSubLoader } = useLoader()
const { getUser } = useUser()

const ninSuccessful = ref(false)
const ninNumber = ref<number>()
const imageFile = ref<any>()

const ninButtonEnabled = computed(() => {
	return (String(ninNumber.value).length == 11) && imageFile.value != undefined ? true : false
})

export const useNin  = () => {

	const addNin = () => {
		openSubLoader()
		// console.log(imageFile.value)
		const formData = new FormData()
		formData.append('nin', String(ninNumber.value))
		formData.append('img', imageFile.value)
        
		makeFetchWithFormData('POST', 'auth/verify/nin', formData)
		.then(res => res.json())
		.then((data) => {
			// console.log(data)
			closeSubLoader()
			if(data.status == 'valid') {
				ninSuccessful.value = true
				Swal.fire({ title: 'Success!', text: 'Nin added successfully', icon: 'success'})
				// await getUser()
				eightPercentCongrats()
			} else {
				Swal.fire({ title: 'Error!', text: data.msg, icon: 'error'})
			}
		})
		.catch(err => {
			// console.log(err)
			Swal.fire({ title: 'Error!', text: 'Please try again', icon: 'error' })
		})
	}

	

	return { ninSuccessful, ninNumber, ninButtonEnabled, addNin, imageFile }
}