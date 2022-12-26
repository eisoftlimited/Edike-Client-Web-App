import { computed, ref } from 'vue'
import { useFetch } from './FetchController'
import { useLoader } from './LoaderController'
import Swal from 'sweetalert2'
import Card from '../interface/typeCard'
import { useUser } from './UserController'

const { makeFetchWithAuthAndBody, makeFetchWithAuth } = useFetch()
const { openSubLoader, closeSubLoader } = useLoader()
const { getUser } = useUser()

const addedCard = ref<Card>()
const addCardSuccessful = ref(false)
const cardNumber = ref('')
const cvc = ref('')
const card_holder = ref('')
const expires_in = ref('')

const cardButtonEnabled = computed(() => {
	return cardNumber.value && String(cvc.value).length == 3 && card_holder.value && String(expires_in.value).length == 4 ? true : false
})

export const useCard  = () => {

	const addCard = () => {
		let str = String(expires_in.value)
		let formattedStr = `${str[0]}${str[1]}/${str[2]}${str[3]}`
		// console.log(card_holder.value, formattedStr)
		openSubLoader()
		makeFetchWithAuthAndBody('POST', 'card/add/debit_card', {
			cvc: String(cvc.value),
			card_number: String(cardNumber.value),
			card_holder: card_holder.value,
			expires_in: formattedStr
		})
		.then(res => res.json())
		.then(data => {
			closeSubLoader()
			console.log(data)
			if(data.status == 'valid') {
				Swal.fire({ title: 'Success!', text: 'Card added Successfully', icon: 'success'})
				getUser()
				addCardSuccessful.value = true
			} else {
				Swal.fire({ title: 'Error!', text: data.msg, icon: 'error'})
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

	return { addCard, addCardSuccessful, cardButtonEnabled, cardNumber, cvc, card_holder, expires_in, addedCard, getCard }
}

export const fetchCard = () => {
	const { getCard } = useCard()

	if (addedCard.value == undefined) getCard()
	return { addedCard }
}


