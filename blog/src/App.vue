<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">blog</a>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <div class="container mt-4">
    <h5>개발자 블로그</h5>
    <p>made from vue</p>
  </div>
  <List v-for="(content, i) in contents" :key="i" :content="content"/>
</template>

<script>
import List from "./components/List"
import blog from "./assets/blog"

export default {
  name: 'App',
  data(){
    return {
      contents: blog,
    }
  },
  components: {
    List: List,
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
