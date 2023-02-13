<template>
	<transition name="side">
		<div class="flex flex-col gap-[30px] bg-[#ffffff] fixed top-0 left-0 w-full h-full p-4 z-30" v-if="sidemenuStatus">
			<div class="flex items-center justify-between">
				<img src="../../assets/img/logo.svg" class="w-[100px]" alt="">
				<img @click="closeSideMenu" class="cursor-pointer p-2" src="../../assets/img/icons/close.svg" alt="">
			</div>

			<div class="flex flex-col">
				<router-link v-for="n in links" :key="n.text" :to="n.route" class="px-2 py-3 text-primary text-sm font-medium">{{ n.text }}</router-link>
			</div>

			<div class="flex items-center gap-4">
				<router-link class="btn-short flex items-center justify-center" to="/signin">Sign In</router-link>
				<router-link class="btn-short flex items-center justify-center" to="/signup">Sign Up</router-link>
			</div>
		</div>
	</transition>
</template>

<script setup lang="ts">
import { useSidemenu } from '../../composables/sidemenu';

const links = [
	{text: 'Home', route: '/'},
	{text: 'About Us', route: '#'},
	{text: 'FAQs', route: '#'},
	{text: 'Contact Us', route: '/contact'}
]
const { sidemenuStatus, closeSideMenu } = useSidemenu()

</script>

<style scoped>
.side-enter-from, .side-leave-to{
	opacity: 0;
	transform: translateX(-100%)
}

.side-enter-active, .side-leave-active{
	transition: all 1s ease;
}

a.router-link-exact-active{
	background-color: #44AF89;
	color: white;
}
</style>