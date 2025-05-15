<template>
  <div class="mytag">
    <input class="input" type="text" 
    v-if="isEdit" 
    ref="inp" 
    v-focus 
    @blur="isEdit=false"
    :value="value" 
    @keyup.enter="handleEnter"
    >
    <div v-else @dblclick="handleClick">{{value}}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    value: String
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
    },
    handleEnter(e){
      if(e.target.value.trim()==''){
        return alert('不能为空')
      }
      //子传父，将回车时，［输入框的内容］提交给父组件更新
      //由于父组件是v-model，触发事件，需要触发 input 事件
      this.$emit('input',e.target.value)
      //提交完关闭输入状态
      this.isEdit=false
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
