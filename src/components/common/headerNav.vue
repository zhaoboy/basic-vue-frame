<template>
  <el-menu
    :default-active="activeHeaderIndex"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1"><a href="index">首页</a></el-menu-item>
    <el-menu-item index="2"><a href="list">列表</a></el-menu-item>
    <el-menu-item index="3"><a href="detail">详情</a></el-menu-item>
  </el-menu>
  </template>
<script>
export default {
  name: 'headerNav',
  props: ['activeHeaderIndex'], //接收父组件传来的高亮
  data() {
    return {
    };
  },
  methods: {
    // handleSelect(key, keyPath) {
    //   console.log(key, keyPath);
    // }
  }
};
</script>
