<template>
  <header class="header">
    <NavBar />
  </header>
  <TheLayout>
  <router-view></router-view>
  </TheLayout>
</template>


<script setup>
import '../src/assets/base.css';
import NavBar from './components/NavBar.vue';
import TheLayout from './components/TheLayout.vue'
</script>


<style></style>
