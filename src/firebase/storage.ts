import { storage } from './index'
import {ref as firebaseRef, uploadBytes, getDownloadURL} from 'firebase/storage'
import { useUser } from '../composables/UserController'
import { ref } from 'vue'
import Swal from 'sweetalert2'
import { useLoader } from '../composables/LoaderController'
import { useBankStatement } from '../composables/BankStatement'

const { uploadedPdfUrl, addBankStatement } = useBankStatement()
const { openSubLoader, closeSubLoader } = useLoader()
const { userData } = useUser()


export const useStorage = (file:any) => {
	openSubLoader()
	const userPdfRef = firebaseRef(storage, `${userData.value?.lastname} - ${userData.value?.firstname} - ${new Date().getTime()}`);
	uploadBytes(userPdfRef, file)
	.then((snapshot:any) => {
		console.log(snapshot);
		getDownloadURL(snapshot.ref)
		.then((URL:string) => {
			uploadedPdfUrl.value = URL
			// console.log(uploadedPdfUrl.value)
			addBankStatement()
		})
	})
	.catch(err => {
		closeSubLoader()
		console.log(err)
		Swal.fire({ title: 'Error!', text: 'Could not upload bank statement', icon: 'error' })
	})
}