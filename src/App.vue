<template>
  <div class="container">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Index from "./views/Index";
import Footer from "./components/Footer";
import Contact from "./views/Contact";
export default {
  name: "App",
  components: {
    Index,
    Navbar,
    Footer

  }
};
</script>

<style lang="scss" scoped>

.footer {
    margin-top: .5rem;
    padding: 1.5rem 1.5rem 1rem;
    bottom: 0px;
}

</style>
