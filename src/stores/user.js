import { defineStore } from "pinia";
import { api } from "../api";

export const useUserStore = defineStore("user", {
    state: () => ({
        user: null,
        token: null,
    }),
    actions: {
        async login(email, password) {
            const res = await api.post("/api/user/login", { email, password });
            this.user = res.data.user;
            this.token = res.data.token;
            if (res.data.token) {
                localStorage.setItem("token", res.data.token);
            }
        },
        async register(name, email, password) {
            const res = await api.post("/api/user/register", { name, email, password });
            this.user = res.data.user;
            this.token = res.data.token;
            if (res.data.token) {
                localStorage.setItem("token", res.data.token);
            }
        },
        logout() {
            this.user = null;
            this.token = null;
            localStorage.removeItem("token");
        },
    },
    persist: true,
});
