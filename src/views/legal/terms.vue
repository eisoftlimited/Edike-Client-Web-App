<template>
	<auth-layout class="flex flex-col">
		<vue-pdf-embed source="./legal/edikepdf.pdf" />

	</auth-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VuePdfEmbed from 'vue-pdf-embed'

const source1 = ref('https://firebasestorage.googleapis.com/v0/b/whatsapp-clone-8c866.appspot.com/o/edikepdf.pdf?alt=media&token=c0568236-e712-4243-88e4-4cdd206a07c9')
</script>