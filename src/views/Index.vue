<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification is-primary">
            <p class="title">Vertical...</p>
            <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod quam lorem, a tempus lorem luctus quis. Donec sagittis elit quis dui viverra, at imperdiet erat posuere. Donec vehicula, lectus nec interdum consequat, elit nunc.</p>
          </article>
          <article class="tile is-child notification is-warning">
            <p class="title">...tiles</p>
            <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac hendrerit elit. Nunc cursus tempor.</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-info">
            <p class="title">Middle tile</p>
            <p class="subtitle">With an image</p>
            <figure class="image is-square">
              <img src="../assets/phil.jpeg" />
            </figure>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <p class="title">Wide tile</p>
          <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum auctor.</p>
          <div class="content">
            <!-- Content -->
          </div>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-success">
        <div class="content">
          <p class="title">Tall tile</p>
          <p class="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend eros eget turpis ullamcorper lobortis. Duis euismod dictum magna, nec vulputate arcu fermentum eget. Vivamus ullamcorper imperdiet odio, eget suscipit turpis congue non. Nunc ornare malesuada libero quis commodo. Nunc sed tincidunt velit, eget porta eros. Praesent tempor consectetur neque ac elementum. Vestibulum sapien massa, tincidunt eu sodales quis, sagittis at nisi. Donec faucibus lacus tellus, at sodales mi tristique ut.
          </p>
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
<style scoped lang="scss">
</style>
