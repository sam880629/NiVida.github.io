<template>
    <div>
        <PostList>
            <PostItem v-for="n in 6" :number="n" :key="n"></PostItem>
        </PostList>
        <!-- <PostDetails/> -->
    </div>
    
</template>

<script setup>
import PostDetails from '../components/PostDetails.vue';
import PostItem from '../components/PostItem.vue';
import PostList from '../components/PostList.vue';


</script>

<style scoped>

</style>