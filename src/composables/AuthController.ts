
import { ref } from 'vue'
import router from '../router';
import { useFetch } from './FetchController';
import { useToken } from './TokenController';
import { useUser } from './UserController';
import { useLoader } from './LoaderController';
import Swal from 'sweetalert2'


const { openMainLoader, closeMainLoader } = useLoader()
const { clearUser, updateUser } = useUser()
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

const rememberMe = ref(false)
const inCorrectOTP = ref(false)
const expiredOTP = ref(false)
const resetPassOtpComp = ref(false)
const enterNewPassComp = ref(false)


export const useAuth = () => {
	const resetVariables = () => {
		firstName.value = ''
		lastName.value = ''
		email.value = ''
		phone.value = ''
		password.value = ''
		oldPass.value = ''
		otp.value = ''
		otpNum.value = undefined
		inCorrectOTP.value = false
	}

	const registerUser = () => {
		if (phone.value.length == 11) {
			openMainLoader()
			makeFetch('POST', 'auth/register', {
				firstname: firstName.value,
				lastname: lastName.value,
				email: email.value,
				phone: phone.value,
				password: password.value
			}).then(res => res.json())
				.then(data => {
					closeMainLoader()
					// console.log(data)
					if (data.status == 'valid') {
						router.push('/verification')
						// resetVariables()
					} else {
						Swal.fire({ title: 'Error!', text: data.msg, icon: 'error'})
						// alert(data.msg)
					}
				})
				.catch(err => {
					closeMainLoader()
					console.log(err)
					Swal.fire({ title: 'Error!', text: 'Please try again', icon: 'error'})
					resetVariables()
				})
		} else if (phone.value.length > 11) {
			Swal.fire({ title: 'Error!', text: 'Phone number incorrect', icon: 'error'})
		} else {
			Swal.fire({ title: 'Error!', text: 'Phone number incomplete', icon: 'error'})
		}

	}

	const verifyEmail = () => {
		openMainLoader()
		makeFetch('POST', 'auth/activate/account', { otpToken: otp.value })
			.then(res => res.json())
			.then(data => {
				// console.log(data)
				if (data.status == 'valid') {
					saveTokenToLS(data.token)
					resetVariables()
					router.push('/add-beneficiary')
					closeMainLoader()
				} else {
					closeMainLoader()
					Swal.fire({ title: 'Error!', text: data.msg, icon: 'error'})
					// alert(data.msg)
					otp.value = ''
					otpNum.value = undefined
					inCorrectOTP.value = true
				}
			})
			.catch(err => {
				closeMainLoader()
				console.log(err)
				Swal.fire({ title: 'Error!', text: 'Please try again', icon: 'error'})
				resetVariables()
			})
	}

	const resendVerifyOtp = () => {
		openMainLoader()
		makeFetch('POST', 'auth/resend/otp', {
			email: email.value
		})
		.then(res => res.json())
		.then(data => {
			// console.log(data)
			closeMainLoader()
			if(data.status == 'valid') {
				Swal.fire({ title: 'Success!', text: `A new OTP has been send to ${email.value}`, icon: 'success'})
			} else {
				Swal.fire({ title: 'Error!', text: data.msg, icon: 'error'})
			}
		})
		.catch(err => {
			closeMainLoader()
			console.log(err)
			Swal.fire({ title: 'Error!', text: 'Please try again', icon: 'error'})
		})
	}

	const loginUser = () => {
		openMainLoader()
		makeFetch('POST', 'auth/login', {
			email: email.value,
			password: password.value
		}).then(res => res.json())
			.then(data => {
				// closeMainLoader()
				// console.log(data)
				if (data.token) {
					saveTokenToLS(data.token)
					updateUser(data.useful[0])
					router.push('/dashboard')
					resetVariables()
				} else if (data.msg == 'Kindly Verify your Account, Check Your Mail') {
					Swal.fire({ title: 'Error!', text: data.msg, icon: 'error'})
					router.push('/verification')
				} else {Swal.fire({ title: 'Error!', text: data.msg, icon: 'error'})}
				closeMainLoader()
			})
			.catch(err => {
				closeMainLoader()
				console.log(err)
				Swal.fire({ title: 'Error!', text: 'Please try again', icon: 'error'})
				resetVariables()
			})
	}

	const forgotPassword = () => {
		openMainLoader()
		makeFetch('POST', 'auth/forgot-password', {
			email: email.value,
		}).then(res => res.json())
			.then(data => {
				// console.log(data)
				closeMainLoader()
				if (data.status == 'valid') {
					// alert(data.msg)
					resetPassOtpComp.value = true
				} else {
					// alert(data.msg)
					Swal.fire({ title: 'Error!', text: data.msg, icon: 'error'})
				}
			})
			.catch(err => {
				closeMainLoader()
				console.log(err)
				Swal.fire({ title: 'Error!', text: 'Please try again', icon: 'error'})
				resetVariables()
			})
	}

	const forgetPasswordOTP = () => {
		openMainLoader()
		makeFetch('POST', 'auth/reset', { otp: otp.value })
			.then(res => res.json())
			.then(data => {
				// console.log(data)
				closeMainLoader()
				if (data.status == 'valid') {
					// alert(data.msg)
					enterNewPassComp.value = true
				} else {
					// alert(data.msg)
					Swal.fire({ title: 'Error!', text: data.msg, icon: 'error'})
					inCorrectOTP.value = true
					otpNum.value = undefined
					otp.value = ''
				}
			})
			.catch(err => {
				closeMainLoader()
				console.log(err)
				// alert('error')
				Swal.fire({ title: 'Error!', text: 'Please try again', icon: 'error'})
				resetVariables()
			})
	}

	const resendResetOtp = () => {
		openMainLoader()
		makeFetch('POST', 'auth/resend/resetpass/otp', {
			email: email.value
		})
		.then(res => res.json())
		.then(data => {
			// console.log(data)
			closeMainLoader()
			if(data.status == 'valid') {
				Swal.fire({ title: 'Success!', text: `A new OTP has been send to ${email.value}`, icon: 'success'})
			} else {
				Swal.fire({ title: 'Error!', text: data.msg, icon: 'error'})
			}
		})
		.catch(err => {
			closeMainLoader()
			console.log(err)
			Swal.fire({ title: 'Error!', text: 'Please try again', icon: 'error'})
		})
	}

	const changePassword = () => {
		openMainLoader()
		makeFetch('POST', 'auth/reset-password', {
			email: email.value,
			password: password.value
		}).then(res => res.json())
			.then(data => {
				closeMainLoader()
				// console.log(data)
				if (data.status == 'valid') {
					// alert(data.msg)
					router.push('/signin')
					resetPassOtpComp.value = false
					enterNewPassComp.value = false
				} else {
					// alert(data.msg)
					Swal.fire({ title: 'Error!', text: data.msg, icon: 'error'})
				}
			})
			.catch(err => {
				closeMainLoader()
				console.log(err)
				Swal.fire({ title: 'Error!', text: 'Please try again', icon: 'error'})
				resetVariables()
			})
	}

	const logOut = () => {
		deleteDataFromLS()
		router.push('/signin')
		clearUser()
		document.location.reload()
	}

	return {
		firstName, lastName, email, password, phone, oldPass, otp, registerUser, loginUser, logOut, verifyEmail, otpNum,
		inCorrectOTP, expiredOTP, forgotPassword, forgetPasswordOTP, resetPassOtpComp, enterNewPassComp, changePassword, 
		resendResetOtp, resendVerifyOtp, rememberMe
	}
}