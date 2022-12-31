<template>
	<div class="min-h-full flex flex-col gap-[40px] justify-between" v-if="!bankStatementSuccessful">
		<div class="flex flex-col gap-[40px]">
			<div class="flex flex-col gap-1">
				<h5 class="heading5">UPLOAD BANK STATEMENT
					<span class="normal-text font-normal">(min 6 months)</span>
				</h5>
				<p class="small-text text-[#404040]">Login to your internet banking and generate a 3 month bank statement to upload here.</p>
			</div>

			<div class="flex flex-col gap-5">
				<SelectBank v-model="bankName" />
				<SelectAnalysisType v-model="analysisType"/>
				<Upload v-model="bankStatementPdf" title="Upload Bank Statement" accept="Accepted file is Pdf" info="please upload the bank statement generated" accept-type="application/pdf" :drop-type="['application/pdf']"/>
			</div>
			
		</div>

		<div class="flex gap-4 items-center justify-between">
			<button type="button" class="btn-short bg-transparent text-primary" @click="closeModals">Cancel</button>
			<button type="submit" :disabled="!bankStatementButtonEnabled" @click="addBankStatement" class="btn-short">Save</button>
		</div>
	</div>

	<div class="h-full flex items-center justify-center" v-else>
		<div class="flex flex-col gap-[50px] items-center">
			<img src="../../assets/img/illustrations/successful.svg" class="mx-auto" alt="">
			<div class="flex flex-col gap-1 text-center">
				<h5 class="heading5 font-bold">Successful!!!</h5>
				<p class="small-text text-[#404040] text-center">Bank Statement has been added to your account successfully.</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSideModal } from '../../composables/SideModal'
import { useBankStatement } from '../../composables/BankStatement'
import Upload from '../utils/upload.vue';
import SelectBank from '../utils/selectBank.vue'
import SelectAnalysisType from '../utils/selectAnalysisType.vue';
import { useGlobalModal } from '../../composables/GlobalModal';


const { closeSideModal } = useSideModal()
const { closeModal } = useGlobalModal()
const { bankStatementPdf, bankStatementSuccessful, addBankStatement, 
	bankStatementButtonEnabled, bankName, analysisType  } = useBankStatement()



const closeModals = () => {
	closeModal()
	closeSideModal()
}

// const getImage = () => {
// 	let x:HTMLInputElement = document.querySelector('input.file')!
// 	console.log(x.files[0])
// 	imageFile.value = x.files[0]
// }
</script>