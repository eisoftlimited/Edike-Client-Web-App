<template>
	<div class="w-full flex flex-col gap-2">
		<p class="small-text text-darkGray">{{ label }}</p>
		<div class="w-full h-fit relative">
			<input required :type="passwordVisible ? 'text' : 'password'" :placeholder="placeHolder" :value="modelValue"
				@input="updateValue"
				class="pass w-full caret-secondary bg-transparent rounded-xl border border-lightGray focus:outline-0 h-[40px] px-4 py-2 small-text focus:border-secondary transition-all" 
			/>
				<span v-if="!passwordVisible" @click="toggleVisibility" class="cursor-pointer absolute top-1/2 -translate-y-1/2 right-4">
					<img src="../../assets/img/icons/eye_closed.svg" alt="">
				</span>
				<span v-if="passwordVisible" @click="toggleVisibility" class="cursor-pointer absolute top-1/2 -translate-y-1/2 right-4">
					<img src="../../assets/img/icons/eye_open.svg" alt="">
				</span>
		</div>
		<div class="flex h-[6px] justify-between" v-if="allowPasswordStrength && showPasswordStrentghBar">
			<span class="h-full w-[33%] bg-transparent" :class="{'bg-[#E45C5E]': forWeak}"></span>
			<span class="h-full w-[33%] bg-transparent" :class="{'bg-[#F3C652]': forGood}"></span>
			<span class="h-full w-[33%] bg-transparent" :class="{'bg-[#68C38C]': forStrong}"></span>
		</div>
		<p v-if="showForgotPassword" class="text-right text-[10px] text-black">Forgot Password? 
			<router-link to="/" class="text-secondary">Click Here</router-link>
		</p>
	</div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { ref } from 'vue';

defineProps<{
	label: string
	placeHolder: string
	showForgotPassword: boolean
	modelValue: string
	allowPasswordStrength: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const updateValue = (e: Event) => {
	let pass:HTMLInputElement = document.querySelector('input.pass')!
  	pass.value.length > 0? showPasswordStrentghBar.value = true : showPasswordStrentghBar.value = false
  	emit('update:modelValue', (e.target as HTMLInputElement).value)
	passWordStrengthChecker(pass.value)
};

const passwordVisible = ref(false)
const passwordStrength = ref<'weak'|'good'|'strong'>('weak')
const showPasswordStrentghBar = ref(false)
const toggleVisibility = () => {
	passwordVisible.value = !passwordVisible.value
}

const passWordStrengthChecker = (password:string) => {
	// (/[A-Z]/.test(password) && password.length > 8 && specialChars.test(password) && /\d/.test(password))
	// const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
	const strong =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,35}$/;
	
	if(password.match(strong)) {
		passwordStrength.value = 'strong'
	} else if(/[A-Z]/.test(password) && password.length > 8 && /\d/.test(password)) {
		passwordStrength.value = 'good'
	} else {
		passwordStrength.value = 'weak'
	}
}




// computed
const forWeak = computed(() => {
	return passwordStrength.value == 'weak' || 'good' || 'strong' ? true : false
})
const forGood = computed(() => {
	return passwordStrength.value != 'weak' ? true : false
})

const forStrong = computed(() => {
	return passwordStrength.value == 'strong' ? true : false
})

</script>

<style scoped>
/* input{
	-webkit-text-security: square;
} */
</style>