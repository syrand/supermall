<!--  -->
<template>
  <div class="checkButton" :class="{check:isCheck}" @click="selectCheck">
      <img src="~assets/img/cart/tick.svg">
</div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:{
    isCheck:{
      type:Boolean,
      default:false
    }
  },

  components: {},

  computed: {},


    
  methods: {
    selectCheck(){
        this.$emit('selectCheck')
    }
    
  }
}

</script>
<style  scoped>

.checkButton{
   border-radius: 50%;
   border: 2px #aaa solid;
}
.check{
 background-color: #ff8198;
 border-color: #ff8198;
}
</style>