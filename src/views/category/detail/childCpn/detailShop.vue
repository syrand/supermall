<!--  -->
<template>
  <div class="shop">
    <div class="store">
      <img :src="shop.logo">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class='dic'>
      <div class="sells">
        <ul>
          <li>{{shop.sells | getSells}}</li>
          <li>总销量</li>
        </ul>
      </div>
      <div class="goods">
        <ul>
          <li>{{shop.goods}}</li>
          <li>全部宝贝</li>
        </ul>
      </div>
      <div class='border'></div>
      <div class="evaluate">
        <ul v-for="(item,index) in shop.score" :key="index" >
          <li>
            <span>{{item.name}}</span>
            <span :class="{red:item.isBetter}" class="score">{{item.score}}</span>
            <span v-if="item.isBetter" class="high level" >高</span>
            <span v-else class="low level">低</span>
          </li>
        </ul>
      </div>
    </div>

      <div class="inStore">
        <a :href="shop.shopUrl">进店逛逛</a>
    </div>
    <div class="border"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:{
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    getSells(sells){
      if(sells<10000)return sells;
      else return (sells/10000).toFixed(1)+" 万"
    }
  },

  components: {},

  computed: {},


  methods: {}
}

</script>
<style  scoped>
.shop{
  padding:18px 5px;
  font-size:14px;
}
.store img{
  height:60px;
  width:60px;
  border-radius: 30px;
}
.title{
  position: relative;
  font-size:18px;
  bottom:20px;
  left:10px;
}
.border{
  border: 1px rgb(241, 238, 238) solid;
  height:50px;
  margin-top:23px;
}
.score{
  color: greenyellow;
  padding: 0 5px;
  margin: 0 15px;
}
.red{
  color:rgba(219, 4, 4, 0.767)
}
.high{
  background-color: rgba(219, 4, 4, 0.767);
  margin-bottom: 5px;
}
.low{
  background-color: greenyellow;
}
.dic{
  display: flex;
  justify-content:space-between;
  padding:10px;
}
.sells,.goods,.border{
  text-align: left;
  line-height: 30px;
}
li{
  list-style-type: none;
}
.evaluate{
  position:relative;
  padding:0px 10px;
}
.evaluate li{
  margin: 12px 0;
}
.level{
   position:absolute;
   color:white;
   right:0px;
   padding:0;
   margin: 0;
  
}
.sells,.goods{
  margin-top:18px;
}
.sells{
  margin-left:10px;
}
.sells li:first-child,.goods li:first-child{
  font-size:20px;
  font-weight: bolder;
  text-align: center;
}

.inStore{
  margin: 0 auto;
  width:160px;
  line-height:35px;
  text-align: center;
  border-radius: 15px;
  background-color:rgb(236, 240, 240) 
}
.border{
  height:0;
  margin-top:30px;
  border: 1px rgb(236, 240, 240) solid;
}
</style>