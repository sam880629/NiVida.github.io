<template>
    <div>
        <PostList>
            <PostItem v-for="n in 6" :number="n" :key="n"></PostItem>
        </PostList>
        <!-- <postDetails/> -->
    </div>
    
</template>

<script setup>
import postDetails from '../components/postDetails.vue';
import PostItem from '../components/PostItem.vue';
import PostList from '../components/PostList.vue';


</script>

<style scoped>

</style>