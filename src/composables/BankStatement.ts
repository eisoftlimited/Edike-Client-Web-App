import { computed, ref } from 'vue'
import { useFetch } from './FetchController'

const { makeFetchWithAuthAndBody } = useFetch()

const bankStatementSuccessful = ref(false)
const bankStatementPdf = ref<any>()

// const bankStatementButtonEnabled = computed(() => {
// 	return (String(bvnNumber.value).length == 11) && imageFile.value != undefined ? true : false
// })

export const useBankStatement  = () => {

	const addBankStatement = () => {
		console.log(bankStatementPdf.value)
		makeFetchWithAuthAndBody('POST', 'auth/verify/bvn', 
		{ file: bankStatementPdf.value})
		.then(res => res.json())
		.then(data => {
			console.log(data)
		})
		.catch(err => {
			console.log(err)
		})
	}

	return { bankStatementPdf, bankStatementSuccessful, addBankStatement}
}