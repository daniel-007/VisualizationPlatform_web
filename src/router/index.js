import Vue from 'vue'
import Router from 'vue-router'
import Visitor from 'group/visitor'
import Admin from 'group/admin'
import MainPage from 'pages/visitor/mainpage/mainpage'
import All from 'pages/visitor/all/all'
import PersonEvent from 'pages/visitor/person-event/person-event'
import EventPerson from 'pages/visitor/event-person/event-person'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      component: Visitor,
      children: [
        {
          path: '',
          name: "mainpage",
          component: MainPage
        },
        {
          path: '/all',
          component: All
        },
        {
          path: '/person-event',
          component: PersonEvent
        },
        {
          path: '/event-person',
          component: EventPerson
        }
      ]
    },
    {
      path: '/admin',
      component: Admin,
      children: []
    }
  ]
})
