<template>
	<div class="flex flex-col gap-[50px] w-full max-w-[1200px] mx-auto">
		<h4 class="heading4 !font-medium text-center">How it Works</h4>
		<div class="flex flex-col gap-[30px] lg:gap-0 relative">
			<article v-for="n,index in data" :key="index" class="flex flex-col lg:gap-[100px] lg:flex-row items-center justify-between gap-8 w-full max-w-[500px] lg:max-w-full mx-auto">
				<div class="flex flex-col gap-2 text-[#120A00] font-medium normal-text lg:w-1/2">
					<p class="font-bold">{{ n.title }}</p>
					<p>{{ n.desc }}</p>
					<!-- <ul v-if="n.sub_list.length">
						<li v-for="item in n.sub_list" :key="item">{{ item }}</li>
					</ul> -->
				</div>
				<img :src="getImageUrl(n.img)" class="w-[300px] lg:w-1/2" alt="">
			</article>
			<div class="hidden lg:flex border-r-2 border-[#B2B3B3] border-dashed h-[80%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
			</div>
			<div class="hidden lg:flex flex-col items-center justify-between h-[80%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[40px]">
				<span class="steps">1</span>
				<span class="steps">2</span>
				<span class="steps">3</span>
				<span class="steps">4</span>
			</div>
			
		</div>
	</div>
</template>

<script setup lang="ts">
const sub_list1 = [
	'To raise men and women who would practice',
	'Investments reliable option for sustainable wealth creation ',
	'To raise men and women'
]

const data = [
	{title: 'Register', desc: 'Create an account with your personal information to start the process.', img: 'one'},
	{title: 'Get Verified', desc: 'Submit the necessary documentation to verify your identity and eligibility for an edike offer.', img: 'two'},
	{title: 'Add a Beneficiary', desc: 'Choose a trusted individual as a recipient of the loan.', img: 'three'},
	{title: 'Submit your school fees payment request', desc: 'Fill out a school fees payment request with invoice from with convenient repayment duration. We approve and disburse.', img: 'four'}
]

const getImageUrl = (imgName:string) => {
	return new URL(`../../assets/img/illustrations/landing/how_it_works/${imgName}.png`, import.meta.url).href
}
</script>

<style scoped>
	ul{
		list-style-position: outside;
		margin-left: 20px;
	}
	li{
		list-style-type: disc;
	}
@screen lg{
	article:nth-child(even){
		@apply flex-row-reverse
	}
}

.steps{
	@apply w-[40px] h-[40px] bg-[#F5F8FA] text-[#000000] rounded-full flex items-center justify-center
}
	
</style>