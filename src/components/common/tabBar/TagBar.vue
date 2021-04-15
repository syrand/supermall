<!--  -->
<template>
  <div id="tagbar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  data () {
    return {
    };
  },
  components: {},

  computed: {},
  methods: {
   
  }
}

</script>
<style  scoped>
 #tagbar{
    display: flex; /* 设置为flex布局 */
    position:fixed;
    left:0;
    right:0;
    bottom:0;
    box-shadow: 0,-1px,1px,rgba(100, 100, 100, 0.2);/* 设置阴影过渡，参数为：x偏移量，   y偏移量，模糊程度，颜色 */
  }
</style>