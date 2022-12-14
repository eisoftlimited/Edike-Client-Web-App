import { ref, computed } from "vue";
import { useAuth } from './AuthController'

const { password, email } = useAuth()
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;


// computed
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


export const usePassword = () => {


	return { containsOver8, upperAndLowerCase, containsSymbol, 
		containsNumber, enableLoginButton, enableSignupButton }
}