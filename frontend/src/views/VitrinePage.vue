<template>
    <div class="vitrine">
        <div class="vitrine-content">
            
            <CardProduto
                :produtos="produtos"
                @adicionar="adicionarCarrinho"
            />

            <CartSidebar
                :carrinho="carrinho"
            />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import CardProduto from '../components/main/CardProduto.vue';
import CartSidebar from '../components/main/CarSideBar.vue';

import { carregarProdutos } from '../data/products.js';

const produtos = ref([]);
const carrinho = ref([]);

onMounted(async () => {
    try {
        produtos.value = await carregarProdutos();
    } catch (erro) {
        console.error('Erro ao carregar produtos:', erro);
    }
});

function adicionarCarrinho(produto) {
    carrinho.value.push(produto);
}
</script>

<style scoped>
.vitrine {
    display: flex;
    justify-content: center;
    gap: 1rem;
    background: #EAECE1;
}
.vitrine-content{
    display: flex;
    align-items: flex-start;
    max-width: 1500px;
    padding-block: 2rem;
}
</style>
