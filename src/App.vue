<template>
  <div id="app">
    <main-tab-bar/>
    <router-view></router-view>
  </div>
</template>

<script>
  import MainTabBar from './components/MainTabBar.vue'


    //导出要连名字，所用到的组件一起导出,还有相对应的methods
  export default {
    name: 'APP',
    components: {
      MainTabBar
    }
  }
</script>

<style>

@import "./assets/css/base.css";


</style>
