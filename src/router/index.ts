import { createRouter, createWebHistory, useRouter } from 'vue-router'


const routes = [
	{
		path: '/',
		component: () => import('../views/auth/signup.vue')
	},
	{
		path: '/signup',
		component: () => import('../views/auth/signup.vue')
	},
	{
		path: '/signin',
		component: () => import('../views/auth/signin.vue')
	},
	{
		path: '/verification',
		component: () => import('../views/auth/verify.vue')
	},
	{
		path: '/forgot',
		component: () => import('../views/auth/forgot.vue')
	},
	{
		path: '/reset',
		component: () => import('../views/auth/reset.vue')
	},
	{
		path: '/reset/new-password',
		component: () => import('../views/auth/newpass.vue')
	},
	{
		path: '/add-beneficiary',
		component: () => import('../views/onboarding/addBeneficiary.vue')
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
