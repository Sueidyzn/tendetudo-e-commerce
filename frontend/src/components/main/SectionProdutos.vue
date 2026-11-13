
<template>
  <div class="home-sections">

    <!-- SEÇÃO DE PRODUTOS EM DESTAQUE -->
    <section class="featured">

        <div class="section-header">
            <p class="eyebrow">Seleção da casa</p>
            <h2>Peças em destaque</h2>
            <p class="section-description">
                Produtos ilustrativos. Esta página não realiza pedidos ou pagamentos.
            </p>
        </div>

        <div class="products-grid">

            <article
            class="product-card"
            v-for="produto in produtos"
            :key="produto.id"
            >
            <div class="product-image">
                <img
                :src="produto.imagem"
                :alt="produto.nome"
                />
            </div>

            <div class="product-info">
                <h3>{{ produto.nome }}</h3>
                <span>{{ formatarPreco(produto.preco) }}</span>
            </div>
            </article>

        </div>

        <button>explorar a vitrine</button>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { carregarProdutos } from '../../data/products.js';

const produtos = ref([]);

onMounted(async () => {
  try {
    const dados = await carregarProdutos();
    produtos.value = dados.slice(0, 5);
  } catch (erro) {
    console.error('Erro ao carregar destaques:', erro);
  }
});

function formatarPreco(valor) {
  return Number(valor).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}
</script>

<style scoped>
.home-sections {
  width: 100%;
  background: #f5f3e9;
}

/* PRODUTOS EM DESTAQUE */

.featured {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 3rem 4%;
  background: #e9ecdf;
  box-sizing: border-box;
}
.featured button{
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
    margin-top: 3rem;
    margin-bottom: 5rem;
    text-decoration: none;
    box-shadow: 1px 1px 1px 1px orange;
}
.section-header {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto 1.5rem;
}

.eyebrow {
  color: #bd7655;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.section-header h2,
.access-card h2 {
  color: #30372e;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 0 0.5rem;
}

.section-description {
  color: #77796f;
  font-size: 11px;
  margin: 0;
}

/* GRID DE PRODUTOS */

.products-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1.2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.product-card {
    height: 20rem;
  min-width: 0;
  padding: 0.5rem;
  background: #fffdf7;
  border-radius: 14px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.07);
}

.product-image {
  width: 100%;
  height: 250px;
  background: #f1f0e8;
  border-radius: 10px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  mix-blend-mode: multiply;
}

.product-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 0.3rem 0.3rem;
}

.product-info h3 {
  color: #393b34;
  font-size: 12px;
  font-weight: 500;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.product-info span {
  color: #bd7655;
  font-size: 11px;
  font-weight: 700;
  white-space: nowrap;
}

/* CARDS DE ACESSO */

.access-section {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4.5rem 4% 3rem;
  box-sizing: border-box;
}

.access-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 145px;
  padding: 1.5rem;
  border-radius: 20px;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.access-card:hover {
  transform: translateY(-4px);
}

.access-card.seller {
  background: #e2e9dc;
}

.access-card.buyer {
  background: #f0e4d7;
}

.access-card .eyebrow {
  margin: 0 0 0.7rem;
}

.access-card h2 {
  font-size: 1.3rem;
}

.access-card p:last-child {
  color: #74746c;
  font-size: 11px;
  line-height: 1.6;
  max-width: 450px;
  margin-bottom: 0;
}

/* RESPONSIVIDADE */

@media (max-width: 768px) {

  .featured {
    padding: 2rem 5%;
  }

  .products-grid {
    gap: 0.7rem;
  }

  .product-image {
    height: 140px;
  }

  .product-info {
    flex-direction: column;
    align-items: flex-start;
  }

  .product-info h3 {
    max-width: 100%;
  }

  .access-section {
    padding-inline: 5%;
    gap: 0.8rem;
  }

  .access-card {
    padding: 1rem;
  }
}

@media (max-width: 480px) {

  .products-grid {
    grid-template-columns: 1fr;
  }

  .product-card {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .product-image {
    width: 42%;
    height: 110px;
    flex-shrink: 0;
  }

  .product-info {
    flex: 1;
  }

  .product-info h3 {
    white-space: normal;
  }

  .access-section {
    grid-template-columns: 1fr;
  }

  .access-card {
    min-height: 130px;
  }
}
</style>
