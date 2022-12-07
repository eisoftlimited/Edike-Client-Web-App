import { ref } from 'vue'

const addBeneficiaryStatus = ref(false)
const editBeneficiaryStatus = ref(false)

export const useBeneficiaries  = () => {
	const openAddBeneficiaries = () => {
		addBeneficiaryStatus.value = true
	}

	const closeAddBeneficiaries =  () => {
		addBeneficiaryStatus.value = false
	}

	const openEditBeneficiaries = () => {
		editBeneficiaryStatus.value = true
	}

	const closeEditBeneficiaries =  () => {
		editBeneficiaryStatus.value = false
	}
	return { addBeneficiaryStatus, openAddBeneficiaries, closeAddBeneficiaries, editBeneficiaryStatus, openEditBeneficiaries, 
			closeEditBeneficiaries }
}