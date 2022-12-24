import { computed, ref } from 'vue'
import { useFetch } from './FetchController'
import { useToken } from './TokenController'

const { makeFetchWithAuthAndBody, baseUrl } = useFetch()
const { authToken } = useToken()

const bvnSuccessful = ref(false)
const bvnNumber = ref<number>()
const imageFile = ref<any>()

const bvnButtonEnabled = computed(() => {
	return (String(bvnNumber.value).length == 11) && imageFile.value != undefined ? true : false
})

export const useBvn  = () => {

	// const addBvn = () => {
	// 	console.log(imageFile.value)
	// 	makeFetchWithAuthAndBody('POST', 'auth/verify/bvn', 
	// 	{ bvn:String(bvnNumber.value), image: imageFile.value})
	// 	.then(res => res.json())
	// 	.then(data => {
	// 		console.log(data)
	// 	})
	// 	.catch(err => {
	// 		console.log(err)
	// 	})
	// }

	const addBvn = () => {
		console.log(imageFile.value)
		const formData = new FormData()
		formData.append('bvn', String(bvnNumber.value))
		formData.append('img', imageFile.value)
        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json', 
				'Content-Type': 'multipart/form-data',
                // 'Content-Type': 'application/json',
                'x-auth-token': authToken()
            },
            body: formData
        };
		fetch(`${baseUrl}auth/verify/bvn`, options)
		.then(res => res.json())
		.then(data => console.log(data))
		.catch(err => console.log(err))
	}

	return { bvnSuccessful, bvnNumber, bvnButtonEnabled, addBvn, imageFile }
}