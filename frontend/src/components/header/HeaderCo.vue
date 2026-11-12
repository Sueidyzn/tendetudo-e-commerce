<template>
    <div class="header-container">
        <div class="logo">
            <h1>Tende Tudo</h1>
        </div>
        <nav>
            <ul>
            <li>
                <router-link to="/">home</router-link>
                <router-link to="/vitrine">vitrine</router-link>
                <router-link to="/padatro-de-produtos">cadastro de produtos</router-link>
                <router-link to="/logar">logar</router-link>
                <router-link to="/registrar">registrar</router-link>
            </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>

// import { useUserStore } from '../../stores/UserStore';
// const store = useUserStore()
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Telex&display=swap');

/* Container Header */
.header-container{
  font-family: "Telex", sans-serif;
  display: flex;
  justify-content: space-between;
  max-width: 1500px; 
  width: 100%;
  font-weight: 200;
  padding: 1rem;
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
.header-container button{
  padding-block: 0.7rem;
  padding-inline: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 0.2rem;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.212);
  transition: 0.2s;
  text-transform: capitalize;
  background: #077ae6;
}
</style>