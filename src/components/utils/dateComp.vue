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
import { ref, watch, onMounted } from 'vue'
import SelectDateComp from './selectDateComp.vue';


const props = defineProps<{
	modelValue: string
}>()
const emit = defineEmits(['update:modelValue'])
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July' , 'August', 'September', 'October', 'November', 'December']
const date = ref('')
const month = ref('')
const year = ref('')

watch(date, (newValue, oldValue) => {
	let data = `${newValue}/${months.indexOf(month.value) +1}/${year.value}`
	if(date.value && month.value && year.value) emit('update:modelValue', data)
})

watch(month, (newValue, oldValue) => {
	let data = `${date.value}/${months.indexOf(newValue) +1}/${year.value}`
    if(date.value && month.value && year.value) emit('update:modelValue', data)
})

watch(year, (newValue, oldValue) => {
	let data = `${date.value}/${months.indexOf(month.value) +1}/${newValue}`
    if(date.value && month.value && year.value) emit('update:modelValue', data)
})

onMounted(() => {
	if(props.modelValue) {
		let arr = props.modelValue.split('/')
		// console.log(arr)
		date.value = arr[0]
		month.value = months[Number(arr[1]) - 1]
		year.value = arr[2]
		// console.log(month.value)
	}
})
</script>