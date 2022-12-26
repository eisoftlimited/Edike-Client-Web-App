<template>
	<div class="page flex flex-col gap-4 overflow-auto">
		<p class="text-[28px] font-medium leading-[36px]">Hello {{ userData?.lastname }}</p>
		<div class="bg-primary rounded-xl p-4 md:px-8 lg:px-[50px] md:py-0 flex items-end gap-8">
			<img src="../../assets/img/illustrations/dashboard/banner.svg" class="h-[90%] hidden md:flex" alt="">
			<div class="h-full flex items-center justify-center">
				<div class="flex flex-col gap-3 max-w-[460px]">
					<h5 class="heading5 text-white">Unlock your true potential shop</h5>
					<p class="small-text text-white">Fill all your profile shop now and enjoy all feature to improve product selling</p>
					<button class="btn-medium w-fit px-3 normal-text font-bold bg-[#F5993F]">Complete my profile</button>
				</div>
			</div>
		</div>
		<div class="flex flex-col gap-5 lg:flex-row w-full">
			<div class="flex flex-col gap-3 lg:w-[calc(100%-358px)]">
				<OnboardingTask/>
				<RecentTransaction/>
			</div>
			<WalletCard/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useUser } from '../../composables/UserController';
import OnboardingTask from '../../components/dashboard/onboardingTask.vue';
import RecentTransaction from '../../components/dashboard/recentTransaction.vue';
import WalletCard from '../../components/dashboard/walletCard.vue'

const { userData } = useUser()
</script>

<style scoped>
.page{
	height: calc(100% - 80px);
}


</style>