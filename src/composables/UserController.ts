
import { ref } from 'vue'
import { useFetch } from './FetchController';

const { makeFetchWithAuth } = useFetch()
const firstName = ref('')
const lastName = ref('')
const phone = ref<number>()
const email = ref('')

export const useUser  = () => {
	const clearUser = () => {
		firstName.value = ''
		lastName.value = ''
		phone.value = undefined
		email.value = ''
	}

	const getUser = () => {
		makeFetchWithAuth('GET', 'auth/user')
		.then(res => res.json())
		.then(data => {
			console.log(data)
			if(data) {
				firstName.value = data.firstname
				lastName.value = data.lastname
				phone.value = data.phone
				email.value = data.email
			} else {
				alert('Couldn\'t fetch user\'s data')
			}
		})
		.catch(err => console.log(err))
	}

	

	return { getUser, firstName, lastName, phone, email, clearUser}
}

export const getUserAutomatically = () => {
	const { getUser } = useUser()

	if(firstName.value == '' || email.value == '') getUser()

	return { firstName, lastName, phone, email}
}