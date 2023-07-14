import {createRouter, createWebHistory} from "vue-router";
import adminRoutes from "./admin.js";
import portalRoutes from "./portal.js";
import AdminLayout from "@/Layouts/AdminLayout.vue";
import PortalLayout from "@/Layouts/PortalLayout.vue";

const routes = [
    {
        path: '/admin',
        component: AdminLayout,
        children: adminRoutes,
    },
    {
        path: '/portal',
        component: PortalLayout,
        children: portalRoutes,
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/Components/Auth/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/Components/Auth/Register.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/Components/NotFound.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router;
