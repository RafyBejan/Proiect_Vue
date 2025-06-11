<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <div
      v-for="product in products"
      :key="product.id"
      class="bg-white rounded-lg shadow-md flex flex-col justify-between p-4"
    >
      <img
        :src="product.image || 'https://via.placeholder.com/150'"
        :alt="product.name"
        class="w-full h-40 object-cover rounded-t-lg mb-4"
      />
      <div class="flex-1 flex flex-col justify-between">
        <h3 class="text-lg font-semibold mb-2">{{ product.name }}</h3>
        <p class="text-primary font-bold mb-2">{{ product.price }} RON</p>
        <button
          class="bg-primary text-white py-2 px-4 rounded hover:bg-pink-600 transition w-full"
          @click="$emit('add-to-cart', product)"
        >
          Add to cart
        </button>
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