<!--  -->
<template>
  <div class="home">
    <div class="nav"><nav-bar> <div slot="middle">购物街</div> </nav-bar></div>
    <tab-control :contents="['流行','新款','精选']" @chooesItem="clickItem"
            ref="tabControl1"  class="tabControl" v-show="ifStop"/>
    <scroll class="contnet" ref="scroll" 
            @getPosition="showBackImag"
            :probeType="probeType" 
            :isPullUpLoad="isPullUpLoad"
            @pullingUp="pullingUp">
      <home-swiper class='swiper' :banners="banners" @imageLoad="swiperImageLoad"/> 
      <recommend :recommends="recommends"></recommend>
      <feature-img/>
      <tab-control :contents="['流行','新款','精选']" @chooesItem="clickItem"
            ref="tabControl2" />
      <good-list :goodList="goodShow"/>  
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBack"></back-top> <!-- 给组件绑定事件，需要加上.native修饰符 -->
  </div>
  
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import HomeSwiper from 'components/common/swiper/swiper'
import Scroll from 'components/common/scroll/scroll'
import BackTop from 'components/common/backTop/backTop'


import TabControl from 'components/content/tabControl/tabControl'
import GoodList from 'components/content/goods/goodList'

 
import recommend from './childCpn/recommends'
import FeatureImg from './childCpn/featureImg'

import {homeRequest1} from 'network/homeRequest'
import {request2} from 'network/intences'
import {mixin} from 'common/mixin'


export default {
  mixins:[mixin],
  data () {
    return {
      banners:[],
      recommends:[],
      goods:{
        "pop":{"page":0,"data":[]},
        "new":{"page":0,"data":[]},
        "sell":{"page":1,"data":[]}
      },
      current:'pop',
      isShowBack:false,
      probeType:3,
      isPullUpLoad:true,
      tabOffset:0,
      ifStop:false,
      setY:0

    };
  },

  components: {
    NavBar,
    HomeSwiper,
    recommend,
    FeatureImg,
    TabControl,
    GoodList,
    Scroll,
    BackTop
    
    
    },
  created(){
      /* 请求banners和recommend数据 */
      this.requestBanner();
      /* 请求分类展示数据 */
      this.requestShow("pop");
      this.requestShow("new");
      this.requestShow("sell");
      
    
    },
  mounted(){
    /* 已写在mixin中 */
    // const refresh=debound(this.$refs.scroll.finshRefresh,50)
    //  this.$bus.$on('finishLoad',()=>{ /* 防抖操作，50ms操作一次 */
    //      refresh()
    //   });

  },
  activated(){
    /* 回到首页时回到离开时setY的位置 */
    this.$refs.scroll.setScroll(0,-this.setY,0);
    this.$refs.scroll.finshRefresh();
  },
  deactivated(){
    /* 离开首页时，记录setY的位置 */
    this.setY=this.$refs.scroll.getY();
  },
  computed: {
    goodShow(){
      return this.goods[this.current].data
    }
  },


  methods: {
    /* 选择展示商品类型 */
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
      /* 当点击不同数据显示时，保证两个tabControl所选一致 */
      this.$refs.tabControl1.current=index;
      this.$refs.tabControl2.current=index;
    },
    /* 返回顶部 */
    backClick(){
      this.$refs.scroll.setScroll(0,0,500)
    },

    /* 显示返回顶部图片 */
    showBackImag(position){
      this.isShowBack=(-position.y)>1000
      /* 判断tabControl是否吸顶 */
      this.ifStop=(-position.y)>this.tabOffset
    },

    /* 上拉加载下一页 */
    pullingUp(){
      this.requestShow(this.current);
      this.$refs.scroll.finishUpLoad();
    },

    /* 轮播图加载完成，计算offsetTop */
    swiperImageLoad(){
      this.tabOffset=this.$refs.tabControl2.$el.offsetTop
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
      })
    }

  }
}

</script>
<style  scoped>
.home{
  position:relative;
  height:100vh;
}
.nav{
 
  color: #fff;
  background: #ff8198;
  position: fixed;
  left:0;
  top:0;
  right:0;
  z-index: 2;
}
/* .tabControl{
   position:relative;
  z-index: 4; 
} */
.contnet{
  position:absolute;
  top:44px;
  bottom:49px;
  left:0;
  right:0;
}

</style>