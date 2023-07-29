<template>
    <div>
        <button @click="step=0">글</button>
        <button @click="step=1">필터</button>
        <button @click="step=2">글쓰기</button>
        <!-- v-if v-for 같이 사용x -->
        <div v-if="step==0">
            <Post :post="post" v-for="(post, i) in post" :key="i"/>
        </div>
        
        <!-- 저번시간에 만든거 -->
        <Post :게시물="게시물[i]" v-for="(a, i) in 게시물" :key="i" />

        <!-- 필터선택페이지 -->
        <div v-if="step == 1" >
            <div class="upload-image" :style="`background-image : url(${imgUrl})`">
                <!-- <img :src="imgUrl" alt="" style="width: 100%; height: 100%; object-fit: contain;"> -->
            </div>
            <div class="filters">
                <FilterBox v-for="(filter, i) in filters" :key="i" :filter="filter" :imgUrl="imgUrl"></FilterBox>
            </div>
        </div>

        <!-- 글작성페이지 -->
        <div v-if="step == 2">
            <div class="upload-image" :style="`background-image : url(${imgUrl})`"></div>
            <div class="write">
                <textarea class="write-box" @input="$emit('write', $event.target.value);">write!</textarea>
            </div>
        </div>
    </div>
</template>

<script>
import Post from "./Post.vue"
import FilterBox from './FilterBox.vue';

export default {
    data() {
        return {
            filters : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
            "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
            "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"]
        }
    },
    components : {
        Post,
        FilterBox
    },
    props : {
        post : Array,
        step : Number,
        imgUrl : Blob,
    },
    methods : {
        changeContent: {

        }
    }
}
</script>

<style>
.upload-image{
    width: 100%;
    height: 450px;
    background: cornflowerblue;
    background-size : cover;
}
.filters{
    overflow-x:scroll;
    white-space: nowrap;
}
.filter-1 {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color : white;
    background-size: cover;
}
.filters::-webkit-scrollbar {
    height: 5px;
}
.filters::-webkit-scrollbar-track {
    background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
    background: #555; 
}
.write-box {
    border: none;
    width: 90%;
    height: 100px;
    padding: 15px;
    margin: auto;
    display: block;
    outline: none;
}
</style>