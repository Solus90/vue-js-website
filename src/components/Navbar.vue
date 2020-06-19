<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"> 
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

      <router-link class="navbar-item" to="/contact">
        Contact
      </router-link>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Projects
        </a>

        <div class="navbar-dropdown">
          <router-link class="navbar-item" to="/recipefinder">
            Recipe Finder
          </router-link>
          <router-link class="navbar-item" to="/smoothie">
            Smoothie Database
          </router-link>
          <a class="navbar-item">
            Project 3
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item" href="https://github.com/Solus90" target="_blank">
            GitHub
            <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item" id='icon'>
         <a href="https://www.linkedin.com/in/phil-linley-6ba55850/" target="_blank">
          <i class="icon fab fa-linkedin-in"></i>
         </a>
         <a href="mailto:linley.phil@gmail.com" taret="_blank">
           <i class="icon fa fa-envelope" aria-hidden="true"></i>
          </a>
          <a href="tel:6144773338">
            <i class="icon fa fa-phone" aria-hidden="true"></i>
          </a>
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
.navbar-item .icon:only-child, .navbar-link .icon:only-child {
    margin-left: 0.25rem !important;
    margin-right: 0.25rem !important;
    
}

</style>