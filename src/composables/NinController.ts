import { computed, ref } from 'vue'
import { useFetch } from './FetchController'

const { makeFetchWithAuthAndBody } = useFetch()

const ninSuccessful = ref(false)
const ninNumber = ref<number>()
const imageFile = ref<File>()

const ninButtonEnabled = computed(() => {
	return (String(ninNumber.value).length == 11) && imageFile.value != undefined ? true : false
})

export const useNin  = () => {

	const addNin = () => {
		console.log(imageFile.value)
		makeFetchWithAuthAndBody('POST', 'auth/verify/nin', 
		{ nin:String(ninNumber.value), image: imageFile.value})
		.then(res => res.json())
		.then(data => {
			console.log(data)
		})
		.catch(err => {
			console.log(err)
		})
	}

	

	return { ninSuccessful, ninNumber, ninButtonEnabled, addNin, imageFile }
}