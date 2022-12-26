import { computed, ref, watch } from 'vue'
import { useFetch } from './FetchController'
import { useBeneficiaries } from './Beneficiaries'
import Bene from '../interface/typeBeneficiaries'
import {useLoader} from './LoaderController'
import { useToken } from './TokenController'
import Swal from 'sweetalert2'
import Loan from '../interface/typeLoan'
import { useUser } from './UserController'

const { makeFetchWithAuthAndBody, makeFetchWithAuth, baseUrl } = useFetch()
const { beneficiaries } = useBeneficiaries()
const { openSubLoader, closeSubLoader } = useLoader()
const { authToken } = useToken()
const { userData } = useUser()

const bene_id = ref('')
const amount = ref('')
const duration = ref('')
const billImage = ref<any>()
const selectedBeneficiary = ref<Bene[]>([])
const currentLoan = ref<Loan[]>([])
const requestLoanStatus = ref(false)

const enableLoanButton = computed(() => {
	return billImage.value != undefined && amount.value && duration.value ? true : false
})

const previewBeneficiary = () => {
	selectedBeneficiary.value = beneficiaries.value.filter((item) => {
		return item._id == bene_id.value
	})
}

watch(bene_id, (newValue, oldValue) => {
	if (newValue != oldValue) {
	  	previewBeneficiary()
	}
})

const clearVariables = () => {
	bene_id.value = ''
	amount.value = ''
	duration.value = ''
	billImage.value = undefined
}

export const useLoan  = () => {

	const requestLoan = () => {
		if((userData.value?.isnin == 'approved' || userData.value?.isbvn == 'approved') && userData.value.isbankstatementadded == 'approved' && userData.value.iscardadded == 'approved') {
			openSubLoader()
			// console.log(billImage.value)
			const formData = new FormData()
			formData.append('beneficiary_amount', amount.value)
			formData.append('beneficiary_duration', duration.value)
			formData.append('beneficiary_file', billImage.value)
			
			// makeFetchWithFormData('POST', 'auth/bank/bank-statement', formData)
			const options = {
				method: 'POST',
				headers: {
					'x-auth-token': authToken()
				},
				body: formData
			}
			fetch(`${baseUrl}loan/apply/beneficiary_loan/${bene_id.value}`, options)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				closeSubLoader()
				if(data.status = 'valid') {
					Swal.fire({ title: 'Success!', text: 'Loan request made successfully', icon: 'success'})
					fetchLoans()
					requestLoanStatus.value = false
				} else {
					Swal.fire({ title: 'Error!', text: 'Loan request was unsuccesful', icon: 'error'})
				}
			})
			.catch(err => {
				console.log(err)
				Swal.fire({ title: 'Error!', text: 'Please try again', icon: 'error'})
			})
		} else {
			Swal.fire({ title: 'Verification Incomplete!', text: 'Kindly visit the dashboard to complete verification', icon: 'error'})
			clearVariables()
			requestLoanStatus.value = false
		}
	}

	const fetchLoans = () => {
		openSubLoader()
		makeFetchWithAuth('GET', 'loan/all')
		.then(res => res.json())
		.then(data => {
			console.log(data)
			closeSubLoader()
			if(data.status = 'false') {
				currentLoan.value = data.loan
			} else {
				currentLoan.value = []
			}
		})
		.catch(err => {
			console.log(err)
			closeSubLoader()
		})
	}

	return { bene_id, amount, duration, billImage, requestLoan, selectedBeneficiary, enableLoanButton, fetchLoans, currentLoan, requestLoanStatus }
}

export const autoFetchLoan = () => {
	const { fetchLoans, requestLoan } = useLoan()

	if(currentLoan.value.length < 1) fetchLoans()
	return { bene_id, amount, duration, billImage, requestLoan, selectedBeneficiary, enableLoanButton, fetchLoans, currentLoan, requestLoanStatus }
}