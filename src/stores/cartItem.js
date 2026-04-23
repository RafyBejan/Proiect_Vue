import { defineStore } from "pinia";
import { api } from "../api";

export const useCartItemStore = defineStore("cartItem", {
  state: () => ({
    items: [],
  }),
  actions: {
    async fetchCart(userId) {
      const res = await api.get(`/api/cartitems/${userId}`);
      this.items = res.data;
    },
    async addToCart(productId, quantity, userId) {
      await api.post("/api/cartitems", { productId, quantity, userId });
      await this.fetchCart(userId);
    },
    async removeFromCart(itemId, userId) {
      await api.delete(`/api/cartitems/${itemId}`);
      await this.fetchCart(userId);
    },
  },
});
