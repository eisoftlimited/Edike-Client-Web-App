import { computed, ref } from 'vue'
import { useFetch } from './FetchController'
import { useToken } from './TokenController'
import { useLoader } from './LoaderController'
import {useUser} from './UserController'
import Swal from 'sweetalert2'
import { useUtils } from './Utils'

const { eightPercentCongrats } = useUtils()
const { makeFetchWithFormData, baseUrl } = useFetch()
// const { authToken } = useToken()
const { openSubLoader, closeSubLoader } = useLoader()
const { getUser } = useUser()

const bvnSuccessful = ref(false)
const bvnNumber = ref<number>()
const imageFile = ref<any>()

const bvnButtonEnabled = computed(() => {
	return (String(bvnNumber.value).length == 11) && imageFile.value != undefined ? true : false
})

export const useBvn  = () => {

	const addBvn = () => {
		openSubLoader()
		// console.log(imageFile.value)
		const formData = new FormData()
		formData.append('bvn', String(bvnNumber.value))
		formData.append('img', imageFile.value)
        
		makeFetchWithFormData('POST', 'auth/verify/bvn', formData)
		.then(res => res.json())
		.then(data => {
			console.log(data)
			closeSubLoader()
			if(data.status == 'valid') {
				bvnSuccessful.value = true
				Swal.fire({ title: 'Success!', text: 'Bvn added successfully', icon: 'success'})
				getUser()
				eightPercentCongrats()
			} else {
				Swal.fire({ title: 'Error!', text: data.msg, icon: 'error'})
			}
		})
		.catch(err => {
			console.log(err)
			Swal.fire({ title: 'Error!', text: 'Please try again', icon: 'error'})
		})
	}

	return { bvnSuccessful, bvnNumber, bvnButtonEnabled, addBvn, imageFile }
}


// const options = {
//     method: 'POST',
//     headers: {
//         'x-auth-token': authToken()
//     },
//     body: formData
// };
// fetch(`${baseUrl}auth/verify/bvn`, options)