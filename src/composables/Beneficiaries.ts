import { computed, ref } from 'vue'
import { useFetch } from './FetchController'
import Bene from '../interface/typeBeneficiaries'
import { useGlobalModal } from './GlobalModal'
import { useLoader } from './LoaderController'
import {useSideModal} from './SideModal'
import Swal from 'sweetalert2'


const { makeFetchWithAuth, makeFetchWithAuthAndBody, makeFetchWithFormData } = useFetch()
const { closeModal, globalModalLoader } = useGlobalModal()
const { openSubLoader, closeSubLoader, openMainLoader, closeMainLoader} = useLoader()
const { sideModalLoader, closeSideModal } = useSideModal()



// const beneficiaryModal = ref(false)
// const beneficiaryModalType = ref<'add' | 'edit'>('add')
const beneficiaries = ref<Bene[]>([])
const firstName = ref('')
const lastName = ref('')
const gender = ref('')
const dob = ref('')
const school = ref('')
const studentClass = ref('')
const imageFile = ref<any>()

const enableSaveButton = computed(() => {
	return firstName.value && lastName.value && gender.value && dob.value && school.value && studentClass.value && imageFile.value !== undefined ? true : false
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
	
	const onboardAddBeneficiaries = () => {
		openMainLoader()
		const formData = new FormData()
		formData.append('firstname', firstName.value)
		formData.append('lastname', lastName.value)
		formData.append('gender', gender.value)
		formData.append('dob', dob.value)
		formData.append('school', school.value)
		formData.append('studentClass', studentClass.value)
		formData.append('img', imageFile.value)
        
		makeFetchWithFormData('POST', 'beneficiary/create', formData)
		.then(res => res.json())
		.then(data => {
			closeMainLoader()
			console.log(data)
			if(data.beneficiary._id) {
				Swal.fire({ title: 'Success', text: 'Beneficiary added successfully', icon: 'success'})
				closeModal()
				closeSideModal()
				fetchAllBeneficiaries()
				resetVariables()
			} else {
				Swal.fire({ title: 'Error!', text: data.msg, icon: 'error'})
			}
			
		})
		.catch(err => {
			closeMainLoader()
			console.log(err)
			Swal.fire({ title: 'Error!', text: 'Please try again', icon: 'error'})
		})
	} 

	const addBeneficiaries = () => {
		openSubLoader()
		const formData = new FormData()
		formData.append('firstname', firstName.value)
		formData.append('lastname', lastName.value)
		formData.append('gender', gender.value)
		formData.append('dob', dob.value)
		formData.append('school', school.value)
		formData.append('studentClass', studentClass.value)
		formData.append('img', imageFile.value)
        
		makeFetchWithFormData('POST', 'beneficiary/create', formData)
		.then(res => res.json())
		.then(data => {
			closeSubLoader()
			console.log(data)
			if(data.beneficiary._id) {
				Swal.fire({ title: 'Success', text: 'Beneficiary added successfully', icon: 'success'})
				closeModal()
				closeSideModal()
				fetchAllBeneficiaries()
				resetVariables()
			} else {
				Swal.fire({ title: 'Error!', text: data.msg, icon: 'error'})
			}
			
		})
		.catch(err => {
			closeSubLoader()
			console.log(err)
			Swal.fire({ title: 'Error!', text: 'Please try again', icon: 'error'})
		})
	} 
	
	const fetchAllBeneficiaries = () => {
		beneficiaries.value = []
		openSubLoader()
		makeFetchWithAuth('GET', 'beneficiary/all')
		.then(res => res.json())
		.then(data => {
			closeSubLoader()
			console.log(data)
			if(data.length) {
				beneficiaries.value = data.beneficiary
			} else {
				beneficiaries.value = []
			}
		})
		.catch(err => {
			closeSubLoader()
			console.log(err)
			Swal.fire({ title: 'Error!', text: 'Please try again', icon: 'error'})
		})
	}

	const fetchBeneficiary = (id:string) => {
		makeFetchWithAuth('GET', `beneficiary/get/${id}`)
		.then(res => res.json())
		.then((data:Bene) => {
			console.log(data)
			if(data.firstname) {
				firstName.value = data.firstname
				lastName.value = data.lastname
				gender.value = data.gender
				dob.value = data.dob
				studentClass.value = data.studentClass
				school.value = data.school
				globalModalLoader.value = false
				sideModalLoader.value = false
			} else {
				// alert('couldnt fetch beneficiary')
				Swal.fire({ title: 'Error!', text: 'Could not fetch beneficiary', icon: 'error'})
				closeModal()
				closeSideModal()
			}
			
		})
		.catch(err => {
			console.log(err)
			Swal.fire({ title: 'Error!', text: 'Please try again', icon: 'error'})
		})
	}

	const updateBeneficiaries = (id:string) => {
		openSubLoader()
		makeFetchWithAuthAndBody('PATCH', `beneficiary/update/${id}`, {
			firstname:firstName.value, 
			lastname:lastName.value,
			gender:gender.value,
			dob:dob.value,
			school:school.value,
			studentClass: studentClass.value
		}).then(res => res.json())
		.then((data) => {
			closeSubLoader()
			console.log(data)
			if(data._id) {
				Swal.fire({ title: 'Success!', text: 'Beneficiary updated successfully', icon: 'success'})
				// alert('Beneficiariary updated successfully')
				// closeBeneficiaryModal()
				closeModal()
				closeSideModal()
				fetchAllBeneficiaries()
				resetVariables()
			} else {
				Swal.fire({ title: 'Error!', text: data.msg, icon: 'error'})
				// alert(data.msg)
			}
		})
		.catch(err => {
			closeSubLoader()
			console.log(err)
			Swal.fire({ title: 'Error!', text: 'Please try again', icon: 'error'})
		})
	}

	const deleteBeneficiaries = (id:string) => {
		openSubLoader()
		makeFetchWithAuth('DELETE', `beneficiary/delete/${id}`)
		.then(res => res.json())
		.then(data => {
			closeSubLoader()
			console.log(data)
			if(data.status == 'valid') {
				Swal.fire({ title: 'Success!', text: data.msg, icon: 'success'})
				fetchAllBeneficiaries()
			} else {
				Swal.fire({ title: 'Error!', text: data.msg, icon: 'error'})
				fetchAllBeneficiaries()
			}
		})
		.catch(err => {
			closeSubLoader()
			console.log(err)
			Swal.fire({ title: 'Error!', text: 'Please try again', icon: 'error'})
		})
	}
	

	return { beneficiaries, enableSaveButton, firstName, lastName, gender, dob, school, studentClass, imageFile, addBeneficiaries, onboardAddBeneficiaries, fetchAllBeneficiaries, deleteBeneficiaries, fetchBeneficiary, updateBeneficiaries }
}

export const useBackendBeneficiaries = () => {
	const { fetchAllBeneficiaries } = useBeneficiaries()

	if(beneficiaries.value.length < 1) fetchAllBeneficiaries()

	return { beneficiaries }
}



// makeFetchWithAuthAndBody('POST', 'beneficiary/create', {
// 	firstname:firstName.value, 
// 	lastname:lastName.value,
// 	gender:gender.value,
// 	dob:dob.value,
// 	school:school.value,
// 	studentClass: studentClass.value
// })