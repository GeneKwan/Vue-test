<template>
  <div class="footer">
    <div class="nav">
      <ul>
        <router-link
          v-for="(item,index) in navlist"
          :key="index"
          active-class="active"
          @click="goPage(item.path,item.name)"
          tag="li"
          :to="item.path"
        >
          <span>{{item.name}}</span>
        </router-link>
      </ul>
      <div class="gotop" v-show="gotop" @click="toTop">
        <img src="static/top.png" alt />
        <!-- 点击返回顶部 -->
      </div>
      <div class="refresh" @click="reload">
        <!-- 一键刷新页面 -->
        <img src="static/refresh.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
  components: {},
  data() {
    return {
      navlist: [
        { name: "首页", path: "/home", icon: "fa fa-home" },
        { name: "列表", path: "/list", icon: "fa fa-th-large" },
        { name: "详情", path: "/details", icon: "fa fa-rocket" },
        { name: "购物车", path: "/cart", icon: "fa fa-shopping-cart" },
        { name: "我的", path: "/admin", icon: "fa fa-user" }
      ],
      title: "",
      gotop: false
    };
  },
  computed: {},
  methods: {
    goPage(path, name) {
      //   this.$emit("sliderhide");
      this.$router.push(path);
      //   this.title = name;
      //   console.log(666);
      this.$emit("back", "888"); // 触发监听事件@back
    },
    handleScroll() {
      let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
      scrolltop > 30 ? (this.gotop = true) : (this.gotop = false); // 屏幕页面滚动30px，按钮显示
    },
    toTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
    reload() {
      sessionStorage.setItem("path", this.$route.path); // 把当前的路由缓存起来

      this.$router.replace({
        // 跳转到空白页
        path: "/back",
        name: "back"
      });
    }
  },
  mounted() {
    // 此处true需要加上，不加滚动事件可能绑定不成功
  window.addEventListener("scroll", this.handleScroll, true);
  
	// // 活动弹窗的定时显示
	// this.timer = setTimeout(() => {
  //     this.open();
  //   },15000);               // 页面打开10s时显示

  // // 项目启动图
  // this.vueTimer = setTimeout(() => {
  //     this.vueShow = false;
  //   },3000);
  },
  beforeDestroy () {
	  // clearInterval(this.timer); // 销毁定时器
	  // clearInterval(this.vueTimer); // 销毁定时器
	  this.timer = null;
  }
};
</script>
<style lang="less" scoped>
@import url("../../styles/main.less");

.footer {
  display: block;
  .w(375);
  .h(50);
  .bg(#efefef);
  // z-index: 1000;
  position: fixed;
  z-index: 10000;
  bottom: 0px;
  left: 0px;
  right: 0px;
  border-top: 1px solid #bcbcbc;
  .nav {
    .h(48);
    ul {
      list-style: none;
      li {
        float: left;
        .w(75);
        .h(46);
        .fs(18);
        font-weight: 900;
        .lh(46);
        text-align: center;
        color: #666;
        .padding(4, 0, 0, 0);
        opacity: 0.6;
        span {
          display: block;
          .w(75);
          color: #666;
        }

        span {
          .h(46);
          .fs(18);
          .lh(46);
          color: #000;
        }
      }
      .active {
        .bg(#abc);
        opacity: 1;
      }
    }
  }
  .gotop {
    .w(30);
    .h(30);
    text-align: center;
    .fs(16);
    font-weight: 900;
    .lh(24);
    border: 1px solid #666;
    position: fixed;
    .right(5);
    .bottom(150);
    cursor: pointer;
    .br(15);
    color: #666;
    z-index: 8;

    img {
      .w(20);
      .h(20);
      .margin(4, 5, 6, 5);
      opacity: 0.8;
    }
  }
  .refresh {
    .bg(#fff);
    position: fixed;
    .w(30);
    .h(30);
    .fs(10);
    text-align: center;
    .lh(30);
    color: #999;
    .bottom(100);
    .right(5);
    border: 1px solid #666;
    .br(15);
    z-index: 8;

    img {
      .w(20);
      .h(20);
      .margin(5, 5, 5, 5);
      opacity: 0.8;
    }
  }
}
</style>