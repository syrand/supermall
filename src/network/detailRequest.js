import {request2} from './intences'

export function  requestMessage(iid){
    return   request2({
      url:'detail',
      params:{
        iid
        }
       })
    };

export class Goods{
 constructor(itemInfo,columns,services,backFare){
   this.title=itemInfo.title;
   this.lowPrice=itemInfo.lowNowPrice;
   this.highPrice=itemInfo.lowPrice;
   this.discountDesc=itemInfo.discountDesc;
   this.discountBgColor=itemInfo.discountBgColor;
   this.sell=columns[0];
   this.rfav=columns[1];
   this.backFare=backFare;
   this.services=services;
 };
}

export class Shop{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.sells = shopInfo.cSells;
    this.goods = shopInfo.cGoods;
    this.score = shopInfo.score;
    this.shopUrl = shopInfo.shopUrl;
  }
};

export class Product{
  constructor(itemInfo,itemTable){
    this.set=itemInfo["set"];
    this.table=itemTable;
  }
}

