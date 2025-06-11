import { defineStore } from "pinia";
import axios from "axios";

export const useCartItemStore = defineStore("cartItem", {
    state: () => ({
        items: [],
    }),
    actions:{
        async fetchCart(userId){
            const res = await axios.get(`http://localhost:3000/api/cartitems/${userId}`);
            this.items = res.data;
        },
        async addToCart(productId , quantity, userId) {
            console.log("addToCart", productId, quantity, userId);
            await axios.post("http://localhost:3000/api/cartitems", {productId, quantity, userId});
            await this.fetchCart(userId);
        },
        async removeFromCart(itemId, userId){
            await axios.delete(`http://localhost:3000/api/cartitems/${itemId}`);
            await this.fetchCart(userId);
        },
    },

});