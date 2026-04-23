<template>
  <div>
    <h2>Coșul tău</h2>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.Product.name }} - {{ item.quantity }} buc.
        <button @click="remove(item.id)">Șterge</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useCartItemStore } from "../stores/cartItem";
import { useUserStore } from "../stores/user";

const cartItemStore = useCartItemStore();
const userStore = useUserStore();

const { items: cartItems } = storeToRefs(cartItemStore);

onMounted(() => {
  if (userStore.user) {
    cartItemStore.fetchCart(userStore.user.id);
  }
});

function remove(id) {
  if (!userStore.user) return;
  cartItemStore.removeFromCart(id, userStore.user.id);
}
</script>
