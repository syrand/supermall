export const mutations = {
/* mutations中一个函数最好只做一件事，所以抽取到actions中 */
 /*  addCarList(state,product){
 let oldProduct=state.carList.find(item =>{
    return item.iid===product.iid;
 } );
   if(oldProduct){
    oldProduct.num+=1;
   }
    else{
      product.num=1;
      state.carList.push(product);
    }
  } */
  updateCar(state,product){
    product.isCheck=true;
    state.carList.push(product);
  }
}