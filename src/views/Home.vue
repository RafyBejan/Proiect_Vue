<template>
  <div>
    <Header />
    <Navbar />
    <Banner />
    <Features />
    <Categories />

    <Products />
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import Categories from "../components/Categories.vue";
import Features from "../components/Features.vue";
import Header from "../components/Header.vue";
import Navbar from "../components/Navbar.vue";
import Products from "../components/Products.vue";

export default {
  components: {
    Header,
    Navbar,
    Banner,
    Features,
    Categories,
    Products,
  },
  data() {
    return {
      productsList: [
        {
          name: "Hidrofor-jet",
          image: "/src/assets/products/hidrofor-jet-150l-1099~6277.webp",
          price: "550",
          oldPrice: "600",
          rating: 5,
          reviews: 10,
        },
        {
          name: "Motoferastrau",
          image: "/src/assets/products/motoferastrau-cs-545-epto-p-1-lant-0-325-p-cp-3~1952.webp",
          price: "270",
          oldPrice: "300",
          rating: 5,
          reviews: 5,
        },
        {
          name: "Polizor unghiular",
          image: "/src/assets/products/polizor-unghiular-fara-acumulator-si-incarcator-epto-brushless-u-v-20~1706.webp",
          price: "250",
          oldPrice: "300",
          rating: 5,
          reviews: 5,
        },
        {
          name: "Cheie fixa",
          image: "/src/assets/products/1006116_1.webp",
          price: "8",
          oldPrice: "10",
          rating: 5,
          reviews: 2,
        },
      ],
      cart: [], 
    };
  },
  computed: {
    filteredProducts() {
      return this.productsList.filter(product => product.price > 100);
    },
  },
  methods: {
    handleAddToCart(product) {
      this.cart.push(product); 
      alert(`${product.name} a fost adăugat în coș!`);
    },
  },
};
</script>

<style scoped>
</style>
