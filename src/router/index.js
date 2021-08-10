import { createRouter, createWebHistory } from "vue-router"

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("../views/Home.vue"),
	},
	{
		path: "/practice",
		name: "Practice",
		component: () => import("../views/Practice.vue"),
	},
	{
		path: "/create",
		name: "CreateFile",
		component: () => import("../views/CreateFile.vue"),
	},
	{
		path: "/:pathMatch(.*)*",
		name: "NotFoundPage",
		component: () => import("../views/NotFoundPage.vue"),
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
