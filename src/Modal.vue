<template>
  <div class="black-bg" v-if="isModalOn">
    <div class="white-bg">
      <!-- <img :src="oneroom[pressId].image" style="width: 100%;"> -->
      <h4>{{ onerooms[pressId].title }}</h4>
      <p>상{{ onerooms[pressId].content }}</p>
      <!-- @input: input값이 바뀌었을떄, @change: 내용 입력 후 바깥 클릭시 동작 -->
      <!-- <input @input="month = $event.target.value"/> -->
      <input v-model.number="month" />
      <!-- <input v-model.number="month" type="range" min="1" max="12"/> -->
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
    watch : {
      // a: 변경 후 데이터, b: 변경 전 데이터
      month(a, b){
        // month 데이터가 변할 때마다 코드가 실행됨.
        // 사용자가 month에 입력한 데이터가 13보다 크면 경고문
        if(a >= 13){
          alert('13 이상 입력이 불가능합니다.')
        }
        if(isNaN(a)){
          // 문자 입력시 경고
          alert('문자 입력이 불가능합니다');
          this.month = 1;
        }
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