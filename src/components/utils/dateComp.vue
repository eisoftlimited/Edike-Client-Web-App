<template>
	<div class="flex flex-col gap-2">
		<p class="small-text text-darkGray">Date of birth</p>
		<div class="flex gap-2">
			<SelectDateComp v-model="date" select-type="Date"/>
			<SelectDateComp v-model="month" select-type="Month"/>
			<SelectDateComp v-model="year" select-type="Year"/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SelectDateComp from './selectDateComp.vue';

const date = ref('')
const month = ref('')
const year = ref('')
</script>