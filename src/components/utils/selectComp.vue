<template>
	<div class="flex flex-col gap-2">
		<p class="small-text text-darkGray">{{label}}</p>
		<div class="bg-transparent rounded-xl border focus:outline-0 h-[40px] px-4 py-2 small-text focus:border-secondary transition-all flex items-center justify-between" @click="(readyToSelect = !readyToSelect)"
			:class="{ 'border-secondary': readyToSelect, 'border-lightGray': !readyToSelect}"
		>
			<p class="small-text" :class="{ 'text-[#3F434A]': itemSelected, 'text-lightGray' : !itemSelected}">{{selectedItem}}</p>
			<img src="@/assets/img/icons/select_arrow_down.svg" :class="{'rotate-180':readyToSelect}" alt="">
		</div>

		<div class="flex flex-col h-[250px] overflow-auto px-1 py-2" v-if="readyToSelect">
			<searchInput v-model="searchTerm" v-if="selectType != 'gender'"/>

			<p v-if="selectType == 'school'" class="small-text text-[#3F434A] px-2 py-2 h-[40px] my-1 cursor-pointer hover:bg-[#F4F5F5] flex items-center gap-2"  
				v-for="item in filteredItems" :key="`${item}-school`" @click="selectItem(item)"
			>
				<img src="@/assets/img/icons/select_school.svg" alt="">
				{{item}}
			</p>

			<p v-if="selectType == 'class'" class="small-text text-[#3F434A] px-2 py-2 h-[40px] my-1 cursor-pointer hover:bg-[#F4F5F5]"  
				v-for="item in filteredItems" :key="item" @click="selectItem(item)"
			>{{item}}</p>

			<p v-if="selectType == 'gender'" class="small-text text-[#3F434A] px-2 py-2 h-[40px] my-1 cursor-pointer hover:bg-[#F4F5F5]"  
				v-for="item in gender" :key="item" @click="selectItem(item)"
			>{{item}}</p>

		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import searchInput from './searchInput.vue';

const props = defineProps<{
	modelValue: string
	selectType: 'class' | 'school' | 'gender'
	toSelect: string[]
	label: 'Class' | 'Name of school' | 'Gender'
}>()

const selectedItem = ref('Please select')
const searchTerm = ref('')
const itemSelected = ref(false)
const readyToSelect = ref(false)
const isFiltered = ref(false)
const filteredItems = ref(props.toSelect)
const emit = defineEmits(['update:modelValue'])
const gender = ref(['Male', 'Female'])

const selectItem = (str:string) => {
	emit('update:modelValue', str)
	selectedItem.value = str
	itemSelected.value = true
	readyToSelect.value = false
	searchTerm.value = ''
}

watch(searchTerm, async (newValue, oldValue) => {
  if(newValue.length > 0) {
	isFiltered.value = true
	const regex = new RegExp(newValue, "i");
	filteredItems.value = props.toSelect.filter(el => {
		return regex.test(el)
	})
  } else {
	isFiltered.value = false
	filteredItems.value = props.toSelect
  }
})


</script>