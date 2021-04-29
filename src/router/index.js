import Vue from 'vue'
import Router from 'vue-router'

const Home = ()=>import("views/category/home/Home")
const Cars = ()=>import("views/category/cars/Cars")
const Catalog = ()=>import("views/category/catalog/Catalog")
const Profile = ()=>import("views/category/profile/Profile")
const Detail = ()=>import('views/category/detail/detail')
const routes=[
  {
    path:"",
    redirect:"/home"
  },
  {
   path:"/home",
   component: Home
 },
 {
  path:"/cars",
  component:Cars
  },
  {
    path:"/catalog",
    component:Catalog
  },
  {
    path:"/profile",
    component:Profile
  },
  {
    path:"/detail/:iid",
    component:Detail
  }
 ];

Vue.use(Router)

export default new Router({
  routes,
  mode:"history",
})
