<template>
    <div>
        <PostList>
            <PostItem v-for="n in 6" :number="n" :key="n"></PostItem>
        </PostList>
        <PostDetails v-if="showPostDetails" />
    </div>
    
</template>

<script setup>
import PostDetails from '../components/PostDetails.vue';
import PostItem from '../components/PostItem.vue';
import PostList from '../components/PostList.vue';
import { computed } from 'vue';
import { useStore, mapMutations } from "vuex";

const store = useStore();
//是否顯示詳細視窗
const showPostDetails = computed(()=> store.state.showPostDetails);

</script>

<style scoped>

</style>