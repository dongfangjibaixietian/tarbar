<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="./assets/img/home.png" alt="">
        <img slot="item-icon-active" src="./assets/img/home.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="./assets/img/category.png" alt="">
        <img slot="item-icon-active" src="./assets/img/category.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="./assets/img/cart.png" alt="">
        <img slot="item-icon-active" src="./assets/img/cart.png" alt="">
        <div slot="item-text">购物车</div>

      </tab-bar-item>
      <tab-bar-item path="/me">
        <img slot="item-icon" src="./assets/img/me.png" alt="">
        <img slot="item-icon-active" src="./assets/img/me.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import TabBar from './components/tabbar/TarBar.vue'
  import TabBarItem from './components/tabbar/TarBarItem.vue'


    //导出要连名字，所用到的组件一起导出,还有相对应的methods
  export default {
    name: 'APP',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>

@import "./assets/css/base.css";


</style>
