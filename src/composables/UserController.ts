
import { ref, computed } from 'vue'
import router from '../router';
import { useFetch } from './FetchController';

const { makeFetchWithAuth } = useFetch()
const firstName = ref('')
const lastName = ref('')
const phone = ref('')

export const useUser  = () => {
	
	const getUser = () => {
		// makeFetchWithAuth('GET', 'auth/user')
		// .then(res => res.json())
		// .then(data => console.log(data))
		// .catch(err => console.log(err))
	}

	return { getUser, firstName, lastName, phone}
}