<template>
	<transition name="menu_container" @enter="showMenu = true">
		<div class="fixed top-0 left-0 w-full h-full z-20" v-if="menuStatus" >
			<div class="absolute top-0 left-0 w-full h-full bg-overlay" @click="showMenu = false"></div>
			<transition name="main_menu" @leave="closeMenu">
				<Sidebar class="relative" v-if="showMenu" />
			</transition>
		</div>
	</transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
	import Sidebar from './Sidebar.vue';
	import { useMenuController } from '../../composables/MenuController'

	const showMenu = ref(false)	
	const { menuStatus, closeMenu } = useMenuController()
</script>