import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4e68dac0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _515d736a = () => interopDefault(import('../pages/blank-page.vue' /* webpackChunkName: "pages/blank-page" */))
const _48edc18e = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _5b792802 = () => interopDefault(import('../pages/history.vue' /* webpackChunkName: "pages/history" */))
const _18107dd7 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _257537a5 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/pnweb/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/ar",
    component: _4e68dac0,
    name: "index___ar"
  }, {
    path: "/blank-page",
    component: _515d736a,
    name: "blank-page___en"
  }, {
    path: "/contact",
    component: _48edc18e,
    name: "contact___en"
  }, {
    path: "/de",
    component: _4e68dac0,
    name: "index___de"
  }, {
    path: "/history",
    component: _5b792802,
    name: "history___en"
  }, {
    path: "/id",
    component: _4e68dac0,
    name: "index___id"
  }, {
    path: "/login",
    component: _18107dd7,
    name: "login___en"
  }, {
    path: "/pt",
    component: _4e68dac0,
    name: "index___pt"
  }, {
    path: "/register",
    component: _257537a5,
    name: "register___en"
  }, {
    path: "/zh",
    component: _4e68dac0,
    name: "index___zh"
  }, {
    path: "/ar/blank-page",
    component: _515d736a,
    name: "blank-page___ar"
  }, {
    path: "/ar/contact",
    component: _48edc18e,
    name: "contact___ar"
  }, {
    path: "/ar/history",
    component: _5b792802,
    name: "history___ar"
  }, {
    path: "/ar/login",
    component: _18107dd7,
    name: "login___ar"
  }, {
    path: "/ar/register",
    component: _257537a5,
    name: "register___ar"
  }, {
    path: "/de/blank-page",
    component: _515d736a,
    name: "blank-page___de"
  }, {
    path: "/de/contact",
    component: _48edc18e,
    name: "contact___de"
  }, {
    path: "/de/history",
    component: _5b792802,
    name: "history___de"
  }, {
    path: "/de/login",
    component: _18107dd7,
    name: "login___de"
  }, {
    path: "/de/register",
    component: _257537a5,
    name: "register___de"
  }, {
    path: "/id/blank-page",
    component: _515d736a,
    name: "blank-page___id"
  }, {
    path: "/id/contact",
    component: _48edc18e,
    name: "contact___id"
  }, {
    path: "/id/history",
    component: _5b792802,
    name: "history___id"
  }, {
    path: "/id/login",
    component: _18107dd7,
    name: "login___id"
  }, {
    path: "/id/register",
    component: _257537a5,
    name: "register___id"
  }, {
    path: "/pt/blank-page",
    component: _515d736a,
    name: "blank-page___pt"
  }, {
    path: "/pt/contact",
    component: _48edc18e,
    name: "contact___pt"
  }, {
    path: "/pt/history",
    component: _5b792802,
    name: "history___pt"
  }, {
    path: "/pt/login",
    component: _18107dd7,
    name: "login___pt"
  }, {
    path: "/pt/register",
    component: _257537a5,
    name: "register___pt"
  }, {
    path: "/zh/blank-page",
    component: _515d736a,
    name: "blank-page___zh"
  }, {
    path: "/zh/contact",
    component: _48edc18e,
    name: "contact___zh"
  }, {
    path: "/zh/history",
    component: _5b792802,
    name: "history___zh"
  }, {
    path: "/zh/login",
    component: _18107dd7,
    name: "login___zh"
  }, {
    path: "/zh/register",
    component: _257537a5,
    name: "register___zh"
  }, {
    path: "/",
    component: _4e68dac0,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
