
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
    <FooterCO/>
  </footer>
</template>

<script setup>
import HeaderCo from './components/header/HeaderCo.vue';
import FooterCO from './components/footer/FooterCO.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@500&family=Baloo+Bhaina+2&family=Telex&display=swap');

/* CONFIGURAÇÃO GLOBAL */
* {
  box-sizing: border-box;
}

html, body {
  width: 100%;
  margin: 0;
  padding: 0;
}

body {
  background: #F7F4EB;
  font-family: "Telex", sans-serif;
  overflow-x: hidden;
}

/* ESTRUTURA VUE */
#app {
  display: flex;
  flex-direction: column;

  /* ALTERAÇÃO PRINCIPAL */
  align-items: stretch;

  width: 100%;
  min-height: 100vh;
  max-width: none;
  color: #000000;
}

/* HEADER */
header {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
}

/* MAIN */
main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
}

/* CONTAINER PRINCIPAL */
.main-container {
  width: 100%;
}

/* FOOTER */
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 350px;
  background-color: #ffffff;
  padding: 1rem;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  color: #ffffff;
  background: #26342A;
}

/* BOTÃO GLOBAL */
button {
  cursor: pointer;
}
</style>
