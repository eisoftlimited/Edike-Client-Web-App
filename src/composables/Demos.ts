import { ref } from 'vue'

const classes = ref(['Nursery 1', 'Nursery 2', 'Basic 1', 'Basic 2', 'Basic 3', 'Basic 4', 'Basic 5'])
const schools = ref(['El- Bethel Schools', 'Gem Stars Private School', 'St. Anthonio Junior School', 'Grace Group of Schools', 'Hope International Group of Schools'])
const banks = ref([
	{option: 'Mpesa', value: 'mpesa'},
	{option: 'Access bank', value: 'accessbank'},
	{option: 'First Bank', value: 'firstbankng'},
	{option: 'GTbank', value: 'gtbank'},
	{option: 'Uba bank', value: 'uba'},
	{option: 'Zenith bank', value: 'zenithbank'},
	{option: 'Equity bank', value: 'equitybank'},
	{option: 'Standard Charted Bank', value: 'stanchartbank'},
	{option: 'Absa bank', value: 'absabank'},
	{option: 'Coop bank', value: 'coopbank'},
	{option: 'Kcb bank', value: 'kcbbank'},
	{option: 'Wema bank', value: 'wemabank'},
	{option: 'Family bank', value: 'familybank'},
])
const analysis_type = ref([
	{option: 'Individual', value: 'individual'},
	{option: 'Business', value: 'business'},
	{option: 'Merchant', value: 'merchant'}
])

export const useDemos  = () => {


	return { classes, schools, banks, analysis_type }
}