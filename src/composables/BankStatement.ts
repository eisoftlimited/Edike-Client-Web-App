import { computed, ref } from 'vue'
import { useFetch } from './FetchController'
import { useLoader } from './LoaderController'
import Swal from 'sweetalert2'
import { useUser } from './UserController'
import { useUtils } from './Utils'

const { eightPercentCongrats } = useUtils()
const { makeFetchWithFormData, baseUrl } = useFetch()
const { openSubLoader, closeSubLoader } = useLoader()
const { getUser } = useUser()

const bankStatementSuccessful = ref(false)
const bankStatementPdf = ref<any>()
const bankName = ref('')
const analysisType = ref('')

const bankStatementButtonEnabled = computed(() => {
	return bankStatementPdf.value != undefined && bankName.value && analysisType.value ? true : false
})

export const useBankStatement = () => {

	const addBankStatement = () => {
		openSubLoader()
		console.log(bankStatementPdf.value)
		const formData = new FormData()
		formData.append('bank_name', bankName.value)
		formData.append('bank_file', bankStatementPdf.value)
		formData.append('loan_access_type', analysisType.value)

		makeFetchWithFormData('POST', 'auth/bank/bank-statement', formData)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				closeSubLoader()
				if (data.status = 'valid') {
					bankStatementSuccessful.value = true
					Swal.fire({ title: 'Success!', text: 'Bank Statement was added successfully', icon: 'success' })
					getUser()
					eightPercentCongrats()
				} else {
					Swal.fire({ title: 'Error!', text: data.msg, icon: 'error' })
				}
			})
			.catch(err => {
				console.log(err)
				Swal.fire({ title: 'Error!', text: 'Please try again', icon: 'error' })
			})
	}

	return { bankStatementPdf, bankStatementSuccessful, addBankStatement, bankStatementButtonEnabled, bankName, analysisType }
}


// const options = {
//     method: 'POST',
//     headers: {
//         'x-auth-token': authToken()
//     },
//     body: formData
// }
// fetch(`${baseUrl}auth/bank/bank-statement`, options)