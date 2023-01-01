<template>
	<div class="p-6 rounded-xl flex flex-col gap-4 w-full bg-[#FFFFFF]">
		<div class="flex flex-col gap-2">
			<p class="flex items-center justify-between small-text text-[#595F69]">Onboarding Tasks
				<span class="text-[#8A9099]">{{ calculate * 20 }}%</span>
			</p>
			<div class="h-[6px] rounded-sm bg-[#F8F8F8] relative overflow-hidden">
				<div class="bg-primary absolute top-0 left-0 h-[6px] rounded-sm" :class="{'w-[20%]': calculate == 1, 'w-[40%]': calculate == 2, 'w-[60%]': calculate == 3, 'w-[80%]': calculate == 4, 'w-[100%]': calculate == 5}"></div>
			</div>
		</div>

		<div class="flex-col gap-4 flex lg:hidden">
			<button v-for="item in buttons" :key="item.text" class="min-h-[40px] rounded-lg bg-[#F8F8F8] px-4 py-2 flex items-center justify-between disabled:cursor-not-allowed"
				@click="openModal(item.comp)" :disabled="item.checkUserData == 'approved'">
				<p class="small-text text-left text-black font-semibold max-w-[85%]">{{ item.text }} <span
						class="text-[12px] font-normal">{{ item.subText }}</span></p>
				<img v-if="item.checkUserData == 'approved'" src="../../assets/img/icons/dashboard/checked.svg" alt="" />
				<img v-else src="../../assets/img/icons/dashboard/unchecked.svg" alt="">
			</button>

			
		</div>

		<div class="flex-col gap-4 hidden lg:flex">
			<button v-for="item in buttons" :key="item.text" class="min-h-[40px] rounded-lg bg-[#F8F8F8] px-4 py-2 flex items-center justify-between disabled:cursor-not-allowed"
				@click="openSideModal(item.comp)" :disabled="item.checkUserData == 'approved'">
				<p class="small-text text-left text-black font-semibold max-w-[85%]">{{ item.text }} <span
						class="text-[12px] font-normal">{{ item.subText }}</span></p>
				<img v-if="item.checkUserData == 'approved'" src="../../assets/img/icons/dashboard/checked.svg" alt="" />
				<img v-else src="../../assets/img/icons/dashboard/unchecked.svg" alt="">
			</button>
		</div>

	</div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import AddBvn from './addBvn.vue';
import AddNin from './addNin.vue'
import AddBankStatement from './addBankStatement.vue';
import AddCard from './addCard.vue'
import AddIdCard from './addIdCard.vue'
import { useSideModal } from '../../composables/SideModal';
import { useGlobalModal } from '../../composables/GlobalModal';
import {useUser} from '../../composables/UserController'
import {useUtils} from '../../composables/Utils'

const { saveLoginCredToCookies } = useUtils()
// saveLoginCredToCookies('saykeed@gmail.com', 'Simple123#')
const { openSideModal } = useSideModal()
const { openModal } = useGlobalModal()
const { userData } = useUser()
const { updateCount } = inject<any>('key')

const buttons = [
	{text: 'Verify NIN', subText: '(National Indentification number)', checkUserData: userData.value?.isnin, comp: AddNin},
	{text: 'Verify BVN', subText: '(Bank Verificaton number)', checkUserData: userData.value?.isbvn, comp: AddBvn},
	{text: 'Add Bank Statement', subText: '(Submit your 6 months bank statement)', checkUserData: userData.value?.isbankstatementadded, comp: AddBankStatement},
	{text: 'Save your card', subText: '', checkUserData: userData.value?.iscardadded, comp: AddCard},
	{text: 'Add Identity Card', subText: '(Submit any valid id card)', checkUserData: userData.value?.isidcard, comp: AddIdCard},
]

const calculate = computed(() => {
	let count = 0;
	let arr = []
	arr.push(userData.value?.isbvn)
	arr.push(userData.value?.isnin)
	arr.push(userData.value?.iscardadded)
	arr.push(userData.value?.isbankstatementadded)
	arr.push(userData.value?.isidcard)
	arr.forEach(item => {
		if(item == 'approved') {
			count++
		}
	})
	updateCount(count)
	return count
})

</script>