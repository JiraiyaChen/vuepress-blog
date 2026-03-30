export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/jiraiya/.openclaw/workspace/vuepress-demo/docs/README.md"), meta: {"title":"首页"} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"/home/jiraiya/.openclaw/workspace/vuepress-demo/docs/about/README.md"), meta: {"title":"关于"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/jiraiya/.openclaw/workspace/vuepress-demo/docs/.vuepress/.temp/pages/404.html.vue"), meta: {"title":""} }],
]);
