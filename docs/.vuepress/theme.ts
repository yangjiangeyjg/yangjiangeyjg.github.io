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
  //repo: "https://github.com/HELLORPG/rpg-homepage-template",

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

      GitHub: "https://github.com/yangjiangeyjg",

      GoogleScholar: 'https://scholar.google.com/citations?user=bnF9-8YAAAAJ&hl=zh-CN',  
      GoogleScholarLogo: 'data:image/jpeg;base64,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',

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
        description:"Ph.D student in "+ "NJU-MCG.".link('http://mcg.nju.edu.cn/') + " Focusing on Computer Vision and Embodied intelligence.",
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
        name: "杨剑阁",
        description:"南京大学计算机科学与技术系博士生",
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
