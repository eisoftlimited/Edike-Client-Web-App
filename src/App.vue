<template>
	<router-view/>
	<global-modal/>
	<Loader v-if="mainLoaderStatus"/>
	<sidemenu />
</template>

<script setup lang="ts">
	import GlobalModal from './components/utils/GlobalModal.vue';
	import Loader from './components/utils/Loader.vue'
	import { useLoader } from './composables/LoaderController';
	import sidemenu from './components/landing/sidemenu.vue';
	const { mainLoaderStatus } = useLoader()

</script>

