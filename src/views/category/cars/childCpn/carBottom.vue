<!--  -->
<template>
  <div class="bottom">
    <div class="check" >
      <check-button class="checkButton" :isCheck='selectAll' @selectCheck="selectCheck"></check-button>
      <span>全选</span>
    </div>
    <div class="total">
      <span>合计</span>
      <span>￥{{totalPrice}}</span>
    </div>
    <div class="button">
      去计算（{{total}}）
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton.vue';
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
    };
  },

  components: {CheckButton},

  computed:{
    ...mapGetters(['getCar']),
    totalPrice(){
      return this.getCar.filter(item=>item.isCheck==true).reduce((price,item)=>price+item.price*item.num.toFixed(2) ,0);
    },
    total(){
      return this.getCar.filter(item=>item.isCheck==true).length;
    },
    selectAll(){
      if(this.getCar.length==0) return false;
      // return !(this.getCar.filter(item=>!item.isCheck).length)
      return !(this.getCar.find(item=>!item.isCheck))
    }
  },


  methods: {
    selectCheck(){
      if(!this.selectAll){
        for(let item of this.getCar){
          if(!item.isCheck){
            item.isCheck=true;
          }
          }
      }
      else{
        for(let item of this.getCar){
          if(item.isCheck){
            item.isCheck=false;
          }
        }
      }
  }
  }
}

</script>
<style  scoped>
.bottom{
  height:32px;
  display: flex;
  padding:0 0 5px 5px;
  font-size:14px;
}
.checkButton{
  width:20px;
  height:20px;
  margin-left:5px;
  flex: 30%;
}

.bottom div{
  flex:1;
}
.check{
  display: flex;
  padding-top: 5px;
}
.check span{
  padding-left: 8px ;
  padding-top:3px;
  flex: 70%;
}
.total{
  padding-top:8px;
 
}
.button{
  background-color: #ff8198;
  color:#fff;
  justify-content: end;
  height:32px;
  text-align: center;
  padding-top:8px;
  /* font-size: 16px; */
}
.all{
  background-color: #ff8198;
}
</style>