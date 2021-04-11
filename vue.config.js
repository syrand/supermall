module.exports ={
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',/* 默认已经配置src为@ */
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
        'common':'@/common'
      }
    }
  }
}