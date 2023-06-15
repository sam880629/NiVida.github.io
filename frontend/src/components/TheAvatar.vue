<template>
    <img :src="src || defaultAvatar" class="avatar"/>
</template>

<script setup>
import defaultAvatar from '../assets/user/7.jpg';

  const props =   defineProps({
        src: String,
        width:{
            type: Number,
            default: 34,
        },
        height:{
            type: Number,
            default: 34,
        }
    },'number');

</script>

<style scoped>
    .avatar{
        width: v-bind(width + 'px');
        height: v-bind(height + 'px');
        border-radius: 50%;
        background: #eee;
        object-fit:  cover;
        object-position:  center;
    }
</style>