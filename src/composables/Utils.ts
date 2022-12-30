// import { ref } from 'vue'

import { useGlobalModal } from "./GlobalModal"
import { useUser } from "./UserController"
import vericationCongrats from "../components/dashboard/vericationCongrats.vue"


const { userData } = useUser()



export const useUtils  = () => {

	const getSize = () => {
		return window.innerWidth
	}

	const eightPercentCongrats = () => {
		let count = 0;
		let arr = []
		arr.push(userData.value?.isbvn)
		arr.push(userData.value?.isnin)
		arr.push(userData.value?.iscardadded)
		arr.push(userData.value?.isbankstatementadded)
		arr.push(userData.value?.isidcard)
		arr.forEach(item => {
			if(item == 'approved') {
				count++
			}
		})
		if(count == 4) {
			// alert('four')
			const { openModal } = useGlobalModal()
			openModal(vericationCongrats)
		}
	}

	return { getSize, eightPercentCongrats }
}



