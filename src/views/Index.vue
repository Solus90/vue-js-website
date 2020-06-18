<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification box">
            <p class="title">About Me</p>
            <p class="subtitle">Front-end developer specializing in HTML5, CSS3, LESS, SASS, JavaScript, and Vue. Currently I am interning with Random Acts studios based out of Columbus, Ohio.</p>
          </article>
          <article class="tile is-child notification box">
            <p class="title">Education</p>
            <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac hendrerit elit. Nunc cursus tempor.</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification box">
            <p class="title">Middle tile</p>
            <p class="subtitle">With an image</p>
            <figure class="image is-square">
              <img src="../assets/phil.jpeg" class="" />
            </figure>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"> 
        <article class="tile is-child notification box">
          <p class="title">Skills</p>
          <p class="subtitle">
            <i class="fab fa-html5 fa-3x"></i>
            <i class="fab fa-css3-alt fa-3x"></i>
            <i class="fab fa-js-square fa-3x"></i>
            <i class="fab fa-vuejs fa-3x"></i>
            <i class="fab fa-node-js fa-3x"></i>
            <i class="fab fa-sass fa-3x"></i>
            <i class="fab fa-less fa-3x"></i>
            <i class="fab fa-git fa-3x"></i>
            <i class="fab fa-wordpress fa-3x"></i>
            <i class="fab fa-magento fa-3x"></i>
            <i class="fab fa-gulp fa-3x"></i>
            <i class="fab fa-grun fa-3x"></i>
            <i class="fab fa-npm fa-3x"></i>
          </p>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification box">
        <div class="content">
          <p class="title">Experience</p>
            <h3>Random Acts Studios</h3>
              <i><p>Jan 2020 - Current</p></i>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <h3>Chipotle Mexican Grill</h3>
              <i><p>Aug 2018 - May 2020</p></i>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <h3>Verizon Wireless</h3>
              <i><p>Aug 2014 - Aug 2018</p></i>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <div class="content">
            <!-- Content -->
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.fab {
  margin-right: 0.6rem;
}

p.title {
  color: green !important;
}

.notification{
  background-color: white !important;
}

h3 {
  margin-bottom: 1px !important;
}
</style>
