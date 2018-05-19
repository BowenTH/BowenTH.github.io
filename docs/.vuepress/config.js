module.exports = {
  // title: 'Hello VuePress',
	// description: 'Just playing around',
	// head: [
	// 	['link', { rel: 'icon', href: '/images/Book.png'}]
	// ]
	base: '/note/',
  title: 'note',
  description: '文件上传组件 vue文件上传 多文件上传',
  // port:8888,
  themeConfig: {
    repo: 'ZhuLiangT/v-alien-upload',
    sidebar: [
      ['/', '介绍'],
      ['/example/', '示例'],
      // ['/getstart/', '起步'],
      // ['/api/', '属性'],
      // ['/function/', '方法']

      {
        title: 'Group 1',
        collapsable: true,
        children: [
          '/', '/'
        ]
      },
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