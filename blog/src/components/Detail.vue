<template>
    <h4>상세페이지</h4>
    <h5>{{ contents[$route.params.id].title }}</h5>
    <p>{{ contents[$route.params.id].content }}</p>
    <router-view></router-view>
</template>

<script>
export default {
    props: {
        contents : Object,
    }
}
</script>

<style>

</style>