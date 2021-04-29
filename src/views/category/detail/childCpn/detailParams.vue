<!--  -->
<template>
  <div class="product">
    <div class="border"></div>
    <div class="top">
      <table cellspacing='0' cellpadding="0">
        <tr v-for="(item,index) in params.table" :key="index">
          <td v-for="(itemD,indexD) in item" :key="indexD">{{itemD}}</td>
        </tr>
      </table>
    </div>
    <div class="border1"></div>
    <div class="bottom">
      <table cellspacing='0'>
        <tr v-for="(item,index) in params.set" :key="index">
          <td>{{item.key}}</td>
          <td class="value">{{item.value}}</td>
        </tr>
      </table>
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
    params:{
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
.product{
  padding:18px 5px;
  font-size:18px;
  /* text-align: center; */
  
}
.border{
  border-bottom:3px rgb(223, 224, 224) solid;
  margin: 30px 0 50px 0;
}
  td{
  border-bottom: 1px rgb(223, 224, 224) solid;
  padding:12px;
  height:60px;
   /*width:100px; */
}


.bottom td{
  border-bottom: 1px  rgb(236, 240, 240) solid;
}
.bottom td:first-child{

  width:100px;

}
.value{
  color:deeppink;
}
.border1{
  border-bottom:3px rgb(223, 224, 224) solid;
  margin-bottom:0;
}

</style>