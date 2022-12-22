import { ref, shallowRef } from 'vue'
import addNin from '../components/loan/addNin.vue'

const globalModalContent = shallowRef<any>(addNin)
const globalModalStatus = ref(false)
const showMainModal = ref(false)
const globalModalHeader = ref('')
const globalModalProps = ref<string|undefined>(undefined)
const globalModalLoader = ref(false)


export const useGlobalModal = () => {
    const openModal = (content:any, modalHeader:string = '', modalProp?:string, loader:boolean = false) => {
        globalModalHeader.value = modalHeader
        globalModalContent.value = content
		globalModalProps.value = modalProp
		// console.log(globalModalProps.value)
        globalModalStatus.value = true
		globalModalLoader.value = loader
    }

    const closeModal = () => {
        showMainModal.value = false
		globalModalProps.value = undefined
		globalModalLoader.value = false
    }
    

    return { globalModalContent, openModal, closeModal, globalModalStatus, globalModalHeader, globalModalProps, showMainModal, globalModalLoader }
}