export { default as ProductsCarousel } from '../..\\components\\ProductsCarousel.vue'
export { default as ProductsCarouselMobile } from '../..\\components\\ProductsCarouselMobile.vue'
export { default as CmsCardCms } from '../..\\components\\cms\\CardCms.vue'
export { default as CmsCareerCard } from '../..\\components\\cms\\CareerCard.vue'
export { default as CmsContentCard } from '../..\\components\\cms\\ContentCard.vue'
export { default as CmsEmptyCard } from '../..\\components\\cms\\EmptyCard.vue'
export { default as CmsFormAdd } from '../..\\components\\cms\\formAdd.vue'
export { default as CmsHeading } from '../..\\components\\cms\\Heading.vue'
export { default as CmsNavBarCms } from '../..\\components\\cms\\NavBarCms.vue'
export { default as CmsSideBar } from '../..\\components\\cms\\SideBar.vue'
export { default as HomeCareerAt } from '../..\\components\\home\\CareerAt.vue'
export { default as HomeContactUs } from '../..\\components\\home\\ContactUs.vue'
export { default as HomeMediaAndPublication } from '../..\\components\\home\\MediaAndPublication.vue'
export { default as HomeMyProducts } from '../..\\components\\home\\MyProducts.vue'
export { default as HomeOurStory } from '../..\\components\\home\\OurStory.vue'
export { default as HomeTopCarousel } from '../..\\components\\home\\TopCarousel.vue'
export { default as LayoutFooterBottom } from '../..\\components\\layout\\FooterBottom.vue'
export { default as LayoutFooterMobile } from '../..\\components\\layout\\FooterMobile.vue'
export { default as LayoutNavBarMobile } from '../..\\components\\layout\\NavBarMobile.vue'
export { default as LayoutNavbarTop } from '../..\\components\\layout\\NavbarTop.vue'
export { default as HomeMobileMediaAndPublicationMobile } from '../..\\components\\home\\mobile\\MediaAndPublicationMobile.vue'
export { default as HomeMobileTopCarouselMobile } from '../..\\components\\home\\mobile\\TopCarouselMobile.vue'

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
