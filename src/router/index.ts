import { createRouter, createWebHistory, useRouter } from 'vue-router'


const routes = [
	{
		path: '/',
		component: () => import('../views/signup.vue')
	},
	{
		path: '/signup',
		component: () => import('../views/signup.vue')
	},
	{
		path: '/signin',
		component: () => import('../views/signin.vue')
	},
	{
		path: '/verification',
		component: () => import('../views/verify.vue')
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
