<template>
	<button @click="useLoader().openSubLoader()">testing</button>
	<router-view/>
	<global-modal/>
	<Loader v-if="mainLoaderStatus"/>
</template>

<script setup lang="ts">
	import GlobalModal from './components/utils/GlobalModal.vue';
	import Loader from './components/utils/Loader.vue'
	import { useLoader } from './composables/LoaderController';
	const { mainLoaderStatus } = useLoader()

</script>

