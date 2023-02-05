<template>
	<div class="flex flex-col">
		<header2></header2>
		<div class="px-4 lg:px-8">
			<slot/>
		</div>
		<Footer/>
	</div>
</template>

<script setup lang="ts">
import header2 from '../components/core/header.vue';
import Footer from '../components/core/Footer.vue';
</script>