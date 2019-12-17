<template>
  <el-container>
    <el-header>
      <header-nav :activeHeaderIndex='activeHeaderIndex' v-if="headerShow"></header-nav>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <side-bar></side-bar>
      </el-aside>
      <el-container>
        <el-main>
          <button @click="showHeaderMethod()">Show</button>
          <button @click="hideHeaderMethod()">Hide</button>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import headerNav from '@components/common/headerNav.vue';
import sideBar from '@components/common/sideBar.vue';
import Vue from 'vue';
import Vuex from 'vuex';
import { mapGetters, mapActions } from 'vuex';
Vue.use(Vuex);

const state = { //要设置的全局访问的state对象
  isShowHeader: true,
  changableNum:0
};
const getters = {   //实时监听state值的变化(最新状态)
  isHeaderShow(state) {  //方法名随意,主要是来承载变化的showFooter的值
    return state.isShowHeader;
  },
};
const mutations = {
  showHeader(state) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
    state.isShowHeader = true;
  },
  hideHeader(state) {  //同上
    state.isShowHeader = false;
  },
};
const actions = {
  hideHeaderAction(context) {  //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
    context.commit('hideHeader');
  },
  showHeaderAction(context) {  //同上注释
    context.commit('showHeader');
  },
};
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

export default {
  store,
  name: 'index',
  components: {
    'header-nav': headerNav,
    'side-bar': sideBar
  },
  data() {
    return {
      activeHeaderIndex: '1',
      // isShowHeader: this.$store.getters.isHeaderShow,
    };
  },
  computed: {
    headerShow(){
      return this.$store.getters.isHeaderShow;
    },
    ...mapGetters(['count'])
  },
  methods: {
    ...mapActions([
      'addCount'
    ]),
    showHeaderMethod() {
      this.$store.dispatch('showHeaderAction');
    },
    hideHeaderMethod() {
      this.$store.dispatch('hideHeaderAction');
    },
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
