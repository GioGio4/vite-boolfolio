import { createRouter, createWebHistory } from "vue-router";

// Import pages

import HomePage from "../pages/HomePage.vue";
import ProjectDetail from "../pages/ProjectDetail.vue";

// Creazione routes
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/project-detail",
      name: "detail",
      component: ProjectDetail,
    },
  ],
});

// Export router

export { router };
