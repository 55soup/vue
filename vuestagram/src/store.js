// vuex 변수 관리
import { createStore } from "vuex";
import post from "./assets/post";
import axios from "axios";

const store = createStore({
    state () {
        return {
            name : 'kim',
            age : 20,
            likes : 30,
            isLike : false,
            post : post,
            more : {},
        }
    },
    mutations : { // state 수정방법 정의
        setMore(state, data){ // getData()에서 가져온 데이터를 more에 넣음.
            state.more = data;
        },
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
    actions : { 
        // ajax하는 곳, 오래걸리는 작업
        // mutations안에서 처리x
        getData(context){
            axios.get(`https://codingapple1.github.io/vue/more0.json`)
            .then((a) => {
                console.log(a.data);
                context.commit('setMore', a.data);
            })
        }
    },
})

export default store;