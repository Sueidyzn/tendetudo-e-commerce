<template>
	<form  @submit.prevent="loginUser" class="form-login">
		<!-- <div class="top-form">
		</div> -->
		<h1 class="title-form">Faça login na sua conta.</h1>

    <div class="group-div">
      <span>Não tem uma conta? <router-link to="/Registrar">Cadastre-se</router-link></span>
    </div>
  
    <div class="social-login-logos">
      <button type="button"><Icon class="icon-login" icon="logos:google-icon"/>google</button>
      <button type="button"><Icon class="icon-login" icon="logos:github-icon"/>github</button>
    </div>

    <div class="separator"><span>Ou com e-mail e senha.</span></div>

    <span v-if="erro">{{ erro }}</span>

		<div class="space-input">
			<label for="email">e-mail </label>
			<input id="email" v-model="email" type="email" required placeholder="Digite o seu e-mail" />
			<img src="" alt="" />
		</div>

		<div v-if="email && showPassword" class="space-input">
			<label for="senha">senha</label>
			<input id="senha" v-model="senha" type="password" required placeholder="Digite a sua senha" />
			<img src="" alt="" />
      <div class="forgot-password">
        <router-link to="/account/reset/password">Forgot Password?</router-link>
      </div>
		</div>

    <button
      v-if="!showPassword || !email"
      type="button"
      class="bttn-space-login-register"
      :disabled="!canGoNext()"
      @click="showPassword = true"
    >
      next
    </button>
		<button v-if="email && email != '' && showPassword" type="submit" class="bttn-space-login-register">
      login
    </button>
	</form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../../../stores/UserStore'
import { Icon } from '@iconify/vue'

	const store = useUserStore()
	const router = useRouter()

	const email = ref('')
	const senha = ref('')
	const erro = ref('')
  const showPassword = ref(false)
  const isEmailValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
  const canGoNext = () => {
    return isEmailValid(email.value)
  }


	async function loginUser() {

		if (email.value === '' || senha.value === '') {
			erro.value = 'Por favor, preencha todos os campos.'
			return
		}

		try {
			await store.loginUser(email.value.trim(), senha.value.trim())
			erro.value = ''
			router.push('/')
		} catch (error) {
			erro.value = error.message
		}
	}
</script>

<style scoped>
/* Corpo do formulario */
.form-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  max-width: 30%; max-height: auto;
  border-radius: 2rem;
  padding-inline: 3rem;
  padding-bottom: 2rem;
  background: #F7F4EB;
}

.form-login .title-form {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 100%;
  font-weight: 400;
  line-height: none;
  margin-bottom: 1rem;
  color: #d8623b; 
}
.form-login p {
  font-weight: 700;
  width: 80%;
  font-size: 90%;
  margin-top: 1.9%;
  color: black;
}
/* Botões Social login */
.social-login-logos{
  display: flex;
  flex-direction: column;
  margin-block: 1rem;
  width: 100%;
  gap: 1rem;
}
.icon-login{
  width: 5%;
  height: 15%;
}
.social-login-logos button{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: .5rem;
  color: #00000095;
  border: solid #3b3b3b23 0.1rem;
  background: #F7F4EB;
  border-radius: 2rem;
  padding-block: .8rem;
  text-transform: capitalize;
  font-size: 100%;
  gap: 1rem;
}
.social-login-logos button:hover{
  box-shadow: 0px 0px 0px 1.5px #3b3b3b15;
}

/* Input e label*/
.space-input {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin-top: 0.6rem;
}
.space-input label  {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	text-align: justify;
  font-size: 78%;
  font-weight: 600;
  padding: 0.3rem;
  position: relative;
  text-transform: capitalize;
  transition: transform 0.3s ease, font-size 0.3s ease;
}
.space-input .forgot-password {
	text-align: justify;
  font-size: 80%;
  font-weight: 500;
  padding-top: 0.5rem;
	text-align: end;
}
.space-input .forgot-password a{
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  text-transform: capitalize;
  color:  #db4919; 
}
.space-input input {
  padding-inline: 0.8rem;
  padding-block: 0.7rem;
  border: solid #3b3b3b23 0.1rem;
  border-radius: .5rem;
  outline: none;
  font-size: 90%;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  background: transparent;
  border-radius: 2rem;
  color: #664343;
}
.space-input:nth-of-type(3) input {
  margin-bottom: 2rem;
}
.space-input input::placeholder {
  color: #0000008c;
}
.space-input input:focus {
  box-shadow: 0px 0px 0px 2px #d8623b;
}
.space-input img {
  position: absolute;
  width: 5%;
  height: 50%;
  top: 51%; /* Centraliza verticalmente em relação ao input */
  right: 0.9rem; /* Ajuste de distância da borda direita */
  opacity: 0.7;
  display: none;
  transform: translateY(-50%);
}
/* Boão de login */
.bttn-space-login-register {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding-block: 0.7rem;
  margin-top: 2rem;
  font-size: 120%;
  font-weight: 500;
  border: none;
  border-radius: .52rem;
  box-shadow: 1px 1px 5px 1px #0000003a;
  transition: 0.2s;
  text-transform: capitalize;
  cursor: pointer;
  background: #db4919;
  color: #ffffff;
  border-radius: 2rem;
}
.bttn-space-login-register:disabled {
  background: linear-gradient(#f4f4f4, #e6e6e6);
  border: 1px solid #b9b9b9;
  border-radius: 2rem;

  color: #4a6fa5;

  cursor: pointer;

  transition: all 0.15s ease;

  opacity: 0.3;
  cursor: not-allowed;
  filter: grayscale(1);
  box-shadow: none;
}
.bttn-space-login-register:hover {
  letter-spacing: 0.4px;
}
/* Group Redirect */
.group-div{
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 100%;
  font-weight: 500;
  font-size: 90%;
  color: #000000;
}
.group-div span{
  color: #000000;
}
.group-div span a{
  color: #db4919;
}
/* Separator */
.separator {
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  font-size: 90%;
  margin-block: 1rem;
  color: #0000008c;
}
.separator::before,
.separator::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #ccc;
  padding-top: 1%;
}

.separator span {
  padding: 0 10px;
}
</style>