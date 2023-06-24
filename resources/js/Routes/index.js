import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/Pages/HomePage.vue";
import AboutPage from "@/Pages/AboutPage.vue";
import Test from "@/Pages/Test.vue";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/test',
        component: Test
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
