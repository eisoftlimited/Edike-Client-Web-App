<template>
	<landing-layout>
		<div class=" flex flex-col gap-[30px] py-4">
			<div class="bg-[#FFFFFF] p-6 md:p-8 flex items-center justify-between gap-4 rounded-3xl">
				<img  class="hidden lg:flex w-[250px] xl:w-[300px]" src="../assets/img/illustrations/landing/hero_two.svg" alt="">
				<div class="flex flex-col items-center gap-6 w-full text-center max-w-[400px] mx-auto">
					<h3 class="heading3 !font-medium">Pay School Fees in Minutes</h3>
					<p class="small-text text-[#627E84]">Get school fees offers for your child(ren) up to N5,000,000.00 per child for up to 3 months!</p>
					<img src="../assets/img/illustrations/landing/hero_about_rounded.svg" class="w-[120px]" alt="">
				</div>
				<img class="hidden lg:flex w-[250px] xl:w-[300px]" src="../assets/img/illustrations/landing/hero_one.svg" alt="">
			</div>
			<div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-4 justify-between w-full max-w-[1200px] mx-auto">
				<div class="flex flex-col gap-4 w-full max-w-[400px]">
					<p class="text-primary font-semibold text-base">OUR GOAL</p>
					<h4 class="heading4 !font-medium">What we Offer</h4>
					<p class="small-text text-[#627E84]">We provide a user-friendly and streamlined school fees payment offers payment process, while providing education resources and tools to help users manage their loans and make informed decisions about financing their education.</p>
					<router-link class="btn-short w-fit px-3 flex items-center justify-center" to="/">
						Join our Community
					</router-link>
				</div>
				<img src="../assets/img/illustrations/landing/offer_img.svg" class="w-full max-w-[600px]" alt="">
			</div>
			<div class="map py-[100px] flex flex-col items-center gap-5 w-full max-w-[1200px] mx-auto text-center">
				<h4 class="heading4 !font-medium">Our Schools Listing</h4>
				<div class="hidden md:flex flex-wrap items-center justify-center gap-2">
					<div v-for="n in schools" :key="n.text" class="flex items-center gap-1 py-2 px-3 rounded-full bg-[#ffffff]">
						<img :src="getImageUrl(n.img)" alt="">
						<p class="small-text text-[#2B3450] font-medium">{{ n.text }}</p>
					</div>
				</div>
				<div class="flex flex-wrap gap-2 items-center justify-center md:hidden">
					<template v-for="n,index in schools" :key="n.text">
						<div v-if="index < 7" class="flex items-center gap-1 py-2 px-3 rounded-full bg-[#ffffff]">
							<img :src="getImageUrl(n.img)" alt="">
							<p class="small-text text-[#2B3450] font-medium">{{ n.text }}</p>
						</div>
					</template>
				</div>
				<router-link class="btn-short w-fit px-3 flex items-center justify-center" to="/">
					Join our Community
				</router-link>
			</div>

			<div class="flex flex-col gap-4 text-center mb-[60px]">
				<h4 class="heading4 !font-medium">Powered by</h4>
				<div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
					<div v-for="n in partners" :key="n" class="flex items-center justify-center p-4 rounded h-[90px] bg-[#ffffff]">
						<img :src="getPartnerImg(n)" class="h-[80%]" alt="">
					</div>
				</div>
			</div>

			<how-it-works />

			<div class="bg-[#FFFFFF] p-6 py-[60px] lg:py-[90px] md:p-8 flex items-center justify-center rounded-3xl">
				<div class="w-full max-w-[600px] text-center flex flex-col gap-5">
					<h4 class="heading4 !font-medium text-[#17343D]">Subscribe to our News and Updates</h4>
					<p class="small-text text-[#627E84] w-full max-w-[400px] mx-auto">Edike is launching soon, so stay up to date with the latest news and updates by subscribing to our social network feeds and notifications.</p>
					<div class="flex flex-col md:flex-row items-center gap-3 mx-auto w-full max-w-[400px]">
						<input type="email" placeholder="Email address" class="border outline-none rounded-lg py-1 px-2 w-full">
						<button class="bg-primary py-1 text-white rounded-lg px-3">Subscribe</button>
					</div>
				</div>
			</div>
		</div>
	</landing-layout>
</template>
 
<script setup lang="ts">
import howItWorks from '../components/landing/howItWorks.vue';
const schools = [
	{img: 'daily', text: 'Daily light College'},
	{img: 'triple', text: 'Triple Cross school'},
	{img: 'berit', text: 'Berit School'},
	{img: 'triple', text: 'Triple Cross school'},
	{img: 'bosom', text: 'Bosom Private School'},
	{img: 'mozan', text: 'Mozan School'},
	{img: 'mimak', text: 'Mimak College'},
	{img: 'lapaz', text: 'LA PAZ Academy'},
	{img: 'peniel', text: 'Peniel Home School'},
	{img: 'brite', text: 'Brite Hill School'},
	{img: 'daystar', text: 'Daystar School'},
	{img: 'twinkly', text: 'Twinkly Tots'},
	{img: 'tunwase', text: 'Tunwase High School'},
	{img: 'real', text: 'Real Academy LTD'},
	{img: 'rola', text: 'Rola INT School'},
	{img: 'digilearn', text: 'Digilearn Center LTD'},
	{img: 'tamar', text: 'Tamar Preparatory School'}
]

const partners = [ 'lagos', 'paystack', 'dojah', 'badij' ]

const getImageUrl = (imgName:string) => {
	return new URL(`../assets/img/illustrations/landing/schools/${imgName}.svg`, import.meta.url).href
}

const getPartnerImg = (imgName:string) => {
	return new URL(`../assets/img/illustrations/landing/partner/${imgName}.svg`, import.meta.url).href
}
</script>

<style scoped>
.map{
	background-image: url(../assets/img/illustrations/landing/map_bg.svg);
	background-repeat: no-repeat;
	background-position: center center;
}
</style>

