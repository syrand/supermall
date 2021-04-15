<!--  -->
<template>
  <div>
    <tagbar>
      <tag-bar-item path="/home" color="deepPink">
          <img slot="item-icon" src="~assets/img/tabbar/home.svg">
          <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg">
          <div slot="item-title" >首页</div>
     </tag-bar-item>

      <tag-bar-item path="/catalog" color="deepPink">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg">
        <div slot="item-title" >分类</div>
      </tag-bar-item>
      

      <tag-bar-item path="/cars" color="deepPink">
      <!-- 在不是import导入的路径，如src中使用配置的路径别名时，前面要加上~ -->
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg">
        <div slot="item-title" >购物车</div>
      </tag-bar-item>
     
   
      <tag-bar-item path="/profile" color="deepPink">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg">
        <div slot="item-title" >我的</div>
      </tag-bar-item>
    </tagbar>
  </div>
</template>

<script>
import tagbar from 'components/common/tabBar/TagBar'
import TagBarItem from 'components/common/tabBar/TagBarItem'
export default {
  data () {
    return {
    };
  },

  components: {
    tagbar,
    TagBarItem
  },

  computed: {},


  methods: {}
}

</script>
<style  scoped>
</style>