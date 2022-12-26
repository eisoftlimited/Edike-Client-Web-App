import { ref, shallowRef } from 'vue'
import Loan from '../interface/typeLoan'


const sideModalContent = shallowRef<any>()
const sideModalStatus = ref(false)
const showMainSideModal = ref(false)
const sideModalLoader = ref(false)
const sideModalProps = ref<string|undefined|Loan>(undefined)


export const useSideModal = () => {
    const openSideModal = (content:any, modalProp?:string|Loan, loader:boolean = false) => {
        sideModalContent.value = content
		sideModalProps.value = modalProp
		sideModalLoader.value = loader
        sideModalStatus.value = true
    }

    const closeSideModal = () => {
		sideModalProps.value = undefined
        showMainSideModal.value = false
		sideModalLoader.value = false
    }
    

    return { sideModalContent, sideModalStatus, showMainSideModal, sideModalLoader, sideModalProps, openSideModal, closeSideModal }
}