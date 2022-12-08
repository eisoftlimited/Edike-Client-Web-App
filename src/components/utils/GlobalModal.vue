<template>
	<transition name="modal_overlay" @enter="showMainModal = true">
		<div class="globalModal w-full h-full fixed top-0 left-0 flex items-center justify-center z-20"
			v-if="globalModalStatus">
				<transition name="main_modal" @leave="globalModalStatus = false">
					<div v-if="showMainModal"
						class="modalContent flex flex-col gap-2 justify-between items-center max-h-[70%] w-[90%] max-w-[500px] bg-white rounded-xl z-40 p-4">
						<h3 class="text-2xl text-bodyText font-bold text-center pb-2 w-full border-b">{{globalModalHeader}}
						</h3>
						<div class="overflow-auto w-full">
							<component :is="globalModalContent" :compProps="globalModalProps"></component>
						</div>
					</div>
				</transition>
			<div class="overlay fixed w-full h-full top-0 left-0 bg-overlay z-30" @click="closeModal"></div>
		</div>
	</transition>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useGlobalModal } from '../../composables/GlobalModal'

const { globalModalContent, globalModalStatus, closeModal, globalModalHeader, globalModalProps, showMainModal } = useGlobalModal()



const currentProps =  computed(() => {
	return globalModalProps
})



</script>

<style scoped>
/* ::-webkit-scrollbar {
	width: 7px;
} */

/* Track */
/* ::-webkit-scrollbar-track {
	box-shadow: inset 0 0 5px grey;
	border-radius: 10px;
} */

/* Handle */
/* ::-webkit-scrollbar-thumb {
	background: blue;
	border-radius: 7px;
} */

/* Handle on hover */
/* ::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
} */

/* .globalModal-enter-from, .globalModal-leave-to{ */
  /* opacity: 0;
  transform: scale(0.5);
}

.globalModal-enter-active, .globalModal-leave-active{
  transition: all .3s ease-in-out;
}

.globalOverlay-enter-from, .globalOverlay-leave-to{
  opacity: 0;
}

.globalOverlay-enter-active, .globalOverlay-leave-active{
  transition: all .5s ease-in-out;
} */
</style>