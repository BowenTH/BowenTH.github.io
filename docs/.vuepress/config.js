module.exports = {
  title: '日志',
  description: '个人博客空间',
  base: '/page/doc/',
  dest: 'docs/doc',

  themeConfig: {
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
        link: 'https://www.github.com/codeteenager'
      },
    ],
    sidebar:[
      ['/', '首页'],
      ['/demo/','训练场']
    ],
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
  }
}