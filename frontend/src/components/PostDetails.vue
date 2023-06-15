<template>
    <TheModal>
        <div class="postDetails">
            <img class="postImage" :src="ImgSrc ">
            <div class="postMeta">
                <div class="author">
                    <TheAvatar :src="renderuserHeadshot(store.state.id)"/>
                    <span>{{ comment.name }}</span>
                </div>
                <pre class="postDesc">{{ comment.content}}</pre>
                <div class="comments">
                    <div class="comment" v-for="n in comment.Comment.length">
                        <TheAvatar :src="renderuserHeadshot(comment.Comment[n-1].id)"/>
                        <span class="user">{{ comment.Comment[n-1].name }}</span>
                        <p class="commentContent">{{ comment.Comment[n-1].content }}</p>
                    </div>
                </div>
                <div class="actions">
                    <PostAcitons :comment="comment"/>
                    <span class="postPubDate">{{ comment.time }}h</span>
                    <input type="text" name="comment"  class="commentInput" placeholder="寫一條評論吧!" v-model="content">
                    <button class="commentPubBtn" @click="findArticleID">送出</button>
                </div>
            </div>
        </div>
    </TheModal>
</template>

<script setup>
import TheModal from './TheModal.vue';
import PostAcitons from './PostAcitons.vue';
import TheAvatar from './TheAvatar.vue';
import { computed,ref } from 'vue';
import { useStore, mapMutations } from "vuex";

const store = useStore();

const content = ref('');

//各個用戶的資訊
const comment = computed(() => store.state.comment.user[store.state.id-1]);
//更改當前圖片
const ImgSrc = computed(()=> store.getters.changeImageSrc);
//傳送評論
const findArticleID = computed(() => {
  const handleClick = () => {
    store.dispatch('findArticleID', content.value);
    content.value='';
  };
  return handleClick;
});
 

//用戶大頭貼更新
function renderuserHeadshot(n){
    return `src/assets/user/${n}.jpg`
}

</script>

<style scoped>

.postDetails {
    display: grid;
    grid-template-columns: 1fr minmax(auto, 300px);
    grid-template-rows: minmax(0, 1fr);
    width: 80vw;
    height: 80vh;
}

.postImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.postMeta {
    padding: 24px;
    padding-top: 36px;
    display: grid;
    align-items: start;
    grid-template-rows: max-content max-content 1fr max-content;
    max-height: 100%;
    height: 100%;
}

.author {
    display: flex;
    align-items: center;
    gap: 10px;
}

.postDesc {
    width: 100%;
    white-space: pre-wrap;
    margin-top: 24px;
}

.comments {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    grid-gap: 28px;
    align-items: start;
    overflow-y: auto;
    height: 100%;
    margin-top: 20px;
}

.comment {
    display: grid;
    grid-template-areas:
        "avatar name date"
        "comment comment comment";
    grid-template-columns: 34px 1fr 1fr;
    align-items: center;
    column-gap: 10px;
    row-gap: 14px;
}

.commentDate {
    grid-area: date;
    justify-self: end;
    color: #a7a7a7;
}

.commentContent {
    grid-area: comment;
}

.actions {
    border-top: 1px solid #eaeaea;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    margin: 20px -24px 0px -24px;
    padding: 20px 24px 0 24px;
    row-gap: 16px;
}

.postActions> :deep(svg) {
    transform: scale(0.8125);
}

.postPubDate {
    color: #9f9f9f;
    grid-column: 2 / 6;
    justify-self: end;
    font-size: 14px;
}

.commentInput {
    background: #f7f7f7;
    border-radius: 16px;
    border: none;
    grid-column: 1 / 4;
}

.commentInput::placeholder {
    color: #b9b9b9;
    border: none;
}

.commentPubBtn {
    color: #1da0ff;
    border: none;
    background: none;
    font-size: 16px;
    margin-left: 20px;
    grid-column: 4 / 6;
}

</style>