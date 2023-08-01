// vuex 변수 관리
import { createStore } from "vuex";

const store = createStore({
    state () {
        return {
            name : 'kim'
        }
    },
})

export default store;