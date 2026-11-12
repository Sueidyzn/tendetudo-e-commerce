<template>
    <div class="header-container">
        <div class="logo">
            <h1><router-link to="/">Tende Tudo</router-link></h1>
        </div>
                <!-- Botão Hamburger -->
        <button
            class="hamburger"
            :class="{ active: menuOpen }"
            @click="menuOpen = !menuOpen"
            :aria-expanded="menuOpen"
            aria-label="Abrir menu"
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
        <nav
            class="nav-menu"
            :class="{ 'is-open': !menuOpen }"
        >
            <ul>
            <li>
                <router-link to="/" @click="menuOpen = false">home</router-link>
                <router-link to="/vitrine" @click="menuOpen = false">Vitrine</router-link>
                <router-link to="/Registrar-Produto" @click="menuOpen = false">Cadastro de produtos</router-link>
                <router-link class="button-headear" to="/logar" @click="menuOpen = false">Logar</router-link>
            </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const menuOpen = ref(false);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Telex&display=swap');

/* Container Header */
.header-container{
  font-family: "Telex", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1500px; 
  width: 100%;
  font-weight: 200;
  padding: .5rem;
}
.header-container a{
    text-decoration: none;
    color: black;
}
.header-container nav ul li a{
    text-transform: capitalize;
    font-weight: 500;
}
/* logo */
.logo{
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    min-width: 10rem;
    margin-left: 1rem;
}
/* navbar */
.header-container nav{
    display: flex;
    align-items: center;
    justify-content: center;
}
.header-container ul{
    list-style: none;
}
.header-container ul li a{
    text-transform: capitalize;
    text-decoration: none;
    margin: 1rem;
}

/* bttn */
.header-container .button-headear{
    font-weight: 700;
    font-size: 15px;
    text-transform: capitalize;
    background: none;
    color: #d8623b;
    padding: 12px 28px;
    margin-top: 1rem;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
}

.header-container .button-headear:hover {
    color: #f5f4f3;
    background-color: #db4919;
    transform: translateY(-2px);
}

.header-container .button-headear:active {
    background: #d8623b;
    transform: translateY(0);
}
.header-container .button-headear:focus-visible {
    outline: 2px solid #222;
    outline-offset: 4px;
}


/* Hamburger */
.hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    width: 42px;
    height: 42px;
    padding: 8px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 10;
}

.hamburger span {
    display: block;
    width: 100%;
    height: 3px;
    background: #d8623b;
    border-radius: 5px;
    transition: all 0.3s ease;
}

/* Animação do hamburger */
.hamburger.active span:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
    opacity: 0;
}

.hamburger.active span:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
}

/* Tablet */
@media (max-width: 900px) {
    .logo {
        margin-left: .5rem;
        min-width: auto;
    }
    .nav-menu{
        display: none;
    }

    .nav-menu ul li a {
        margin: 0 .6rem;
        font-size: .9rem;
    }

    .header-container .button-headear {
        padding: 10px 18px;
    }
}

/* Mobile */
@media (max-width: 600px) {
    .header-container {
        margin-bottom: 1rem;
    }

    .hamburger {
        display: flex;
    }

    .nav-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: #fff;
        padding: 1rem;
        box-sizing: border-box;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
        z-index: 9;
    }

    .nav-menu.is-open {
        display: block;
        display: none;
    }

    .nav-menu ul {
        flex-direction: column;
        align-items: stretch;
        gap: .5rem;
    }

    .nav-menu ul li {
        width: 100%;
    }

    .nav-menu ul li a {
        padding: 12px;
        margin: 0;
        text-align: center;
        border-radius: 8px;
    }

    .nav-menu ul li a:hover {
        background: #f5f4f3;
    }

    .header-container .button-headear {
        display: block;
        padding: 12px;
    }
}

/* Celulares pequenos */
@media (max-width: 380px) {
    .logo h1 {
        font-size: 1.5rem;
    }

    .header-container {
        padding: .8rem;
    }

    .nav-menu {
        display: none;
        padding: .8rem;
    }
}

</style>