<!--  -->
<template>
  <div class="goodList" > 
    <div v-for="(item,index) in goodList" :key="index" >
    <good-list-item class="listItem" :goodListItem="item"/>

  </div>
  </div>
</template>

<script>
import GoodListItem from 'components/content/goods/goodListItem'
export default {

  data () {
    return {
    };
  },
  props:{
    goodList:{
      type:Array,
      default(){
      return []
      }
    }
  },

  components: {
    GoodListItem
  },

  computed: {},


  methods: {}
}

</script>
<style  scoped>
.goodList{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>