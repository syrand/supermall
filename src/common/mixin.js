import {debound} from 'common/utils'
export const mixin = {
  mounted() {
    const refresh=debound(this.$refs.scroll.finshRefresh,50)
     this.$bus.$on('finishLoad',()=>{ /* 防抖操作，50ms操作一次 */
         refresh()
      });
    },
  
}