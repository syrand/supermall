<!--  -->
<template>
  <div class="car">
    <nav-bar class="nav">
      <div slot="middle">购物车（{{getCarLength}}）</div>
    </nav-bar>
  <scroll class="contain" ref="scroll">
        <car-list class="carList"></car-list>
  </scroll>
  <div class="carBottom">
    <car-bottom></car-bottom>
  </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import NavBar from 'components/common/navBar/NavBar.vue';
import CarList from './childCpn/carList'
import Scroll from 'components/common/scroll/scroll'
import CarBottom from './childCpn/carBottom.vue';

export default {
  
  data () {
    return {
    };
  },

  components: {
    NavBar,
    CarList,
    Scroll,
    CarBottom,
    },

  computed: {
    ...mapGetters(['getCarLength',"getCar"])
  },
  activated(){
    this.$refs.scroll.finshRefresh();
  },

  methods: {}
  }


</script>
<style  scoped>
.nav{
  color: #fff;
  background: #ff8198;
  position: fixed;
  left:0;
  top:0;
  right:0;
  z-index: 2;
}
.car{
  position: relative;
  height:100vh;
}
.contain{
  position: absolute;
  left: 0;
  right:0;
  bottom:74px;
  top:44px;
  overflow: hidden;
}
.carBottom{
  position: fixed;
  bottom:49px;
  left:0px;
  right: 0px;
  background-color:rgb(235, 232, 232); 
}
</style>