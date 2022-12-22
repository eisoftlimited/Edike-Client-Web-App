import { computed, ref } from 'vue'
import { useFetch } from './FetchController'

const { makeFetchWithAuthAndBody } = useFetch()

const bvnSuccessful = ref(false)
const bvnNumber = ref<number>()
const imageFile = ref<File>()

const bvnButtonEnabled = computed(() => {
	return (String(bvnNumber.value).length == 11) && imageFile.value != undefined ? true : false
})

export const useBvn  = () => {

	const addBvn = () => {
		console.log(imageFile.value)
		makeFetchWithAuthAndBody('POST', 'auth/verify/bvn', 
		{ bvn:String(bvnNumber.value), image: imageFile.value})
		.then(res => res.json())
		.then(data => {
			console.log(data)
		})
		.catch(err => {
			console.log(err)
		})
	}

	return { bvnSuccessful, bvnNumber, bvnButtonEnabled, addBvn, imageFile }
}