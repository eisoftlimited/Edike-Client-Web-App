<template>
	<div class="w-full bg-[#FFFFFF] h-auto flex flex-col px-6 relative">
		<div class="flex items-center justify-between py-4 h-[80px]">
			<button class="flex lg:hidden items-center justify-center" @click="openMenu">
				<img src="../../assets/img/icons/hamburger.svg" alt="">
			</button>
			<div>
				<router-link to="/dashboard">
					<img src="@/assets/img/logo.svg" class="w-[100px] block mx-auto lg:hidden" alt=""/>
				</router-link>
				
				<h3 class="text-[22px] hidden lg:block">{{route.name}}</h3>
			</div>
			
			<div class="gap-4 flex">
				<!-- <img src="@/assets/img/icons/bell.svg" alt=""> -->
				<!-- <span class="border border-l border-[#E8E9EB]"></span> -->
				<div class="dropdownbox flex gap-2 items-center cursor-pointer" @click="showDropDown = true">
					<div class="dropdownbox bg-[#FFD240] h-[40px] w-[40px] rounded-full flex items-end justify-center">
						<img v-if="userData?.profileImage" class="dropdownbox rounded-full border border-stroke" :src="userData.profileImage" alt="">
						<img v-else class="dropdownbox" src="@/assets/img/illustrations/user_avatar.svg" alt="">
					</div>
					<p class="dropdownbox normal-text hidden lg:block ">{{userData?.firstname}} {{userData?.lastname}}</p>
					<img class="dropdownbox" src="@/assets/img/icons/arrow_down_filled.svg" alt="">
				</div>
			</div>
		</div>
		<div class="flex gap-2 md:gap-4 py-2 items-center flex-col md:flex-row h-[60px]" v-if="route.name == 'Beneficiaries'">
			<searchInput :model-value="searchTerm"/>
			<button :disabled="sideModalStatus" class="btn-medium w-full max-w-fit px-2 items-center gap-3 hidden md:flex" @click="openSideModal(beneficiaryForm)">
				<img src="../../assets/img/icons/dashboard/plus_white.svg" alt="">
				Add Beneficiary
			</button>
		</div>

		<transition name="drop_down">
			<div v-if="showDropDown" class=" absolute -bottom-20 right-6 bg-[#ffffff] border border-stroke rounded-xl flex flex-col  overflow-hidden">
				<router-link to="/dashboard/profile" class="px-4 text-left py-3 text-primary border-b hover:bg-primary hover:text-white">Go to profile</router-link>
				<button @click="logOut" class="px-4 text-red-600 py-3 text-left hover:bg-red-600 hover:text-[#ffffff]">Logout</button>
			</div>
		</transition>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMenuController } from '../../composables/MenuController';
import searchInput from '../utils/searchInput.vue';
import { useRoute } from 'vue-router';
import { useGlobalModal } from '../../composables/GlobalModal';
import { getUserAutomatically } from '../../composables/UserController';
import { useSideModal } from '../../composables/SideModal';
import beneficiaryForm from '../beneficiaries/beneficiaryForm.vue';
import vericationCongrats from '../dashboard/vericationCongrats.vue';
import { useAuth } from '../../composables/AuthController';


const route = useRoute()
const { openModal } = useGlobalModal()
const { openSideModal, sideModalStatus } = useSideModal()
const { openMenu } = useMenuController()
const { userData } = getUserAutomatically()
const searchTerm = ref('')
const showDropDown = ref(false)
const { logOut } = useAuth()

window.onclick = (e:any) => {
	// console.log(e.target.matches('.dropdownbox'))
	if(showDropDown) {
		if(!e.target.matches('.dropdownbox')) showDropDown.value = false
		
	}
}
</script>