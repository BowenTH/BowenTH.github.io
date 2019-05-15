module.exports = {
  title: '小可不才 ~ ',
  description: '个人博客空间',
  base: '/page/doc/',
  dest: 'docs/doc',

  themeConfig: {
    markdown: {
      lineNumbers: true,
    },
    lastUpdated: 'Last Updated', // string | boolean
    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: '博文',
        items: [{
            text: 'Android',
            link: '/android/'
          },
          {
            text: 'ios',
            link: '/ios/'
          },
          {
            text: 'Web',
            link: '/web/'
          }
        ]
      },
      {
        text: '关于',
        link: '/about/'
      },
      {
        text: 'Github',
        link: 'https://www.github.com/BowenTH'
      },
    ],
    sidebar: 'auto',
    sidebar:[
      ['/', '首页'],
      ['/web/','前端'],
      ['/python/','其他'],

      ['/regexp/', '正则表达'],
      ['/dev/','训练场'],
    ],
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
  }
}