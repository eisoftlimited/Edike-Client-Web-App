<template>
	<div class="flex flex-col gap-2 w-full">
		<div class="bg-transparent rounded-xl border focus:outline-0 h-[40px] px-4 py-2 small-text focus:border-secondary transition-all flex items-center justify-between" @click="(readyToSelect = !readyToSelect)"
			:class="{ 'border-secondary': readyToSelect, 'border-lightGray': !readyToSelect}"
		>
			<span v-if="itemSelected"></span>
			<p class="small-text" :class="{ 'text-[#3F434A]': itemSelected, 'text-lightGray' : !itemSelected}">{{selectedItem}}</p>
			<img src="@/assets/img/icons/select_arrow_down.svg" :class="{'rotate-180':readyToSelect}" alt="">
		</div>

		<div class="flex flex-col h-[250px] overflow-auto px-1 py-2" v-if="readyToSelect">
			<p v-if="selectType == 'Date'" class="small-text text-[#3F434A] px-2 py-2 h-[40px] my-1 cursor-pointer hover:bg-[#F4F5F5] text-center"  
				v-for="item in 31" :key="item" @click="selectItem(String(item))"
			>{{(item)}}</p>

			<p v-if="selectType == 'Month'" class="small-text text-[#3F434A] px-2 py-2 h-[40px] my-1 cursor-pointer hover:bg-[#F4F5F5] text-center"  
				v-for="item in months" :key="item" @click="selectItem(item)"
			>{{(item)}}</p>

			<p v-if="selectType == 'Year'" class="small-text text-[#3F434A] px-2 py-2 h-[40px] my-1 cursor-pointer hover:bg-[#F4F5F5] text-center"  
				v-for="item in 25" :key="item" @click="selectItem(String(item + 1997))"
			>{{(item + 1997)}}</p>
			

		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
	modelValue: string
	selectType: 'Date' | 'Month' | 'Year'
}>()
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July' , 'August', 'September', 'October', 'November', 'December']
const selectedItem = ref<string>(props.selectType)
const itemSelected = ref(false)
const readyToSelect = ref(false)
const emit = defineEmits(['update:modelValue'])

const selectItem = (str:string) => {
	emit('update:modelValue', str)
	selectedItem.value = str
	itemSelected.value = true
	readyToSelect.value = false
}


onMounted(() => {
	setTimeout(() => {
		if(props.modelValue) {
			// console.log(props.modelValue) 
			itemSelected.value = true
			selectedItem.value = props.modelValue
		}
	}, 500);
})

</script>