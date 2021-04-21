<!--  -->
<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      scroll:null
    };
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    isPullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.scroll,{
        probeType:this.probeType,
        click:true,
        pullUpLoad:this.isPullUpLoad
    });
    if(this.probeType===2|| this.probeType===3){
      this.scroll.on('scroll',position=>{
      this.$emit('getPosition',position)
    });
    }
    
    if(this.isPullUpLoad){
      this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp');
    });
    }
    

  },

  components: {},

  computed: {},


  methods: {
    /* 设置返回的位置 */
    setScroll(x,y,time=300){
     this.scroll && this.scroll.scrollTo(x,y,time)
    },
    /* 上拉加载完成 */
    finishUpLoad(){
      this.scroll && this.scroll.finishPullUp();
    },
    /* 完成图片加载 */
    finshRefresh(){
      this.scroll && this.scroll.refresh();
    },
    /* 得到离开页面时y的值 */
    getY(){
      return this.scroll ? this.scroll.Y: 0;
    }
  }
}

</script>
<style  scoped>
</style>