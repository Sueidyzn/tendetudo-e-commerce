<template>
  <div class="register-produto-content">
    <CadastroProduto/>
  </div>
</template>

<script setup>
import CadastroProduto from '../components/main/CadastroProduto.vue';
</script>

<style scoped>
  .register-produto-content{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; height: 100%;
    background: #EAECE1;
    min-height: 40rem;
    padding-block: 3rem;
  }
</style>