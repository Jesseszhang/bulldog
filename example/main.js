import './common'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './route/route'
import appComp from './app/app'
import vue2do from 'vue2do'
import enLang from 'src/language/en.json'

Vue.use(VueRouter)


const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

const app = new Vue(Object.assign(appComp, {
  router
})).$mount('#app')
