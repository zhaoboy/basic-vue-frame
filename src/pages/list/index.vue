<template>
  <div>
    <header-nav></header-nav>
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
import headerNav from '../../components/headerNav.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'index',
  computed: {
    ...mapGetters(['count'])
  },
  components: {
    'header-nav': headerNav
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
