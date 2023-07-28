<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2"  @click="publist">발행</li>
    </ul>
  </div>
  <Container :post="post" :step="step" :imgUrl="imgUrl"/>
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" accept="image/*"/>
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
      imgUrl : '',
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
    },
    upload(e){
      // console.log(e.target.files[0])
      let file = e.target.files;
      // * FileReader() 이미지 글자 변환 (글자로 변환 후 DB에 저장)
      this.imgUrl = URL.createObjectURL(file[0]); //이미지 URL를 임시생성
      console.log(this.imgUrl);
      this.step++; // 업로드 후 다음 페이지로
    }
    
  }
}
</script>

<style>
@import 'style.css';
</style>
