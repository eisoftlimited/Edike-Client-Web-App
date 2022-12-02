import { createRouter, createWebHistory, useRouter } from 'vue-router'


const routes = [
	{
		path: '/',
		component: () => import('../views/home.vue')
	},
	{
		path: '/signup',
		component: () => import('../views/signup.vue')
	}
]
const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		// always scroll to top
		return { top: 0 }
	},
})




export default router
