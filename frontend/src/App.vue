<template>
  <header>
    <HeaderCo/>
  </header>
  <main>
    <div class="main-container">
      <router-view/>
    </div>
  </main>
  <footer>
  </footer>
</template>

<script setup>
import HeaderCo from './components/header/HeaderCo.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@500&family=Baloo+Bhaina+2&family=Telex&display=swap');
/* Body */
body{
  padding: 0;
  margin: 0;
  background: #000000;
  background-color: rgb(0, 0, 0);
  background: #f8f5f5;
  font-family: "Telex", sans-serif;
}
/* Estrutura VUE */
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000000;
}
/* Header */
header{
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-color: #000000;
  box-shadow: 1px 1px 1px 1px rgba(129, 129, 129, 0.109);
  background: white;
  margin-bottom: 1rem;
}
/* Main */
main{
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: auto; width: 100%;
}
/* Botão Global */
button {
  cursor: pointer;
}

</style>
