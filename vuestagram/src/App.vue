<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
  </div>
  <Container :post="post"/>
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
      post : post,
    }
  },
  components: {
    Container : Container,
  },
  methods : {
    more(){
      axios.get("https://codingapple1.github.io/vue/more1.json")
      .then((result) => {
        console.log(result)
        this.post.push(result.data);
      })
    }
  }
}
</script>

<style>
@import 'style.css';
</style>
