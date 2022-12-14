import { createRouter, createWebHistory, useRouter } from 'vue-router'
import { useMenuController } from '../composables/MenuController'
import { useGlobalModal } from '../composables/GlobalModal'

const { closeMenu, menuStatus } = useMenuController()
const { closeModal } = useGlobalModal()

const routes = [
	{
		path: '/',
		component: () => import('../views/auth/signup.vue')
	},
	{
		path: '/home',
		component: () => import('../views/home.vue')
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
	// {
	// 	path: '/reset',
	// 	component: () => import('../views/auth/reset')
	// },
	// {
	// 	path: '/reset/new-password',
	// 	component: () => import('../views/auth/newpass')
	// },
	{
		path: '/add-beneficiary',
		component: () => import('../views/onboarding/addBeneficiary.vue')
	},
	{
		path: '/dashboard',
		component: () => import('../views/dashboard.vue'),
		children: [
			{
                path: '',
                redirect: '/dashboard/home',
            },
            {
                path: 'home',
				name: 'Dashboard',
                component: () => import('../views/dashboard/index.vue')
            },
			{
                path: 'beneficiaries',
				name: 'Beneficiaries',
                component: () => import('../views/dashboard/beneficiaries.vue')
            },
			{
                path: 'profile',
				name: 'Profile',
                component: () => import('../views/dashboard/profile.vue')
            },
		]
	},
	{
		path: '/403',
		component: () => import('../views/error/403.vue')
	},
	{
		path: '/:pathMatch(.*)*',
		component: () => import('../views/error/404.vue')
	}
]
const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		return { top: 0 }
	},
})

router.beforeEach(() => {
	if(menuStatus) closeMenu()
	closeModal()
})




export default router
