<template>
  <div class="black-bg" v-if="isModalOn">
    <div class="white-bg">
      <!-- <img :src="oneroom[pressId].image" style="width: 100%;"> -->
      <h4>{{ onerooms[pressId].title }}</h4>
      <p>상{{ onerooms[pressId].content }}</p>
      <!-- @input: input값이 바뀌었을떄, @change: 내용 입력 후 바깥 클릭시 동작 -->
      <!-- <input @input="month = $event.target.value"/> -->
      <input v-model.number="month" />
      <p> {{ month }}개월 선택함 : {{ onerooms[pressId].price * month }}원</p>
    <button @click="close">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
    name : 'Modal',
    data(){
      return{
        month : 1,
      }
    },
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