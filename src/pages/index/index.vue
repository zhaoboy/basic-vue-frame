<template>
  <el-container>
    <el-header>
      <header-nav :activeHeaderIndex='activeHeaderIndex'></header-nav>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <side-bar></side-bar>
      </el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import headerNav from '@components/common/headerNav.vue';
import sideBar from '@components/common/sideBar.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'index',
  components: {
    'header-nav': headerNav,
    'side-bar': sideBar
  },
  data() {
    return {
      activeHeaderIndex: '1',
    };
  },
  computed: {
    ...mapGetters(['count'])
  },
  methods: {
    ...mapActions([
      'addCount'
    ]),
    add(){
      this.addCount({num: 10});
    }
  }
};
</script>
<style lang="scss">
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0 !important;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
