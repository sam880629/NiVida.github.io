import { createStore } from  'vuex';
import { user } from "./user/index";
import { post } from "./post/index";
import { comment } from './comment/index';
export const store = createStore({
    modules:{
        user, post, comment
    },
    state(){
        return {
            showPostDetails : false,//是否彈出詳細視窗
            id : 1,//各個id
            number: null,
        }
    },
    mutations: {
         //彈出視窗
         changePostShow(state, payload){
            state.showPostDetails = payload.show;
            state.id = payload.id
        }
    },
    actions: {},
    getters: {
        //改變彈跳視窗對應的圖片
        changeImageSrc(state){
            return `https://picsum.photos/id/${state.id+11}/1200/1200`
        },
        //生成文章圖片
        getImgSrc(state){
            return `https://picsum.photos/id/${state.number}/1200/1200`
        }
    }
});