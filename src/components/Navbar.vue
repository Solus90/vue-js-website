<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link class="navbar-item" to="/">
      <img src="../assets/solosLogo.png" width="80" height="28">
    </router-link>

  <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
</a>
    </div>

<div class="navbar-menu" id="navMenu">
    <div class="navbar-start">
      <router-link class="navbar-item" to="/">
        Home
      </router-link>

      <router-link class="navbar-item" to="/Contact">
        Contact
      </router-link>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Projects
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Project 1
          </a>
          <a class="navbar-item">
            Project 2
          </a>
          <a class="navbar-item">
            Project 3
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item" href="https://github.com/Solus90" target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: "Navbar",
  data: {
    return: {
      isActive: false
    }
  },
  mounted: function(){
      document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
  }
};
</script>

<style>
</style>