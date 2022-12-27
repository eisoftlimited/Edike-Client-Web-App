import { ref } from 'vue'

const menuStatus = ref(false)
const showMenu = ref(false)
export const useMenuController  = () => {

	const openMenu = () => {
		menuStatus.value = true
	}

	const closeMenu = () => {
		showMenu.value = false
	}

	const closeMenuContainer = () => {
		menuStatus.value = false
		showMenu.value = false
	}

	return { menuStatus, showMenu, openMenu, closeMenu, closeMenuContainer}
}

