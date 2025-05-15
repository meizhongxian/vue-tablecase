<template>
  <div id="app">
  <MyTable :data="goods">
    <template #head>
      <th>编号</th>
      <th>图片</th>
      <th>名称</th>
      <th width="100px">标签</th>
    </template>
    <template #body="obj">
      <td>{{obj.index + 1}}</td>
      <td><img :src="obj.item.picture"></td>
      <td>{{obj.item.name}}</td>
      <td>
        <MyTag v-model="obj.item.tag"></MyTag>
      </td>
    </template>
  </MyTable>
  </div>
</template>

<script>
import MyTable from './components/MyTable.vue'
import MyTag from './components/MyTag.vue';

export default {
  name: 'App',
  data () {
    return {
      tempText: '水杯',
      tempText2: '茶壶',
      goods: [
        {id:101,picture:'https://res.hc-cdn.com/console-ui-common/default/logo.svg',name:'水壶',tag:"水壶"},
        {id:102,picture:'https://res.hc-cdn.com/console-ui-common/default/logo.svg',name:'水杯',tag:"水壶"},
        {id:103,picture:'https://res.hc-cdn.com/console-ui-common/default/logo.svg',name:'水瓶',tag:"水壶"}
      ]
    }
  },
  components: {
    MyTag,
    MyTable
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
