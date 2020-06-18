<template>
  <div class="loading">
    <div class="mask" v-show="isShow" @touchmove.prevent @mousewheel.prevent>
      <!-- loading... -->
      <div class="load">
        <img src="static/loading.gif" alt="Loading..." />
        <p>加载中</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loading",
  components: {},
  props: {
    isShow: ''     // 需要在引用的父组件设定方法改变isShow的值然后通过props传过来
  },
  data() {
    return {
      
    };
  },
  methods: {},
  created() {},
  mounted() {},
  beforeDestroy() {}
};
</script>

<style lang='less' scoped>
@import url("../../styles/main.less");

.loading {
  .mask {
    position: fixed;
    .top(0);
    .right(0);
    .bottom(0);
    .left(0);
    background: rgba(0, 0, 0, 0.6);

    .load {
      .w(80);
      .h(80);
      .bg(#fff);
      .br(40);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);

      img {
        .br(20);
        .w(40);
        .h(40);
        .margin(2, 20, 0, 20);
      }

      p {
        .w(80);
        .h(26);
        .fs(14);
        .lh(26);
        color: #123;
        text-align: center;
        position: absolute;
        .top(42);
        .left(0);
      }
    }
  }
}
</style>
