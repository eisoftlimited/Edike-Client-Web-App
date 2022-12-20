<template>
	<router-view/>
	<global-modal/>
	<Loader/>
</template>

<script setup lang="ts">
	import GlobalModal from './components/utils/GlobalModal.vue';
	import Loader from './components/utils/Loader.vue'
</script>

