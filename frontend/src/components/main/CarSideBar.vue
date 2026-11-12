<template>

  <aside class="carrinho">
    <div class="carrinho-header">
      <h2>
        Carrinho
      </h2>
      <span>
        {{ carrinho.length }} itens
      </span>
    </div>
    <div class="carrinho-main">
        <div
            class="item-carrinho"
            v-for="item in carrinho"
            :key="item.id"
            >
            <img :src="item.imagem" />
            <div class="item-info">
                <h3 class="nome-info">
                {{ item.nome }}
                </h3>
                <span class="preco-info">
                R$ {{ item.preco }}
                </span>
            </div>
        </div>
    </div>
    <div class="carrinho-footer">
      <strong class="preco-total">
        Total:
        R$ {{ total }}
      </strong>
      <button type="button"> <Icon className="icon-buy" icon="mdi:shopping-outline" />Comprar</button>
    </div>
  </aside>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
    carrinho: Array
})

const total = computed(() => {
    return props.carrinho.reduce(
        (acc, item) => acc + Number(item.preco),
        0
    ).toFixed(2)
})
</script>

<style scoped>
.carrinho{
    display: flex;
    flex-direction: column;
    width: 24rem;
    max-height: 45rem;
    max-width: 20rem;
    background: #F7F4EB;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0,0,0,.08);
    position: sticky;
    top: 1rem;
}

.carrinho-header{
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.carrinho-main{
    margin: 0;
    padding: 0;
    overflow: hidden;
    overflow-y: scroll;
}
.carrinho-main::-webkit-scrollbar {
    width: 5px;
}

.carrinho-main::-webkit-scrollbar-thumb {
    background: #cccccc55;
    border-radius: 999px;
}

.carrinho-main::-webkit-scrollbar-track {
    background: transparent;
}
.item-carrinho{
  display: flex;
  align-items: center;
  gap: .8rem;
  margin-bottom: 1rem;
}

.item-carrinho img{
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: .6rem;
}

.item-info{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.preco-info{
  color: #db4919;
}

.carrinho-footer{
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid rgba(0,0,0,.1);
}

/* bttn */
.carrinho-footer button{
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .2s;
    gap: .3rem;
    color: #f5f4f3;
    background: #d8623b;
    color: #fff;
    padding: 12px 28px;
    border: none;
    border-radius: 1rem;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1rem;
    text-decoration: none;
    box-shadow: 1px 1px 1px 1px orange;
}

.carrinho-footer button:hover {
    background-color: #db4919;
    transform: translateY(-2px);
}

.carrinho-footer button:active {
    background: #d8623b;
    transform: translateY(0);
}

.icon-bu{
    height: 2rem;
    width: 2rem;
    transition: 1s;
}


</style>