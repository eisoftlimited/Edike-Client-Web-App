<template>
	<div class="page flex flex-col gap-4 overflow-auto">
		<p class="text-[18px] md:text-[24px] font-medium leading-[36px]">Hello {{ userData?.lastname }} {{ userData?.firstname }}</p>
		<div class="bg-primary rounded-xl p-4 md:px-8 lg:px-[50px] md:py-0 flex items-end gap-8">
			<img src="../../assets/img/illustrations/dashboard/banner.svg" class="h-[90%] hidden md:flex" alt="">
			<div class="h-full flex items-center justify-center">
				<div class="flex flex-col gap-3 max-w-[460px]">
					<h5 class="heading6 md:heading5 text-white text-center md:text-left">Welcome to your edike dashboard</h5>
					<p v-if="4-count" class="small-text text-white text-center md:text-left">You have {{ 4-count }} task outstanding</p>
					<!-- <p v-else class="small-text text-white text-center md:text-left">You have completed onboarding</p> -->
					<!-- <button class="btn-medium w-fit px-3 normal-text font-bold bg-[#F5993F]">Complete my profile</button> -->
				</div>
			</div>
		</div>
		<div class="w-full">
			<div class="flex flex-col gap-3">
				<OnboardingTask v-if="userData != undefined"/>
				<RecentTransaction/>
			</div>
			<!-- <WalletCard/> -->
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import { useUser } from '../../composables/UserController';
import OnboardingTask from '../../components/dashboard/onboardingTask.vue';
import RecentTransaction from '../../components/dashboard/recentTransaction.vue';


const count = ref(0)
const updateCount = (data:number) => {
	count.value = data
}
provide('key', {
  count,
  updateCount
})
const { userData } = useUser()



</script>

<style scoped>
.page{
	height: calc(100% - 80px);
}


</style>