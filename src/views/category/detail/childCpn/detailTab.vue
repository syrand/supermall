<!--  -->
<template>
  <div>
    <nav-bar >
      <div slot="left" class="back" @click="backClick">
          <img src="~assets/img/common/back.svg">
      </div>
      <div slot="middle" class="title">
        <div v-for="(item,index) in titles"  :key="index" class="item " @click='itemClick(index)' 
           :class="{isChoice:index==currentIndex}" >{{item}} 
        <!-- <div class="underLine" v-show="index==currentIndex"></div> -->
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar';
export default {
  data () {
    return {
        titles:['商品','参数','评论','推荐'],
        currentIndex:0,
    };
  },

  components: {NavBar},

  computed: {},

  methods: {
    itemClick(index){
      this.currentIndex=index;
      this.$emit('contrClick',index);
    },
    backClick(){
      this.$router.go(-1)
    }
  }
}

</script>
<style  scoped>
.title{
  display: flex;
  font-size: 13px;
}
.item{
  flex:1;
}
.isChoice{
  color:#ff8198;
  
  
}
/* .underLine{
  border: 1px solid #ff5777;
  margin-left:56px;
  width:40px;
} */
.back img{
  margin-top: 13px;
}
</style>