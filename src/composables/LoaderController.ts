import { ref } from 'vue'

const mainLoaderStatus = ref(false)
const subLoaderStatus = ref(false)

export const useLoader  = () => {

	const openMainLoader = () => {
		mainLoaderStatus.value = true
	}

	const closeMainLoader = () => {
		mainLoaderStatus.value = false
	}

	const openSubLoader = () => {
		subLoaderStatus.value = true
	}

	const closeSubLoader = () => {
		subLoaderStatus.value = false
	}

	return { mainLoaderStatus, openMainLoader, closeMainLoader, subLoaderStatus, openSubLoader, closeSubLoader }
}