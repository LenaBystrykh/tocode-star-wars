import { createRouter, createWebHashHistory } from "vue-router";
// github pages не позволяет настраивать сервер, поэтому там стоит использовать не createWebHistory, а createWebHashHistory
// если можно настраивать сервер, то можно и createWebHistory юзать
const routerHistory = createWebHashHistory();

import HomePage from "../src/pages/HomePage.vue"
import AboutPage from "../src/pages/AboutPage.vue"
import NotFound from "../src/pages/NotFound.vue"

const routes = createRouter({
    history: routerHistory,
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage
        },
        {
            path: "/about",
            name: "about",
            component: AboutPage
        },
        {
            // path: '/:PathMatch(.*)*',
            path: '/:CatchAll(.*)',
            name: "404",
            component: NotFound
        }
    ]
})

export default routes;