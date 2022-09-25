import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _387ccbf7 = () => interopDefault(import('..\\pages\\about-us\\index.vue' /* webpackChunkName: "pages/about-us/index" */))
const _0c8647d2 = () => interopDefault(import('..\\pages\\career\\index.vue' /* webpackChunkName: "pages/career/index" */))
const _4d355eec = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _3095575e = () => interopDefault(import('..\\pages\\content-management\\index.vue' /* webpackChunkName: "pages/content-management/index" */))
const _2a293221 = () => interopDefault(import('..\\pages\\export\\index.vue' /* webpackChunkName: "pages/export/index" */))
const _532694d5 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _153d9eb2 = () => interopDefault(import('..\\pages\\media-and-publication\\index.vue' /* webpackChunkName: "pages/media-and-publication/index" */))
const _b7f0509e = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _bae50fdc = () => interopDefault(import('..\\pages\\about-us\\AboutUsMobile.vue' /* webpackChunkName: "pages/about-us/AboutUsMobile" */))
const _4487ae78 = () => interopDefault(import('..\\pages\\contact-us\\ConnectMobile.vue' /* webpackChunkName: "pages/contact-us/ConnectMobile" */))
const _bb769180 = () => interopDefault(import('..\\pages\\content-management\\about-us\\index.vue' /* webpackChunkName: "pages/content-management/about-us/index" */))
const _842df4c0 = () => interopDefault(import('..\\pages\\content-management\\career\\index.vue' /* webpackChunkName: "pages/content-management/career/index" */))
const _072a1209 = () => interopDefault(import('..\\pages\\content-management\\media-and-publication\\index.vue' /* webpackChunkName: "pages/content-management/media-and-publication/index" */))
const _0dcfc2fa = () => interopDefault(import('..\\pages\\content-management\\products\\index.vue' /* webpackChunkName: "pages/content-management/products/index" */))
const _74cfde21 = () => interopDefault(import('..\\pages\\content-management\\sign-in\\index.vue' /* webpackChunkName: "pages/content-management/sign-in/index" */))
const _9b51122a = () => interopDefault(import('..\\pages\\content-management\\sign-up\\index.vue' /* webpackChunkName: "pages/content-management/sign-up/index" */))
const _045d2cd2 = () => interopDefault(import('..\\pages\\export\\ExportMobile.vue' /* webpackChunkName: "pages/export/ExportMobile" */))
const _9f268134 = () => interopDefault(import('..\\pages\\media-and-publication\\MediaMobile.vue' /* webpackChunkName: "pages/media-and-publication/MediaMobile" */))
const _0a296977 = () => interopDefault(import('..\\pages\\products\\ProductsMobile.vue' /* webpackChunkName: "pages/products/ProductsMobile" */))
const _6b5553e0 = () => interopDefault(import('..\\pages\\content-management\\about-us\\add-new\\index.vue' /* webpackChunkName: "pages/content-management/about-us/add-new/index" */))
const _24333180 = () => interopDefault(import('..\\pages\\content-management\\career\\add-new\\index.vue' /* webpackChunkName: "pages/content-management/career/add-new/index" */))
const _577f0b37 = () => interopDefault(import('..\\pages\\content-management\\media-and-publication\\add-new\\index.vue' /* webpackChunkName: "pages/content-management/media-and-publication/add-new/index" */))
const _7162d966 = () => interopDefault(import('..\\pages\\content-management\\products\\add-new\\index.vue' /* webpackChunkName: "pages/content-management/products/add-new/index" */))
const _7fdba563 = () => interopDefault(import('..\\pages\\media-and-publication\\detail\\Mobile.vue' /* webpackChunkName: "pages/media-and-publication/detail/Mobile" */))
const _738e9a44 = () => interopDefault(import('..\\pages\\content-management\\about-us\\edit\\_id.vue' /* webpackChunkName: "pages/content-management/about-us/edit/_id" */))
const _7f625d84 = () => interopDefault(import('..\\pages\\content-management\\career\\edit\\_id.vue' /* webpackChunkName: "pages/content-management/career/edit/_id" */))
const _2ff18127 = () => interopDefault(import('..\\pages\\content-management\\media-and-publication\\edit\\_id.vue' /* webpackChunkName: "pages/content-management/media-and-publication/edit/_id" */))
const _19835198 = () => interopDefault(import('..\\pages\\content-management\\products\\edit\\_id.vue' /* webpackChunkName: "pages/content-management/products/edit/_id" */))
const _234a94e9 = () => interopDefault(import('..\\pages\\media-and-publication\\detail\\_id.vue' /* webpackChunkName: "pages/media-and-publication/detail/_id" */))

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
    component: _387ccbf7,
    name: "about-us___en"
  }, {
    path: "/career",
    component: _0c8647d2,
    name: "career___en"
  }, {
    path: "/contact-us",
    component: _4d355eec,
    name: "contact-us___en"
  }, {
    path: "/content-management",
    component: _3095575e,
    name: "content-management___en"
  }, {
    path: "/export",
    component: _2a293221,
    name: "export___en"
  }, {
    path: "/id",
    component: _532694d5,
    name: "index___id"
  }, {
    path: "/media-and-publication",
    component: _153d9eb2,
    name: "media-and-publication___en"
  }, {
    path: "/products",
    component: _b7f0509e,
    name: "products___en"
  }, {
    path: "/about-us/AboutUsMobile",
    component: _bae50fdc,
    name: "about-us-AboutUsMobile___en"
  }, {
    path: "/contact-us/ConnectMobile",
    component: _4487ae78,
    name: "contact-us-ConnectMobile___en"
  }, {
    path: "/content-management/about-us",
    component: _bb769180,
    name: "content-management-about-us___en"
  }, {
    path: "/content-management/career",
    component: _842df4c0,
    name: "content-management-career___en"
  }, {
    path: "/content-management/media-and-publication",
    component: _072a1209,
    name: "content-management-media-and-publication___en"
  }, {
    path: "/content-management/products",
    component: _0dcfc2fa,
    name: "content-management-products___en"
  }, {
    path: "/content-management/sign-in",
    component: _74cfde21,
    name: "content-management-sign-in___en"
  }, {
    path: "/content-management/sign-up",
    component: _9b51122a,
    name: "content-management-sign-up___en"
  }, {
    path: "/export/ExportMobile",
    component: _045d2cd2,
    name: "export-ExportMobile___en"
  }, {
    path: "/id/about-us",
    component: _387ccbf7,
    name: "about-us___id"
  }, {
    path: "/id/career",
    component: _0c8647d2,
    name: "career___id"
  }, {
    path: "/id/contact-us",
    component: _4d355eec,
    name: "contact-us___id"
  }, {
    path: "/id/content-management",
    component: _3095575e,
    name: "content-management___id"
  }, {
    path: "/id/export",
    component: _2a293221,
    name: "export___id"
  }, {
    path: "/id/media-and-publication",
    component: _153d9eb2,
    name: "media-and-publication___id"
  }, {
    path: "/id/products",
    component: _b7f0509e,
    name: "products___id"
  }, {
    path: "/media-and-publication/MediaMobile",
    component: _9f268134,
    name: "media-and-publication-MediaMobile___en"
  }, {
    path: "/products/ProductsMobile",
    component: _0a296977,
    name: "products-ProductsMobile___en"
  }, {
    path: "/content-management/about-us/add-new",
    component: _6b5553e0,
    name: "content-management-about-us-add-new___en"
  }, {
    path: "/content-management/career/add-new",
    component: _24333180,
    name: "content-management-career-add-new___en"
  }, {
    path: "/content-management/media-and-publication/add-new",
    component: _577f0b37,
    name: "content-management-media-and-publication-add-new___en"
  }, {
    path: "/content-management/products/add-new",
    component: _7162d966,
    name: "content-management-products-add-new___en"
  }, {
    path: "/id/about-us/AboutUsMobile",
    component: _bae50fdc,
    name: "about-us-AboutUsMobile___id"
  }, {
    path: "/id/contact-us/ConnectMobile",
    component: _4487ae78,
    name: "contact-us-ConnectMobile___id"
  }, {
    path: "/id/content-management/about-us",
    component: _bb769180,
    name: "content-management-about-us___id"
  }, {
    path: "/id/content-management/career",
    component: _842df4c0,
    name: "content-management-career___id"
  }, {
    path: "/id/content-management/media-and-publication",
    component: _072a1209,
    name: "content-management-media-and-publication___id"
  }, {
    path: "/id/content-management/products",
    component: _0dcfc2fa,
    name: "content-management-products___id"
  }, {
    path: "/id/content-management/sign-in",
    component: _74cfde21,
    name: "content-management-sign-in___id"
  }, {
    path: "/id/content-management/sign-up",
    component: _9b51122a,
    name: "content-management-sign-up___id"
  }, {
    path: "/id/export/ExportMobile",
    component: _045d2cd2,
    name: "export-ExportMobile___id"
  }, {
    path: "/id/media-and-publication/MediaMobile",
    component: _9f268134,
    name: "media-and-publication-MediaMobile___id"
  }, {
    path: "/id/products/ProductsMobile",
    component: _0a296977,
    name: "products-ProductsMobile___id"
  }, {
    path: "/media-and-publication/detail/Mobile",
    component: _7fdba563,
    name: "media-and-publication-detail-Mobile___en"
  }, {
    path: "/id/content-management/about-us/add-new",
    component: _6b5553e0,
    name: "content-management-about-us-add-new___id"
  }, {
    path: "/id/content-management/career/add-new",
    component: _24333180,
    name: "content-management-career-add-new___id"
  }, {
    path: "/id/content-management/media-and-publication/add-new",
    component: _577f0b37,
    name: "content-management-media-and-publication-add-new___id"
  }, {
    path: "/id/content-management/products/add-new",
    component: _7162d966,
    name: "content-management-products-add-new___id"
  }, {
    path: "/id/media-and-publication/detail/Mobile",
    component: _7fdba563,
    name: "media-and-publication-detail-Mobile___id"
  }, {
    path: "/id/content-management/about-us/edit/:id?",
    component: _738e9a44,
    name: "content-management-about-us-edit-id___id"
  }, {
    path: "/id/content-management/career/edit/:id",
    component: _7f625d84,
    name: "content-management-career-edit-id___id"
  }, {
    path: "/id/content-management/media-and-publication/edit/:id?",
    component: _2ff18127,
    name: "content-management-media-and-publication-edit-id___id"
  }, {
    path: "/id/content-management/products/edit/:id",
    component: _19835198,
    name: "content-management-products-edit-id___id"
  }, {
    path: "/content-management/about-us/edit/:id?",
    component: _738e9a44,
    name: "content-management-about-us-edit-id___en"
  }, {
    path: "/content-management/career/edit/:id",
    component: _7f625d84,
    name: "content-management-career-edit-id___en"
  }, {
    path: "/content-management/media-and-publication/edit/:id?",
    component: _2ff18127,
    name: "content-management-media-and-publication-edit-id___en"
  }, {
    path: "/content-management/products/edit/:id",
    component: _19835198,
    name: "content-management-products-edit-id___en"
  }, {
    path: "/id/media-and-publication/detail/:id?",
    component: _234a94e9,
    name: "media-and-publication-detail-id___id"
  }, {
    path: "/media-and-publication/detail/:id?",
    component: _234a94e9,
    name: "media-and-publication-detail-id___en"
  }, {
    path: "/",
    component: _532694d5,
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
