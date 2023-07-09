<template>
  <div class="menu">
    <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
  </div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <h4>{{ products[0] }}</h4>
    <p>50</p>
    <button @click="increase">허위매물신고</button> <span>신고수 : {{ 신고수 }}</span>
  </div>
  <div>
    <h4>{{ products[1] }}</h4>
    <p>50</p>
  </div>
  <div>
    <h4>{{ products[2] }}</h4>
    <p>50</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // data는 obj형식
      스타일: "color: blue",
      신고수 : 0, 
      menus: ['Home', 'Shop', 'About'],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
    };
  },
  methods : {
    increase(){
      this.신고수 += 1; // 데이터 사용할 때 this.데이터명
    }
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
