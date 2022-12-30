import { createRouter, createWebHistory, useRouter } from 'vue-router'
import { useMenuController } from '../composables/MenuController'
import { useGlobalModal } from '../composables/GlobalModal'
import { useToken } from '../composables/TokenController'
import { useSideModal } from '../composables/SideModal'
import { nextTick } from 'process'

const { closeMenu, menuStatus } = useMenuController()
const { closeModal } = useGlobalModal()
const { isAuthenticated } = useToken()
const { closeSideModal } = useSideModal()

const checkIfAuthenticated = () => {
	if (isAuthenticated()) {
		return { path: '/dashboard' }
	}
}

const routes = [
	{
		path: '/',
		component: () => import('../views/auth/signup.vue'),
		beforeEnter: () => checkIfAuthenticated()
	},
	{
		path: '/signup',
		name: 'Signup',
		component: () => import('../views/auth/signup.vue'),
		beforeEnter: () => checkIfAuthenticated()
	},
	{
		path: '/signin',
		name: 'Signin',
		component: () => import('../views/auth/signin.vue'),
		beforeEnter: () => checkIfAuthenticated()
	},
	{
		path: '/verification',
		component: () => import('../views/auth/verify.vue'),
		beforeEnter: () => checkIfAuthenticated()
	},
	{
		path: '/forgot',
		component: () => import('../views/auth/forgot.vue'),
		beforeEnter: () => checkIfAuthenticated()
	},
	{
		path: '/add-beneficiary',
		component: () => import('../views/onboarding/addBeneficiary.vue'),
		meta: { requiresAuth: true },
		beforeEnter: (to:any, from:any) => {
			console.log(to, from)
			if(from.path != '/verification') {
				router.push('/dashboard')
			}
		}
	},
	{
		path: '/card-verified',
		component: () => import('../views/card_verified.vue'),
		meta: { requiresAuth: true },
		beforeEnter: (to:any, from:any) => {
			console.log(to, from)
			if(from.path != '/verification') {
				router.push('/dashboard')
			}
		}
	},
	{
		path: '/privacy-policy',
		component: () => import('../views/legal/privacy_policy.vue')
	},
	{
		path: '/dashboard',
		component: () => import('../views/dashboard.vue'),
		meta: { requiresAuth: true },
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
			{
                path: 'loan',
				name: 'Loans',
                component: () => import('../views/dashboard/loan.vue')
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

router.beforeEach((to) => {
	if(menuStatus) closeMenu()
	closeModal()
	closeSideModal()
	if (!isAuthenticated() && to.meta.requiresAuth) {
		return { name: 'Signin' }
	}
})




export default router
