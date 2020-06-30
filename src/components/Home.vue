<template>
  <div>
    <el-button type="info" @click="loginout()">退出</el-button>
  </div>
</template>
<style lang="less" scoped></style>
<script>
export default {
  methods: {
    loginout() {
      window.sessionStorage.removeItem('token') //删除指定键的数据语法：                                                    //sessionStorage.clear();  删除所有数据：
      this.$router.push('/login')
    }
  }
}
</script>
