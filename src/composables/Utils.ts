// import { ref } from 'vue'

export const useUtils  = () => {

	const getSize = () => {
		return window.innerWidth
	}

	return { getSize }
}

