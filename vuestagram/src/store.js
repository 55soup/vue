// vuex 변수 관리
import { createStore } from "vuex";
import post from "./assets/post";

const store = createStore({
    state () {
        return {
            name : 'kim',
            age : 20,
            likes : 30,
            isLike : false,
            post : post,
        }
    },
    mutations : { // state 수정방법 정의
        alterName(state){
            state.name = 'park'
        },
        plusAge(state, payload){
            state.age += payload
        },
        clickLike(state){
            if(state.isLike){
                state.likes--;
                state.isLike = false;
            }else{
                state.likes++;
                state.isLike = true;
            }
        }
    },
})

export default store;