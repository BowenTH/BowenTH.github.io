module.exports = {
  // title: 'Hello VuePress',
	// description: 'Just playing around',
	// head: [
	// 	['link', { rel: 'icon', href: '/images/Book.png'}]
	// ]
	// base: './',
  title: '我的首页',
  description: '文件上传组件 vue文件上传 多文件上传',
  // port:8888,
  dest: 'docs/dist',
  // dest: '../static',
  themeConfig: {
    repo: 'https://gitlab.com/koopoo/qhw-mp',
    sidebar: [
      {
        title: '基于对象编程',
        collapsable: true,
        children: [
          ['/object/','声明']
        ]
      },
      {
        title: '布局',
        collapsable: true,
        children: [
          ['/flex/', '声明'],
          ['/flex/column/', '横向布局'],
          ['/flex/row/', '竖向布局'],
          ['/flex/other/', '其他'],
          ['/flex/source/', '源码'],
        ]
      }, {
        title: '其他',
        collapsable: true,
        children: [
          ['/other/','其他']
        ]
      }, {
        title: '其他语言',
        collapsable: true,
        children:[
          ['/python/', 'Python'],
          ['/python/demo', '实例'],
          ['/shell/', 'shell命令实例']
        ]
      }
    ],
    nav: [
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'Japanese', link: '/language/japanese' }
        ]
      }
    ]
  }
}