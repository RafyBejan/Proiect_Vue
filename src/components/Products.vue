<template>
  <div class="container pb-16">
    <!-- Titlul secțiunii -->
    <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">Top New Arrival</h2>

    <!-- Grilă de produse -->
    <div class="grid grid-cols-4 gap-6">
      <!-- Produs unic -->
      <div
        v-for="(product, index) in filteredProducts" 
        :key="index" 
        class="bg-white shadow rounded overflow-hidden group"
      > 
        <!-- Imaginea produsului -->
        <div class="relative">
          <img :src="product.image" class="w-full" alt="Product Image" />
          <div
            class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
          >
            <!-- Iconițe pentru căutare și favorite -->
            <a
              href="#"
              class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            >
              <i class="fas fa-search"></i>
            </a>
            <a
              href="#"
              class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            >
              <i class="far fa-heart"></i>
            </a>
          </div>
        </div>
        <!-- Sfârșit imagine produs -->

        <!-- Conținutul produsului -->
        <div class="pt-4 pb-3 px-4">
          <a href="#">
            <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
              {{ product.name }}
            </h4>
          </a>
          <div class="flex items-baseline mb-1 space-x-2 font-roboto">
            <p class="text-xl text-primary font-semibold">{{ product.price }} RON</p>
            <p class="text-sm text-gray-400 line-through">{{ product.oldPrice }} RON</p>
          </div>
          <div class="flex items-center">
            <div class="flex gap-1 text-sm text-yellow-400">
              <!-- Stelele de rating ale produsului -->
              <span v-for="n in product.rating" :key="n">
                <i class="fas fa-star"></i>
              </span>
            </div>
            <div class="text-xs text-gray-500 ml-3">({{ product.reviews }})</div>
          </div>
          <!-- Butonul "Add to cart" -->
          <button
            @click="addToCart(product)"
            class="block w-full py-1 text-center text-white bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition"
          >
            Add to cart
          </button>
        </div>
        <!-- Sfârșit conținut produs -->
      </div>
      <!-- Sfârșit produs unic -->
    </div>
    <!-- Sfârșit grilă de produse -->
  </div>
</template>


<script>
export default {
  name: "Products", // Numele componentei
  data() {
    return {
      products: [
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
    };
  },
  computed: {
    // Funcție calculată pentru a filtra produsele și a le sorta
    filteredProducts() {
      return this.products
        .filter((product) => product.oldPrice) // Filtrează doar produsele care au un preț vechi (reducere)
        .sort((a, b) => b.price - a.price ); // Sortează produsele în ordine crescătoare după preț
    },
  },
  methods: {
    // Metodă pentru a adăuga un produs în coș
    addToCart(product) {
      // Emiterea unui eveniment către componenta părinte
      this.$emit("add-to-cart", product);
    },
  },
};
</script>


<style scoped>
/* Stiluri personalizate, dacă este necesar */
</style>
