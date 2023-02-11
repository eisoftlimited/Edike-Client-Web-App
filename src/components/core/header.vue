<template>
	<div class="flex items-center justify-between px-4 h-[80px] w-full max-w-[1200px] mx-auto">
		<router-link to="/" class="font-bold medium-text text-[#3F434A] flex items-center gap-3">
			<img src="@/assets/img/logo.svg" alt="" class="w-[100px]">
		</router-link>

		<div class="hidden lg:flex items-center gap-6">
			<router-link v-for="n in links" :key="n.text" :to="n.route" class="text-[#627E84] text-sm p-2">
				{{ n.text }}
			</router-link>
		</div>
		<div class="hidden lg:flex gap-4">
			<router-link to="/signup" class="btn-short flex items-center justify-center bg-transparent text-primary">Sign Up</router-link>
			<router-link to="/signin" class="btn-short flex items-center justify-center">Sign In</router-link>
		</div>
		<img @click="useSidemenu().openSideMenu()" class="flex lg:hidden cursor-pointer p-2" src="../../assets/img/icons/hamburger.svg" alt="">
	</div>
</template>

<script setup lang="ts">
import { useSidemenu } from '../../composables/sidemenu';
const links = [
	{text: 'FAQs', route: '/'},
	{text: 'About Us', route: '/'},
	{text: 'Contact Us', route: '/contact'}
]
</script>
