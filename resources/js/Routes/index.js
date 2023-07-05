import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/Pages/HomePage.vue";
import AboutPage from "@/Pages/AboutPage.vue";
import Test from "@/Pages/Test.vue";
import AdminLayout from "@/Layouts/AdminLayout.vue";

const routes = [
    {
        path: '/admin',
        component: AdminLayout,
        children: [
            {
                path: '',
                component: HomePage
            },
            {
                path: 'test',
                component: Test,
            },
            {
                path: 'about',
                component: AboutPage,
            },
        ],
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
