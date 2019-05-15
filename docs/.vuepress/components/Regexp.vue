<template>
  <div>
    <form>
      <div>
        <label for="字符串">字符串</label>
        <input name="字符串" v-model="str" placeholder="要查找的字符串" type="text"> 
      </div>
      <div>
        <label for="正则">正则</label>
        <input name="正则" v-model="reg" type="text" placeholder="正则表达式">
        <span>全局匹配</span><input type="checkbox" v-model="isG">
        <span>忽略大小写</span><input type="checkbox" v-model="isI">
      </div>
      <div>
        <label ></label>
        <button type="button" @click="test">测试</button>
      </div>
      <div>
        <label>结果</label><strong style="color:#42b983">{{result}}</strong>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        str: '',
        reg: '',
        result: null,
        isG: false,
        isI: true,
        // key: value
      }
    },
    methods: {
      test() {
        let reg = new RegExp(this.reg, `${this.isG?'g':''}${this.isI?'i':''}`)
        this.result = this.str.match(reg)
      }
    },
    created() {

    },
  }
</script>

<style lang="stylus" scoped>
input {
  outline none
  border-width 0 0 1px 0
  border-color #42b983
  background transparent
  font-size 20px
}
form {
  background #f3f5f7
  padding 20px 10px
  border-radius 5px
  zoom:1.2
  span{
    margin 0 3px 0 10px
    font-size 10px
  }
  margin-top 50px
  div {
    margin 15px 10px
  }
  label {
    min-width 80px
    display inline-block
  }
  button {
    border-radius 10px
    background #42b983
    color #fff
    padding 3px 40px
    broder none
  }
}
</style>