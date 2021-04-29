<!--  -->
<template>
  <div class="bottomBar">
      <div class="service">
      <div ></div>
      <div>客服</div>
    </div>
    <div class="store">
      <div></div>
      <div>店铺</div>
    
    </div>
    <div class="rfav" @click="rfavClick" :class="{click:isClick}"> 
       <div ></div>
       <div>收藏</div>
    </div>
    <div class="sCar" @click="carClick">加入购物车</div>
    <div class="buy">购买</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isClick:false
    };
  },

  components: {},

  computed: {},


  methods: {
    rfavClick(){
      this.isClick=!(this.isClick)
    },
    carClick(){
      alert("商品已加入购物车")
      this.$emit("addCar")
    }
  }
}

</script>
<style  scoped>
.bottomBar{
  height:49px;
  position:fixed;
  left:0;
  right:0;
  bottom:0;
  background-color:#fff;
  display: flex;
  text-align: center;
  padding:  3px;
  /* margin: 0 8px; */
}
.bottomBar div{
  flex:1;
  display:flex;
  flex-direction: column;
  align-items: center;
}
.service div:first-child{
  width:21px;
  height:21px;
  background: url("~assets/img/detail/detail_bottom.png") no-repeat 0 -54px;
  background-size:22px 150px ;
}

.rfav div:first-child{
  width:21px;
  height:18px;
  background: url("~assets/img/detail/detail_bottom.png") no-repeat 0 -1px;
  background-size:22px 150px ;
}
.click div:first-child{
  width:21px;
  height:21px;
  background: url("~assets/img/detail/detail_bottom.png") no-repeat 0 -27px;
  background-size:22px 150px ;
}

.store div:first-child{
  width:21px;
  height:20px;
  background: url("~assets/img/detail/detail_bottom.png") no-repeat 0 -100px;
  background-size: 22px 150px;
}
.sCar{
  line-height: 46px;
  background-color: #ffd900;
}
.buy{
  line-height: 46px;
  background-color: #ff8198;
  color: #fff;
}
</style>