<template>
	<div class="profile ">
		<div class="bg-[#FFFFFF] rounded-xl py-10 px-5 flex flex-col gap-10 transition-all h-full overflow-auto">
			<div class="flex items-center flex-wrap gap-4 md:gap-8">
				<button v-for="tab in tabs" :key="tab.text" class="btn-long px-3 w-fit bg-transparent text-lightGray"
					:class="{'bg-primary text-[#F6F6F6] font-semibold': tab.id == currentTab}" @click="currentTab = tab.id"
				>{{tab.text}}</button>
			</div>

			<transition appear name="tabs_transition" mode="out-in">
				<component :is="tabs[currentTab].comp" class="max-w-[1500px]"></component>
			</transition>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import Details from '../../components/profile/tabs/Details.vue'
	import Cards from '../../components/profile/tabs/Cards.vue';
	import Security from '../../components/profile/tabs/Security.vue'
	import Contact from '../../components/profile/tabs/Contact.vue'

	const tabs = [
		{text: 'Personal Details', comp: Details, id:0},
		{text: 'Cards', comp: Cards, id:1},
		{text: 'Security', comp: Security, id:2},
		{text: 'Contact Us', comp: Contact, id:3}
	]
	const currentTab = ref(0)
</script>

<style scoped>
.profile{
	height: calc(100% - 80px);
}
</style>