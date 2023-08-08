<!-- 하위컴포넌트 전송: props
     상위컴포넌트 전송: custom event
     상관없이 전송: mitt
     모든 컴포넌트들이 데이터 공유 가능: vuex-->
<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish()">발행</li>
    </ul>
  </div>
  <h4>하이 {{  $store.state.name }} 나는 {{ $store.state.age }}살 이야.</h4>
  <!-- vuex 컴포넌트 안에서 직접 수정 금지 -->
  <!-- <button @click="$store.state.name = '박'">vuex state 바꾸기</button> -->

  <!-- vuex mutations안 함수 가져와서 데이터 수정 -->
  <button @click="$store.commit('alterName')">버튼</button>
  <button @click="$store.commit('plusAge', 10)">나이 먹는 버튼</button>

  <!-- commit: mutations 부탁 / dispatch: actions 부탁 -->
  <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기 버튼</button>
  <Container @write="write = $event" :post="post" :step="step" :imgUrl="imgUrl" :content="content" :filter="filter"/>
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
      write: '',
      content : '',
      filter : '',
    }
  },
  mounted(){
      this.emitter.on('filter', (a)=>{ // emitter.on() 으로 수신
          this.filter = a;
      })
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
    },
    publish() {
      let myPost = {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.imgUrl,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.write,
        filter: this.filter,
      };
      this.post.unshift(myPost); // 올린 게시물을 가장 앞에 보여줌. 
      this.step = 0; // 메인화면으로 돌아오기
      console.log(myPost);
    },
  },
}
</script>

<style>
@import 'style.css';
</style>
