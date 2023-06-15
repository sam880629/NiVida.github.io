<template>
  <svg class="icon">
    <use :href="`${sprite}#icon-${icon}`"></use>
  </svg>
</template>
<script setup>

import sprite from "../assets/icons/sprite.svg";

defineProps({
  icon: String,
});
</script>
<style scoped>
 .icon:hover{
    cursor: pointer;
 }
</style>