<template>
  <div class="test1">
    <Header :getTitle="{...title}"></Header>

    <mt-search cancel-text="取消" placeholder="搜索"></mt-search>

    <mt-switch></mt-switch>

    <mt-button type="primary" @click="openPicker">选择日期</mt-button>
    <!-- <mt-datetime-picker ref="picker" type="time" v-model="pickerValue"></mt-datetime-picker> -->
    <mt-datetime-picker v-model="pickerVisible" ref="picker" type="time" @confirm="handleConfirm"></mt-datetime-picker>
    <p>{{ msg }}</p>

    <mt-progress :value="60">
      <div slot="start">0%</div>
      <div slot="end">100%</div>
    </mt-progress>

    <mt-range v-model="rangeValue">
      <div slot="start">0</div>
      <div slot="end">100</div>
    </mt-range>

    <mt-button type="primary" @click="control">点击操作</mt-button>

    <!-- 无限加载
    <ul
      class="load"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <li v-for="item in list">{{ item }}</li>
    </ul>-->

    <mt-popup v-model="popupVisible" position>居中弹出</mt-popup>
    <br />

    <mt-button type="primary" @click="jiazai">点击加载</mt-button>

    <h1>Feild</h1>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    <mt-field label="网站" placeholder="请输入网址" type="url" v-model="website"></mt-field>
    <mt-field label="数字" placeholder="请输入数字" type="number" v-model="number"></mt-field>
    <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>

    <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="2" v-modal="introduction"></mt-field>

    <mt-field label="邮箱" state="success" v-model="email"></mt-field>
    <mt-field label="邮箱" state="error" v-model="email"></mt-field>
    <mt-field label="邮箱" state="warning" v-model="email"></mt-field>
  </div>
</template>

<script>
import Header from "../../commons/Header.vue";
import {
  Button,
  Search,
  Switch,
  DatetimePicker,
  Progress,
  Toast,
  Popup,
  Lazyload,
  Indicator,
  Field
} from "mint-ui";

export default {
  name: "test1",
  components: {
    Header,
    Button,
    Search,
    Switch,
    DatetimePicker,
    Progress,
    Popup,
    Lazyload,
    Field
  },
  data() {
    return {
      title: {
        name: "",
        style: ""
      },
      show: false,
      msg: "",
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      popupVisible: false
      // imgList: ['http://assets.haituncun.com/media/catalog/product/f/b/fbacncos10060003.jpg?imageView2/0/w/800/h/800','https://assets.haituncun.com/media/catalog/product/f/b/fbaauspl30010007x3.jpg?imageView2/0/w/800/h/800','http://assets.haituncun.com/media/catalog/product/f/b/fbacncos10060003.jpg?imageView2/0/w/800/h/800']
    };
  },
  methods: {
    setTitle() {
      this.title.name = "Test1";
      this.title.style = "background: green;"; // 改变 头部Header 的背景颜色
    },
    openPicker() {
      this.$refs.picker.open();
    },
    handleConfirm(pickerVisible) {
      this.msg = pickerVisible;
    },
    control() {
      Toast("操作成功 !");
      this.popupVisible = true;
    },
    jiazai() {
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
      setTimeout(() => {
        Indicator.close();
      }, 3000);
    },
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
      }, 2500);
    }
  },
  mounted() {
    this.setTitle();
  }
};
</script>
<style lang="less" scoped>
@import url("../../../styles/main.less");

.test1 {
  .margin(50, 0, 50, 0); // 整体上下移 50px，给头部和底部留出位置
  p {
    .fs(20);
  }
  .load {
    li {
      .fs(26);
      .lh(36);
      text-align: center;
    }
  }
  h1 {
      .w(375);
      .h(50);
      .fs(26);
      text-align: center;
      .lh(50);
      .bg(#efefef);
      .margin(5,0,0,0);
  }
}
</style>
