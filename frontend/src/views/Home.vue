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
            <img class="flex_img" src="../../public/img/formations3.png" />
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- Fin de la section formations-->
  <!-- Début de la section atouts-->
  <section class="hero is-medium is-bold" id="section_atouts">
    <div class="hero-body">
      <div class="container cont_formations" id="container_formations">
        <div id="img_container">
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
  <!-- Fin de la section atouts-->
  <!-- Début de la section formateurs-->
  <section class="hero is-medium is-bold" id="section_formateurs">
    <div class="hero-body">
      <div class="container cont_formations" id="container_formations">
        <div class="flex_txt" id="formateurs">
          <h1 class="title">Nos formateurs</h1>
          <a>
            <img src="../../public/img/formateurs.png" />
          </a>
          <div class="column">
            <ul>
              <li>Fiables</li>
              <li>Compétents</li>
              <li>Disponibles</li>
              <li>A l'écoute de vos</li>
            </ul>
          </div>
        </div>
        <div id="img_container">
          <a>
            <img class="flex_img" src="../../public/img/formateurs2.png" />
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- Fin de la section formateurs-->
  <!-- Début de la section certifications-->
  <section class="hero is-medium is-bold" id="section_certifications">
    <div class="hero-body">
      <div class="container cont_formations" id="container_formations">
        <div id="img_container">
          <a>
            <img class="flex_img" src="../../public/img/certifications2.png" />
          </a>
        </div>
        <div class="flex_txt" id="certifications">
          <h1 class="title">Nos certifications</h1>
          <a>
            <img src="../../public/img/certifications.png" />
          </a>
          <div class="column">
            <ul>
              <li>Tests</li>
              <li>Evaluations</li>
              <li>Diplômes</li>
              <li>Certificats</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Fin de la section atouts-->
  <Footer />
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Home',
  components: { Header, Footer }
}
</script>
