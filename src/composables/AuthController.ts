
import { ref, computed } from 'vue'
import router from '../router';
import { useFetch } from './FetchController';

const { makeFetch } = useFetch()

const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
const password = ref('')


const containsOver8 = computed(() => {
	return password.value.length >= 8 ? true : false 
})

const upperAndLowerCase = computed(() => {
	return /[A-Z]/.test(password.value) && /[a-z]/.test(password.value) ? true : false 
})

const containsSymbol = computed(() => {
	return specialChars.test(password.value) ? true : false 
})

const containsNumber = computed(() => {
	return /\d/.test(password.value) ? true : false 
})

const enableSignupButton = computed(() => {
	return containsOver8.value && upperAndLowerCase.value && containsSymbol.value && containsNumber.value ? true : false
})
const enableLoginButton = computed(() => {
	return email.value && password.value ? true : false
})

export const useAuth  = () => {
	const resetVariables = () => {
		firstName.value = ''
		lastName.value = ''
		email.value = ''
		phone.value = ''
		password.value = ''
	}

	const registerUser = () => {
		// makeFetch('POST', 'auth/register', { 
		// 	firstname:firstName.value, 
		// 	lastname:lastName.value,
		// 	email:email.value,
		// 	phone:phone.value,
		// 	password:password.value
		// }).then(res => res.json())
		// .then(data => console.log(data))
		// .catch(err => console.log(err))
		router.push('/dashboard/home')
	}

	const loginUser = () => {
		// makeFetch('POST', 'auth/register', { 
		// 	firstname:firstName.value, 
		// 	lastname:lastName.value,
		// 	email:email.value,
		// 	phone:phone.value,
		// 	password:password.value
		// }).then(res => res.json())
		// .then(data => console.log(data))
		// .catch(err => console.log(err))
		router.push('/dashboard/home')
	}

	const logOut = () => {
		router.push('/signin')
	}

	return { firstName, lastName, email, password, phone, containsOver8, upperAndLowerCase, containsSymbol, 
			containsNumber, enableLoginButton, enableSignupButton, registerUser, loginUser , logOut }
}