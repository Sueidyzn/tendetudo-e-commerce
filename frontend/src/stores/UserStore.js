import { defineStore } from "pinia";
import { login, register } from "../services/AuthService";

export const useUserStore = defineStore("user", {
    state: () => ({
        user: JSON.parse(localStorage.getItem("user")) || null
    }),

    actions: {
        async loginUser(email, senha){
            const user = await login(email, senha)

            this.user = user
            localStorage.setItem("user", JSON.stringify(user))
        },

        async registerUser(data){
            const user = await register(data)
            
            return user
        },

        logout() {
            this.user = null
            localStorage.removeItem("user")
        }
    },
    
})