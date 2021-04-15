<!--  -->
<template>
  <div class="home">
    <div class="nav"><nav-bar> <div slot="middle">购物街</div> </nav-bar></div>
    <home-swiper class='swiper' :banners="banners"/> 
    <recommend :recommends="recommends"></recommend>
    <feature-img/>
    <tab-control :contents="['流行','新款','精选']" @chooesItem="clickItem"/>
    <good-list :goodList="goodShow"/>

  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import HomeSwiper from 'components/common/swiper/swiper'

import TabControl from 'components/content/tabControl/tabControl'
import GoodList from 'components/content/goods/goodList'

 
import recommend from './childCpn/recommends'
import FeatureImg from './childCpn/featureImg'

import {homeRequest1} from 'network/homeRequest'
import {request2} from 'network/intences'



export default {
  data () {
    return {
      banners:[],
      recommends:[],
      goods:{
        "pop":{"page":0,"data":[]},
        "new":{"page":0,"data":[]},
        "sell":{"page":1,"data":[]}
      },
      current:'pop'
    };
  },

  components: {
    NavBar,
    HomeSwiper,
    recommend,
    FeatureImg,
    TabControl,
    GoodList
    
    },
  created(){
      /* 请求banners和recommend数据 */
      this.requestBanner();

      /* 请求分类展示数据 */
      this.requestShow("pop");
      this.requestShow("new");
      this.requestShow("sell");

    },

  computed: {
    goodShow(){
      return this.goods[this.current].data
    }
  },


  methods: {
    clickItem(index){
      switch(index){
        case 0:
          this.current='pop';
          break;
        case 1:
          this.current='new';
          break;
        case 2:
          this.current='sell';
          break;
      }

    },


    /* 网络请求 */
    requestBanner(){
      homeRequest1().then(res=>{
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      }).catch(error=>{
        console.log(error)
      })
    },
    requestShow(type){
      let page = this.goods[type].page+1
      request2({
        url:"home/data",
        params:{
          type,
          page
        }
      }).then(res=>{
        this.goods[type].data.push(...res.data.data.list)
        this.goods[type].page+=1
        console.log(this.goods[type])
      })
    }

  }
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

</style>