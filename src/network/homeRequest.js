import {request} from 'network/intences'
export function homeRequest1(){
  return request({
    url:'home/multidata',
    /* params:{
    type:"sell",
    page:4
    } */
  })
}