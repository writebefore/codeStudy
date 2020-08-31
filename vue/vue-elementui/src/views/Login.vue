<template>
  <div class="login">
    <h2>后台管理系统</h2>
    <div class="login-wrapper">
      <p class="input">
        <el-input v-model="username" placeholder="请输入账号"></el-input>
      </p>
      <p class="input">
        <el-input  v-model="password" placeholder="请输入密码" show-password></el-input>
      </p>
      <p class="btn">
        <el-button type="primary" round @click="login">登录</el-button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (!this.username || !this.password) {
        this.$message.error("账号密码不能为空");
      } else if (this.username !== "" && this.password !== "") {
        this.$message.success("登录成功")
        this.$router.push({
          name:'home',
          params:{
            username:this.username
          }
        })
      } else {
        this.$message.error("账号密码错误");
      }
    },
  },
};
</script>

<style scoped>
.login {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: darkkhaki;
}

.login-wrapper {
  margin-top: 30px;
  width: 250px;
}

.input {
  margin-bottom: 20px;
}

.btn button {
  width: 100%;
}
</style>