import { Ref, ref } from "vue"
import { useFetch } from "./FetchController"
import { useLoader } from "./LoaderController"

export const rate = ref() as Ref<number|undefined>
const { openSubLoader, closeSubLoader } = useLoader()
const { makeFetchToAnotherUrl } =  useFetch()

export const useInterest = () => {
	rate.value = undefined
	openSubLoader
	makeFetchToAnotherUrl('GET', 'https://admin.edike.click/edike/api/v1/percentage/getrate')
	.then(res => res.json())
	.then(data => {
		closeSubLoader()
		// console.log(data)
		if(data.rate){
			rate.value = data.rate
		} else {
			rate.value = undefined
		}
	})
	.catch(err => {
		closeSubLoader()
		// console.log(err)
	})
}