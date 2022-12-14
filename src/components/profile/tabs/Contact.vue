<template>
	<div class="flex items-start  w-full justify-center gap-6">
		<div class="flex flex-col gap-[48px] w-full max-w-[500px] mx-auto lg:w-1/2">
			<div class="flex flex-col gap-4">
				<h3 class="text-[22px] font-medium">Get in touch with us</h3>
				<div class="flex flex-col gap-4">
					<copyBox label="Phone Number" value="+234 813 790 1372"/>
					<copyBox label="Email Address" value="contact@edike.com"/>
				</div>
			</div>

			<div class="flex flex-col gap-4">
				<h3 class="text-[22px] font-medium">We are on Social Media</h3>
				<div class="flex flex-col gap-4">
					<router-link to="/" class="h-[38px] rounded-xl px-4 bg-[#FAFAFA] flex items-center gap-3" v-for="item in socialLinks" :key="item.text">
						<img :src="getImageUrl(item.icon)" class="cursor-pointer" alt="">
						<p class="small-text text-black font-medium">{{item.text}}</p>
					</router-link>
				</div>
			</div>
		</div>
		<img src="../../../assets/img/illustrations/profile/contact.svg" class="w-1/2 hidden lg:flex" alt="">
	</div>
</template>

<script setup lang="ts">
import copyBox from '../copyBox.vue';

const getImageUrl = (imgName: string) => {
	return new URL(`../../../assets/img/icons/dashboard/${imgName}.svg`, import.meta.url).href
}

const socialLinks = [
	{text: 'Twitter', icon:'twitter', route: '/'},
	{text: 'Instagram', icon:'instagram', route: '/'},
	{text: 'Facebook', icon:'facebook', route: '/'}
]

</script>
