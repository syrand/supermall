<template>
  <div id="app">
    <keep-alive>
       <router-view/>
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
