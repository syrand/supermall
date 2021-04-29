<!--  -->
<template>
  <div class="carList">
    <div v-for="(item,index) in getCar" :key="index">
      <car-list-item :carItem='item'></car-list-item>
    </div>
    
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CarListItem from './carListItem.vue';
export default {
  data () {
    return {
    };
  },

  components: {CarListItem},

  computed: {
    ...mapGetters(['getCar'])
  },


  methods: {}
}

</script>
<style  scoped>
</style>