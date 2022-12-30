
import { ref } from 'vue'
import router from '../router';
import { useFetch } from './FetchController';
import { useToken } from './TokenController';
import { useLoader } from './LoaderController';
import Swal from 'sweetalert2';
import User from '../interface/typeUser';


const { makeFetchWithAuth, makeFetchWithAuthAndBody } = useFetch()
const { authToken, deleteDataFromLS } = useToken()
const { openSubLoader, closeSubLoader } = useLoader()

const userData  = ref<User>()


const clearUser = () => {
	userData.value = undefined
}


export const useUser = () => {
	
	const getUser = () => {
		userData.value = undefined
		openSubLoader()
		makeFetchWithAuth('GET', 'auth/user')
			.then(res => res.json())
			.then(data => {
				closeSubLoader()
				console.log(data)
				if (data != null || data != undefined) {
					userData.value = data
				} else {
					// alert('Couldn\'t fetch user\'s data')
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

	const updateUserData = (data:{}) => {
		makeFetchWithAuthAndBody('PATCH', 'auth/user/update/details', data)
		.then(res => res.json())
		.then(data => {
			console.log(data)
		})
		.catch(err => {
			console.log(err)
		})
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
	// let path:string;
	// router.beforeEach((to, from) => {
	// 	path = to.path
	// 	// console.log(path)
	// 	// if(path == '/add-beneficiary') {
	// 	// 	router.push('/dashboard')
	// 	// 	return;
	// 	// }
	// })
	
	if (authToken != null) {
		makeFetchWithAuth('GET', 'auth/user')
			.then(res => res.json())
			.then(data => {
				console.log(data)
				if (data != null || data != undefined) {
					userData.value = data
					// router.push(path)
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
