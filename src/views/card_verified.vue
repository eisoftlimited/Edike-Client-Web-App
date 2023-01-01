<template>
	<div class=" w-full flex items-center justify-center">

		<div class="mt-[200px] w-[90%] max-w-[400px] mx-auto flex flex-col gap-4 items-center">
			<h3 class="heading4 text-primary font-bold text-center">CARD VERIFIED SUCCESSFULLY</h3>
			<router-link to="/dashboard" class="py-2 px-4 w-full max-w-fit bg-primary mx-auto rounded-lg text-white">Back to dashboard</router-link>
		</div>
		
	</div>
</template>

<script setup lang="ts">
	import { onMounted } from 'vue';
import { useCard } from '../composables/Card';

	const { verifyCard } = useCard()

	onMounted(() => {
		verifyCard()
	})
</script>