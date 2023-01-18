import { storage, auth } from './index'
import {ref as firebaseRef, uploadBytes, getDownloadURL} from 'firebase/storage'
import { signInAnonymously } from "firebase/auth";
import { useUser } from '../composables/UserController'
import { ref } from 'vue'
import Swal from 'sweetalert2'
import { useLoader } from '../composables/LoaderController'
import { useBankStatement } from '../composables/BankStatement'

const { uploadedPdfUrl, addBankStatement } = useBankStatement()
const { openSubLoader, closeSubLoader } = useLoader()
const { userData } = useUser()


export const useStorage = (file?:any) => {
	openSubLoader()
	const userPdfRef = firebaseRef(storage, `${userData.value?.lastname} - ${userData.value?.firstname} - ${new Date().getTime()}`);
	
	signInAnonymously(auth)
	.then((data) => {
		// console.log(data)
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
	})
	.catch(err => {
		closeSubLoader()
		console.log(err)
		Swal.fire({ title: 'Error!', text: 'Could not upload bank statement', icon: 'error' })
	})
	
}
// this is for testing the firebase storage rules
// export const writeData = () => {
// 	let x:HTMLInputElement = document.querySelector('.testing-input')!
// 	let file = x.files![0]
// 	console.log(file)
// 	const userPdfRef = firebaseRef(storage, `sample - ${new Date().getTime()}`);
// 	signInAnonymously(auth)
// 	.then((data) => {
// 		console.log(data)
// 		uploadBytes(userPdfRef, file)
// 		.then((snapshot:any) => {
// 			console.log(snapshot);
// 			getDownloadURL(snapshot.ref)
// 			.then((URL:string) => {
// 				uploadedPdfUrl.value = URL
// 				console.log(uploadedPdfUrl.value)
// 			})
// 		})
// 	})
// 	.catch(err => {
// 		closeSubLoader()
// 		console.log(err)
// 		Swal.fire({ title: 'Error!', text: err.msg, icon: 'error' })
// 	})


// 	// openSubLoader()
// 	// uploadBytes(userPdfRef, file)
// 	// .then((snapshot:any) => {
// 	// 	closeSubLoader()
// 	// 	console.log(snapshot);
// 	// 	getDownloadURL(snapshot.ref)
// 	// 	.then((URL:string) => {
// 	// 		uploadedPdfUrl.value = URL
// 	// 		console.log(uploadedPdfUrl.value)
// 	// 	})
// 	// })
// 	// .catch(err => {
// 	// 	closeSubLoader()
// 	// 	console.log(err)
// 	// 	Swal.fire({ title: 'Error!', text: err, icon: 'error' })
// 	// })
// }