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

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from "./components/Container";
import post from "./assets/post";

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
}
</script>

<style>
@import 'style.css';
</style>
