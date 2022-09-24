import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9a56b910 = () => interopDefault(import('../pages/about-us/index.vue' /* webpackChunkName: "pages/about-us/index" */))
const _adff6c50 = () => interopDefault(import('../pages/career/index.vue' /* webpackChunkName: "pages/career/index" */))
const _2e362605 = () => interopDefault(import('../pages/contact-us/index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _81b06a9e = () => interopDefault(import('../pages/content-management/index.vue' /* webpackChunkName: "pages/content-management/index" */))
const _cbe7eae4 = () => interopDefault(import('../pages/export/index.vue' /* webpackChunkName: "pages/export/index" */))
const _dd426aea = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _d326c0ee = () => interopDefault(import('../pages/media-and-publication/index.vue' /* webpackChunkName: "pages/media-and-publication/index" */))
const _743c387e = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _01267a28 = () => interopDefault(import('../pages/about-us/mobile.vue' /* webpackChunkName: "pages/about-us/mobile" */))
const _3a126e12 = () => interopDefault(import('../pages/content-management/about-us/index.vue' /* webpackChunkName: "pages/content-management/about-us/index" */))
const _faf81a1c = () => interopDefault(import('../pages/content-management/career/index.vue' /* webpackChunkName: "pages/content-management/career/index" */))
const _5ad25f2f = () => interopDefault(import('../pages/content-management/media-and-publication/index.vue' /* webpackChunkName: "pages/content-management/media-and-publication/index" */))
const _090bf9d0 = () => interopDefault(import('../pages/content-management/products/index.vue' /* webpackChunkName: "pages/content-management/products/index" */))
const _a9518552 = () => interopDefault(import('../pages/content-management/sign-in/index.vue' /* webpackChunkName: "pages/content-management/sign-in/index" */))
const _3174634d = () => interopDefault(import('../pages/content-management/sign-up/index.vue' /* webpackChunkName: "pages/content-management/sign-up/index" */))
const _e2902f92 = () => interopDefault(import('../pages/content-management/about-us/add-new/index.vue' /* webpackChunkName: "pages/content-management/about-us/add-new/index" */))
const _4972e5d2 = () => interopDefault(import('../pages/content-management/career/add-new/index.vue' /* webpackChunkName: "pages/content-management/career/add-new/index" */))
const _8e912758 = () => interopDefault(import('../pages/content-management/media-and-publication/add-new/index.vue' /* webpackChunkName: "pages/content-management/media-and-publication/add-new/index" */))
const _4755173d = () => interopDefault(import('../pages/content-management/products/add-new/index.vue' /* webpackChunkName: "pages/content-management/products/add-new/index" */))
const _53ce28b6 = () => interopDefault(import('../pages/content-management/about-us/edit/_id.vue' /* webpackChunkName: "pages/content-management/about-us/edit/_id" */))
const _286ebac5 = () => interopDefault(import('../pages/content-management/career/edit/_id.vue' /* webpackChunkName: "pages/content-management/career/edit/_id" */))
const _12d6ed30 = () => interopDefault(import('../pages/content-management/media-and-publication/edit/_id.vue' /* webpackChunkName: "pages/content-management/media-and-publication/edit/_id" */))
const _e9e01e42 = () => interopDefault(import('../pages/content-management/products/edit/_id.vue' /* webpackChunkName: "pages/content-management/products/edit/_id" */))
const _6e7209d5 = () => interopDefault(import('../pages/media-and-publication/detail/_id.vue' /* webpackChunkName: "pages/media-and-publication/detail/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _9a56b910,
    name: "about-us___en"
  }, {
    path: "/career",
    component: _adff6c50,
    name: "career___en"
  }, {
    path: "/contact-us",
    component: _2e362605,
    name: "contact-us___en"
  }, {
    path: "/content-management",
    component: _81b06a9e,
    name: "content-management___en"
  }, {
    path: "/export",
    component: _cbe7eae4,
    name: "export___en"
  }, {
    path: "/id",
    component: _dd426aea,
    name: "index___id"
  }, {
    path: "/media-and-publication",
    component: _d326c0ee,
    name: "media-and-publication___en"
  }, {
    path: "/products",
    component: _743c387e,
    name: "products___en"
  }, {
    path: "/about-us/mobile",
    component: _01267a28,
    name: "about-us-mobile___en"
  }, {
    path: "/content-management/about-us",
    component: _3a126e12,
    name: "content-management-about-us___en"
  }, {
    path: "/content-management/career",
    component: _faf81a1c,
    name: "content-management-career___en"
  }, {
    path: "/content-management/media-and-publication",
    component: _5ad25f2f,
    name: "content-management-media-and-publication___en"
  }, {
    path: "/content-management/products",
    component: _090bf9d0,
    name: "content-management-products___en"
  }, {
    path: "/content-management/sign-in",
    component: _a9518552,
    name: "content-management-sign-in___en"
  }, {
    path: "/content-management/sign-up",
    component: _3174634d,
    name: "content-management-sign-up___en"
  }, {
    path: "/id/about-us",
    component: _9a56b910,
    name: "about-us___id"
  }, {
    path: "/id/career",
    component: _adff6c50,
    name: "career___id"
  }, {
    path: "/id/contact-us",
    component: _2e362605,
    name: "contact-us___id"
  }, {
    path: "/id/content-management",
    component: _81b06a9e,
    name: "content-management___id"
  }, {
    path: "/id/export",
    component: _cbe7eae4,
    name: "export___id"
  }, {
    path: "/id/media-and-publication",
    component: _d326c0ee,
    name: "media-and-publication___id"
  }, {
    path: "/id/products",
    component: _743c387e,
    name: "products___id"
  }, {
    path: "/content-management/about-us/add-new",
    component: _e2902f92,
    name: "content-management-about-us-add-new___en"
  }, {
    path: "/content-management/career/add-new",
    component: _4972e5d2,
    name: "content-management-career-add-new___en"
  }, {
    path: "/content-management/media-and-publication/add-new",
    component: _8e912758,
    name: "content-management-media-and-publication-add-new___en"
  }, {
    path: "/content-management/products/add-new",
    component: _4755173d,
    name: "content-management-products-add-new___en"
  }, {
    path: "/id/about-us/mobile",
    component: _01267a28,
    name: "about-us-mobile___id"
  }, {
    path: "/id/content-management/about-us",
    component: _3a126e12,
    name: "content-management-about-us___id"
  }, {
    path: "/id/content-management/career",
    component: _faf81a1c,
    name: "content-management-career___id"
  }, {
    path: "/id/content-management/media-and-publication",
    component: _5ad25f2f,
    name: "content-management-media-and-publication___id"
  }, {
    path: "/id/content-management/products",
    component: _090bf9d0,
    name: "content-management-products___id"
  }, {
    path: "/id/content-management/sign-in",
    component: _a9518552,
    name: "content-management-sign-in___id"
  }, {
    path: "/id/content-management/sign-up",
    component: _3174634d,
    name: "content-management-sign-up___id"
  }, {
    path: "/id/content-management/about-us/add-new",
    component: _e2902f92,
    name: "content-management-about-us-add-new___id"
  }, {
    path: "/id/content-management/career/add-new",
    component: _4972e5d2,
    name: "content-management-career-add-new___id"
  }, {
    path: "/id/content-management/media-and-publication/add-new",
    component: _8e912758,
    name: "content-management-media-and-publication-add-new___id"
  }, {
    path: "/id/content-management/products/add-new",
    component: _4755173d,
    name: "content-management-products-add-new___id"
  }, {
    path: "/id/content-management/about-us/edit/:id?",
    component: _53ce28b6,
    name: "content-management-about-us-edit-id___id"
  }, {
    path: "/id/content-management/career/edit/:id",
    component: _286ebac5,
    name: "content-management-career-edit-id___id"
  }, {
    path: "/id/content-management/media-and-publication/edit/:id?",
    component: _12d6ed30,
    name: "content-management-media-and-publication-edit-id___id"
  }, {
    path: "/id/content-management/products/edit/:id",
    component: _e9e01e42,
    name: "content-management-products-edit-id___id"
  }, {
    path: "/content-management/about-us/edit/:id?",
    component: _53ce28b6,
    name: "content-management-about-us-edit-id___en"
  }, {
    path: "/content-management/career/edit/:id",
    component: _286ebac5,
    name: "content-management-career-edit-id___en"
  }, {
    path: "/content-management/media-and-publication/edit/:id?",
    component: _12d6ed30,
    name: "content-management-media-and-publication-edit-id___en"
  }, {
    path: "/content-management/products/edit/:id",
    component: _e9e01e42,
    name: "content-management-products-edit-id___en"
  }, {
    path: "/id/media-and-publication/detail/:id?",
    component: _6e7209d5,
    name: "media-and-publication-detail-id___id"
  }, {
    path: "/media-and-publication/detail/:id?",
    component: _6e7209d5,
    name: "media-and-publication-detail-id___en"
  }, {
    path: "/",
    component: _dd426aea,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
