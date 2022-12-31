import { computed, ref } from 'vue'
import { useFetch } from './FetchController'
import { useLoader } from './LoaderController'
import Swal from 'sweetalert2'
import Card from '../interface/typeCard'
import { useUser } from './UserController'
import router from '../router'
import { useUtils } from './Utils'

const { eightPercentCongrats } = useUtils()
const { makeFetchWithAuthAndBody, makeFetchWithAuth } = useFetch()
const { openSubLoader, closeSubLoader } = useLoader()
const { getUser } = useUser()

const addedCard = ref<Card>()
const addCardSuccessful = ref(false)
const access_code = ref('')
const reference = ref('')



export const useCard  = () => {

	const payCard = () => {
		openSubLoader()
		makeFetchWithAuth('GET', 'card/paystack/pay')
		.then(res => res.json())
		.then((data) => {
			closeSubLoader()
			console.log(data)
			if(data.status == 'valid') {
				reference.value = data.response.data.reference
				access_code.value = data.response.data.access_code
				// console.log(reference.value, access_code.value)
				localStorage.setItem('edike_reference', JSON.stringify({reference: data.response.data.reference}));
				window.location.href = data.response.data.authorization_url
			} else {
				Swal.fire({ title: 'Error!', text: 'Could not contact paystack', icon: 'error'})
			}
		})
		.catch(err => {
			closeSubLoader()
			console.log(err)
			Swal.fire({ title: 'Error!', text: 'Please try again', icon: 'error'})
		})
	}

	const verifyCard = () => {
		openSubLoader()
		const reference = JSON.parse(localStorage.getItem('edike_reference')!)
		makeFetchWithAuth('GET', `card/paystack/callback?reference=${reference.reference}`)
		.then(res => res.json())
		.then((data) => {
			closeSubLoader()
			console.log(data)
			if(data.status == 'valid') {
				localStorage.removeItem('edike_reference')
				router.push('/dashboard/home')
				// await getUser()
				eightPercentCongrats()
			} else {
				Swal.fire({ title: 'Error!', text: 'Please try again', icon: 'error'})
			}
		})
		.catch(err => {
			closeSubLoader()
			console.log(err)
		})
	}

	const getCard = () => {
		openSubLoader()
		makeFetchWithAuth('GET', 'card/get/debit_card')
		.then(res => res.json())
		.then(data => {
			closeSubLoader()
			console.log(data)
			if(data._id) {
				addedCard.value = data
			} else {
				addedCard.value = undefined
			}
		})
		.catch(err => {
			console.log(err)
			closeSubLoader()
		})
	}

	return { getCard, addCardSuccessful, payCard, reference, access_code, verifyCard }
}

export const fetchCard = () => {
	const { getCard } = useCard()

	if (addedCard.value == undefined) getCard()
	return { addedCard }
}


