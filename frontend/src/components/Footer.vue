<template>
  <footer class="footer">
    <div class="content has-text-centered has-text-white">
      <div class="columns">
        <div class="column">
          <h6>Notre histoire</h6>
          <p class="has-text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div class="column">
          <h6>Texte</h6>
          <ul>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
          </ul>
        </div>
        <div class="column">
          <h6>Texte</h6>
          <ul>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
          </ul>
        </div>
        <div class="column">
          <h6>Contact</h6>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-medium" type="email" placeholder="Email" />
            <span class="icon is-left">
              <i class="fa fa-envelope"></i>
            </span>
          </div>
          <a class="button is-success is-rounded" id="subscribe">Envoyer</a>
        </div>
      </div>
    </div>
  </footer>
  <div class="copyright has-text-white bottom">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column">
          <p>Copyright © MLINDUSTRIE {{ date }}</p>
        </div>
        <div class="column has-text-right">
          <i class="fa fa-linkedin-square"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: new Date().getFullYear()
    }
  }
}
</script>
