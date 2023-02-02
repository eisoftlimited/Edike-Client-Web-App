<template>
	<form class="flex flex-col gap-4">
		<h5 class="heading5">UPLOAD UTILITY BILL
			<span class="normal-text font-normal">(that includes your address)</span>
		</h5>
		<Upload v-model="idImage" title="Upload utility bill image" accept="Accepted file is image" info="" accept-type="image/x-png,image/jpeg" :drop-type="['image/x-png','image/jpeg']"/>
		<textInput input-type="text" :if-required="true" place-holder="" label="Address" v-model="address" />
		<button class="btn-short" type="submit">Submit</button>
	</form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import textInput from '../utils/textInput.vue';
import Upload from '../utils/upload.vue';

const idImage = ref<any>()
const address = ref('')
</script>