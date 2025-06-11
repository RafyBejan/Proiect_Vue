import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
    state: () => ({
        user: null,
    }),
    actions: {
        async login(email, password) {
            const res = await axios.post("http://localhost:3000/api/user/login", { email, password });
            this.user = res.data;
        },
        async register(name, email, password){
            const res = await axios.post("http://localhost:3000/api/user/register", { name, email, password});
            this.user = res.data;
        },
        logout(){
            this.user = null;
        },
    },
    persist: true,
});