<template>
	<div class="flex flex-col gap-6  w-full">
		<h3 class="text-[22px] font-medium">My Cards</h3>
		<CardInfo v-if="addedCard != undefined" :data="addedCard"/>
		<button @click="addCard" v-else class="add btn-long max-w-[300px] flex items-center justify-center gap-2 text-primary font-medium">
			<img src="../../../assets/img/icons/dashboard/plus_primary.svg" alt="">
			Add Card
		</button>
	</div>
</template>

<script setup lang="ts">
import CardInfo from '../CardInfo.vue'
import AddCard from '../../dashboard/addCard.vue';
import { fetchCard } from '../../../composables/Card';
import { useUtils } from '../../../composables/Utils';
import { useGlobalModal } from '../../../composables/GlobalModal';
import { useSideModal } from '../../../composables/SideModal';


const { openModal } = useGlobalModal()
const { openSideModal } = useSideModal()
const { getSize } = useUtils()
const { addedCard } = fetchCard()

const addCard = () => {
	if(getSize() > 1024) {
		openSideModal(AddCard)
	} else {
		openModal(AddCard)
	}
}
</script>

<style scoped>
button.add{
	background-color: rgba(71, 184, 143, 0.1);
}
</style>