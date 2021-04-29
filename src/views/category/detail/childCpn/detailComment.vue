<!--  -->
<template>
  <div class="comment">
  <div class="border1"></div>
    <div class="top">
      <span class="left">用户评价</span>
      <span class="right"><a href="">更多</a></span>
    </div>
    <div class="border"></div>
    <div class="middle">
      <div class="user">
        <img :src="user.avatar">
        <span>{{user.uname}}</span>
      </div>
      <div class="content">{{comments.content}}</div>
      <div class="style">
        <span>{{time}}</span>
        <span>{{comments.style}}</span>
      </div>
      <div class="goods">
      <span  v-for="(item,index) in comments.images" :key="index" v-show="'images' in comments ">
        <img :src="item">
      </span>
      </div> 
      </div>
    </div>

</template>

<script>
import dayjs from 'dayjs'

export default {
  data () {
    return {
    };
  },
  props:{
    comments:{
      type:Object,
      default(){
        return {}
      }
    },
    user:{
      type:Object,
      default(){
        return {}
      }
    }
  },

  components: {},

  computed: {
    time(){
      return dayjs((this.comments.created)*1000).format('YYYY-MM-DD');
    },
  },


  methods: {}
}

</script>
<style  scoped>
.border1{
  border-bottom:3px rgb(223, 224, 224) solid;
  margin-bottom:0;
}
.comment{
    padding: 5px 15px;
    font-size:18px;
}
.border{
  border-bottom:1px rgb(223, 224, 224) solid;
  margin-top: 40px;
}
.middle{
  margin: 20px 0;
}
/* .user{
  display: flex;
  float: left;
} */
.user img{
  width:40px;
  height:40px;
  border-radius: 15px;
}
.user span{
  font-size:20px;
  /* margin-bottom:8px; */
  padding-left:15px;
  position:relative;
  bottom:15px;
}
.content{
  line-height: 25px;
  padding-top:10px;
}
.style span{
  padding-right:10px;
}
/* .goods{
   margin-bottom:150px;
} */
.goods img{
  width:100px;
  height:100px;
  margin:10px 5px 30px 0;
  /* float:left; */
}
</style>