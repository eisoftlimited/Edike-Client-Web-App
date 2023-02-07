// import { ref } from 'vue'

import { useGlobalModal } from "./GlobalModal"
import { useUser } from "./UserController"
import vericationCongrats from "../components/dashboard/vericationCongrats.vue"
import { useFetch } from "./FetchController"
import { useLoader } from "./LoaderController"
import Swal from "sweetalert2"
import { useAuth } from "./AuthController"
// import VueCryptojs from 'vue-cryptojs'
// import { encryptString, decryptString } from 'encrypt-string'

// const { encryptString, decryptString } = require('encrypt-string');
const { openSubLoader, closeSubLoader } = useLoader()
const { makeFetchWithAuth } = useFetch()
const { userData } = useUser()
const { logOut } = useAuth()
const encryptPassword = 'Edike~P4s$w0Rd!';


export const useUtils  = () => {

	const getSize = () => {
		return window.innerWidth
	}

	const alertEightPercent = () => {
		let count = 0;
		let arr = []
		arr.push(userData.value?.isbvn)
		arr.push(userData.value?.iscardadded)
		arr.push(userData.value?.isbankstatementadded)
		arr.push(userData.value?.isidcard)
		arr.push(userData.value?.isnextofkin)
		arr.push(userData.value?.isaddressadded)
		// console.log(arr, userData.value?.isbvn)
		arr.forEach(item => {
			if(item == 'approved') {
				count++
			}
		})
		// alert(count)
		if(count == 6) {
			const { openModal } = useGlobalModal()
			openModal(vericationCongrats)
		}
	}

	const eightPercentCongrats = () => {
		openSubLoader()
		userData.value = undefined
		makeFetchWithAuth('GET', 'auth/user')
			.then(res => res.json())
			.then(data => {
				closeSubLoader()
				// console.log(data)
				if (data != null || data != undefined) {
					userData.value = data
					alertEightPercent()
				} else {
					Swal.fire({ title: 'Error!', text: 'Could not fetch uses\'s data', icon: 'error'})
				}
			})
			.catch(err => {
				// console.log(err)
				Swal.fire({ title: 'Error!', text: 'Please try again', icon: 'error'})
			})
		
	}

	const checkInactivity = () => {
		let timeout:any;
		function checkActivity() {
			clearTimeout(timeout);
			timeout = setTimeout(function () { 
				logOut()
			 }, 1800000);
		}
		document.addEventListener('keydown', checkActivity);
		document.addEventListener('mousedown', checkActivity);
		document.addEventListener('mousemove', checkActivity);
		checkActivity();
	}

	const saveLoginCredToCookies = async (email_cred:string, password_cred:string) => {
		// const userEmail = await encryptString(email_cred, encryptPassword);
		// const userPass = await encryptString(password_cred, encryptPassword);

		// console.log(userEmail, userPass);
		// console.log('save')
	}

	function formatNumber(n:string) {
		// format number 1000000 to 1,234,567
		return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	}

	const formatDate = (date:string) => {
		let format = new Date(date)
		return `${format.getFullYear()}-${format.getMonth() +1}-${format.getDate()}`
	}

	return { getSize, eightPercentCongrats, checkInactivity, saveLoginCredToCookies, formatNumber, formatDate }
}



