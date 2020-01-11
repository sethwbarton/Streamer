import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'video-viewer',
      component: require('@/components/VideoViewer.vue').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
