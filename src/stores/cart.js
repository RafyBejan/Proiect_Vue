import { defineStore } from "pinia";
import axios from "axios";

export const useCartStore = defineStore("cart", {
  state: () => ({
    products: [],
    cart: [], 
  }),
  actions: {
    
    async fetchProducts() { 
        try {
          const response = await axios.get("http://localhost:3000/api/products");
          console.log("Produse obținute:", response.data);
          this.products = response.data;
        } catch (error) {
          console.error("Eroare la fetch-ul produselor:", error);
        }
      },

  
    async addToCart(product) {
      this.cart.push(product);
      try {
        await axios.post(
          "http://localhost:3000/api/cart/add",
          { product },
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
      } catch (error) {
        console.error("Eroare la adăugarea în coș:", error);
      }
    },

    
    async removeFromCart(productId) {
      try {
        await axios.delete("http://localhost:3000/api/cart/remove" , {
          headers: {
            "Content-Type": "application/json",
          },
          data: { id: productId },
        });
      } catch (error) {
        console.error("Eroare la ștergerea din coș:", error);
      }
    },


    async clearCart() {
      this.cart = [];
      try {
        await axios.post("http://localhost:3000/api/cart/clear");
      } catch (error) {
        console.error("Eroare la golirea coșului:", error);
      }
    },
  },
});