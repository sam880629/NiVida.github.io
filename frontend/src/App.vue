<template>
  <header class="header">
    <NavBar />
  </header>
  <TheLayout>
  <router-view></router-view>
  </TheLayout>
  <footer>
    <Footer></Footer>
  </footer>
</template>


<script setup>
import '../src/assets/base.css';
import NavBar from './components/NavBar.vue';
import TheLayout from './components/TheLayout.vue';
import Footer from './page/Footer.vue';
</script>


<style></style>
