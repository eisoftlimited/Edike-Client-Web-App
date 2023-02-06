<template>
	<landing-layout>
		<div class="flex flex-col gap-8 py-4">
			<div class="flex flex-col gap-4 text-center text-[#120A00]">
				<h3 class="text-2xl md:text-3xl font-medium">Terms & Conditions</h3>
				<p class="small-text">Home / Terms & Conditions</p>
			</div>
			<vue-pdf-embed source="./legal/edikepdf.pdf" />
		</div>
	</landing-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VuePdfEmbed from 'vue-pdf-embed'

</script>