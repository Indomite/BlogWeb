import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '__VIEWS__/index/Index.vue'
import Article from '__VIEWS__/article/Article.vue'
import Detail from '__VIEWS__/article/Detail.vue'
import Tag from '__VIEWS__/tag/Tag.vue'
import About from '__VIEWS__/about/About.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Index },
    { path: '/article', component: Article },
    { path: '/article/:id', component: Detail },
    { path: '/tag', component: Tag },
    { path: '/about', component: About }
  ]
})

export default router
