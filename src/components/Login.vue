<template>
  <div class="login_container">
    <div class="login_box">
      <div class="login_logo">
        <img src="../assets/logo.png" />
      </div>
      <el-form
        label-width="0"
        :model="loginForm"
        :rules="rules1"
        ref="loginFormref"
        class="login_form"
      >
        <el-form-item label="" prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入名字"
            prefix-icon="iconfont h5-icon-icon-username"
          ></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
            prefix-icon="iconfont h5-icon-mimayanjing-01"
          ></el-input>
        </el-form-item>
        <el-form-item label="" class="btns">
          <el-button type="primary" @click="submitForm('loginFormref')"
            >登陆</el-button
          >
          <el-button @click="resetForm('loginFormref')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules1: {
        username: [
          { required: true, message: '请输入登录名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          var { data: userData } = await this.$http.post(
            'login',
            this.loginForm
          )

          if (userData.meta.status == '200') {
            console.log(userData)

            this.$message({
              showClose: true,
              message: '登陆成功',
              type: 'success'
            }) //登陆失败和登陆成功两种不桶的写法
            window.sessionStorage.setItem('token', userData.data.token) //token存储到本地，sessionstorage是关闭网站就消失
            //window.localStorage.setItem("token",userData.data.token);

            this.$router.push('/home')
          } else {
            this.$message.error('登陆失败')
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="less" scoped>
.login_container {
  background-color: #f00;
  height: 100%;
  .el-input__inner {
    border: 1px solid #f00;
  }
}
.login_box {
  width: 450px;
  height: 300px;
  background: #fff;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .login_logo {
    width: 130px;
    height: 130px;
    padding: 10px;
    position: absolute;
    border-radius: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px #dddddd;
    border: 1px solid #dbdbdb;
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.login_form {
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
