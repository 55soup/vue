<template>
    <div>
        <Post :post="post" v-for="(post, i) in post" :key="i"/>
    </div>
</template>

<script>
import Post from "./Post.vue"

export default {
    components : {
        Post : Post,
    },
    props : {
        post : Array,
    }
}
</script>

<style>

</style>