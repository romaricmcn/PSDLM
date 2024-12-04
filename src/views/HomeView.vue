<template>
 <div class="home-view">
    <!-- Hero Section -->
    <header id="hero" class="hero text-white text-center py-5">
      <div class="container">
        <h1 class="display-4 fw-bold">Bienvenue dans le Hub de Cours Vue</h1>
        <p class="lead">
          Centralisez toutes vos leçons, exercices et TP dans une seule application web.
        </p>
        <router-link to="/list-lessons" class="btn btn-light btn-lg mt-3">
          Découvrir
        </router-link>
      </div>
    </header>

    <!-- À propos -->
    <section id="about" class="py-5 bg-light">
      <div class="container text-center">
        <h2 class="fw-bold mb-4">À propos de notre plateforme</h2>
        <p class="text-muted">
          Notre hub de cours est conçu pour simplifier l'apprentissage. Grâce à notre interface intuitive,
          vous pouvez accéder à vos leçons, exercices et TP en quelques clics.
        </p>
        <div class="row mt-4">
          <div class="col-md-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title">Leçons Interactives</h5>
                <p class="card-text text-muted">
                  Plongez dans des leçons dynamiques, agrémentées d'exemples concrets.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title">Exercices Pratiques</h5>
                <p class="card-text text-muted">
                  Mettez vos compétences à l'épreuve avec des exercices ciblés et progressifs.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title">Progression</h5>
                <p class="card-text text-muted">
                  Suivez vos progrès et reprenez là où vous vous êtes arrêté.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Fonctionnalités -->
    <section id="features" class="py-5">
      <div class="container">
        <h2 class="fw-bold text-center mb-4">Fonctionnalités Clés</h2>
        <div class="row">
          <div class="col-md-6">
            <div class="d-flex align-items-start mb-4">
              <i class="bi bi-stack fs-2 text-primary me-3"></i>
              <div>
                <h5>Organisation Centralisée</h5>
                <p class="text-muted">
                  Tous vos cours et exercices disponibles au même endroit.
                </p>
              </div>
            </div>
            <div class="d-flex align-items-start mb-4">
              <i class="bi bi-lightbulb fs-2 text-success me-3"></i>
              <div>
                <h5>Approche Pédagogique</h5>
                <p class="text-muted">
                  Une méthodologie pensée pour favoriser un apprentissage efficace.
                </p>
              </div>
            </div>
            <div class="d-flex align-items-start">
              <i class="bi bi-clock fs-2 text-danger me-3"></i>
              <div>
                <h5>Accessibilité Permanente</h5>
                <p class="text-muted">
                  Travaillez à votre rythme, où et quand vous voulez.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <img
              src="../assets/images/vue-wall.jpg"
              class="img-fluid rounded shadow"
              alt="Illustration des fonctionnalités"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Liens externes -->
    <section id="links" class="py-5 bg-light">
      <div class="container text-center">
        <h2 class="fw-bold mb-4">Ressources Vue.js</h2>
        <p class="text-muted">
          Découvrez des ressources utiles pour explorer Vue.js.
        </p>
        <div class="row">
          <div class="col-md-3">
            <a href="https://vuejs.org/" target="_blank" class="btn btn-outline-primary w-100 mb-3">
              Site Officiel
            </a>
          </div>
          <div class="col-md-3">
            <a href="https://vuejs.org/guide/introduction.html" target="_blank" class="btn btn-outline-success w-100 mb-3">
              Documentation
            </a>
          </div>
          <div class="col-md-3">
            <a href="https://vuejs.org/examples/#hello-world" target="_blank" class="btn btn-outline-info w-100 mb-3">
              Exemples
            </a>
          </div>
          <div class="col-md-3">
            <a href="https://vuejs.org/about/team.html" target="_blank" class="btn btn-outline-warning w-100 mb-3">
              Équipe Vue
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Appel à l'action -->
    <section class="hero py-5 text-white text-center">
      <div class="container">
        <h2 class="fw-bold">Prêt à commencer ?</h2>
        <p class="lead">Rejoignez notre plateforme et améliorez vos compétences dès aujourd'hui.</p>
        <router-link to="/list-lessons" class="btn btn-light btn-lg">
          Explorer les cours
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang='js'>
import {  RouterLink } from 'vue-router';
</script>

<style scoped lang="css">
.hero{
  background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
}
</style>