import { createWebHistory, createRouter } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import UserView from "../views/UserView.vue";
import NotFound from "../views/NotFound.vue";
import CompanyInfo from "../views/about/CompanyInfo.vue";
import ToDo from "../views/ToDo.vue";
import RecipePage from "../views/Recipe/RecipesPage.vue";

const routes = [
  {
    path: "/dd",
    name: "home",
    component: HomeView,
  },
  {
    path: "/to-do",
    component: ToDo,
  },
  {
    path: "/recipes",
    component: RecipePage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    children: [
      { path: "our-company", name: "company-info", component: CompanyInfo },
    ],
  },
  {
    path: "/user/:name",
    name: "user",
    component: UserView,
  },
  {
    path: "/:patchMatch(.*)*",
    name: "user",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
