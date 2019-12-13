<template>
  <div class='index'>
    <header-nav></header-nav>
    <p>Index Page</p>
    <div class="count">
      <span v-text='count'></span>
      <button @click="add">add count</button>
    </div>
    <img src="../../assets/logo.png" alt="">
    <a href="index.html">Index</a>
    <a href="list.html">List</a>
    <a href="detail.html">Detail</a>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>
<script>
import headerNav from '@components/headerNav.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'index',
  components: {
    'header-nav': headerNav
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
.index {
  position: relative;
  font-size: 24px;
  color: $titleColor;
  .count{
    text-align: center;
  }
  img {
    position: relative;
    margin-top: 60px;
    left: 50%;
    transform: translateX(-50%)
  }

}
</style>
