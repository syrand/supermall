<!--  -->
<template>
 
    <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for='(item,index) in banners' :key=index>
      <a :href=item.link>
          <img :src=item.image @load="swiperImageLoad">
        </a> 
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
      banners:{
         type:Array,
         defalut(){
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
                 isLoad:true
            }  
        },
    methods:{
      swiperImageLoad(){
        if(this.isLoad){
          this.$emit('imageLoad')
          this.isLoad=false
        }
         
      },
    }
  }
</script>
<style  scoped>
img{
  /* padding-top: 44px; */
  width:100%;
}
</style>