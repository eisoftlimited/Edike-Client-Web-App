<template>
	<div class="py-[70px] px-4 md:px-10 bg-[#0A6C55]">
		<div class="w-full max-w-[1200px] mx-auto flex flex-col gap-8 md:flex-row justify-between md:items-center">
			<div class="flex flex-col gap-1 w-full md:max-w-[50%]">
				<img src="../../assets/img/logo.svg" class="w-[100px]" alt="">
				<p class="small-text text-white max-w-[400px]">Copyright © 2023 Edike. All rights reserved | Powered by Competence Asset Management Company Limited.</p>
			</div>

			<div class="flex items-center gap-4">
				<span class="flex items-center gap-1">
					<img src="../../assets/img/icons/footer/mail.svg" alt="">
					<p class="text-sm text-white">info@edike.ng</p>
				</span>
				<a v-for="n in socials" :key="n.icon" target="blank" :href="n.route">
					<img :src="getImageUrl(n.icon)" alt="">
				</a>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

const socials = [
	{icon: 'twitter', route: '/'},
	{icon: 'facebook', route: '/'},
	{icon: 'instagram', route: 'https://www.instagram.com/edike.ng/'}
]
const getImageUrl = (imgName:string) => {
	return new URL(`../../assets/img/icons/footer/${imgName}.svg`, import.meta.url).href
}
</script>