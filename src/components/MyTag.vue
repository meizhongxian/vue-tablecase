<template>
  <div class="mytag">
    <input class="input" type="text" v-if="isEdit" ref="inp" v-focus @blur="isEdit=false">
    <div v-else @dblclick="handleClick">差距</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      isEdit: false
    }
  },
  methods: {
    handleClick () {
      this.isEdit = true

      //等dom更新完再获取焦点,这样没问题，还可以封装程全局指令
      // this.$nextTick(()=>{
      //   this.$refs.inp.focus()
      // })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.my-tag {
  cursor: pointer;
  .input{
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width:100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color:#666;
    }
  }
}
</style>
