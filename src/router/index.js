import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/Index.vue'
import Article from '../views/article/Article.vue'
import Detail from '../views/article/Detail.vue'
import Tag from '../views/tag/Tag.vue'
import About from '../views/about/About.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Index },
    { path: '/article', component: Article },
    { path: '/detail/:Id', component: Detail },
    { path: '/tag', component: Tag },
    { path: '/about', component: About }
  ]
})

export default router
