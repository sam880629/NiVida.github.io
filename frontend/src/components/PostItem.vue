<template>
            <div class="postItem">
                <img  :src="getImgSrc(number+11)"  width="100%" height="100%" style="background: #eee;" />
                <div class="postInfo">
                    <div class="postMeta">
                        <TheAvatar />
                        <span>Sam</span>
                        <span class="postPubDate">12小時之前發布</span>
                        <PostAcitons/>
                    </div>
                    <div class="postDesc">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure rerum, adipisci ipsum magni nisi
                            animi,
                            dolorum, ab libero eaque architecto nihil sed repellat earum? Veritatis ex eaque quis saepe
                            nemo!
                        </p>
                    </div>
                </div>
            </div>
</template>

<script setup>
    import TheAvatar from './TheAvatar.vue';//頭像組件
    import PostAcitons from './PostAcitons.vue';

    defineProps(['number']);

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