<template>
	<div class="w-full flex flex-col gap-2 relative">
		<p class="small-text text-darkGray">Expire date</p>
		<div class="flex items-center gap-2">
			<input required type="text" maxlength="2" placeholder="MM" v-model="expire_month" 
			class="w-[50px] caret-secondary bg-transparent rounded-xl border border-lightGray focus:outline-0 h-[40px] px-2 py-2 small-text focus:border-secondary transition-all" />
			<span>/</span>
			<input required type="text" maxlength="2" placeholder="YY" v-model="expire_year" 
			class="w-[50px] caret-secondary bg-transparent rounded-xl border border-lightGray focus:outline-0 h-[40px] px-2 py-2 small-text focus:border-secondary transition-all" />
		</div>
		<!-- <input required type="text" placeholder="12 / 34" v-model="expires_in" @input="getCode"
			class="w-full caret-secondary bg-transparent rounded-xl border border-lightGray focus:outline-0 h-[40px] px-4 py-2 small-text focus:border-secondary transition-all text-transparent" :class="{'caret-transparent' : String(expires_in).length}"
		/> -->
		<!-- <p class="small-text absolute top-[40px] left-4" v-if="String(expires_in).length">
			<span v-if="String(expires_in)[0]">{{String(expires_in)[0]}}</span>
			<span v-if="String(expires_in)[1]">{{String(expires_in)[1]}}</span> / 
			<span v-if="String(expires_in)[2]">{{String(expires_in)[2]}}</span>
			<span v-if="String(expires_in)[3]">{{String(expires_in)[3]}}</span>
		</p> -->
	</div>
</template>

<script setup lang="ts">
import { useCard } from '../../composables/Card';
	// const props = defineProps<{
	// 	modelValue: string
	// }>()

	const { expire_month, expire_year} = useCard()
	// const getCode = () => {
	// 	if(String(expires_in.value).length > 4) {
	// 		expires_in.value = String(expires_in.value).slice(0,-1)
	// 	}
	// }
</script>