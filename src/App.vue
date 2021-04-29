<template>
  <div id="app"> <!-- Detail里每次点击不同图片保证拿到的数据不一样 -->
       <keep-alive exclude="Detail">
         <router-view></router-view>
       </keep-alive>
    
    <main-bar/>
  </div>
</template>

<script>
import MainBar from 'components/content/MainBar'
export default {
  name: 'App',
  components: {
    MainBar
  }
}

</script>
 
<style>
  @import 'assets/css/base.css';
</style>
