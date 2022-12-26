<template>
	<div class="flex flex-col gap-6  w-full">
		<h3 class="text-[22px] font-medium">My Cards</h3>
		<CardInfo v-if="addedCard != undefined" :data="addedCard"/>
		<button class="add btn-long max-w-[300px] flex items-center justify-center gap-2 text-primary font-medium">
			<img src="../../../assets/img/icons/dashboard/plus_primary.svg" alt="">
			Add Card
		</button>
	</div>
</template>

<script setup lang="ts">
import CardInfo from '../CardInfo.vue'
import { fetchCard } from '../../../composables/Card';

const { addedCard } = fetchCard()
</script>

<style scoped>
button.add{
	background-color: rgba(71, 184, 143, 0.1);
}
</style>