import { ref } from "vue";

const sidemenuStatus = ref(false)

export const useSidemenu = () => {
	const openSideMenu = () => {
		sidemenuStatus.value = true
	}

	const closeSideMenu = () => {
		sidemenuStatus.value = false
	}

	return { sidemenuStatus, openSideMenu, closeSideMenu}
}