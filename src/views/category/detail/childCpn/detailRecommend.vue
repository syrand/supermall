<!--  -->
<template>
  <div class="top">
    <div class="border"></div>
  <div class="item">
    <div v-for="(item,index) in recommend" :key="index" class="recommend">
      <img :src=item.image @load="imgLoad">
      <div class="itemMessage"> 
        <p class="title">{{item.title}}</p>
        <span class="price">{{item.price}}</span>
        <span class="favious">{{item.cfav}}</span>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      img:1,
    };
  },
  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    },
  },
  components: {},

  computed: {},


  methods: {
   imgLoad(){
     if(++this.img==this.recommend.length){
       this.$emit("finishLoad1")
     }

    },
   
  }
}

</script>
<style  scoped>
.item{
 justify-content: space-around;
 display: flex;
 flex-wrap: wrap;
}
/* .item{
position:absolute;
width:40%;
}  */

.recommend{
position:relative;
width:50%;

padding: 10px 5px 40px 5px;
}
img{
width:100%;
border-radius:5px;
}
.itemMessage{
  width:100%;
  position: absolute;
  text-align: center;
  font-size: 12px;
  bottom: 5px;
  left:0;
  right:0;
  overflow: hidden;

  
}
.title{
  overflow: hidden;
  
  white-space:nowrap;
  text-overflow:ellipsis;
  margin-bottom: 3px;
}
.price{
  color: #ff8198;
  margin-right: 20px;
}
.favious{
  position: relative;
}
.favious::before{
  content:'';
  position: absolute;
  left:-15px;
  top:-1px;
  width:14px;
  height:14px;
  background: url('~assets/img/common/collect.svg') 0 0 /14px 14px;
}
.border{
  border:3px rgb(223, 224, 224) solid;
}
</style>