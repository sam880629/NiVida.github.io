<template>
  <div class="postActions">
    <TheIcon @click='addLike' icon="like" :fill=" comment.liked? 'red': 'none'" stroke="red" /><span>{{comment.like}}</span>
    <TheIcon icon="comment" fill="none" stroke="#000000" /><span>{{ commentSum }}</span>
    <TheIcon @click='addStar' icon="favorite" :fill="comment.stared? '#ffd700': 'none'" stroke="#ffd700" /><span>{{ comment.star }}</span>
  </div>
</template>

<script setup>
import TheIcon from "../components/TheIcon.vue";
import { computed,ref, inject } from 'vue';
import { useStore } from "vuex";
const store = useStore();
const props = defineProps(['comment']);
//當前id
const number = inject('number')

// 新增愛心
const addLike = computed(()=>{
   const handler=()=>{
     store.commit('addLike',number)
   }
   return handler;
})
// 新增星星
const addStar = computed(()=>{
   const handler=()=>{
     store.commit('addStar',number)
   }
   return handler;
})

// 取得留言的數量
const commentSum = computed(()=> (props.comment.Comment).length);
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