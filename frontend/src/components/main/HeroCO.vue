<template>
<section class="hero">
    <div class="hero_content">
        <p class="hero_eyebrow">uma vitrine de possibilidades</p>
        <h2 class="hero_title">
            descubra objetos <br> para viver melhor.
        </h2>
        <p class="hero_description">um previa de uma experciencia de compra feita para encontrar peças especiais com calma e inspiração</p>
        <router-link to="/vitrine" type="button" class="button-hero">explorar a vitrine</router-link>
    </div>

    <div class="hero_slader">
        <div class="img-slader"  v-if="products.length">
            <img
            :src="products[currentProduct].imagem"
            :alt="products[currentProduct].nome"
            class="hero-image"
            />
        </div>
    </div>
</section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { carregarProdutos } from '../../data/products';

const products = ref([]);
const currentProduct = ref(0);

let interval;

onMounted(async () => {
    products.value = await carregarProdutos();

    interval = setInterval(() => {
        currentProduct.value =
            (currentProduct.value + 1) % products.value.length;
    }, 4000);
});

onUnmounted(() => {
    clearInterval(interval);
});
</script>

<style scoped>
.hero{
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 1440px;
    width: 100%;
    height: 25rem;
    padding: 1.5rem;
    gap: 0rem;
    overflow: hidden;
}
/*  Informacao do hero */
.hero .hero_content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-inline: 2rem;
    min-width: 50%;
    height: 100%;
}

.hero .hero_content .hero_eyebrow{
    overflow-wrap: break-word;
    word-wrap: break-word;
    color: #d8623b;
    font-weight: 600;
}

.hero .hero_content .hero_eyebrow::first-letter{
    text-transform: capitalize;
}

.hero .hero_content .hero_title{
    max-width: 100%;
    white-space: normal;
    overflow-wrap: break-word;
    word-break: normal;
    font-size: 3.5rem;
    text-transform: capitalize;
    line-height: 1.1;
    margin-block: 0rem;
}

.hero .hero_content .hero_description{
    max-width: 30rem;
}
.hero .hero_content .hero_description::first-letter{
    text-transform: capitalize;
}
.hero .hero_content .button-hero{
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
.hero .hero_content .button-hero:hover {
    background-color: #db4919;
    transform: translateY(-2px);
}

.hero .hero_content .button-hero:active {
    background: #d8623b;
    transform: translateY(0);
}
.hero .hero_content .button-hero:focus-visible {
    outline: 2px solid #222;
    outline-offset: 4px;
}
/*  Informacao do hero */

/*  Slader Hero */
.hero .hero_slader{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    max-width: 80%;
    width: 100%;
}

.hero  .hero_slader .img-slader{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%; height: 90%;
    padding: .1rem;
    border: #d8623b solid .2rem;
    border-radius: 3rem;
    box-shadow: 1px 1px 1px 1px orange;
    margin-top: 3rem;
}

.hero .hero-image {
    width: 130%;
    height: 110%;
    animation: fade 2s ease;
    border: #db491900 solid .2rem;
    border-radius: 1rem;
    margin-bottom: 4rem;
    z-index: 2;
}

@keyframes fade {
    from {
        opacity: 0.1;
    }
    to {
        opacity: 3;
    }
}
</style>