
import { ref } from 'vue'
import router from '../router';
import { useFetch } from './FetchController';
import { useToken } from './TokenController';


const { saveTokenToLS } = useToken()
const { makeFetch, makeFetchWithAuth } = useFetch()


const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
const password = ref('')
const oldPass = ref('')
const otp = ref('')


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
	}

	const registerUser = () => {
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
		// router.push('/dashboard/home')
	}

	const verifyEmail = () => {
		// alert(otp.value)
		makeFetch('POST', 'auth/activate/account', { otpToken:otp.value })
		.then(res => res.json())
		.then(data => {
			console.log(data)
			if(data.status == 'valid') {
				saveTokenToLS(data.token)
				router.push('/dashboard')
				resetVariables()
			} else {
				alert('error')
				resetVariables()
			}
		})
		.catch(err => {
			console.log(err)
			alert('error')
			resetVariables()
		})
	}

	const loginUser = () => {
		makeFetch('POST', 'auth/login', {
			email:email.value,
			password:password.value
		}).then(res => res.json())
		.then(data => {
			console.log(data)
			if(data.token) {
				alert('login successful')
				saveTokenToLS(data.token)
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
		router.push('/signin')
	}

	return { firstName, lastName, email, password, phone, oldPass, otp, registerUser, loginUser , logOut, verifyEmail,
			inCorrectOTP, expiredOTP, forgotPassword, forgetPasswordOTP, resetPassOtpComp, enterNewPassComp, changePassword }
}