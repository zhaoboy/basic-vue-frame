<template>
  <div>
    <header-nav :activeHeaderIndex='activeHeaderIndex'></header-nav>
    <p class="list">List Page</p>
    <div class="count">
      <span v-text='count'></span>
      <button @click="add">add count</button>
    </div>
    <a href="index.html">Index</a>
    <a href="list.html">List</a>
    <a href="detail.html">Detail</a>
  </div>
</template>
<script>
import headerNav from '../../components/common/headerNav.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'index',
  components: {
    'header-nav': headerNav
  },
  data() {
    return {
      activeHeaderIndex: '2',
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
.list {
  font-size: 24px;
  color: $titleColor;
}
</style>
