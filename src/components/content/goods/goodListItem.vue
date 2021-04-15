<!--  -->
<template>
  <div class="goodListItem" >
      <img :src=goodListItem.show.img>
      <div class="itemMessage"> 
        <p class="title">{{goodListItem.title}}</p>
        <span class="price">{{goodListItem.price}}</span>
        <span class="favious">{{goodListItem.cfav}}</span>
      </div>
      
    </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:{
    goodListItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components: {},

  computed: {},


  methods: {}
}

</script>
<style  scoped>
/* .goodListItem{
 position: relative;
 justify-content: space-around;
 display: flex;
 flex-wrap: wrap;
}
.item{
position:absolute;
width:40%;
} */

.goodListItem{
position:relative;
width:50%;
padding-bottom: 40px;
}
.item img{
width:100%;
border-radius:5px;
}
.itemMessage{
  width:200%;
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
</style>