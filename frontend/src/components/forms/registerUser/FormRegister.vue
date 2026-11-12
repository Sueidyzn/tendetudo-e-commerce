<template>
	<form  @submit.prevent="registerUser" class="form-login-register">
		<div class="top-form">
			<h1 class="title-form">É novo? Cadastre-se abaixo</h1>
			<p>
				Estamos felizes em tê-lo aqui novamente! insira suas credenciais
				para acessar sua conta.
			</p>
		</div>
		<div class="space-input">
			<label for="nome">nome</label>
			<input id="nome" v-model="nome" type="text" required placeholder="Digite o nome" />
			<p v-if="erro.nome">{{ erro.nome }}</p>
		</div>
		<div class="space-input">
			<label for="sobrenome">sobrenome</label>
			<input id="sobrenome" v-model="sobrenome" type="text" required placeholder="Digite o sobrenome" />
			<p v-if="erro.sobrenome">{{ erro.sobrenome }}</p>
		</div>
		<div class="space-input">
			<label for="email">email</label>
			<input id="email" v-model="email" type="text" required placeholder="Digite o E-mail" />
			<p v-if="erro.email">{{ erro.email }}</p>
		</div>
		<div class="space-input">
			<label for="senha">password</label>
			<input id="senha" v-model="senha" type="password" required placeholder="Digite a sua senha" />
			<img src="" alt="" />
		</div>
    <div class="space-input">
			<label for="cpf">CPF</label>
			<input id="email" v-model="cpf" type="number" required placeholder="Digite o CPF" />
			<p v-if="erro.email">{{ erro.email }}</p>
		</div>
    <div class="space-input">
			<label for="date">data de nascimento</label>
			<input id="email" v-model="date" type="date" required />
			<p v-if="erro.email">{{ erro.email }}</p>
		</div>

		<button type="submit" class="bttn-space-login-register">cadastrar</button>
		<button type="reset"  class="bttn-space-login-registera">limpar</button>
    <p v-if="sucesso" class="sucesso-msg">
      Cadastro efetuado com sucesso!
    </p>
	</form>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '../../../stores/UserStore'
import { useRouter } from 'vue-router'

	const store = useUserStore()
	const router = useRouter()

	const nome = ref('')
	const sobrenome = ref('')
	const email = ref('')
	const senha = ref('')
	const erro = ref({})
  const sucesso = ref('')

	function validar(){
		erro.value = {}

		if(!nome.value) erro.value.nome = 'Nome é obrigatório'
		if(!sobrenome.value) erro.value.sobrenome = 'Sobrenome é obrigatório'

		if(!email.value){
			erro.value.email = 'Email é obrigatório'
		} else if(!email.value.includes('@')){
			erro.value.email = 'Email inválido'
		}

		if(!senha.value){
			erro.value.senha = 'Senha é obrigatória'
		} else if (senha.value.length < 8){
			erro.value.senha = 'Senha no mínimo é de 8 caracteres'
		}

		return Object.keys(erro.value).length === 0
	}

	async function registerUser() {
		if(!validar()) return 

		try {
			await store.registerUser({
				nome: nome.value.trim(),
				sobrenome: sobrenome.value.trim(),
				email: email.value.toLowerCase().trim(),
				senha: senha.value.trim()
			})

      sucesso.value = 'Cadastro efetuado com sucesso!'
       setTimeout(() => {
         sucesso.value = ''
       }, 3000)

			nome.value = ''
			sobrenome.value = ''
			email.value = ''
			senha.value = ''

			router.push('/login')

		} catch (error) {
			erro.value.email = error.message
		}


	}

</script>

<style scoped>
.erro, p {
    color: red;
}

/* Corpo do formulario */
.form-login-register {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  max-width: 50rem;
  width: 100%;
  background: #F7F4EB;
  padding-inline: 3.5rem;
  padding-block: 2.5rem;
  margin: 4rem auto;

  border-radius: 2rem;
  box-shadow: 1px 1px 18px 1px rgba(0, 0, 0, 0.062);
}
/* top form */
.form-login-register .top-form {
  grid-column: 1 / 3;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.form-login-register .title-form {
  display: flex;
  align-items: center;
  font-weight: 600;
  line-height: 1;
  color: #d8623b; 
}
.form-login-register p {
  font-weight: 500;
  text-align: center;
  width: 80%;
  font-size: 90%;
  margin-top: 1.9%;
  color: #000000; 
}

/* Input e label*/
.space-input {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.space-input label {
  text-align: justify;
  font-size: 78%;
  font-weight: 400;
  padding: 0.3rem;
  position: relative;
  text-transform: capitalize;
  transition: transform 0.3s ease, font-size 0.3s ease;
}
.space-input input {
  padding-inline: 0.7rem;
  padding-block: 0.6rem;
  border: none;
  border: solid #3b3b3b23 0.1rem; 
  border-radius: 2rem;
  outline: none;
  font-size: 90%;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  background: transparent;
  color: #664343;
  background: #d3d3d32d;
}
.space-input:nth-of-type(3) input {
  margin-bottom: 2rem;
}
.space-input input::placeholder {
  color: #000000;
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
  font-size: 120%;
  font-weight: 500;
  border: none;
  border-radius: 0.2rem;
  transition: 0.2s;
  text-transform: capitalize;
  cursor: pointer;
  background: #d8623b;
  color: #ffffff;
  margin-top: 2rem;  border-radius: 2rem;
}
.bttn-space-login-register:hover {
  letter-spacing: 0.4px;
}
.bttn-space-login-registera {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding-block: 0.7rem;
  font-size: 120%;
  font-weight: 500;
  border: solid 2px #2c1d43;
  border-radius: 0.2rem;
  transition: 0.2s;
  text-transform: capitalize;
  cursor: pointer;
  background: #2c1d4300;
  color: #2c1d43;
  margin-top: 2rem;  border-radius: 2rem;
}
/* Group Redirect */
.group-div{
  margin: 1rem;
}
.group-div span{
  margin: 0;
  color: black;
}
.group-div span a{
  margin: 0;
  color: #0d67c0;
}
.sucesso-msg {
  grid-column: 1 / 1;

  font-weight: 900;
  text-align: center;
  font-weight: 600;
  background: #adffc4;
  padding: 1rem;

  margin-top: -0.5rem;
}
</style>