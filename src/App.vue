<template>
  <div class="container">
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"> 
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

<style>

.footer {
    margin-top: .5rem;
    padding: 1.5rem 1.5rem 1rem !important;
    bottom: 0px !important;
    background: #155724 !important;
    text-decoration-color: honeydew !important;
    border-radius: 5px;
}

</style>
