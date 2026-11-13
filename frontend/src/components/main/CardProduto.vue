<template>
  <section class="card-main">

    <article class="card-produto-body" 
        v-for="produto in produtos"
        :key="produto.id">

      <!-- Imagem / banner -->
      <header class="card-header-produto skeleton-loader">
        <img :src="produto.imagem" :alt="produto.nome" />
      </header> 

      <!-- Conteúdo -->
      <main class="card-produto-main">

        <div class="produto-main">
          <!-- Nome -->
          <h4 class="p-nome skeleton-loader"> {{ produto.nome }}</h4>
          <!-- Preço -->
          <span class="valor-produto-inf2 skeleton-loader">
            R$ {{ produto.preco }}
          </span>
        </div>

        <!-- Botão -->
        <button
          @click="$emit('adicionar', produto)"
        >
        <Icon class="icon-logout" icon="mdi:cart-outline"/>
          adicionar no carrinho
        </button>

      </main>

    </article>

  </section>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { Icon } from '@iconify/vue';

defineProps({
  produtos: Array
})

defineEmits([
  'adicionar'
])

</script>
<style scoped>
/*   Container*/
.card-main{
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1rem;
  justify-content: flex-start;
  width: 90rem;
}

/*   Card*/
.card-produto-body{
  width: 100%;
  max-width: 15rem;
  min-height: 25rem;
  background: #F7F4EB;
  display: flex;
  flex-direction: column;
  padding: .7rem;
  border-radius: .8rem;
  overflow: hidden;
  box-shadow: 0px 2px 8px rgba(0,0,0,.08);

  transition:
    transform .2s ease,
    box-shadow .2s ease;
}

.card-produto-body:hover{
  transform: translateY(-3px);
  box-shadow:0 6px 16px rgba(0,0,0,.12);
}

/*   Header / imagem*/
.card-header-produto{
  width: 100%;
  overflow: hidden;
  border-radius: .7rem;
}

/* card-header-produto */
.card-header-produto{
  max-height: 16rem;
  background: #f1f0e8;
}

.card-header-produto img{
  max-height: 16rem;
}
/* Main Produto*/
.card-produto-main{
  display: flex;
}

.produto-main{
  display: flex;
  align-items: center;
  width: 100%; height: 100px;
  justify-content: space-between;
  gap: 1rem;
}
.produto-main span{
  width: 5rem;
}

/*   Nome produto*/
.p-nome{
  width: 60%;
  font-weight: 600;
  font-size: 12px;
  align-items: center;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 2;
}
.valor-produto-inf2{
  width: 40%;
  color: #d8623b;
  font-size: 15px;
  font-weight: 600;
}
/*   Botão*/
.card-produto-main button{
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  width: 100%;
  padding-block: .5rem;
  padding-inline: 1rem;
  border-radius: 10rem;
  transition: .2s;
  gap: .3rem;
  background: transparent;
  text-transform: capitalize;
  
  border: solid 1px #d8623b;
}

.card-produto-main button:hover{
    background: #d8623b;
    color: white;
    font-size: 80%;
}
.icon-bu{
    height: 2rem;
    width: 2rem;
    transition: 1s;
}

</style>