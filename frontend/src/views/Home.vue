<template>
  <Header />
  <!-- Début de la section formations-->
  <section class="hero is-medium is-bold" id="section_formations">
    <div class="hero-body">
      <div class="container cont_formations">
        <div class="flex_txt">
          <h1 class="title">Nos formations techniques</h1>
          <a>
            <img src="../../public/img/formations.png" />
          </a>
          <div class="column">
            <ul>
              <li>Usinage conventionnel</li>
              <li>Usinage commande numérique</li>
              <li>Pneumatique</li>
              <li>Hydraulique</li>
              <li>Automatisme</li>
              <li>Soudure</li>
              <li>Mécanique</li>
              <li>Electricité</li>
              <li>Electronique</li>
            </ul>
          </div>
        </div>
        <div>
          <a>
            <img class="flex_img" src="../../public/img/formations2.png" />
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- Fin de la section formations-->
  <!-- Début de la section de test (temp)-->
  <section class="hero is-medium is-bold" id="section_test">
    <div class="hero-body">
      <div class="container cont_formations">
        <div>
          <a>
            <img class="flex_img" src="../../public/img/atouts2.png" />
          </a>
        </div>
        <div class="flex_txt" id="atouts">
          <h1 class="title">Nos atouts</h1>
          <a>
            <img src="../../public/img/atouts.png" />
          </a>
          <div class="column">
            <ul>
              <li>Réactif</li>
              <li>Professionnel</li>
              <li>Efficace</li>
              <li>Adaptable</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Fin de la section de test (temp)-->
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Home",
  components: { Header, Footer },
};
</script>
