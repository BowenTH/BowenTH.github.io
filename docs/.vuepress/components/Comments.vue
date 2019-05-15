<template>
  <div class="vcomment">
    <div id="vcomments"></div>
    <span :id="visitId" class="leancloud-visitors" :data-flag-title="$page.headers && $page.headers.title">
        <em class="post-meta-item-text">阅读量 </em>
        <i class="leancloud-visitors-count"></i>
    </span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visitId: '',
        // key: value
      }
    },
    computed: {
      data () {
        return this.$page.frontmatter
      },
    },
    created() {
      this.visitId = window.location.pathname
    },
    mounted() {
      this.createValine()
    },
    methods: {
      createValine() {
        const Valine = require('valine');
        window.AV = require('leancloud-storage')
        const valine =  new Valine({
          el: '#vcomments',
          appId: '9eg94bkbxzeP0kP9CFXbB190-gzGzoHsz',
          appKey: 'uykSOJ6M8OOcVX24V0RAchmD',
          notify: true,
          visitor: true,
          verify: false,
          avatar: 'monsterid',
          path: window.location.pathname,
          placeholder: '欢迎留言与我分享您的想法 ~ 添加邮箱会有回复通知',
        });
        this.valineRefresh = false
      }
    },
    watch: {
    '$route' (to, from) {
        if(to.path !==  from.path){
          setTimeout(() => {
              //重新刷新valine
              this.createValine()
            }, 300)
          }
        }
    }
  }
</script>

<style lang="stylus" scoped>
#vcomments {
  max-width 740px
  padding 10px
  display block;
  margin 50px auto 20px
}
</style>