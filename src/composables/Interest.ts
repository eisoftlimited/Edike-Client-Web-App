import { useFetch } from "./FetchController"
import { useLoader } from "./LoaderController"

const { openSubLoader, closeSubLoader } = useLoader()
const { makeFetchToAnotherUrl } =  useFetch()

export const useInterest = () => {
	openSubLoader
	makeFetchToAnotherUrl('GET', 'https://admin.edike.click/percentage/getrate')
	.then(res => res.json())
	.then(data => {
		closeSubLoader()
		console.log(data)
	})
	.catch(err => {
		closeSubLoader()
		console.log(err)
	})
}