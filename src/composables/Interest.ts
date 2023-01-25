import { useFetch } from "./FetchController"
import { useLoader } from "./LoaderController"

const { openSubLoader, closeSubLoader } = useLoader()
const { makeFetch } =  useFetch()

export const useInterest = () => {
	openSubLoader
	makeFetch('GET', 'percentage/getrate')
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