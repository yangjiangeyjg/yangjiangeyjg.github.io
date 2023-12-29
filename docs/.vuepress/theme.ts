import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";



export default hopeTheme({
  // 部署到的网址
  hostname: "www.your-hostname.com",

  // 默认作者
  // author: {
  //   name: "Mr.Hope",
  //   url: "https://mrhope.site",
  // },

  // breadcrumb: true,

  iconAssets: "iconfont",

  // logo: "/logo.svg",
  // logo: "/rpg.png",

  // 该主页的 GitHub 网址
  repo: "https://github.com/HELLORPG/rpg-homepage-template",

  // docsDir: "demo/src",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  // 布局配置
  sidebar: false,
  navbarLayout: {
    left: ["Brand", "Links"],
    center: [],
    right: ["Language", "Repo", "Outlook"]
  },

  // blog 中用到的共通配置
  blog: {
    medias: {
     
      Email: "jiangeyang.jgy@gmail.com",
      GitHub: "https://github.com/yangjiangeyjg",
    },  // 展示个人的社交媒体图标，并且提供超链接
    sidebarDisplay: "none",
    avatar: "/logo.png",
    roundAvatar: false
  },
   

  locales: {
    "/": {
      // 导航栏
      navbar: navbar.en,
      navbarAutoHide: "none",

      // sidebar
      sidebar: sidebar.en,

      // footer: "Default footer",

      displayFooter: true,
      blog: {
        name: "Jiange Yang",
        description:"Ph.D student in "+ "NJU-MCG".link('http://mcg.nju.edu.cn/') + ".Focusing on Computer Vision and Multi-Modal Learning.",
      },
    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: navbar.zh,
      navbarAutoHide: "none",

      // sidebar
      sidebar: sidebar.zh,

      // footer: "默认页脚",

      displayFooter: true,

      blog: {
        name: "你的美名",
        description:"你的简短介绍",
      },
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
