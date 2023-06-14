<template>
            <div class="postItem">
                <img  :src="getImgSrc(number+11)"  width="100%" height="100%" style="background: #eee;"  @click="openPostShow" />
                <div class="postInfo">
                    <div class="postMeta">
                        <TheAvatar :src="userHeadshot"/>
                        <span>{{ comment.name }}</span>
                        <span class="postPubDate">{{comment.time}}小時之前發布</span>
                        <PostAcitons :comment="comment"/>
                    </div>
                    <div class="postDesc">
                        <p>{{ comment.content }}</p>
                    </div>
                </div>
            </div>
</template>

<script setup>
    import TheAvatar from './TheAvatar.vue';
    import PostAcitons from './PostAcitons.vue';
    import { useStore, mapMutations, mapState } from "vuex";
    import { computed } from 'vue';
    const props = defineProps(['number']);
    const store = useStore();

    // 各個用戶的資訊
    const comment = computed(() => store.state.comment.user[props.number-1]);
    //開啟詳細視窗 
    const openPostShow = ( payload ) => store.commit('changePostShow', {show:true, id:props.number});
    //用戶大頭貼更新
    const userHeadshot = computed(()=> `src/assets/user/${props.number}.jpg`)

     // 隨機圖片生成
    function getImgSrc(n){
        return `https://picsum.photos/id/${n}/1200/1200`
    }


    
  
</script>


<style scoped>
.postItem {
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
}

.postInfo {
    padding: 24px;
}

.postItem>img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    background: #eee;
    cursor: pointer;
}

.postMeta {
    display: grid;
    grid-template-areas:
        'avatar name actions'
        'pubDate pubDate actions';
    grid-template-columns: 42px 1fr 3fr;
    row-gap: 6px;
}

.postMeta .avatar {
    grid-area: avatar;
}

.postMeta .postPubDate {
    grid-area: pubDate;
    color: #9f9f9f;
    font-size: 14px;
}

.postActions {
    grid-area: actions;
    justify-self: end;
}

.postDesc {
    margin-top: 28px;
    white-space: pre-line;
}
</style>