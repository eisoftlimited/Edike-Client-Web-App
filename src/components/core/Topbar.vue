<template>
	<div class="w-full bg-[#FFFFFF] h-auto flex flex-col px-6">
		<div class="flex items-center justify-between py-4 h-[80px]">
			<h3 class="text-[22px]">{{route.name}}</h3>
			<div class="gap-4 hidden lg:flex">
				<img src="@/assets/img/icons/bell.svg" alt="">
				<span class="border border-l border-[#E8E9EB]"></span>
				<div class="flex gap-2 items-center">
					<div class="bg-[#FFD240] h-[40px] w-[40px] rounded-full flex items-end justify-center">
						<img src="@/assets/img/illustrations/user_avatar.svg" alt="">
					</div>
					<p class="normal-text">{{userData?.firstname}} {{userData?.lastname}}</p>
					<img src="@/assets/img/icons/arrow_down_filled.svg" alt="">
				</div>
			</div>
			<button class="flex lg:hidden items-center justify-center" @click="openMenu">
				<img src="../../assets/img/icons/hamburger.svg" alt="">
			</button>
		</div>
		<div class="flex gap-2 md:gap-4 py-2 items-center flex-col md:flex-row h-[60px]" v-if="route.name == 'Beneficiaries'">
			<searchInput :model-value="searchTerm"/>
			<button :disabled="sideModalStatus" class="btn-medium w-full max-w-fit px-2 items-center gap-3 hidden md:flex" @click="openSideModal(beneficiaryForm)">
				<img src="../../assets/img/icons/dashboard/plus_white.svg" alt="">
				Add Beneficiary
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMenuController } from '../../composables/MenuController';
import searchInput from '../utils/searchInput.vue';
import { useRoute } from 'vue-router';
import { useBeneficiaries } from '../../composables/Beneficiaries';
import { getUserAutomatically } from '../../composables/UserController';
import { useSideModal } from '../../composables/SideModal';
import beneficiaryForm from '../beneficiaries/beneficiaryForm.vue';


const route = useRoute()
// const { beneficiaryModal } = useBeneficiaries()
const { openSideModal, sideModalStatus } = useSideModal()
const { openMenu } = useMenuController()
const { userData } = getUserAutomatically()
const searchTerm = ref('')
</script>