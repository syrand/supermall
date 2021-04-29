export const actions={
  addCarList(content,product){
   return new Promise((resolve,reject)=>{
      let oldProduct=content.state.carList.find(item =>{
        return item.iid===product.iid;
     } );
       if(oldProduct){
        oldProduct.num+=1;
        resolve("数量加1")
       }
        else{
          product.num=1;
          resolve("商品加1")
          content.commit('updateCar',product) /* 修改state的操作还是要放到mutations中*/
        }
    })
  }

}