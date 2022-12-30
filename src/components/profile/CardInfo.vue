<template>
	<div class="flex flex-col md:flex-row items-center gap-12">
		<div
			class="w-full max-w-[300px] h-[190px] rounded-xl p-6 bg-primary relative overflow-hidden flex flex-col justify-between">
			<div class="w-[300px] h-[300px] rounded-full bg-[#FF965D] absolute top-[56px] left-[157px]"></div>
			<div class="flex justify-end">
				<img src="../../assets/img/icons/visa_logo.svg" class="w-[50px]" alt="" />
			</div>
			<div class="flex items-end justify-between z-20 text-[#FFFFFF]">
				<div class="flex flex-col">
					<p class=" small-text font-medium">{{ data.card[0].account_name || `${userData?.lastname} ${userData?.firstname}`}}</p>
					<div class="flex items-center gap-2 opacity-80">
						<p class="text-[12px]">{{String(data.card[0].bin).slice(0,4)}}</p>
						<p class="relative bottom-[5px]">....</p>
						<p class="relative bottom-[5px]">....</p>
						<p class="text-[12px]">{{data.card[0].last4}}</p>
					</div>
				</div>
				<p class="text-[12px] relative">{{ data.card[0].exp_month }}/{{ data.card[0].exp_year.slice(-2) }}</p>
			</div>
		</div>

		<div class="flex flex-col gap-4 w-full">
			<div class="flex items-start gap-3 w-full">
				<p class="small-text  text-left text-[#8A9099] min-w-[110px]">Card Type</p>
				<p class="small-text text-[#3F434A] w-full">{{data.card[0].card_type}}</p>
			</div>
			<div class="flex items-start gap-3 w-full">
				<p class="small-text  text-left text-[#8A9099] min-w-[110px]">Card Number</p>
				<p class="small-text text-[#3F434A] w-full">{{`${String(data.card[0].bin).slice(0,4)} .... .... ${data.card[0].last4}`}}</p>
			</div>
			<div class="flex items-start gap-3 w-full">
				<p class="small-text text-left text-[#8A9099] min-w-[110px]">Card Holder</p>
				<p class="small-text text-[#3F434A] w-full">{{data.card[0].account_name || `${userData?.lastname} ${userData?.firstname}`}}</p>
			</div>
			<div class="flex items-start gap-3 w-full">
				<p class="small-text text-left text-[#8A9099] min-w-[110px]">Expires</p>
				<p class="small-text text-[#3F434A] w-full">{{ data.card[0].exp_month }}/{{ data.card[0].exp_year.slice(-2) }}</p>
			</div>
			<div class="flex items-start gap-3 w-full">
				<p class="small-text text-left text-[#8A9099] min-w-[110px]">Date Added</p>
				<p class="small-text text-[#3F434A] w-full">{{`${new Date(data.createdAt).getFullYear()}-${new Date(data.createdAt).getMonth()}-${new Date(data.createdAt).getDate()}`}}</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from '../../interface/typeCard'
import { useUser } from '../../composables/UserController';

const { userData } = useUser()

const props = defineProps<{
	data:Card
}>()
</script>