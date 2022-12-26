
import { ref } from 'vue'
import router from '../router';
import { useFetch } from './FetchController';
import { useToken } from './TokenController';
import { useLoader } from './LoaderController';
import Swal from 'sweetalert2';
import User from '../interface/typeUser';


const { makeFetchWithAuth } = useFetch()
const { authToken, deleteDataFromLS } = useToken()
const { openSubLoader, closeSubLoader } = useLoader()

const userData  = ref<User>()


const clearUser = () => {
	userData.value = undefined
}


export const useUser = () => {
	
	const getUser = () => {
		openSubLoader()
		makeFetchWithAuth('GET', 'auth/user')
			.then(res => res.json())
			.then(data => {
				closeSubLoader()
				console.log(data)
				if (data.firstname) {
					userData.value = data
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

	const updateUser = (data:User) => {
		userData.value = data
	}

	const updateUserData = () => {
		alert('updating')
	}


	return { getUser, clearUser, updateUser, userData, updateUserData }
}

export const getUserAutomatically = () => {
	const { getUser, updateUserData } = useUser()

	if (userData.value == undefined) getUser()

	return { userData, updateUserData }
}

export const refreshToken = () => {
	console.log('refreshtoken')
	let path:string;
	router.beforeEach((to, from) => {
		path = to.path
		// console.log(path)
		if(path == '/add-beneficiary') {
			router.push('/dashboard')
			return;
		}
	})
	
	if (authToken != null) {
		makeFetchWithAuth('GET', 'auth/user')
			.then(res => res.json())
			.then(data => {
				console.log(data)
				if (data != null || data != undefined) {
					userData.value = data
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
