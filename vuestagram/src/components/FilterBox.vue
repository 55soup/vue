<template>
    <div :class="`${filter} filter-item`" :style="`background-image : url(${imgUrl})`">
        <!-- 태그 안에 바인딩 할 때 -->
        <!-- <slot name="a" :msg="msg"></slot> -->
        <slot></slot>
        <button @click="fire">버튼</button>
    </div> 
</template>

<script>
export default {
    name: "filterbox",
    data(){
        return{
            msg : 'hello',
        }
    },
    props: {
        filter : String,
        imgUrl : String,
    },
    methods : {
        fire(){ 
            this.emitter.emit('filter', this.filter); // emitter.emit 으로 데이터 송신
        }
    },
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>