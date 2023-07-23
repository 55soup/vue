<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">blog</a>
      <div class="nav-item">
        <!-- view-router link 이동 -->
        <router-link to="/">홈페이지</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/list">리스트페이지</router-link>
      </div>
    </div>
  </nav>
  
  <!-- router에 props 넘기기 -->
  <router-view :contents="contents"></router-view>
  <!-- <List v-for="(content, i) in contents" :key="i" :content="content"/> -->
</template>

<script>
import blog from "./assets/blog"

export default {
  name: 'App',
  data(){
    return {
      contents: blog,
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
