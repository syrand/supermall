import Vue from 'vue'
import Router from 'vue-router'

const Home = ()=>import("views/home/Home")
const Cars = ()=>import("views/cars/Cars")
const Catalog = ()=>import("views/catalog/Catalog")
const Profile = ()=>import("views/profile/Profile")
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
  }
 ];

Vue.use(Router)

export default new Router({
  routes,
  mode:"history",
})
