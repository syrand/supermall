<!--  -->
<template>
  <div class="tabControl">
    <div class="tabControlItem" v-for="(item,index) in contents" :key="index">
      <span :class="{active:(index==current)}" @click="itemClick(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active:false,
      current:0
    };
  },
  props:{
    contents:{
      type:Array,
      default(){
        return []
      }
    }
  },

  components: {},

  computed: {},


  methods: {
    itemClick(index){
      this.current=index;
      this.$emit('chooesItem',index);
    },
    
  }
}

</script>
<style  scoped>
.tabControl{
  display: flex;
  text-align: center;
  font-size: 15px;
  line-height:40px;
  position: sticky;
  top:44px;
  background-color: #fff;
  width:100%;
  z-index: 3;
}
.tabControlItem{
  flex:1;
}
.active{
  color:#ff8198;
  padding: 5px;
  border-bottom: 2px solid #ff5777;
}
</style>