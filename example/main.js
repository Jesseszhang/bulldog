//从此引用的是dist/vue.common.js 而不是 dist/vue.js 踩坑 使用别名或者用代替import Vue from 'vue/dist/vue.common.js'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './route/route'
import appCom from './app/app'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
	//todo...
  next()
})

const app = new Vue(Object.assign(appCom, {
  router
})).$mount('#app')
