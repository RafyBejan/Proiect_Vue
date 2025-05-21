<template>
  <div>
    <div v-if="!products.length" class="text-center text-gray-500">
      Nu există produse disponibile.
    </div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white shadow-lg rounded-lg overflow-hidden group transform transition-all duration-300 hover:scale-105"
      >
        <div class="relative w-full h-80">
          <img
            :src="product.image || 'https://via.placeholder.com/150'"
            :alt="product.name"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="p-4">
          <h4 class="uppercase font-medium text-lg mb-2 text-gray-800">
            {{ product.name }}
          </h4>
          <p class="text-lg text-primary font-semibold">{{ product.price }} RON</p>
          <button
            @click="$emit('add-to-cart', product)"
            class="block w-full py-2 text-center text-white bg-primary rounded hover:bg-opacity-90"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductGrid",
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.grid {
  margin-top: 20px;
}
</style>