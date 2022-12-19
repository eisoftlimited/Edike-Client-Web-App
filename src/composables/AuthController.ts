
import { ref } from 'vue'
import router from '../router';
import { useFetch } from './FetchController';
import { useToken } from './TokenController';
import { useUser } from './UserController';


const { clearUser } = useUser()
const { saveTokenToLS, deleteDataFromLS } = useToken()
const { makeFetch } = useFetch()


const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
const password = ref('')
const oldPass = ref('')
const otp = ref('')
const otpNum = ref<number>()


const inCorrectOTP = ref(false)
const expiredOTP = ref(false)
const resetPassOtpComp = ref(false)
const enterNewPassComp = ref(false)


export const useAuth  = () => {
	const resetVariables = () => {
		firstName.value = ''
		lastName.value = ''
		email.value = ''
		phone.value = ''
		password.value = ''
		oldPass.value = ''
		otp.value = ''
		otpNum.value = undefined
	}

	const registerUser = () => {
		if(phone.value.length >= 10) {
			makeFetch('POST', 'auth/register', {
				firstname:firstName.value, 
				lastname:lastName.value,
				email:email.value,
				phone:phone.value,
				password:password.value
			}).then(res => res.json())
			.then(data => {
				console.log(data)
				if(data.status == 'valid') {
					router.push('/verification')
					resetVariables()
				} else {
					alert(data.msg)
				}
			})
			.catch(err => {
				console.log(err)
				alert('error !!!')
				resetVariables()
			})
		} else if(phone.value.length > 11) {
			alert('Phone number incorrect')
		} else {
			alert('Phone number incomplete')
		}
		
	}

	const verifyEmail = () => {
		// alert(otp.value)
		makeFetch('POST', 'auth/activate/account', { otpToken:otp.value })
		.then(res => res.json())
		.then(data => {
			console.log(data)
			if(data.status == 'valid') {
				saveTokenToLS(data.token)
				resetVariables()
				router.push('/add-beneficiary')
			} else {
				alert(data.msg)
				resetVariables()
			}
		})
		.catch(err => {
			console.log(err)
			alert('otp error')
			resetVariables()
		})
	}

	const loginUser = () => {
		// const { getUser } = useUser()
		makeFetch('POST', 'auth/login', {
			email:email.value,
			password:password.value
		}).then(res => res.json())
		.then(data => {
			console.log(data)
			if(data.token) {
				alert('login successful')
				saveTokenToLS(data.token)
				// getUser()
				router.push('/dashboard')
				resetVariables()
			} else {
				alert(data.msg)
			}
		})
		.catch(err => {
			console.log(err)
			alert('error')
			resetVariables()
		})
		// router.push('/dashboard/home')
	}

	const forgotPassword = () => {
		makeFetch('POST', 'auth/forgot-password', {
			email:email.value,
		}).then(res => res.json())
		.then(data => {
			console.log(data)
			if(data.status == 'valid') {
				alert(data.msg)
				resetPassOtpComp.value = true
			} else {
				alert(data.msg)
			}
		})
		.catch(err => {
			console.log(err)
			alert('error')
			resetVariables()
		})
	}

	const forgetPasswordOTP = () => {
		makeFetch('POST', 'auth/reset', { otp:otp.value })
		.then(res => res.json())
		.then(data => {
			console.log(data)
			if(data.status == 'valid') {
				alert(data.msg)
				enterNewPassComp.value = true
			} else {
				alert(data.msg)
				otpNum.value = undefined
				otp.value = ''
			}
		})
		.catch(err => {
			console.log(err)
			alert('error')
			resetVariables()
		})
	}

	const changePassword = () => {
		// alert('reset')
		makeFetch('POST', 'auth/reset-password', {
			email:email.value,
			password:password.value
		}).then(res => res.json())
		.then(data => {
			console.log(data)
			if(data.status == 'valid') {
				alert(data.msg)
				router.push('/signin')
				resetPassOtpComp.value = false
				enterNewPassComp.value = false
			} else {
				alert(data.msg)
			}
		})
		.catch(err => {
			console.log(err)
			alert('error')
			resetVariables()
		})
	}

	

	// const getUser = () => {
	// 	alert('get user')
	// 	// makeFetchWithAuth('GET', 'auth/user')
	// 	// .then(res => res.json())
	// 	// .then(data => console.log(data))
	// 	// .catch(err => console.log(err))
	// }

	const logOut = () => {
		deleteDataFromLS()
		router.push('/signin')
		clearUser()
	}

	return { firstName, lastName, email, password, phone, oldPass, otp, registerUser, loginUser , logOut, verifyEmail, otpNum,
			inCorrectOTP, expiredOTP, forgotPassword, forgetPasswordOTP, resetPassOtpComp, enterNewPassComp, changePassword }
}