// filepath: d:\Anul_2\Proeict_An_Vue_API\src\components\Cart.vue
<template>
  <div>
    <h2>Coșul de cumpărături</h2>
    <ul>
      <li v-for="item in cart" :key="item.id">
        {{ item.name }} - {{ item.price }} RON
        <button @click="removeFromCart(item.id)">Șterge</button>
      </li>
    </ul>
    <button @click="clearCart">Golește coșul</button>
  </div>
</template>

<script>
import { useCartStore } from "../stores/cart";

export default {
  setup() {
    const cartStore = useCartStore();

    return {
      cart: cartStore.cart,
      removeFromCart: cartStore.removeFromCart,
      clearCart: cartStore.clearCart,
    };
  },
};
</script>