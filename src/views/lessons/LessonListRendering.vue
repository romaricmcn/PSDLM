<template>
  <div class="container py-5">
    <!-- Titre de la leçon -->
    <div class="text-center mb-5">
      <h1 class="display-4 fw-bold">List Rendering avec Vue.js</h1>
      <p class="lead">
        Découvrez comment utiliser <code>v-for</code> pour afficher dynamiquement des listes dans Vue.js.
      </p>
    </div>

    <!-- Section Théorie -->
    <section id="theory" class="mb-5">
      <h2 class="fw-bold mb-3">Qu'est-ce que le List Rendering ?</h2>
      <p>
        Le **List Rendering** vous permet d'itérer sur des tableaux ou des objets et de rendre dynamiquement des éléments dans le DOM. 
        La directive <code>v-for</code> est utilisée pour créer ces itérations.
      </p>
      <div class="alert alert-info">
        <strong>Points Clés :</strong>
        <ul>
          <li>Idéal pour afficher des listes d'éléments comme des produits, des utilisateurs, ou des messages.</li>
          <li>Assurez-vous d'utiliser une clé unique pour chaque élément (via l'attribut <code>key</code>).</li>
        </ul>
      </div>
    </section>

    <!-- Exemple : Utilisation de v-for -->
    <section id="example" class="mb-5">
      <h2 class="fw-bold mb-3">Exemple : List Rendering avec <code>v-for</code></h2>
      <p>
        Cet exemple montre une liste dynamique de tâches, avec une condition pour afficher un message si la liste est vide :
      </p>
      <div class="row">
        <!-- Code Exemple -->
        <div class="col-md-6">
          <pre class="bg-dark text-white p-3 rounded">
<code>
&lt;template&gt;
  &lt;div&gt;
    &lt;h3&gt;Liste de tâches :&lt;/h3&gt;
    &lt;ul class="list-group"&gt;
      &lt;li 
        v-for="(oneTask, index) in tasks" 
        :key="index" 
        class="list-group-item"&gt;
        {{ oneTask }}
      &lt;/li&gt;
    &lt;/ul&gt;
    &lt;p v-if="tasks.length === 0" class="mt-3 alert alert-warning"&gt;
      Aucune tâche disponible.
    &lt;/p&gt;
    &lt;button class="btn btn-primary mt-3" @click="addTask"&gt;Ajouter une tâche&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const tasks = ref([]);

function addTask() {
  tasks.value.push(`Tâche ${tasks.value.length + 1}`);
}
&lt;/script&gt;
</code>
          </pre>
        </div>
        <!-- Rendu Exemple -->
        <div class="col-md-6">
          <h3>Liste de tâches :</h3>
          <ul class="list-group">
            <li 
              v-for="(task, index) in tasks" 
              :key="index" 
              class="list-group-item">
              {{ task }}
            </li>
          </ul>
          <p v-if="tasks.length === 0" class="mt-3 alert alert-warning">
            Aucune tâche disponible.
          </p>
          <button class="btn btn-primary mt-3" @click="addTask">Ajouter une tâche</button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="text-center mt-5">
      <p>
        Pour en savoir plus sur le List Rendering, consultez la 
        <a href="https://vuejs.org/guide/essentials/list.html" class="link-primary" target="_blank">
          documentation officielle de Vue.js
        </a>.
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Données réactives
const tasks = ref([]);

// Ajouter une tâche
function addTask() {
  tasks.value.push(`Tâche ${tasks.value.length + 1}`);
}
</script>

<style scoped>
/* Styles personnalisés */
.display-4 {
  font-size: 2.5rem;
}

.fw-bold {
  font-weight: bold;
}

.mb-5 {
  margin-bottom: 3rem;
}

.bg-dark {
  background-color: #343a40 !important;
}

.text-white {
  color: white !important;
}
</style>
