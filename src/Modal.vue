<template>
  <div class="black-bg" v-if="isModalOn">
    <div class="white-bg">
      <!-- <img :src="oneroom[pressId].image" style="width: 100%;"> -->
      <h4>{{ onerooms[pressId].title }}</h4>
      <p>{{ onerooms[pressId].price }}원</p>
      <p>상{{ onerooms[pressId].content }}</p>
    <button @click="close">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
    name : 'Modal',
    props : {
      onerooms : Object, // 외부 데이터 받아오기
      pressId : Number,
      isModalOn : Boolean,
    },
    methods : {
      close(){
        this.$emit('closeModal')
      }
    }
}
</script>

<style>

</style>