<template>
	<transition appear name="modal_overlay" @enter="showMainSideModal = true">
		<div class="side_modal absolute bg-overlay w-full h-full bottom-0 left-0 flex" v-if="sideModalStatus">
			<div class="overlay h-full w-full" @click="closeSideModal"></div>
			<transition name="main_side_modal" @leave="sideModalStatus = false">
				<div class="bg-white h-full overflow-auto w-[500px] py-[50px] px-[30px]" v-if="showMainSideModal">
					<div v-if="sideModalLoader" class="h-full w-full flex items-center justify-center">
						<spinner/>
					</div>
					<component v-else :is="sideModalContent" :compProps="sideModalProps"></component>
				</div>
			</transition>
		</div>
	</transition>
</template>

<script setup lang="ts">
import spinner from './spinner.vue';
import { useSideModal } from '../../composables/SideModal'

const { closeSideModal, sideModalContent, sideModalStatus, showMainSideModal, sideModalLoader, sideModalProps } = useSideModal()
</script>

<style scoped>
.side_modal{
	height: calc(100% - 80px)
}
.overlay{
	max-width: calc(100% - 500px);
}
</style>