<!--  -->
<template>
  <div class="toast"  v-show="isShow">
    <div >{{message}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message:"",
      isShow:false
    };
  },

  components: {},

  computed: {},


  methods: {
    show(message,delay=2000){
      this.isShow=true;
      this.message=message
      setTimeout(()=>{
        this.message='';
        this.isShow=false;
      },delay)
    }
  }
}

</script>
<style  scoped>
.toast{
  position:fixed;
  z-index: 999;
  top: 50%;
  left:50%;
  transform: translate(-50%,-50%);
  padding:8px 10px;
  color:#fff;
  background-color: rgba(0,0,0,0.7);
}
</style>