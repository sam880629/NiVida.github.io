<template>
  <div class="postActions">
    <TheIcon icon="like" fill="none" stroke="#000000" /><span>{{comment.like}}</span>
    <TheIcon icon="comment" fill="none" stroke="#000000" /><span>{{ commentSum }}</span>
    <TheIcon icon="favorite" fill="none" stroke="#000000" /><span>{{ comment.star }}</span>
  </div>
</template>

<script setup>
import TheIcon from "../components/TheIcon.vue";
import { computed } from 'vue';
const props = defineProps(['comment'])
// 取得留言的數量
const commentSum = computed(()=> (props.comment.Comment).length)
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