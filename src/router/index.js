import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../views/index/index'
import ArticleList from '../views/ArticleList/list.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/manage',
      name: 'List',
      component: ArticleList
    }
  ]
})
