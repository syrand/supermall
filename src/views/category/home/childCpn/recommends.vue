<!--  -->
<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :link=item.link>
        <img :src=item.image>
        <div>{{item.title}}</div>
      </a>
      </div>
   </div>
</template>

<script>
export default {
  props:{
    recommends:{
      type:Array,
      defalut(){
        return []
      }
    }
  },
  data () {
    return {
    };
  },

  components: {},

  computed: {},


  methods: {}
}

</script>
<style  scoped>
.recommend{
  display: flex;
  width:100%;
  text-align: center;
  font-size:12px;
  padding: 8px 0 25px;
  border-bottom: 8px rgb(235, 229, 229) solid;

}
.recommend-item{
  flex:1;
}
.recommend-item img{
  width:70px;
  height:70px;
  margin-bottom: 8px;
}
</style>