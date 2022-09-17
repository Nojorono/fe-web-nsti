export const CmsCardCms = () => import('../..\\components\\cms\\CardCms.vue' /* webpackChunkName: "components/cms-card-cms" */).then(c => wrapFunctional(c.default || c))
export const CmsCareerCard = () => import('../..\\components\\cms\\CareerCard.vue' /* webpackChunkName: "components/cms-career-card" */).then(c => wrapFunctional(c.default || c))
export const CmsContentCard = () => import('../..\\components\\cms\\ContentCard.vue' /* webpackChunkName: "components/cms-content-card" */).then(c => wrapFunctional(c.default || c))
export const CmsEmptyCard = () => import('../..\\components\\cms\\EmptyCard.vue' /* webpackChunkName: "components/cms-empty-card" */).then(c => wrapFunctional(c.default || c))
export const CmsFormAdd = () => import('../..\\components\\cms\\formAdd.vue' /* webpackChunkName: "components/cms-form-add" */).then(c => wrapFunctional(c.default || c))
export const CmsHeading = () => import('../..\\components\\cms\\Heading.vue' /* webpackChunkName: "components/cms-heading" */).then(c => wrapFunctional(c.default || c))
export const CmsNavBarCms = () => import('../..\\components\\cms\\NavBarCms.vue' /* webpackChunkName: "components/cms-nav-bar-cms" */).then(c => wrapFunctional(c.default || c))
export const CmsSideBar = () => import('../..\\components\\cms\\SideBar.vue' /* webpackChunkName: "components/cms-side-bar" */).then(c => wrapFunctional(c.default || c))
export const HomeCareerAt = () => import('../..\\components\\home\\CareerAt.vue' /* webpackChunkName: "components/home-career-at" */).then(c => wrapFunctional(c.default || c))
export const HomeContactUs = () => import('../..\\components\\home\\ContactUs.vue' /* webpackChunkName: "components/home-contact-us" */).then(c => wrapFunctional(c.default || c))
export const HomeMediaAndPublication = () => import('../..\\components\\home\\MediaAndPublication.vue' /* webpackChunkName: "components/home-media-and-publication" */).then(c => wrapFunctional(c.default || c))
export const HomeMyProducts = () => import('../..\\components\\home\\MyProducts.vue' /* webpackChunkName: "components/home-my-products" */).then(c => wrapFunctional(c.default || c))
export const HomeOurStory = () => import('../..\\components\\home\\OurStory.vue' /* webpackChunkName: "components/home-our-story" */).then(c => wrapFunctional(c.default || c))
export const HomeTopCarousel = () => import('../..\\components\\home\\TopCarousel.vue' /* webpackChunkName: "components/home-top-carousel" */).then(c => wrapFunctional(c.default || c))
export const LayoutFooterBottom = () => import('../..\\components\\layout\\FooterBottom.vue' /* webpackChunkName: "components/layout-footer-bottom" */).then(c => wrapFunctional(c.default || c))
export const LayoutNavbarTop = () => import('../..\\components\\layout\\NavbarTop.vue' /* webpackChunkName: "components/layout-navbar-top" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
