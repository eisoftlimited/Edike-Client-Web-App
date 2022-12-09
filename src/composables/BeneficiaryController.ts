
import { ref } from 'vue'
import router from '../router';
import { useFetch } from './FetchController';

const { makeFetchWithAuthAndBody, makeFetch } = useFetch()
const firstName = ref('')
const lastName = ref('')
const gender = ref('')
const dob = ref('')
const school = ref('')
const studentClass = ref('')

export const useBeneficiary  = () => {
	
	const addBeneficiary = () => {
		makeFetchWithAuthAndBody('POST', 'auth/register', { 
			firstname:firstName.value, 
			lastname:lastName.value,
			email:email.value,
			phone:phone.value,
			password:password.value
		}).then(res => res.json())
		.then(data => console.log(data))
		.catch(err => console.log(err))
	}

	return { }
}