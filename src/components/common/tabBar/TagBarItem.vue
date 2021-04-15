<!--  -->
<template>
  <div class="item"  @click="btnClick" >
    <div v-if="!isActive" ><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="addColor"><slot name="item-title"></slot></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:{
    path:String ,/* 使用时动态传入变量 */
    color:{
      type:String,
      default:"red"
    }
  },

  components: {},

  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path)!=-1 
    },
    addColor(){
      return this.isActive ? {color:this.color} : {} /* 根据传来的颜色，决定最终的颜色 */
    }
  },


  methods: {
     btnClick(){
     this.$router.replace(this.path).catch((error)=>error)
    }
  }
}

</script>
<style  scoped>
.item{
    flex: 1;  /* flex布局，每份均等分 */
    text-align: center;
    height: 49px;
    background: #f6f6f6;
    font-size: 14px;
  }
.item img{
  height:24px;
  width:24px;
  padding-top: 3px;
}
</style>