<template>
  <div class="postActions">
    <TheIcon icon="like" fill="none" stroke="#000000" /><span>1.5w</span>
    <TheIcon icon="comment" fill="none" stroke="#000000" /><span>1.2w</span>
    <TheIcon icon="favorite" fill="none" stroke="#000000" /><span>2.2w</span>
  </div>
</template>

<script setup>
import TheIcon from "../components/TheIcon.vue";
</script>

<style scoped>
.postActions {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  column-gap: 16px;
  row-gap: 4px;
}

.postActions > svg {
  width: 32px;
  height: 32px;
  grid-row: 1/2;
}

.postActions>span {
  font-size: 14px;
}
</style>