<!--  -->
<template>
  <div class="message" v-if="Object.keys(goods).length!==0"> <!--  -->
    <div class="title">{{goods.title}}</div>
    <div class="price">
      <span class="lowPrice" :style="{color:goods.discountBgColor}">￥{{goods.lowPrice}}</span>
      <span class="highPrice" v-show="goods.discountDesc">￥{{goods.highPrice}}</span>
      <span :style="{backgroundColor:goods.discountBgColor}" class='desc' v-show="goods.discountDesc">{{goods.discountDesc}}</span>
    </div>
    <div class="itemMes">
       <div>{{goods.sell}}</div>
       <div>{{goods.rfav}}</div>
       <div>{{goods.backFare.name}}</div>
    </div>
    <div class="border"></div>

    <div class="package" >
      <div class="back" v-for="index in services2.length" :key="index" >
         <img :src="services2[index-1]['icon']" v-if="index!==1"> 
          <img :src="services2[index-1]['icon']" v-else  class="show"> 
          <span v-if="index!==1">{{services2[index-1]['name']}}</span>
         <span v-else class="show">{{services2[index-1]['name']}}</span>
      </div>
    </div>
    <div class="border2"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      services1:{},

    };
  },
  props:{
    goods:{
      type:Object,
      default(){
        return []
      }
    }
  },

  components: {
    
  },

  computed: {
    services2(){ 
     this.services1=this.goods.services;
     return this.services1;
    },
  },


  methods: {
  }
}

</script>
<style  scoped>
.message{
    padding:13px 6px;
}
.title{
  padding-bottom: 13px;
  font-size:15px;
}
.lowPrice{
  font-size:20px;
  margin-right:5px;
}
.highPrice{
  font-size:12px;
  text-decoration: line-through;
}
.desc{
  position:relative;
  bottom:5px;
  color:white;
  border-radius: 6px;
  padding: 4px;
  margin:5px;
  font-size:12px;
}
.itemMes,.package{
  display:flex;
  justify-content: space-between;
  padding-top: 20px;
  font-size:13px;
  color:gray;
  width:100%;
  margin-bottom: 8px;
}
.border{
  border: 1px rgb(240, 245, 245) solid;
}
.package
{
  color:black;
  margin-bottom: 20px;

}
.package img{
  width:11px;
  height:11px;

}
.show{
  display: none;
}

.border2{
  border: 2px rgb(236, 240, 240) solid;
}
</style>