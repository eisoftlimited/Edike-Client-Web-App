<template>
	<form class="flex flex-col gap-4 relative overflow-hidden" @submit.prevent="submitOtp" >
		<!-- could not set the input to hidden cos i couldnt focus on it when it hidden so i just hid it by making it absolute -->
		<input type="number" @input="getCode"  class="code absolute  -top-[200px]" v-model="otpNum">
		<div class="flex flex-col gap-2">
			<div class="flex items-center gap-2 w-fit mx-auto" @click="focusOnInput">
				<div v-for="index in 6" :key="index"
					class="w-[40px] h-[40px] md:w-[64px] md:h-[64px] lg:max-w-[45px] lg:max-h-[45px] rounded-lg border border-stroke flex items-center justify-center"
					:class="{ 'border-success': otp[index - 1] != null, 'border-secondary': otp.length >= 0 && otp.length == index - 1, 'border-error': inCorrectOTP }">
					<h3 class="heading4 md:heading3 text-[#2D233B]">{{ otp[index - 1] }}</h3>
				</div>
			</div>
			<p v-if="inCorrectOTP"
				class="text-[10px] sm:small-text font-bold flex gap-1 items-center justify-center text-error">
				<span class="w-[8px] h-[8px] rounded-full bg-error"></span>
				Incorrect OTP, Please confirm the OTP and try again.
			</p>
			<p v-if="expiredOTP"
				class="text-[10px] sm:small-text font-bold flex gap-1 items-center justify-center text-error">
				<span class="w-[8px] h-[8px] rounded-full bg-error"></span>
				This OTP has expired. Please request a new OTP.
			</p>
		</div>

		<p class="small-text text-darkGray text-center">The verification code will be expire in <span
				class="text-secondary">{{ `0${Math.floor(timer/60)}:${timer%60 < 10 ? '0' : ''}${timer%60}` }}</span></p>
		<div class="flex gap-4 items-center justify-between">
			<p @click="resend" class="normal-text text-primary w-full max-w-fit font-medium cursor-pointer">Resend Code</p>
			<button class="btn-long" :disabled="!enableButton">Submit</button>
		</div>
	</form>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, onBeforeUnmount, watch } from 'vue';
import { useAuth } from '../../composables/AuthController';
import Swal from 'sweetalert2';

const timer = ref(120)
let interval:any;
const props = defineProps<{
		type: 'verify' | 'reset'
}>()
const { otp, verifyEmail, inCorrectOTP, expiredOTP, forgetPasswordOTP, otpNum, resendResetOtp, resendVerifyOtp, email } = useAuth()

const submitOtp = () => {
	if(props.type ==  'verify') {
		verifyEmail()
	} else if(props.type == 'reset') {
		forgetPasswordOTP()
	}
}

const getEmail = async () => {
	const { value: userEmail } = await Swal.fire({
		title: 'Input email address',
		input: 'email',
		inputLabel: 'Your email address',
		inputPlaceholder: 'Enter your email address'
	})

	if (userEmail) {
		email.value = userEmail
		resend()
	}
}

const restartTimer = () => {
	clearInterval(interval)
	timer.value = 120
	countDown()
}

const resend = () => {
	inCorrectOTP.value = false
	expiredOTP.value = false
	if(email.value) {
		if(props.type ==  'verify') {
			resendVerifyOtp()
			restartTimer()
		} else if(props.type == 'reset') {	
			resendResetOtp()
			restartTimer()
		}
	} else {
		getEmail()
	}
	
}

const getCode = () => {
	if(String(otpNum.value).length > 6) {
		otpNum.value = Number(String(otpNum.value).slice(0,-1))
	}
	otp.value = String(otpNum.value)
}

const focusOnInput = () => {
	let inputs: HTMLFormElement = document.querySelector('input.code')!
	inputs.focus()
}

const countDown = () => {
	interval = setInterval(() => {
		timer.value--
	}, 1000)
}

watch(timer, (newValue, oldValue) => {
	if (newValue == 0) {
		clearInterval(interval)
		expiredOTP.value = true
	}
})

// computed
const enableButton = computed(() => {
	return otp.value.length == 6 ? true : false
})

onMounted(() => {
	focusOnInput()
	countDown()
})

onBeforeUnmount(() => {
	clearInterval(interval)
})


</script>