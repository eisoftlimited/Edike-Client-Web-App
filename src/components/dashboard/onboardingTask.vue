<template>
	<div class="p-6 rounded-xl flex flex-col gap-4 w-full bg-[#FFFFFF]">
		<div class="flex flex-col gap-2">
			<p class="flex items-center justify-between small-text text-[#595F69]">Onboarding Tasks
				<span class="text-[#8A9099]">{{ calculate * 25 }}%</span>
			</p>
			<div class="h-[6px] rounded-sm bg-[#F8F8F8] relative overflow-hidden">
				<div class="bg-primary absolute top-0 left-0 h-[6px] rounded-sm" :class="{'w-[25%]': calculate == 1, 'w-[50%]': calculate == 2, 'w-[75%]': calculate == 3, 'w-[100%]': calculate == 4}"></div>
			</div>
		</div>

		<div class="flex-col gap-4 flex lg:hidden">
			<button class="min-h-[40px] rounded-lg bg-[#F8F8F8] px-4 py-2 flex items-center justify-between disabled:cursor-not-allowed"
				@click="openModal(AddNin)" :disabled="userData?.isnin == 'approved'">
				<p class="small-text text-left text-black font-semibold max-w-[85%]">Verify your NIN <span
						class="text-[12px] font-normal">(National Indentification number)</span></p>
				<img v-if="userData?.isnin == 'approved'" src="../../assets/img/icons/dashboard/checked.svg" alt="" />
				<img v-else src="../../assets/img/icons/dashboard/unchecked.svg" alt="">
			</button>

			<button class="min-h-[40px] rounded-lg bg-[#F8F8F8] px-4 py-2 flex items-center justify-between disabled:cursor-not-allowed"
			@click="openModal(AddBvn)" :disabled="userData?.isbvn == 'approved'">
				<p class="small-text text-left text-black font-semibold max-w-[85%]">Verify your BVN <span
						class="text-[12px] font-normal">(Bank Verification Number)</span></p>
				<img v-if="userData?.isbvn == 'approved'" src="../../assets/img/icons/dashboard/checked.svg" alt="" />
				<img v-else src="../../assets/img/icons/dashboard/unchecked.svg" alt="">
			</button>

			<button class="min-h-[40px] rounded-lg bg-[#F8F8F8] px-4 py-2 flex items-center justify-between disabled:cursor-not-allowed" @click="openModal(AddBankStatement)">
				<p class="small-text text-left text-black font-semibold max-w-[85%]">Get your spending limit <span
						class="text-[12px] font-normal">(Submit your 3 months bank statement)</span></p>
				<img v-if="userData?.isbankstatementadded == 'approved'" src="../../assets/img/icons/dashboard/checked.svg" alt="" />
				<img v-else src="../../assets/img/icons/dashboard/unchecked.svg" alt="">
			</button>

			<button class="min-h-[40px] rounded-lg bg-[#F8F8F8] px-4 py-2 flex items-center justify-between disabled:cursor-not-allowed" @click="openModal(AddCard)" :disabled="userData?.iscardadded == 'approved'">
				<p class="small-text text-left text-black font-semibold max-w-[85%]">Save your Debit Card</p>
				<img v-if="userData?.iscardadded == 'approved'" src="../../assets/img/icons/dashboard/checked.svg" alt="" />
				<img v-else src="../../assets/img/icons/dashboard/unchecked.svg" alt="">
			</button>
		</div>

		<div class="flex-col gap-4 hidden lg:flex">
			<button class="min-h-[40px] rounded-lg bg-[#F8F8F8] px-4 py-2 flex items-center justify-between disabled:cursor-not-allowed"
				@click="openSideModal(AddNin)" :disabled="userData?.isnin == 'approved'">
				<p class="small-text text-left text-black font-semibold max-w-[85%]">Verify your NIN <span
						class="text-[12px] font-normal">(National Indentification number)</span></p>
				<img v-if="userData?.isnin == 'approved'" src="../../assets/img/icons/dashboard/checked.svg" alt="" />
				<img v-else src="../../assets/img/icons/dashboard/unchecked.svg" alt="">
			</button>

			<button class="min-h-[40px] rounded-lg bg-[#F8F8F8] px-4 py-2 flex items-center justify-between disabled:cursor-not-allowed"
				@click="openSideModal(AddBvn)" :disabled="userData?.isbvn == 'approved'">
				<p class="small-text text-left text-black font-semibold max-w-[85%]">Verify your BVN <span
						class="text-[12px] font-normal">(Bank Verification Number)</span></p>
				<img v-if="userData?.isbvn == 'approved'" src="../../assets/img/icons/dashboard/checked.svg" alt="" />
				<img v-else src="../../assets/img/icons/dashboard/unchecked.svg" alt="">
			</button>

			<button class="min-h-[40px] rounded-lg bg-[#F8F8F8] px-4 py-2 flex items-center justify-between disabled:cursor-not-allowed" @click="openSideModal(AddBankStatement)" >
				<p class="small-text text-left text-black font-semibold max-w-[85%]">Get your spending limit <span
						class="text-[12px] font-normal">(Submit your 3 months bank statement)</span></p>
				<img v-if="userData?.isbankstatementadded == 'approved'" src="../../assets/img/icons/dashboard/checked.svg" alt="" />
				<img v-else src="../../assets/img/icons/dashboard/unchecked.svg" alt="">
			</button>

			<button class="min-h-[40px] rounded-lg bg-[#F8F8F8] px-4 py-2 flex items-center justify-between disabled:cursor-not-allowed" @click="openSideModal(AddCard)" :disabled="userData?.iscardadded == 'approved'">
				<p class="small-text text-left text-black font-semibold max-w-[85%]">Save your Debit Card</p>
				<img v-if="userData?.iscardadded == 'approved'" src="../../assets/img/icons/dashboard/checked.svg" alt="" />
				<img v-else src="../../assets/img/icons/dashboard/unchecked.svg" alt="">
			</button>
		</div>

	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import AddBvn from './addBvn.vue';
import AddNin from './addNin.vue'
import AddBankStatement from './addBankStatement.vue';
import AddCard from './addCard.vue'
import { useSideModal } from '../../composables/SideModal';
import { useGlobalModal } from '../../composables/GlobalModal';
import {useUser} from '../../composables/UserController'

const { openSideModal } = useSideModal()
const { openModal } = useGlobalModal()
const { userData } = useUser()

const calculate = computed(() => {
	let count = 0;
	let arr = []
	arr.push(userData.value?.isbvn)
	arr.push(userData.value?.isnin)
	arr.push(userData.value?.iscardadded)
	arr.push(userData.value?.isbankstatementadded)
	arr.forEach(item => {
		if(item == 'approved') {
			count++
		}
	})
	return count
})

</script>