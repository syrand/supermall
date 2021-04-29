<!--  -->
<template>
  <div class="detailInfo" >
    <div class="desc">{{detailInfo.desc}} </div>
    <div class="image" v-for=" (image,num) in detailInfo.detailImage" :key="num">
      <div v-for=" (item,index) in image.list" :key="index">
      <img :src="item" @load="loadFinish">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      image:0
    };
  },
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components: {},

  computed: {},


  methods: {
    /* 图片完成全部加载 */
    loadFinish(){
      this.image+=1;
      if(this.image==this.detailInfo.detailImage[0].list.length){  
        this.$emit('imageFinish');    
    }
    }
  }
}

</script>
<style  scoped>
.desc{
  padding:10px;
}
img{
  width:100%;
}

</style>