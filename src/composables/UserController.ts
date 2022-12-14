
import { ref } from 'vue'
import { useFetch } from './FetchController';

const { makeFetchWithAuth } = useFetch()
const firstName = ref('')
const lastName = ref('')
const phone = ref<number>()
const email = ref('')

export const useUser  = () => {
	
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

	if(firstName.value == '' || email.value == '') getUser()

	return { getUser, firstName, lastName, phone, email}
}