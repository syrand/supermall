<!--  -->
<template>
  <div class="detail">
      <detail-tab class="tab" @contrClick="itemClick" ref="tab"></detail-tab>
      <scroll class="content" ref="scroll"  @getPosition="showBackImag" :probeType="2">
      <detail-swiper :topImages="itemInfo.topImages" class="swiper"></detail-swiper>
      <detail-message :goods="goods"></detail-message>
      <detail-shop :shop="shop"></detail-shop>
      <detail-image :detailInfo="detailInfo" @imageFinish="imageFinish"></detail-image>
      <detail-params :params="params" ref="param"></detail-params>
      <detail-comment :comments="comments" :user="commentUser" ref="comments"></detail-comment>
      <detail-recommend :recommend="recommend"  ref="recommend"></detail-recommend>
      <br/><br/><br/>
      </scroll>
      <back-top @click.native="backClick" v-show="isShowBack"></back-top> 
      <bottom-bar @addCar="addCar"></bottom-bar>
  </div>
</template>

<script>
import {requestMessage,Goods,Shop,Product} from 'network/detailRequest';
import {requestRecommend} from 'network/recommendRequest';
import DetailSwiper from 'components/common/swiper/detailSwiper';
import Scroll from 'components/common/scroll/scroll';
import BackTop from 'components/common/backTop/backTop.vue';
import {debound} from 'common/utils'
import {mixin} from 'common/mixin'

import DetailTab from './childCpn/detailTab.vue';
import DetailMessage from './childCpn/detailMessage';
import DetailShop from './childCpn/detailShop';
import DetailImage from './childCpn/detailImage';
import DetailParams from './childCpn/detailParams.vue';
import DetailComment from './childCpn/detailComment.vue';
import DetailRecommend from './childCpn/detailRecommend.vue';
import BottomBar from './childCpn/bottomBar.vue';

import {mapActions} from 'vuex'

export default {
  name:'Detail',
  mixins:[mixin],
  data () {
    return {
      iid:null,
      itemInfo:{},
      columns:[],
      services:[],
      backFare:{},
      shopInfo:{},
      detailInfo:{},
      isShowBack:false,
      paramTable:[],
      paramInfo:{},
      comments:{},
      commentUser:{},
      recommend:[],
      topY:[],
      getY:undefined,
      currentIndex:0
    };
  },

  components: {
    DetailTab,
    DetailSwiper,
    DetailMessage,
    DetailShop,
    Scroll,
    DetailImage,
    BackTop,
    DetailParams,
    DetailComment,
    DetailRecommend,
    BottomBar,



  },

 computed: {
    goods(){
      return new Goods(this.itemInfo,this.columns,this.services,this.backFare);
    },
    shop(){
      return new Shop(this.shopInfo);
    },
    params(){
      return new Product(this.paramInfo,this.paramTable)
    }
  },

  created(){
   this.iid=this.$route.params.iid;
   this.request();
   this.recommendRes();
   this.getY=debound(()=>{
        this.$nextTick(()=>{
        this.topY=[];
        this.topY.push(0);
        this.topY.push(this.$refs.param.$el.offsetTop);
        this.topY.push(this.$refs.comments.$el.offsetTop);
        this.topY.push(this.$refs.recommend.$el.offsetTop);
        this.topY.push(Number.MAX_VALUE) /* 加入这个最大数是为了在实现联动时判断条件少写 */
            }) 
        },50);
  },

  methods: {
    ...mapActions(['addCarList']),
    /* 网络请求数据详情页信息 */
    request(){
      requestMessage(this.iid).then(res=>{
        const data=res.data.result;
        this.itemInfo=data.itemInfo;
        this.columns=data.columns;
        this.backFare=data.shopInfo.services[0];
        this.services=data.shopInfo.services;
        this.shopInfo=data.shopInfo;
        this.detailInfo=data.detailInfo;
        this.paramInfo=data.itemParams.info;
        this.paramTable=data.itemParams.rule.tables[0];
        this.comments=data.rate.list[0];
        this.commentUser=this.comments.user;
        // console.log(data)
         });

    },

    /* 请求推荐商品数据 */
    recommendRes(){
      requestRecommend().then(res=>{
        this.recommend = res.data.data.list;
      })
    },
  
    /* 详情界面全部图片加载完毕 */
    imageFinish(){
      this.$refs.scroll.finshRefresh();
      /* 全部图片加载完以后，计算offsetTop可以计算出正确的多个组件的topY值，来跳转到不同位置,利用防抖函数，提高性能 */
     this.getY();
        
    },

    /* 返回顶部 */
    backClick(){
      this.$refs.scroll.setScroll(0,0,500)
    },
    
    showBackImag(position){
      /* 显示返回顶部图片 */
      this.isShowBack=(-position.y)>1000
      /* 获得滚动位置的Y */
      let Y=-(position.y);
      for(let i=0;i<this.topY.length-1;i++){
        if((this.currentIndex!=i) && ((Y>=this.topY[i]) && (Y<this.topY[i+1]))){
          this.currentIndex = i;
          this.$refs.tab.currentIndex=this.currentIndex;
        }
      }   
    },

    /*点击顶部主题到达某一页 */
    itemClick(index){
      this.$refs.scroll.setScroll(0,-(this.topY[index]),500)
    },

    /* 将商品加入购物车 */
    addCar(){
      const product = {};
      product.iid=this.iid;
      product.desc=this.itemInfo.desc;
      product.title=this.itemInfo.title;
      product.price=this.itemInfo.lowNowPrice;
      product.image=this.itemInfo.topImages[0];
      product.num=0;
      /* dispatch返回一个promise对象，可以通过res得到vuex内部操作的消息 */
      // this.$store.dispatch('addCarList',product).then(res=>{
      //   console.log(res)
      // });
      this.addCarList(product).then(res=>{
        this.$toast.show(res);
      })
    }
  },

  }


</script>
<style  scoped>
.swiper{
  height:300px;
}
.detail{
  position:relative;
  z-index:9;
  background-color:white;
  height:100vh;
}
.content{ /* 两种方式设置高度，通过计算和通过定位 */

  height:100%;
}
.tab{
  position: relative;
  z-index:9;
  background-color:white;
}
</style>