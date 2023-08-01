import { createApp } from 'vue'
import App from './App.vue'

import mitt from 'mitt'
let emitter = mitt();
let app = createApp(App);

app.config.globalProperties.emitter = emitter; // 자주쓰는 라이브러리 등록\


import store from './store.js'

app.use(store).mount('#app')