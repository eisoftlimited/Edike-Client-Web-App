import { computed, ref } from 'vue'
import { useFetch } from './FetchController'
import Bene from '../interface/typeBeneficiaries'


const { makeFetchWithAuth, makeFetchWithAuthAndBody } = useFetch()


const beneficiaryModal = ref(false)
const beneficiaryModalType = ref<'add' | 'edit'>('add')
const beneficiaries = ref<Bene[]>([])

const firstName = ref('')
const lastName = ref('')
const gender = ref('')
const dob = ref('')
const school = ref('')
const studentClass = ref('')
const toFetchId = ref('')

const enableSaveButton = computed(() => {
	return firstName.value && lastName.value && gender.value && dob.value && school.value && studentClass.value ? true : false
})

const resetVariables = () => {
	firstName.value = ''
	lastName.value = ''
	gender.value = ''
	dob.value = ''
	school.value = ''
	studentClass.value = ''
}



export const useBeneficiaries  = () => {
	const openBeneficiaryModal = (str: 'add' | 'edit') => {
		beneficiaryModalType.value = str
		if(str == 'edit') {
			fetchSingleBeneficiaries()
		} else {
			beneficiaryModal.value = true
		}
		
	}

	const closeBeneficiaryModal =  () => {
		resetVariables()
		beneficiaryModal.value = false
	}

	const addBeneficiaries = () => {
		makeFetchWithAuthAndBody('POST', 'beneficiary/create', {
			firstname:firstName.value, 
			lastname:lastName.value,
			gender:gender.value,
			dob:dob.value,
			school:school.value,
			studentClass: studentClass.value
		}).then(res => res.json())
		.then(data => {
			console.log(data)
			if(data.beneficiary._id) {
				alert('beneficiariary added successfully')
				closeBeneficiaryModal()
				fetchAllBeneficiaries()
			} else {
				alert(data.msg)
			}
			
		})
		.catch(err => {
			console.log(err)
		})
	} 
	
	const fetchAllBeneficiaries = () => {
		console.log('fetcing beneficiareis')
		makeFetchWithAuth('GET', 'beneficiary/all')
		.then(res => res.json())
		.then(data => {
			console.log(data)
			if(data.length) {
				beneficiaries.value = data.beneficiary
			} else {
				beneficiaries.value = []
			}
		})
		.catch(err => console.log(err))
	}

	const fetchSingleBeneficiaries = () => {
		makeFetchWithAuth('GET', `beneficiary/get/${toFetchId.value}`)
		.then(res => res.json())
		.then((data:Bene) => {
			console.log(data)
			firstName.value = data.firstname
			lastName.value = data.lastname
			gender.value = data.gender
			dob.value = data.dob
			studentClass.value = data.studentClass
			school.value = data.school
			beneficiaryModal.value = true
		})
		.catch(err => {
			console.log(err)
			alert(err)
		})
	}

	const updateBeneficiaries = () => {
		makeFetchWithAuthAndBody('PATCH', `beneficiary/update/${toFetchId.value}`, {
			firstname:firstName.value, 
			lastname:lastName.value,
			gender:gender.value,
			dob:dob.value,
			school:school.value,
			studentClass: studentClass.value
		}).then(res => res.json())
		.then((data) => {
			console.log(data)
			if(data._id) {
				alert('beneficiariary updated successfully')
				closeBeneficiaryModal()
				fetchAllBeneficiaries()
			} else {
				alert(data.msg)
			}
		})
		.catch(err => {
			console.log(err)
			alert('error')
		})
	}

	const deleteBeneficiaries = (id:string) => {
		makeFetchWithAuth('DELETE', `beneficiary/delete/${id}`)
		.then(res => res.json())
		.then(data => {
			console.log(data)
			if(data.status == 'valid') {
				alert(data.msg)
				fetchAllBeneficiaries()
			} else {
				alert(data.msg)
			}
		})
		.catch(err => {
			console.log(err)
			alert('error')
		})
	}
	

	return { beneficiaryModal, beneficiaryModalType, openBeneficiaryModal, closeBeneficiaryModal, enableSaveButton,
		firstName, lastName, gender, dob, school, studentClass, addBeneficiaries, fetchAllBeneficiaries, toFetchId,
		updateBeneficiaries, deleteBeneficiaries }
}

export const useBackendBeneficiaries = () => {
	const { fetchAllBeneficiaries } = useBeneficiaries()

	if(beneficiaries.value.length < 1) fetchAllBeneficiaries()

	return { beneficiaries }
}