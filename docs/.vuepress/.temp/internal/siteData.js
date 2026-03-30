export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"我的博客\",\"description\":\"使用 VuePress 2 搭建的博客\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"我的博客\",\"description\":\"使用 VuePress 2 搭建的博客\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updateSiteData?.(siteData)
}

if (import.meta.hot) {
  import.meta.hot.accept((m) => {
    __VUE_HMR_RUNTIME__.updateSiteData?.(m.siteData)
  })
}
