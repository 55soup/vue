<template>
  <transition name="fade">
    <Modal
      :onerooms="onerooms" 
      :pressId="pressId" 
      :isModalOn="isModalOn"
      @closeModal="isModalOn = false;"/>
  </transition>
  <div class="menu">
    <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
  </div>
  <Discount
    :discountRate="discountRate"
    v-if="showDiscount"/>
  <button @click="priceSortReverse">가격 높은 순</button>
  <button @click="priceSort">가격 낮은 순</button>
  <button @click="sortABC">가나다순 정렬</button>
  <button @click="sortBack">원래대로</button>
  <Card
    @openModal="isModalOn = true; pressId=$event"
    :room="room" 
    v-for="(room, i) in onerooms" :key="i" />
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
      discountRate: 30,
      showDiscount : true,
      pressId : 0,
      isModalOn: false,
      스타일: "color: blue",
      신고수 : [0,0,0], 
      menus: ['Home', 'Shop', 'About'],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      originalOnerooms : [...data],
      onerooms : data,
      imgUrl: [require('./assets/room0.jpg'), require('./assets/room1.jpg'), require('./assets/room2.jpg')],
    };
  },
  methods : {
    increase(i){
      this.신고수[i] += 1; // 데이터 사용할 때 this.데이터명
    },
    priceSort(){
      // sort: 원본이 영구적으로 변형됨.
      this.onerooms.sort((a,b)=>{
        return a.price - b.price // 오름차순 정렬
      })
    },
    sortBack(){
      this.onerooms = [...this.originalOnerooms]; // [...배열] : 각 각 별개의 사본을 만듦.
    },
    priceSortReverse(){
      this.onerooms.sort((a,b) => {
        return b.price - a.price // 내림차순 정렬
      })
    },
    sortABC(){
      this.onerooms.sort((a,b) => {
        if(a.title.toLowerCase() > b.title.toLowerCase())
          return 1;
        else if(a.title.toLowerCase() < b.title.toLowerCase())
          return -1;
        else
          return 0;
      });
    },

  },
  mounted(){
    // setTimeout(()=>{
    //   this.showDiscount = false;
    // }, 2000);
    const discountInterval = setInterval(() => {
      this.discountRate -= 1;
      if(this.discountRate <= 0){
        alert('할인 적용 안됨!')
        this.showDiscount = false;
        clearInterval(discountInterval); // interval 실행 중지
      }
    }, 1000)
  },
  components: {
    Discount : Discount,
    Modal : Modal,
    Card : Card,
  },
};
</script>

<style>
/* transition 애니메이션 */
/* 퇴장 애니메이션 */
.fade-leave-from { 
  /** 시작 */
  transform: translateY(0px);
}
.fade-leave-active {
  transition: all 0.3s;
}
.fade-leave-to {
  /** 끝 */
  transform: translateY(-1000px);
}

.fade-enter-from { 
  /** 시작 */
  transform: translateY(-1000px);
}
.fade-enter-active {
  transition: all 0.3s;
}
.fade-enter-to {
  /** 끝 */
  transform: translateY(0px);
}
/* 애니메이션 */

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
.start {
  opacity: 0;
  transition: all 1s;
}
.end{
  opacity: 1;
}
</style>
