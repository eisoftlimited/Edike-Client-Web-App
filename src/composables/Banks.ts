import {ref} from 'vue'
import { useLoader } from './LoaderController'
import { useFetch } from './FetchController'

const { makeFetch } = useFetch()
const { openSubLoader, closeSubLoader } = useLoader()

const bankCode = ref([])

export const useBank = () => {
	const fetchBanks = () => {
		openSubLoader()
		makeFetch('GET', 'auth/list/bankcode')
		.then(res => res.json())
		.then(data => {
			closeSubLoader()
			// console.log(data)
			if(data.msg.message == 'Banks retrieved') {
				bankCode.value = data.msg.data
			}
		})
		.catch(err => {
			closeSubLoader()
			// console.log(err)
		})
	}

	if(bankCode.value.length < 1) fetchBanks()
	return { bankCode }
}