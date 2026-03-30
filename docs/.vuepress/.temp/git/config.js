import { GitContributors } from "/home/jiraiya/.openclaw/workspace/vuepress-demo/node_modules/@vuepress/plugin-git/dist/client/components/GitContributors.js";
import { GitChangelog } from "/home/jiraiya/.openclaw/workspace/vuepress-demo/node_modules/@vuepress/plugin-git/dist/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
