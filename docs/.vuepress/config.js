module.exports = {
  // title: 'Hello VuePress',
	// description: 'Just playing around',
	// head: [
	// 	['link', { rel: 'icon', href: '/images/Book.png'}]
	// ]
	base: './',
  title: 'Flex布局',
  description: '文件上传组件 vue文件上传 多文件上传',
  // port:8888,
  dest: 'docs/dist',
  themeConfig: {
    repo: 'https://gitlab.com/koopoo/qhw-mp',
    sidebar: [
      ['/flex/', '声明'],
      ['/column/', '横向布局'],
      ['/row/', '竖向布局'],
      ['/other/', '其他'],
      ['/source/', '源码'],
      // ['/getstart/', '起步'],
      // ['/api/', '属性'],
      // ['/function/', '方法']

      // {
      //   title: 'Group 1',
      //   collapsable: true,
      //   children: [
      //     '/', '/'
      //   ]
      // },
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