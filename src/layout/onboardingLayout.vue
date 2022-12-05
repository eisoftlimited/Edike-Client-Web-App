<template>
	<div class="w-[90%] max-w-[1200px] mx-auto">
		<Header/>
		<slot/>
	</div>
	
</template>

<script setup lang="ts">
import Header from '../components/core/header.vue'
	
</script>
