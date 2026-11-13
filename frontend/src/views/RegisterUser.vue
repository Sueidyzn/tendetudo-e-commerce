<template>
  <div class="register-content">
    <FormRegister/>
  </div>
</template>

<script setup>
import FormRegister from '../components/forms/registerUser/FormRegister.vue';
</script>

<style scoped>
  .register-content{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; height: 100%;
    background: #EAECE1;
    min-height: 50rem;
    padding-block: 3rem;
  }
  </style>