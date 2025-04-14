<template>
  <div id="app">
    <table class="my-table">
      <thead>
        <tr>
          <th>编号</th>
          <th>图片</th>
          <th>名称</th>
          <th width="100px">标签</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>101</td>
          <td><img src="https://res.hc-cdn.com/console-ui-common/default/logo.svg"></td>
          <td>紫砂壶</td>
          <td>
            <MyTag></MyTag>
          </td>
        </tr>
        <tr>
          <td>102</td>
          <td><img src="https://res.hc-cdn.com/console-ui-common/default/logo.svg"></td>
          <td>紫砂壶</td>
          <td>
            <div>
              <div>茶具</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyTag from './components/MyTag.vue';

export default {
  name: 'App',
  data () {
    return {
      goods: [
        {id:101,picture:'http://one.ouchn.cn/images/red_logo.png'},
        {id:102,picture:'http://one.ouchn.cn/images/red_logo.png'},
        {id:103,picture:'http://one.ouchn.cn/images/red_logo.png'}
      ]
    }
  },
  components: {
    MyTag
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.my-table{
  border: solid 1px;
}
.my-table td,th{
  border: solid 1px;
}
</style>
