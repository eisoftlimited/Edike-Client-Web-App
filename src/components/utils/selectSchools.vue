<template>
	<div class="flex flex-col gap-2">
		<p class="small-text text-darkGray">Name of schools</p>
		<div class="bg-transparent rounded-xl border focus:outline-0 h-[40px] px-4 py-2 small-text focus:border-secondary transition-all flex items-center justify-between" @click="(readyToSelect = !readyToSelect)"
			:class="{ 'border-secondary': readyToSelect, 'border-lightGray': !readyToSelect}"
		>
			<p class="small-text" :class="{ 'text-[#3F434A]': itemSelected, 'text-lightGray' : !itemSelected}">{{selectedItem}}</p>
			<img src="@/assets/img/icons/select_arrow_down.svg" :class="{'rotate-180':readyToSelect}" alt="">
		</div>

		<div class="flex flex-col max-h-[250px] overflow-auto px-1 py-2" v-if="readyToSelect">
			<searchInput place-holder="Search School" v-model="searchTerm"/>

			<p class="small-text text-[#3F434A] px-2 py-2 h-[40px] my-1 cursor-pointer hover:bg-[#F4F5F5] flex items-center gap-2"  
				v-for="item in filteredItems" :key="`${item}-school`" @click="selectItem(item.school_name)"
			>
				<img src="@/assets/img/icons/select_school.svg" alt="">
				{{item.school_name}}
			</p>
			<p @click="otherSchool" class="small-text text-[#3F434A] px-2 py-2 h-[40px] my-1 cursor-pointer hover:bg-[#F4F5F5] flex items-center gap-2">
				<img src="@/assets/img/icons/select_school.svg" alt=""/>
				Others
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import searchInput from './searchInput.vue';
import Swal from 'sweetalert2';

const props = defineProps<{
	modelValue: string
	toSelect?: {id:number; school_name:string;}[] 
}>()

const selectedItem = ref('Please select')
const searchTerm = ref('')
const itemSelected = ref(false)
const readyToSelect = ref(false)
const isFiltered = ref(false)
const filteredItems = ref(props.toSelect)
const emit = defineEmits(['update:modelValue'])

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
	filteredItems.value = props.toSelect?.filter((el) => {
		return regex.test(el.school_name)
	})
  } else {
	isFiltered.value = false
	filteredItems.value = props.toSelect
  }
})

const otherSchool = async () => {
	const { value: otherSchoolName } = await Swal.fire({
		title: 'Input School Name',
		input: 'text',
		// inputLabel: 'Your email address',
		inputPlaceholder: 'Enter school name'
	})

	if (otherSchoolName) {
		emit('update:modelValue', otherSchoolName)
		selectedItem.value = otherSchoolName
		itemSelected.value = true
		readyToSelect.value = false
		searchTerm.value = ''
	}
}

onMounted(() => {
	if(props.modelValue) {
		itemSelected.value = true
		selectedItem.value = props.modelValue
	}
})



</script>