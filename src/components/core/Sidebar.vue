<template>
	<div class="flex flex-col justify-between bg-[#FFFFFF] h-full w-[275px] py-6">
		<div class="flex flex-col gap-[60px]">
			<router-link to="/" class="font-bold medium-text text-[#3F434A] flex items-center gap-3 py-4 px-6">
				<img src="@/assets/img/logo.svg" class="w-[100px] block mx-auto" alt="">
			</router-link>
			<div class="flex flex-col">
				<router-link v-for="item in links" :key="item.text" :to="item.route"
					class="flex items-center gap-4 px-6 py-3 normal-text"
					:class="{'bg-primary text-white' : route.name == item.text}"	
				>
					<img :src="getImageUrl(item.icon)" alt="">
					{{ item.text }}
				</router-link>
			</div>
		</div>
		<button class="px-6 py-3 flex items-center justify-between normal-text text-error" @click="logOut">
			Logout
			<img src="../../assets/img/icons/dashboard/logout.svg" alt="">
		</button>
	</div>

</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useAuth } from '../../composables/AuthController';

const { logOut } = useAuth()
const route = useRoute()
const links = [
	{ text: 'Dashboard', route: '/dashboard/home', icon: 'home' },
	{ text: 'Beneficiaries', route: '/dashboard/beneficiaries', icon: 'beneficiaries' },
	{ text: 'Loans', route: '/', icon: 'loan' },
	{ text: 'Profile', route: '/', icon: 'profile' }
]

const getImageUrl = (imgName: string) => {
	return new URL(`../../assets/img/icons/dashboard/${imgName}.svg`, import.meta.url).href
}
</script>
