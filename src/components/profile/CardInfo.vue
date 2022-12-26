<template>
	<div class="flex flex-col md:flex-row items-center gap-12">
		<div
			class="w-full max-w-[300px] h-[190px] rounded-xl p-6 bg-primary relative overflow-hidden flex flex-col justify-between">
			<div class="w-[300px] h-[300px] rounded-full bg-[#FF965D] absolute top-[56px] left-[157px]"></div>
			<div class="flex justify-end">
				<img src="../../assets/img/icons/visa_logo.svg" class="w-[50px]" alt="" />
			</div>
			<div class="flex items-end justify-between text-[#FFFFFF]">
				<div class="flex flex-col">
					<p class=" small-text font-medium">{{ data.card_holder }}</p>
					<div class="flex items-center gap-2 opacity-80">
						<p class="relative bottom-[5px]">....</p>
						<p class="relative bottom-[5px]">....</p>
						<p class="relative bottom-[5px]">....</p>
						<p class="text-[12px]">{{String(data.card_number).slice(-4)}}</p>
					</div>
				</div>
				<p class="text-[12px] relative">{{ data.expires_in }}</p>
			</div>
		</div>

		<div class="flex flex-col gap-4 w-full">
			<div class="flex items-start gap-3 w-full">
				<p class="small-text  text-left text-[#8A9099] min-w-[110px]">Card Type</p>
				<p class="small-text text-[#3F434A] w-full">{{data.card_type}}</p>
			</div>
			<div class="flex items-start gap-3 w-full">
				<p class="small-text  text-left text-[#8A9099] min-w-[110px]">Card Number</p>
				<p class="small-text text-[#3F434A] w-full">{{data.card_number}}</p>
			</div>
			<div class="flex items-start gap-3 w-full">
				<p class="small-text text-left text-[#8A9099] min-w-[110px]">Card Holder</p>
				<p class="small-text text-[#3F434A] w-full">{{data.card_holder}}</p>
			</div>
			<div class="flex items-start gap-3 w-full">
				<p class="small-text text-left text-[#8A9099] min-w-[110px]">Expires</p>
				<p class="small-text text-[#3F434A] w-full">{{data.expires_in}}</p>
			</div>
			<div class="flex items-start gap-3 w-full">
				<p class="small-text text-left text-[#8A9099] min-w-[110px]">Date Added</p>
				<p class="small-text text-[#3F434A] w-full">{{`${new Date(data.date).getFullYear()}-${new Date(data.date).getMonth()}-${new Date(data.date).getDate()}`}}</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from '../../interface/typeCard'

const props = defineProps<{
	data:Card
}>()
</script>