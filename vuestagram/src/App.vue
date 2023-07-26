<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
  </div>
  <Container :post="post" :step="step"/>
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
  
</template>

<script>
import axios from 'axios';
import Container from './components/Container';
import post from './assets/post';

export default {
  name: 'App',
  data() {
    return{
      post : post, // 게시물 데이터
      clickCount : 0, //버튼 누른 횟수
      step : 0, // tab view UI
    }
  },
  components: {
    Container : Container,
  },
  methods : {
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.clickCount}.json`)
      .then((result) => {
        console.log(result)
        this.post.push(result.data);
        this.clickCount += 1;
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  }
}
</script>

<style>
@import 'style.css';
</style>
