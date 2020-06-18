<template>
  <div class="admin">
    <Header :getTitle="{...title}"></Header>
    <div class="user" @click="login">
      <img src="static/未登录.png" alt />
      <p>未登录</p>
    </div>
    <div class="menu">
      <p>
        <img src="static/设置.png" alt="">
        <span class="name">设置</span>
        <span class="more">﹥</span>
      </p>
    </div>
  </div>
</template>

<script>
import Header from "../commons/Header.vue";

export default {
  name: "admin",
  components: {
    Header
  },
  data() {
    return {
      title: {
        name: "",
        style: ""
      }
    };
  },
  methods: {
    setTitle() {
      this.title.name = "我的";
      this.title.style = "background: #456;"; // 改变 头部Header 的背景颜色
    },
    login() {
      this.$router.push('/login');
    }
  },
  mounted() {
    this.setTitle();
  }
};
</script>
<style lang="less" scoped>
@import url("../../styles/main.less");

.admin {

  .margin(52,0,50,0);  // 整体上下移 50px，给头部和底部留出位置

  .user {
    
      img {
        .w(125);
        .h(125);
        .margin(20,125,10,125);
      }
      p {
        .w(375);
        .h(36);
        .fs(20);
        .lh(36);
        text-align: center;
        color: #666;
      }
  }
  .menu {
    .w(375);
    .margin(100,0,0,0);

    p {
      .w(355);
      .h(48);
      .fs(20);
      .lh(48);
      .padding(0,10,0,10);
      border-top: 1px solid #666;
      border-bottom: 1px solid #666;

      img {
        float: left;
        .w(26);
        .h(26);
        .margin(11,10,11,0);
      }
      .name {
        float: left;
      }
      .more {
        float: right;
        .w(60);
        .fs(36);
        .lh(48);
        text-align: right;
        color: #666;
      }
    }
  }
  
}
</style>