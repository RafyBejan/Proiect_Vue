import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"; 
import Shop from "../views/Shop.vue"; 
import AboutUs from "../views/AboutUs.vue"; 
import Contact from "../views/Contact.vue"; 
import LoginRegister from "../views/LoginRegister.vue"; 

const routes = [
  {
    path: "/", 
    name: "Home",
    component: Home,
  },
  {
    path: "/shop", 
    name: "Shop",
    component: Shop,
  },
  {
    path: "/AboutUs", 
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/Contact", 
    name: "Contact",
    component: Contact,
  
  },
  {
    path: "/loginregister", 
    name: "LoginRegister",
    component: LoginRegister,
  },
];

const router = createRouter({
  history: createWebHistory(), 
  routes,
});

export default router;
