import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../components/Login-pass.vue";
import Datos from "../views/Datos.vue";
import Pasarela from "../components/Pasarela.vue";
import Tabla from "../components/Tabla.vue";
import Pantallas from "../components/Pantallas.vue";
import Precios from "../components/Precios.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/pantallas",
    name: "pantallas",
    component: Pantallas,
  },
  {
    path: "/lista",
    name: "lista",
    component: Precios,
  },
  {
    path: "/productos",
    name: "productos",
    component: Tabla,
  },
  {
    path: "/pasarela",
    name: "pasarela",
    component: Pasarela,
  },
  {
    path: "/datos",
    name: "datos",
    component: Datos,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
