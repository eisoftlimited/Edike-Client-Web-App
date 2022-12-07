import { ref } from 'vue'

const menuStatus = ref(false)
export const useMenuController  = () => {

	const openMenu = () => {
		menuStatus.value = true
	}

	const closeMenu = () => {
		menuStatus.value = false
	}

	return { menuStatus, openMenu, closeMenu}
}