import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "../stores/UserStore";

import HomePage from "../views/HomePage.vue";
import LoginUser from "../views/LoginUser.vue";
import RegisterUser from "../views/RegisterUser.vue";
import ResetPasword from "../views/ResetPasword.vue";
import VitrinePage from "../views/VitrinePage.vue";

const routes = [
    // Publicas
    {path: "/Vitrine", component: VitrinePage, name: "VitrinePage"},
    {path: "/Login", component: LoginUser, name: "LoginUser"},
    {path: "/Registrar", component: RegisterUser, name: "RegisterUser"},
    {path: "/account/reset/password", component: ResetPasword, name: "Reset-Password"},
    // Privadas
    {path: "/", component: HomePage, name: "Home", meta: {requiresAuth: false}},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


router.beforeEach((to, from, next) => {

    // exemplo:
    // pega token salvo no navegador

    const token = useUserStore();

    const usuarioLogado = !!token.user

    /*
    | ROTAS PRIVADAS
    */

    if (to.meta.requiresAuth && !usuarioLogado) {

        return next("/Login")

    } else if (
        usuarioLogado &&
        (
            to.path === "/Login" ||
            to.path === "/Registrar"
        )
    ) {

        return next("/")

    }

    next()

})


export default router