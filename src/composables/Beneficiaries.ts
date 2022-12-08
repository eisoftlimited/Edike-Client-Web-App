import { ref } from 'vue'

const beneficiaryModal = ref(false)
const beneficiaryModalType = ref<'add' | 'edit'>('add')

export const useBeneficiaries  = () => {
	const openBeneficiaryModal = (str: 'add' | 'edit') => {
		beneficiaryModalType.value = str
		beneficiaryModal.value = true
	}

	const closeBeneficiaryModal =  () => {
		beneficiaryModal.value = false
	}

	return { beneficiaryModal, beneficiaryModalType, openBeneficiaryModal, closeBeneficiaryModal }
}