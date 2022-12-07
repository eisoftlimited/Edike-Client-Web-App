import { ref } from 'vue'

const classes = ref(['Nursery 1', 'Nursery 2', 'Basic 1', 'Basic 2', 'Basic 3', 'Basic 4', 'Basic 5'])
const schools = ref(['El- Bethel Schools', 'Gem Stars Private School', 'St. Anthonio Junior School', 'Grace Group of Schools', 'Hope International Group of Schools'])

export const useDemos  = () => {


	return { classes, schools }
}