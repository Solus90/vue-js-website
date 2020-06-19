<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification box">
            <p class="title">About Me</p>
            <p class="">Front-end developer specializing in HTML5, CSS3, LESS, SASS, JavaScript, and Vue. 
              Currently I am interning with Random Acts studios based out of Columbus, Ohio.</p>
          </article>
          <article class="tile is-child notification box">
            <div class="content">
            <p class="title">Education</p>
            <h3>SHAWNEE STATE UNIVERISTY</h3>
              <i><p>Associate of Arts</p></i>
              <p>Social Science</p>
            <h3>FRANKLIN HEIGHTS HIGH SCHOOL</h3>
              <i><p>Interactive Media Design Program</p></i>
              <p>Learned skills such as Photoshop, 3D Studio Max, Adobe Creative Suite, and video editing.</p>
              </div>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification box">
              <p class="title has-text-primary phil">Phillip
              <span class=" title has-text-dark phil">Linley</span>
            <p>Driven web developer with a focus on javascript and Vue.js.  I am a Dad and an avid Dungeons and Dragons player.  
              Experienced with most front-end technologies as well as NoSQL databases, primarily Firebase.
            </p>
            <figure class="image is-square avatar">
              <img src="../assets/phil.jpeg" class="avatar" />
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
              <p>Developed fully functional responsive prototypes based on Business Requirements using HTML/HTML5, CSS3, Magento, JavaScript and JQuery.</p>
            <h3>Chipotle Mexican Grill</h3>
              <i><p>Aug 2018 - May 2020</p></i>
              <p>Senior member of Chipotle Rewards which added 10 million users in first year.</p>
            <h3>Verizon Wireless</h3>
              <i><p>Aug 2014 - Aug 2018</p></i>
              <p>Interface daily with internal partners in accounting, field services, new business, operations and consumer affairs divisions.</p>
          <div class="content">
            <!-- Content -->
            <a class="button is-text" download="phil-linley-resume.pdf" href="/phil-linley-resume.pdf"> >>>Download Resume</a>
          </div>
           <div class="workflow"><b>Workflow</b></div>
                <ul class="fa-ul mb-0">
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Mobile-First, Responsive Design</li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Cross Browser Testing &amp; Debugging</li>
                    <li>
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Cross Functional Teams</li>
                </ul>
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
<style scoped>
.fab {
  margin-right: 0.6rem;
}

.fab:hover {
  color: green;
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
.phil {
  font-size: 3.3rem;
}
.avatar{
  opacity: 85% !important;
  background-color: green;
  border-radius: 15px;
}

ul li {
  list-style-type: none;
}
</style>
