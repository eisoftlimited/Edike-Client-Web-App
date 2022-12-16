
import { ref } from 'vue'
import router from '../router';
import { useFetch } from './FetchController';
import { useToken } from './TokenController';

const { makeFetchWithAuth } = useFetch()
const { authToken, deleteDataFromLS } = useToken()


const firstName = ref('')
const lastName = ref('')
const phone = ref('')
const email = ref('')


const clearUser = () => {
	firstName.value = ''
	lastName.value = ''
	phone.value = ''
	email.value = ''
}


export const useUser = () => {
	

	const getUser = () => {
		makeFetchWithAuth('GET', 'auth/user')
			.then(res => res.json())
			.then(data => {
				console.log(data)
				if (data) {
					firstName.value = data.firstname
					lastName.value = data.lastname
					phone.value = String(data.phone).slice(3)
					email.value = data.email
				} else {
					alert('Couldn\'t fetch user\'s data')
				}
			})
			.catch(err => console.log(err))
	}

	const updateUser = () => {
		alert('updating user')
	}


	return { getUser, firstName, lastName, phone, email, clearUser, updateUser }
}

export const getUserAutomatically = () => {
	const { getUser } = useUser()

	if (firstName.value == '' || email.value == '') getUser()

	return { firstName, lastName, phone, email }
}

export const refreshToken = () => {
	console.log('refreshtoken')
	if (authToken != null) {
		makeFetchWithAuth('GET', 'auth/user')
			.then(res => res.json())
			.then(data => {
				console.log(data)
				if (data.firstname) {
					firstName.value = data.firstname
					lastName.value = data.lastname
					phone.value = String(data.phone).slice(3)
					email.value = data.email
					router.push('/dashboard')
				} else {
					deleteDataFromLS()
					router.push('/signin')
					clearUser()
				}
			})
			.catch(err => console.log(err))
	} else {
		router.push('/signin')
	}
}
