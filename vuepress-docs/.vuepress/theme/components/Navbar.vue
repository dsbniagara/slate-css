<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>

    <router-link
      :to="$localePath"
      class="home-link"
    >
      <!-- <img
        class="logo"
        v-if="$site.themeConfig.logo"
        :src="$withBase($site.themeConfig.logo)"
        :alt="$siteTitle"
      > -->
      <svg class="logo" xmlns="http://www.w3.org/2000/svg" width="90.185" height="32.513" viewBox="0 0 90.185 32.513">
        <path id="Path_6" data-name="Path 6" d="M6.7.464A12.65,12.65,0,0,1,3.509.073a6.34,6.34,0,0,1-2.32-1.03l.493-3.277A8.6,8.6,0,0,0,3.988-3.161a8.619,8.619,0,0,0,2.537.406Q8.99-2.755,8.99-4a1.144,1.144,0,0,0-.522-1.015,8.906,8.906,0,0,0-2.175-.812A8.5,8.5,0,0,1,2.566-7.671a4.056,4.056,0,0,1-1.116-3,3.968,3.968,0,0,1,1.6-3.335,7.056,7.056,0,0,1,4.379-1.218,11.927,11.927,0,0,1,2.726.319,7.82,7.82,0,0,1,2.233.841l-.464,3.19A8.219,8.219,0,0,0,9.845-11.7a8.954,8.954,0,0,0-2.247-.3q-2.117,0-2.117,1.131a1.162,1.162,0,0,0,.507,1A7.473,7.473,0,0,0,8-9.077a9.662,9.662,0,0,1,3.929,1.914,4.026,4.026,0,0,1,1.146,3.045,3.914,3.914,0,0,1-1.7,3.364A7.905,7.905,0,0,1,6.7.464ZM15.573-23.49H19.6V0H15.573ZM29.029.464a6.521,6.521,0,0,1-3.495-.957,6.64,6.64,0,0,1-2.45-2.74,9,9,0,0,1-.9-4.1,8.721,8.721,0,0,1,.885-3.929,7.288,7.288,0,0,1,2.508-2.871,6.419,6.419,0,0,1,3.654-1.088,5.984,5.984,0,0,1,2.74.623,4.91,4.91,0,0,1,1.957,1.755l.058-1.914h3.857V0H33.988L33.93-1.885a4.814,4.814,0,0,1-2,1.755A6.669,6.669,0,0,1,29.029.464Zm1.1-3.6a3.666,3.666,0,0,0,2.813-1.189,4.343,4.343,0,0,0,1.1-3.074,4.337,4.337,0,0,0-1.087-3.045,3.654,3.654,0,0,0-2.828-1.189A3.654,3.654,0,0,0,27.3-10.44,4.337,4.337,0,0,0,26.216-7.4a4.343,4.343,0,0,0,1.1,3.074A3.666,3.666,0,0,0,30.131-3.132Zm12.5-8.294H39.759v-3.335H42.63v-4h4.031v4H50.17v3.335H46.661V0H42.63ZM59.6.464a10.292,10.292,0,0,1-4.509-.928,6.921,6.921,0,0,1-3-2.712,7.973,7.973,0,0,1-1.073-4.191,8.571,8.571,0,0,1,.928-4.017A6.98,6.98,0,0,1,54.578-14.2a7.556,7.556,0,0,1,3.973-1.03,7.387,7.387,0,0,1,3.668.885A6.177,6.177,0,0,1,64.685-11.8a8.185,8.185,0,0,1,.884,3.915,9.59,9.59,0,0,1-.145,1.74H55.013q.754,3.306,5.017,3.306a12.13,12.13,0,0,0,2.6-.275,9.291,9.291,0,0,0,2.276-.8l.406,3.161a9.155,9.155,0,0,1-2.552.9A15.241,15.241,0,0,1,59.6.464Zm2.117-9.425a3.635,3.635,0,0,0-1-2.363,3.138,3.138,0,0,0-2.277-.827,3.253,3.253,0,0,0-2.291.827,4.007,4.007,0,0,0-1.16,2.363Z" transform="translate(24.616 26.446)" fill="#324e58"/>
        <path id="Path_5" data-name="Path 5" d="M11.127-.692,0-3.143V29.371l11.127-2.1Z" transform="translate(0 3.143)" fill="#1a89de"/>
      </svg>


      <!-- <span
        ref="siteName"
        class="site-name"
        v-if="$siteTitle"
        :class="{ 'can-hide': $site.themeConfig.logo }"
      >{{ $siteTitle }}</span> -->
    </router-link>

    <div
      class="links"
      :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}"
    >
      <AlgoliaSearchBox
        v-if="isAlgoliaSearch"
        :options="algolia"
      />
      <SearchBox v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"/>
      <NavLinks class="can-hide"/>
    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from '@SearchBox'
import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox },

  data () {
    return {
      linksWrapMaxWidth: null
    }
  },

  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
          - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
  },

  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  }
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem

.navbar
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbarHeight - 1.4rem

  a, span, img
    display inline-block
  .logo
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
  .site-name
    font-size 1.3rem
    font-weight 600
    color $textColor
    position relative
  .links
    padding-left 1.5rem
    box-sizing border-box
    background-color white
    white-space nowrap
    font-size 0.9rem
    position absolute
    right $navbar-horizontal-padding
    top $navbar-vertical-padding
    display flex
    .search-box
      flex: 0 0 auto
      vertical-align top

@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .can-hide
      display none
    .links
      padding-left 1.5rem
    .site-name
      width calc(100vw - 9.4rem)
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
</style>
