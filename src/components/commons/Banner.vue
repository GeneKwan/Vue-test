<template>
    <div class='banner'>
        <div class="swiper-container">
            <div class="swiper-wrapper" >
                <div class="swiper-slide" v-for='(item,index) in bannerlist' :key='index'>
                    <img class="bannerImg" :src="item.imageUrl" @click="goPath('/list')" alt="">
                </div>
                
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination" slot="pagination"></div>
            
        </div>
    </div>
</template>

<script>

import Swiper from 'swiper'
import Vue from  'vue'

export default{
    name:'banner',
    components:{
        
    },
    data(){
        return {
            bannerlist: [
                {imageUrl:'static/1.jpg'},
                {imageUrl:'static/2.jpg'},
                {imageUrl:'static/3.jpg'},
                {imageUrl:'static/4.jpg'}
            ]
        }
    },
    methods:{
        getData(){
            Vue.nextTick(()=>{  // 轮播图滚动
                this.initSwiper()
             })
        },
        initSwiper(){
        // console.log(666)
           var mySwiper = new Swiper ('.swiper-container', {
                loop: true, // 循环模式选项
                autoplay: {  // 自动播放 
                    delay: 2000,
                    disableOnInteraction: false
                },
                pagination: {
                  el: '.swiper-pagination'
                },
                paginationClickable: true
              }) 
       },
       goPath(path) {
           this.$router.push(path);
       }
   },
    created(){
        this.getData()
    }
}   

</script>

<style lang="less" scoped>
@import url('../../../node_modules/swiper/css/swiper.min.css');
@import url('../../styles/main.less');
    .banner{
        .padding(10,0,0,0);
        .h(216);
        .bg(#123);
        img {
            display: block;
            .h(216);
            width: 100%;
        }
        .swiper-pagination {
            .h(20);

            
        }
        .swiper-pagination-bullet-active {
                .bg(#123);
            }
    }

</style>