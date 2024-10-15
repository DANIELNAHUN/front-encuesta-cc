import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import( '../views/EncuestaView.vue'),
    meta:{
      needsOficina: true
    }
  },
  {
    path: '/config',
    name: 'config',
    component: () => import( '../views/ConfigView.vue')
  }
]

const idConfigurated = () =>{
  const oficina = localStorage.getItem('id_oficina')
  const cajera = localStorage.getItem('id_cajera')
  if(oficina && cajera) return true
  return false
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.needsOficina)){
    if(idConfigurated()){
      next()
    }else{
      next({name: 'config'})
    }
  }else{
    next()
  }
})
export default router
