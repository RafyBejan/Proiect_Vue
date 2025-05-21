<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Shop</h1>
    <div v-if="isLoading" class="text-center">Se încarcă produsele...</div>
    <ProductGrid :products="productsList" @add-to-cart="handleAddToCart" />
  </div>
</template>

<script>
import { computed } from "vue";
import { ref } from "vue";
import { useCartStore } from "../stores/cart";
import ProductGrid from "../components/ProductGrid.vue";

export default {
  components: {
    ProductGrid,
  },
  setup() {
    const cartStore = useCartStore();
    const isLoading = ref(true);

    
    cartStore.fetchProducts().then(() => {
  console.log("Produse în Shop.vue:", cartStore.products); 
  isLoading.value = true;
  });

    const handleAddToCart = (product) => {
      cartStore.addToCart(product);
    };

    return {
      productsList: computed(() => cartStore.products),
      handleAddToCart,
      isLoading,
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>