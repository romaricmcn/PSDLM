<template>
  <div>
    <h1>TP: Dynamic Styling</h1>
    <input v-model="classInput" placeholder="Tapez 'hello' ou 'world'" />
    <p v-if="showTitle" :class="dynamicClass">
      Hello World (class dynamique)
    </p>
    <input v-model="colorInput" placeholder="Tapez une couleur (red, green, etc.)" />
    <p :style="{ backgroundColor: colorInput }">
      Hello World (couleur dynamique)
    </p>
    <button @click="toggleTitle">
      {{ showTitle ? "Masquer" : "Afficher" }} 1er Titre
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const classInput = ref('');
const colorInput = ref('');
const showTitle = ref(true);

const dynamicClass = computed(() => {
  if (classInput.value.toLowerCase() === 'hello') {
    return 'maClasseHello';
  } else if (classInput.value.toLowerCase() === 'world') {
    return 'maClasseWorld';
  }
  return '';
});

const toggleTitle = () => {
  showTitle.value = !showTitle.value;
};
</script>

<style scoped>
/* Classe Hello */
.maClasseHello {
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: blue;
  padding: 10px;
  border-radius: 5px;
}

/* Classe World */
.maClasseWorld {
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: green;
  padding: 10px;
  border-radius: 5px;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>