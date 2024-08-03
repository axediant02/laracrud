import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", component: () => import("./Pages/Homeroute.vue"), },
    { path: "/test", component: () => import("./Pages/Testroute.vue"), },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});