
<template>
  <form @submit.prevent="handleSubmit">

    <input
      type="text"
      placeholder="Nome"
      v-model="name"
    />

    <input
      type="text"
      placeholder="Categoria"
      v-model="category"
    />

    <input
      type="number"
      placeholder="Preço"
      v-model="price"
    />

    <input
      type="number"
      placeholder="Estoque"
      v-model="stock"
    />

    <textarea
      placeholder="Descrição"
      v-model="description"
    ></textarea>

    <button type="submit">
      {{ editingProduct ? 'Atualizar' : 'Salvar' }}
    </button>

  </form>
</template>

<script setup>
import { ref, watch } from 'vue';

/* global defineProps */
const props = defineProps({
    addProduct: Function,
    updateProduct: Function,
    editingProduct: Object
});

const name = ref('');
const category = ref('');
const price = ref('');
const stock = ref('');
const description = ref('');

// Preenche o formulário quando selecionar um produto para edição
watch(
  () => props.editingProduct,
  (product) => {
    if (product) {
      name.value = product.name;
      category.value = product.category;
      price.value = product.price;
      stock.value = product.stock;
      description.value = product.description;
    } else {
      limparFormulario();
    }
  },
  { immediate: true }
);

function limparFormulario() {
  name.value = '';
  category.value = '';
  price.value = '';
  stock.value = '';
  description.value = '';
}

function handleSubmit() {

  if (!name.value.trim()) {
    alert('Nome obrigatório');
    return;
  }

  if (Number(price.value) <= 0 || price.value === '') {
    alert('Preço inválido');
    return;
  }

  if (Number(stock.value) < 0 || stock.value === '') {
    alert('Estoque inválido');
    return;
  }

  const product = {
    name: name.value,
    category: category.value,
    price: Number(price.value),
    stock: Number(stock.value),
    description: description.value
  };

  if (props.editingProduct) {
    props.updateProduct({
      ...product,
      id: props.editingProduct.id
    });
  } else {
    props.addProduct(product);
  }

  limparFormulario();
}
</script>

<style scoped>

form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 500px;
    padding: 3rem;
    background: #F7F4EB;
    border: 1px solid #eee;
    border-radius: 3rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
}

/* Campos */
form input,
form textarea {
    width: 100%;
    padding: 13px 15px;
    border: 1px solid #ddd;
    border-radius: 1rem;
    outline: none;
    font-size: 14px;
    font-family: inherit;
    color: #333;
    background: #F7F4EB;
    transition: border-color 0.3s, box-shadow 0.3s;
    box-sizing: border-box;
}

form input:focus,
form textarea:focus {
    border-color: #d8623b;
    box-shadow: 0 0 0 3px rgba(216, 98, 59, 0.12);
    background: #F7F4EB;
}

form input::placeholder,
form textarea::placeholder {
    color: #999;
}

/* Descrição */
form textarea {
    min-height: 120px;
    resize: vertical;
}

/* Botão */
form button {
    width: 100%;
    padding: 13px;
    margin-top: 0.5rem;
    border: none;
    border-radius: 1rem;
    background: #d8623b;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

form button:hover {
    background: #db4919;
    transform: translateY(-2px);
}

form button:active {
    transform: translateY(0);
}

/* Responsividade */
@media (max-width: 600px) {
    form {
        padding: 1.25rem;
        max-width: 100%;
    }
}

</style>