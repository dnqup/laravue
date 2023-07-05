import {createRouter, createWebHistory} from "vue-router";
import AdminLayout from "@/Layouts/AdminLayout.vue";
import PortalLayout from "@/Layouts/PortalLayout.vue";
import adminRoutes from "./admin.js";
import portalRoutes from "./portal.js";

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
