import {Ref, ref} from 'vue'
import { useFetch } from './FetchController'
import { useLoader } from './LoaderController'
import TypeTransaction from '../interface/typeTransaction'

const { openSubLoader, closeSubLoader } = useLoader()
const { makeFetchWithAuth } = useFetch()
export const transactions = ref([]) as Ref<TypeTransaction[]>

export const fetchTransactions = () => {
	openSubLoader()
	makeFetchWithAuth('GET', 'paystack/list/paystack-transactions')
	.then(res => res.json())
	.then(data => {
		closeSubLoader()
		// console.log(data)
		if(data.status == 'valid') {
			transactions.value = data.ans
		} else {
			transactions.value = []
		}
	})
	.catch(err => {
		closeSubLoader()
		// console.log(err)
	})
}