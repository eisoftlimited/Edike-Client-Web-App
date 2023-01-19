import {ref} from 'vue'
import { useFetch } from './FetchController'
import { useLoader } from './LoaderController'

const { openSubLoader, closeSubLoader } = useLoader()
const { makeFetchWithAuth } = useFetch()
const transactions = ref()

export const fetchTransactions = () => {
	openSubLoader()
	makeFetchWithAuth('GET', 'paystack/list/paystack-transactions')
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