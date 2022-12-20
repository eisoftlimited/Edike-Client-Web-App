
import { ref } from 'vue'
import router from '../router';
import { useFetch } from './FetchController';
import { useToken } from './TokenController';
import { useLoader } from './LoaderController';
import Swal from 'sweetalert2'


const { makeFetchWithAuth } = useFetch()
const { authToken, deleteDataFromLS } = useToken()
const { openSubLoader, closeSubLoader } = useLoader()


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
		openSubLoader()
		makeFetchWithAuth('GET', 'auth/user')
			.then(res => res.json())
			.then(data => {
				closeSubLoader()
				console.log(data)
				if (data) {
					firstName.value = data.firstname
					lastName.value = data.lastname
					phone.value = String(data.phone).slice(3)
					email.value = data.email
				} else {
					alert('Couldn\'t fetch user\'s data')
					Swal.fire({ title: 'Error!', text: 'Could not fetch uses\'s data', icon: 'error'})
				}
			})
			.catch(err => {
				console.log(err)
				Swal.fire({ title: 'Error!', text: 'Please try again', icon: 'error'})
			})
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
	let path:string;
	router.beforeEach((to, from) => {
		path = to.path
	})
	
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
					// console.log('i am going to ', path)
					router.push(path)
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
