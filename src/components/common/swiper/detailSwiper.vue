<!--  -->
<template>
 
    <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for='(item,index) in topImages' :key=index>   
          <img :src=item >
      </swiper-slide>
       <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
  </swiper>

</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-default',
    title: 'Default',
    components: {
      Swiper,
      SwiperSlide
    },
    props:{
      topImages:{
         type:Array,
         default(){
           return []
         }
      }
     
    },
     data(){
            return {
                swiperOption:{
                    //显示分页
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: true,
                    pagination: {
                      el: '.swiper-pagination',
                      clickable: true
                    },
                    
                    // 自动轮播
                    autoplay: {
                      delay: 3000,
                      //当用户滑动图片后继续自动轮播
                      disableOnInteraction: false,
                    },
                   
                    
                } ,
             
            }  
        },
    methods:{}
  }
</script>
<style  scoped>
/* img{
  width:100%;
  height:300px;
} */
</style>