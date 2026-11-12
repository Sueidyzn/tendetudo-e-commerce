<template>
  <div class="login-content">
    <FormLogin/>
  </div>
</template>

<script setup>
    import FormLogin from '../components/forms/loginUser/FormLogin.vue';
</script>

<style scoped>
  .login-content{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; height: 100%;
    background: #EAECE1;
    min-height: 40rem;
    padding-block: 3rem;
  }
</style>