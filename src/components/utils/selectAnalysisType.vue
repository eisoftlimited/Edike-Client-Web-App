<template>
	<div class="flex flex-col gap-2">
		<p class="small-text text-darkGray">Analysis type</p>
		<div class="bg-transparent rounded-xl border focus:outline-0 h-[40px] px-4 py-2 small-text focus:border-secondary transition-all flex items-center justify-between" @click="(readyToSelect = !readyToSelect)"
			:class="{ 'border-secondary': readyToSelect, 'border-lightGray': !readyToSelect}"
		>
			<p class="small-text" :class="{ 'text-[#3F434A]': itemSelected, 'text-lightGray' : !itemSelected}">{{selectedItem}}</p>
			<img src="@/assets/img/icons/select_arrow_down.svg" :class="{'rotate-180':readyToSelect}" alt="">
		</div>

		<div class="flex flex-col max-h-[250px] overflow-auto px-1 py-2" v-if="readyToSelect">

			<p class="small-text text-[#3F434A] px-2 py-2 h-[40px] my-1 cursor-pointer hover:bg-[#F4F5F5]"  
				v-for="item in analysis_type" :key="`${item}`" @click="selectItem(item.option, item.value)"
			>
				{{item.option}}
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {useDemos} from '../../composables/Demos'

const { analysis_type } = useDemos()
const props = defineProps<{
	modelValue: string
}>()

const selectedItem = ref('Please select')
const searchTerm = ref('')
const itemSelected = ref(false)
const readyToSelect = ref(false)
const emit = defineEmits(['update:modelValue'])

const selectItem = (str:string, value:string) => {
	emit('update:modelValue', value)
	selectedItem.value = str
	itemSelected.value = true
	readyToSelect.value = false
}



// onMounted(() => {
// 	if(props.modelValue) {
// 		itemSelected.value = true
// 		selectedItem.value = props.modelValue
// 	}
// })



</script>