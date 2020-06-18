<template>
  <div class="reg">
    <Header :getTitle="{...title}"></Header>
    <div class="regBox">
      <h1>用户注册</h1>
      <!-- <label class="uName" for="username">用户名</label><input type="text" id="username" required placeholder="设置用户名" /><br />
      <label class="pWord" for="password">密 码</label><input type="password" id="password" required placeholder="数字、字母或下划线" ref="passwords"/><br />-->
      <label class="uName" for="username">
        <img src="static/user.png" alt="用户名" />
      </label>
      <input type="text" id="username" required placeholder="设置用户名" />
      <br />
      <label class="pWord" for="password">
        <img src="static/password.png" alt="密码" />
      </label>
      <input type="password" id="password" required placeholder="数字、字母或下划线" ref="passwords" />
      <br />
      <div class="eyes">
        <img :src="img_src" alt @click="eye" />
      </div>
      <input type="text" id="code" required placeholder="验证码" maxlength="4" />
      <!-- 4位数验证码 -->
      <button class="codes" id="sent" @click="sentCode">{{ this.num }}{{ this.text }}</button>
      <button id="regBtn" @click="reg">立即注册</button>
      <p>
        已有账号？
        <span @click="goPage">前往登陆</span>
      </p>
    </div>
  </div>
</template>

<script>

import Header from '../../commons/Header.vue';

export default {
  name: "reg",
  components: {
    Header
  },
  data() {
    return {
      title: {
        name: "",
        style: ""
      },
      x: 1,
      img_src: "static/eye1.png",
      num: null,
      text: "发送验证码"
    };
  },
  methods: {
    setTitle() {
      this.title.name = "注册界面";
      this.title.style = "background: #f20;"; // 改变 头部Header 的背景颜色
    },
    eye() {
      if (this.x == 1) {
        // console.log('可见');
        this.$refs.passwords.type = "text";
        this.img_src = "static/eye2.png";
        this.x = 2;
      } else {
        // console.log('不可见');
        this.img_src = "static/eye1.png";
        this.$refs.passwords.type = "password";
        this.x = 1;
      }
    },
    sentCode() {
      console.log("发送验证码");
      this.num = 60;
      this.text = " 秒后重新发送";
    },
    reg() {
      console.log("注册");
    },
    goPage() {
      this.$router.push('/login');
    }
  },
  mounted() {
    this.setTitle();
  },
  beforeDestroy() {}
};
</script>

<style lang='less' scoped>
@import url("../../../styles/main.less");
.reg {
  .regBox {
    .w(300);
    .h(360);
    .bg(#fff);
    border: 1px solid #000;
    .br(5);
    .margin(60, 36, 10, 36);
    box-shadow: 0px 5px 10px 0px #999;
    position: relative;

    h1 {
      .fs(20);
      text-align: center;
      .margin(10, 0, 20, 0);
    }

    label {
      display: inline-block;
      .w(60);
      .h(36);
      border-right: 1px solid #333;
      .fs(18);
      .lh(36);
      font-weight: 900;
      border-radius: 5px 0 0 5px;
      color: #000;
      text-align: center;
      .padding(0, 5, 0, 5);
      position: absolute;

      img {
        .w(30);
        .h(30);
        .margin(3, 15, 3, 15);
        opacity: 0.8;
      }
    }

    input {
      .w(190);
      .h(36);
      border: 1px solid #666;
      .br(5);
      .fs(18);
      .lh(36);
      color: #333;
      .padding(0, 10, 0, 80);
      .margin(20, 8, 0, 8);
    }

    #code {
      .w(135);
      .h(36);
      .padding(0, 135, 0, 10);
    }

    .uName {
      .top(77);
      .left(8);
    }

    .pWord {
      .top(134);
      .left(8);
    }

    .eyes,
    .codes {
      position: absolute;
      .top(134);
      .right(10);
      .w(36);
      .h(36);
      border-left: 1px solid #666;
      border-radius: 0 5px 5px 0;
      .fs(16);
      .lh(36);

      img {
        .w(24);
        .h(22);
        .margin(8, 6, 6, 6);
      }
    }

    .codes {
      .w(120);
      .h(36);
      .top(193);
      .right(11);
      .bg(rgb(240, 238, 159));
      text-align: center;
      .fs(20);
      .lh(36);
      color: #333;
    }

    #sent {
      .w(135);
      .fs(16);
    }

    #regBtn,
    #loginBtn {
      .w(280);
      .h(42);
      .br(3);
      border: 1px solid #e01028;
      .bg(#e01028);
      .fs(20);
      .lh(42);
      color: #fff;
      .margin(30, 10, 10, 10);
      &:active {
        background: #ce8301 !important;
        color: #fcf3f3fa !important;
      }
    }

    p {
      .fs(14);
      .h(20);
      text-align: right;
      .padding(0, 12, 0, 10);

      span {
        .fs(16);
        // text-decoration: underline;
        color: #e01028;
      }
    }
  }
}
</style>
