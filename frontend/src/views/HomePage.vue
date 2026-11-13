<template>
  <div class="ecommerce">
    <HeroCO/>
    <SectionProdutos/>
  </div>
</template>

<script setup>
import HeroCO from '../components/main/HeroCO.vue';
import SectionProdutos from '../components/main/SectionProdutos.vue';
</script>

<style scoped>
 .ecommerce{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
 }
</style>
