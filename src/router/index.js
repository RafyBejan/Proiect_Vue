import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"; 
import Shop from "../views/Shop.vue"; 
import AboutUs from "../views/AboutUs.vue"; 
import Contact from "../views/Contact.vue"; 
import LoginRegister from "../views/LoginRegister.vue"; 
import Cart from "../components/Cart.vue";

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
    path: "/about", 
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/contact", 
    name: "Contact",
    component: Contact,
  
  },
  {
    path: "/loginRegister", 
    name: "LoginRegister",
    component: LoginRegister,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(), 
  routes,
});

export default router;
