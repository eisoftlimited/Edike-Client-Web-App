import { ref, shallowRef } from 'vue'


const globalModalContent = shallowRef<any>()
const globalModalStatus = ref(false)
const showMainModal = ref(false)
const globalModalHeader = ref('Modal Header')
const globalModalProps = ref<string|undefined>()


export const useGlobalModal = () => {
    const openModal = (content:any, modalHeader:string, modalProp?:string) => {
        globalModalHeader.value = modalHeader
        globalModalContent.value = content
		globalModalProps.value = modalProp
		console.log(globalModalProps.value)
        globalModalStatus.value = true
    }

    const closeModal = () => {
        showMainModal.value = false
    }
    

    return { globalModalContent, openModal, closeModal, globalModalStatus, globalModalHeader, globalModalProps, showMainModal }
}