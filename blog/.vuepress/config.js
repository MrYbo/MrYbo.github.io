const path = require("path");

module.exports = {
  title: "BoYang Blog",
  description: "This is BoYang's blog",
  head: [
    ["link", { rel: "icon", href: "/img/logo.svg" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  
  theme: "gungnir",

  themeConfig: {
    repo: "mrybo/mrybo.github.io",
    docsDir: "blog",
    docsBranch: "main",
    editLinks: true,
    lastUpdated: true,
    hitokoto: true,
    searchIcon: "ri-search-2-line",
    codeTheme: "gungnir-dark",
    nav: require('./configs/nav'),
    
    mdPlus: {
      all: true
    },
    chartjs: true,
    mermaid: true,
    roughviz: true,
    markmap: true,

    rss: {
      site_url: "https://mrybo.github.io",
      copyright: "mrybo 2018-2021",
      count: 20
    },

    katex: true,

    comment: {
      owner: "mrybo",
      repo: "gitalk-comments",
      clientId: "c7221311876186a6a1eb",
      clientSecret: "696a4a2db69f16408fe8a365605e507cdd8d6382"
    },
  
    analytics: {
      ga: "UA-197011211-1",
      ba: "e8928ae9c3c4d59ba818c0e0400c9221"
    },

    readingTime: {
      excludes: ["/about", "/tags/.*", "/links"]
    },

    personalInfo: {
      name: "BoYang",
      avatar: "/img/avatar.jpg",
      description: "喜欢花, 喜欢海, 喜欢日出和日落, 浪漫的年纪别活的太无趣",
      sns: {
        github: "mrybo",
        twitter: "UBgMJZzxwfTd4Dj",
        zhihu: "zhu-mu-bai-3",
        email: "aoeybo@gmail.com"
      }
    },

    homeHeaderImages: [
      {
        path: "/img/home-bg/1.jpg",
        mask: "rgba(68, 74, 83, .4)"
      },
      {
        path: "/img/home-bg/2.jpg",
        mask: "rgba(68, 74, 83, .4)"
      },
      {
        path: "/img/home-bg/3.jpg",
        mask: "rgba(68, 74, 83, .4)"
      },
      {
        path: "/img/home-bg/4.jpg",
        mask: "rgba(68, 74, 83, .4)"
      },
      {
        path: "/img/home-bg/5.jpg",
        mask: "rgba(68, 74, 83, .4)"
      },
      {
        path: "/img/home-bg/6.jpg",
        mask: "rgba(68, 74, 83, .4)"
      },
    ],

    pages: {
      tags: {
        title: "Tags",
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },

      links: {
        title: "Links",
        subtitle:
          "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      }
    },
    footer: `
      &copy; <a href="https://github.com/mrybo" target="_blank">Mrybo</a> 2018-2021
      <br>
      Powered by <a href="https://vuepress.vuejs.org" target="_blank">VuePress</a> &
    `
  },
  
  markdown: {
    extractHeaders: ["h2", "h3", "h4", "h5"]
  },
  configureWebpack: () => {
    const NODE_ENV = process.env.NODE_ENV;
    if (NODE_ENV === "production") {
      return {
        output: {
          publicPath:
            "https://cdn.jsdelivr.net/gh/mrybo/mrybo.github.io@gh-pages/"
        },
        resolve: {
          alias: {
            public: path.resolve(__dirname, "./public")
          }
        }
      };
    } else {
      return {
        resolve: {
          alias: {
            public: path.resolve(__dirname, "./public")
          }
        }
      };
    }
  }
};
