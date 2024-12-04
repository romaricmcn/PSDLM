<template>
  <div class="container py-5">
    <header class="text-center mb-5">
      <h1 class="display-4 fw-bold">L'interpolation de texte dans Vue.js</h1>
      <p class="lead">
        L'interpolation permet d'insérer dynamiquement des valeurs JavaScript dans le DOM via des expressions dans le
        HTML.
      </p>
    </header>

    <section id="examples" class="mb-5">
      <h2 class="fw-bold mb-3">Exemples pratiques</h2>

      <!-- Exemple de base -->
      <div class="mb-4">
        <h3>Exemple de base</h3>
        <p>Message : {{ message }}</p>
      </div>

      <!-- Expressions JavaScript -->
      <div class="mb-4">
        <h3>Utilisation des expressions</h3>
        <p>2 + 2 = {{ 2 + 2 }}</p>
        <p>Nom complet : {{ firstName + ' ' + lastName }}</p>
      </div>

      <!-- Appel de fonctions -->
      <div class="mb-4">
        <h3>Appels de fonctions dans l'interpolation</h3>
        <p>Message en majuscules : {{ toUpperCase(message) }}</p>
      </div>
    </section>

    <footer class="text-center mt-5">
      <p>
        Pour plus d'informations, consultez la
        <a href="https://vuejs.org/guide/essentials/template-syntax.html" class="link-primary">documentation officielle
          sur la syntaxe des templates</a>.
      </p>
    </footer>
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue';

// Propriétés réactives
const message = ref('Bonjour, Vue.js !');
const firstName = ref('JigZo');
const lastName = ref('Dupont');
const count = ref(0);

// Fonctions
function toUpperCase(str) {
  return str.toUpperCase();
}

</script>

<style scoped>
/* Custom styles */
.bg-dark {
  background-color: #343a40 !important;
}

.text-white {
  color: white !important;
}

.display-4 {
  font-size: 3rem;
}

.fw-bold {
  font-weight: bold;
}

.mt-3 {
  margin-top: 1rem;
}

.mb-5 {
  margin-bottom: 3rem;
}
</style>
