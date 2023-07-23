<template>
  <div v-for="(content, i) in contents" :key="i" style="cursor: pointer;">
    <!--  $route: 현재 경로
          $router: 페이지 이동 관련 기능
     -->
    <h5 @click="$router.push(`/detail/${i}`)">{{content.title}}</h5>
    <p>{{content.date}}</p>
  </div>
</template>

<script>
export default {
    props : {
        contents : Object,
    }
}
</script>

<style>

</style>