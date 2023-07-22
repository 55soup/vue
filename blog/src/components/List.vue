<template>
  <div>
    <h5>{{content.title}}</h5>
    <p>{{content.date}}</p>
  </div>
</template>

<script>
export default {
    props : {
        content : Object,
    }
}
</script>

<style>

</style>