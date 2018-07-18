import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/quest"
    },
    {
      path: '/quest',
      component: resolve => require(['@/components/quest/index'], resolve),
      redirect: '/quest/expertExperience',
      children: [
        {
          path: 'expertExperience',
          component: resolve => require(['@/components/quest/expertExperience'], resolve)
        }
      ]
    }
  ]
})
