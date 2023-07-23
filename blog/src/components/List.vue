<template>
  <div v-for="(content, i) in contents" :key="i">
    <h5>{{content.title}}</h5>
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