<!--
 * @Author: LHN
 * @Date: 2020-10-01 14:47:55
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-01 16:16:44
 * @description: In User Settings Edit
 * @FilePath: \vue-mongoDB\class-helper\src\views\login\index.vue
-->
<template>
  <div class="login-container">
    <img class="logo" src="@/assets/daike.png" />

    <van-cell-group class="box">
      <van-field
        v-model="account"
        label-align="left"
        required
        clearable
        label="用户名"
        icon="question"
        placeholder="请输入用户名"
        @click-icon="handleQuestion"
      />

      <van-field
        v-model="password"
        label-align="left"
        type="password"
        clearable
        label="密码"
        placeholder="请输入密码"
        required
      />

      <van-field
        v-show="!isLogin"
        v-model="rePassword"
        label-align="left"
        type="password"
        clearable
        label="重复密码"
        placeholder="请再次输入密码"
        required
      />
    </van-cell-group>

    <van-row>
      <van-button size="small" @click="handleRegister">
        {{ isLogin ? "注 册" : "已有账号" }}
      </van-button>

      <van-button
        type="primary"
        class="btn-login"
        size="small"
        @click="handleLogin"
      >
        {{ isLogin ? "登 录" : "注册并登录" }}
      </van-button>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      password: "",
      rePassword: "",
      isLogin: true,
    };
  },
  methods: {
    handleQuestion() {},
    handleRegister() {
      this.isLogin = !this.isLogin;
    },
    handleLogin() {
      if (this.account.trim() == "" || this.password.trim() == "") {
        this.$toast.fail("用户名或密码不能为空");
        return;
      } else {
        if (this.isLogin) {
          this.showLoginTip();
          this.login();
        } else if (!this.isLogin) {
          this.showLoginTip();
        }
      }
    },
    showLoginTip() {
      this.$toast.loading({
        message: "登录中",
        forbidClick: true,
        loadingType: "spinner",
        duration: 0,
      });
    },
    login() {
      console.log(this.$http);
      this.$http
        .login({
          account: this.account,
          password: this.password,
        })
        .then((res) => {
          this.$toast.clear();
          this.$router.push("/home");
          console.log(res);
        });
    },
  },
};
</script>

<style lang='less'>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .logo {
    width: 300px;
    margin: 100px 0 20px;
  }

  .box {
    width: 280px;
    margin-bottom: 20px;
  }

  .btn-login {
    margin-left: 20px;
  }
}
</style>