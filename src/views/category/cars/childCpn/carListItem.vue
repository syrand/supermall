<!--  -->
<template>
  <div class="carItem">
    <div class="button"  >
      <check-button :isCheck="carItem.isCheck" @click.native="itemClick"></check-button>
    </div>
    <div class="img"><img :src="carItem.image"></div>
    <div class="desc">
      <div class="title">{{carItem.title}}</div>
      <div class="itemDesc">{{carItem.desc}}</div>
      <div class="bottom">
        <div>￥{{carItem.price}}</div>
        <div>X{{carItem.num}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton.vue';
export default {
  data () {
    return {
    };
  },
  props:{
    carItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components: {CheckButton},

  computed: {},


  methods: {
     itemClick(){
      this.carItem.isCheck=!this.carItem.isCheck;
    }
  }
}

</script>
<style  scoped>
.carItem{
  display: flex;
  padding:10px 5px 10px 0px;
  height:120px;
}
.carItem div{
  padding: 0 3px;
}
img{
  width:100%;
  height:100%;
  border-radius: 8px;
}
.click{
  flex:1;
}
.img{
  flex:10;
}
.desc{
  flex:30;
  display: flex;
  flex-direction: column;
  min-width: 0
}
.desc div{
  flex: 1;
}
.title,.itemDesc{
  white-space:nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
  
}
.title{
  font-weight:540;
}
.itemDesc{
  font-size:12px;
}

.bottom{
  display: flex;
  justify-content: space-between;
}
.bottom div:last-child{
  text-align: end;
}
.button{
  display: flex;
  align-items: center;
}
</style>