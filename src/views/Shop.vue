<template>
  <div>
    <ProductCrudForm />
    <Navbar />
    <div class="container mx-auto px-2 py-4 flex flex-col md:flex-row gap-6">
      <!-- Buton Filtre pe mobil -->
      <button
        class="md:hidden mb-4 bg-primary text-white px-4 py-2 rounded w-full"
        @click="showSidebar = !showSidebar"
      >
        {{ showSidebar ? 'Ascunde filtrele' : 'Afișează filtrele' }}
      </button>
      <!-- Sidebar -->
      <SideBar
        :class="[
          'w-full md:w-auto',
          showSidebar ? 'block' : 'hidden',
          'md:block'
        ]"
      />
      <div class="flex-1">
        <ProductSorting />
        <div v-if="isLoading" class="text-center">Se încarcă produsele...</div>
        <ProductGrid :products="productsList" @add-to-cart="handleAddToCart" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useCartStore } from "../stores/cart";
import Navbar from "../components/Navbar.vue";
import SideBar from "../components/SideBar.vue";
import ProductSorting from "../components/ProductSorting.vue";
import ProductGrid from "../components/ProductGrid.vue";
import ProductCrudForm from "../components/ProductCrudForm.vue";
import { useUserStore } from "../stores/user";
import { useCartItemStore } from "../stores/cartItem";



export default {
  components: {
    Navbar,
    SideBar,
    ProductSorting,
    ProductGrid,
    ProductCrudForm,
  },
  setup() {
    const cartStore = useCartStore();
    const isLoading = ref(true);
    const showSidebar = ref(false);
    const selectedCategory = ref("");
    const selectedSort = ref("");
    const userStore = useUserStore();
    const cartItemStore = useCartItemStore();

    function onFilterChange(category){
      selectedCategory.value = category;
      cartStore.fetchProducts({ category :selectedCategory.value, sort: selectedSort.value});
    }

    function onSortChange(sort) {
      selectedSort.value = sort;
      cartStore.fetchProducts({category: selectedCategory.value, sort: selectedSort.value});
    }

    cartStore.fetchProducts().then(() => {
      isLoading.value = false;
    });

    const handleAddToCart = (product) => {
       console.log("Adaug produsul in cos:", product);
       if(!userStore.user){
        alert("Trebuie sa fii logat ca sa adaugi in cos!");
        return;
       }
       cartItemStore.addToCart(product.id, 1, userStore.user.id);
    };

    return {
      productsList: computed(() => cartStore.products),
      handleAddToCart,
      isLoading,
      showSidebar,
    };
  },
};
</script>