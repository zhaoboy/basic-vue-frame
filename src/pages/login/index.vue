<template>
  <div>
    <p class="detail">login</p>
    <el-input v-model="input" placeholder="用户名"></el-input>
    <el-input v-model="password" placeholder="密码" show-password></el-input>
    <el-button type="primary" @click="doLogin">登录</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: '',
      password: '',
    };
  },
  methods: {
    doLogin: function(){
      window.location.href = '/index';
    }
  }
};
</script>
<style lang="scss">
.detail {
  font-size: 24px;
  color: $titleColor;
}
</style>
`
