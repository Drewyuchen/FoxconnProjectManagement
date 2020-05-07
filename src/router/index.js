import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Introduce from '@/components/Introduce'
import emp_job from "../components/emp_job"
import emp_job_content from "../components/emp_job_content"
import emp_job_handle from "../components/emp_job_handle"
import emp_job_hour from "../components/emp_job_hour"
import emp_job_performance from "../components/emp_job_performance"
import emp_job_complete from "../components/emp_job_complete"
import emp_job_added from "../components/emp_job_added"





Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/intro',
      name: 'Introduce',
      component: Introduce
    },
    {
      path: '/emp_job',
      name: 'emp_job',
      component:emp_job
    },
    {
      path: '/emp_job_content',
      name: 'emp_job_content',
      component:emp_job_content
    },

    {
      path: '/emp_job_handle',
      name: 'emp_job_handle',
      component:emp_job_handle
    },
    {
      path: '/emp_job_performance',
      name: 'emp_job_performance',
      component:emp_job_performance
    },
    {
      path: '/emp_job_hour',
      name: 'emp_job_hour',
      component:emp_job_hour
    },
    {
      path: '/emp_job_complete',
      name: 'emp_job_complete',
      component:emp_job_complete
    },
    {
      path: '/emp_job_added',
      name: 'emp_job_added',
      component:emp_job_added
    }
  ]
})
