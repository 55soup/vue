<template>
  <Modal :onerooms="onerooms" :pressId="pressId" :isModalOn="isModalOn"/>
  <div class="menu">
    <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
  </div>
  <Discount />
  <Card :room="room" v-for="(room, i) in onerooms" :key="i" />
</template>

<script>
import data from './assets/oneroom.js';
import Discount from './Discount';
import Modal from './Modal';
import Card from './Card';

export default {
  name: "App",
  data() {
    return {
      // data는 obj형식
      pressId : 0,
      isModalOn: false,
      스타일: "color: blue",
      신고수 : [0,0,0], 
      menus: ['Home', 'Shop', 'About'],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      onerooms : data,
      imgUrl: [require('./assets/room0.jpg'), require('./assets/room1.jpg'), require('./assets/room2.jpg')],
    };
  },
  methods : {
    increase(i){
      this.신고수[i] += 1; // 데이터 사용할 때 this.데이터명
    }
  },
  components: {
    Discount : Discount,
    Modal : Modal,
    Card : Card,
  },
};
</script>

<style>
body{
  margin: 0;
}
div {
  box-sizing: border-box;
}
.discount{
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
.black-bg {
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg{
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}
.room-img {
  width: 100%;
  margin-top: 40px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0;
}
.menu{
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a{
  color: white;
  padding: 10px;
}
</style>
