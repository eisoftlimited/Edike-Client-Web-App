<template>
	<div class="p-6 rounded-xl flex flex-col gap-4 w-full bg-[#FFFFFF]">
		<div class="flex flex-col gap-2">
			<p class="flex items-center justify-between small-text text-[#595F69]">Onboarding Tasks
				<span class="text-[#8A9099]">25%</span>
			</p>
			<div class="h-[6px] rounded-sm bg-[#F8F8F8] relative overflow-hidden">
				<div class="w-[25%] bg-primary absolute top-0 left-0 h-[6px] rounded-sm"></div>
			</div>
		</div>

		<div class="flex-col gap-4 flex lg:hidden">
			<button class="min-h-[40px] rounded-lg bg-[#F8F8F8] px-4 py-2 flex items-center justify-between"
				@click="openModal(AddNin)">
				<p class="small-text text-left text-black font-semibold max-w-[85%]">Verify your NIN <span
						class="text-[12px] font-normal">(National Indentification number)</span></p>
				<img v-if="true" src="../../assets/img/icons/dashboard/checked.svg" alt="" />
				<img v-else src="../../assets/img/icons/dashboard/unchecked.svg" alt="">
			</button>

			<button class="min-h-[40px] rounded-lg bg-[#F8F8F8] px-4 py-2 flex items-center justify-between"
			@click="openModal(AddBvn)">
				<p class="small-text text-left text-black font-semibold max-w-[85%]">Verify your BVN <span
						class="text-[12px] font-normal">(Bank Verification Number)</span></p>
				<img v-if="false" src="../../assets/img/icons/dashboard/checked.svg" alt="" />
				<img v-else src="../../assets/img/icons/dashboard/unchecked.svg" alt="">
			</button>

			<button class="min-h-[40px] rounded-lg bg-[#F8F8F8] px-4 py-2 flex items-center justify-between">
				<p class="small-text text-left text-black font-semibold max-w-[85%]">Get your spending limit <span
						class="text-[12px] font-normal">(Submit your 3 months bank statement)</span></p>
				<img v-if="false" src="../../assets/img/icons/dashboard/checked.svg" alt="" />
				<img v-else src="../../assets/img/icons/dashboard/unchecked.svg" alt="">
			</button>

			<button class="min-h-[40px] rounded-lg bg-[#F8F8F8] px-4 py-2 flex items-center justify-between">
				<p class="small-text text-left text-black font-semibold max-w-[85%]">Save your Debit Card</p>
				<img v-if="false" src="../../assets/img/icons/dashboard/checked.svg" alt="" />
				<img v-else src="../../assets/img/icons/dashboard/unchecked.svg" alt="">
			</button>
		</div>

		<div class="flex-col gap-4 hidden lg:flex">
			<button class="min-h-[40px] rounded-lg bg-[#F8F8F8] px-4 py-2 flex items-center justify-between"
				@click="openSideModal(AddNin)">
				<p class="small-text text-left text-black font-semibold max-w-[85%]">Verify your NIN <span
						class="text-[12px] font-normal">(National Indentification number)</span></p>
				<img v-if="true" src="../../assets/img/icons/dashboard/checked.svg" alt="" />
				<img v-else src="../../assets/img/icons/dashboard/unchecked.svg" alt="">
			</button>

			<button class="min-h-[40px] rounded-lg bg-[#F8F8F8] px-4 py-2 flex items-center justify-between"
				@click="openSideModal(AddBvn)">
				<p class="small-text text-left text-black font-semibold max-w-[85%]">Verify your BVN <span
						class="text-[12px] font-normal">(Bank Verification Number)</span></p>
				<img v-if="false" src="../../assets/img/icons/dashboard/checked.svg" alt="" />
				<img v-else src="../../assets/img/icons/dashboard/unchecked.svg" alt="">
			</button>

			<button class="min-h-[40px] rounded-lg bg-[#F8F8F8] px-4 py-2 flex items-center justify-between">
				<p class="small-text text-left text-black font-semibold max-w-[85%]">Get your spending limit <span
						class="text-[12px] font-normal">(Submit your 3 months bank statement)</span></p>
				<img v-if="false" src="../../assets/img/icons/dashboard/checked.svg" alt="" />
				<img v-else src="../../assets/img/icons/dashboard/unchecked.svg" alt="">
			</button>

			<button class="min-h-[40px] rounded-lg bg-[#F8F8F8] px-4 py-2 flex items-center justify-between">
				<p class="small-text text-left text-black font-semibold max-w-[85%]">Save your Debit Card</p>
				<img v-if="false" src="../../assets/img/icons/dashboard/checked.svg" alt="" />
				<img v-else src="../../assets/img/icons/dashboard/unchecked.svg" alt="">
			</button>
		</div>

	</div>
</template>

<script setup lang="ts">
import AddBvn from '../loan/addBvn.vue';
import AddNin from '../loan/addNin.vue'
import { useSideModal } from '../../composables/SideModal';
import { useGlobalModal } from '../../composables/GlobalModal';

const { openSideModal } = useSideModal()
const { openModal } = useGlobalModal()
</script>