<template>
  <div class="list">
    <Header :getTitle="{...title}"></Header>
    <ul class="showBox">
      <h1>商品数目：<b>{{ total }}</b></h1>
      <li v-for="(item,index) in goodslists" :key="index" @click="details($event)" :class="item.id">
        <img :src="item.imgpath" alt :onerror="errorImg" />
        <p class="price">{{item.price}}</p>
        <p class="name">{{item.name}}</p>
        <p class="desc">{{item.desc}}</p>
        <p class="hot">销量：{{item.hot}}</p>
      </li>
    </ul>

    <Loading :isShow="show"></Loading>     <!-- Loading... -->
  </div>
</template>

<script>

import Header from '../commons/Header.vue';
import Loading from "../commons/Loading.vue";

export default {
  name: "list",
  components: {
    Header,Loading
  },
  data() {
    return {
      title: {
          name: '',
          style: ''
      },
      errorImg: 'this.src="static/error.png"', // 图片无法加载时，显示默认图片
      goodslists: [],
      show: true,
      total: ''
    };
  },
  methods: {
    getData() {
      let data = sessionStorage.getItem('data');    // 获取浏览器缓存的数据
      // console.log(data);

      if(data == null){
        this.$axios
        .get("http://127.0.0.1:3000/goodslists/gets")
        .then(response => {
          // console.log(response.data.data);
          this.goodslists = response.data.data;
          this.total = response.data.data.length;
          sessionStorage.setItem('data',JSON.stringify(response.data.data));    // 商品的数据
          this.closeLoading();
        })
        .catch(function(error) {
          console.log(error);
        });
      }
      else{
        this.goodslists = JSON.parse(sessionStorage.getItem('data'));    // 获取浏览器缓存的数据
        this.total = this.goodslists.length;
        // console.log(JSON.stringify(this.goodslists));
        this.closeLoading();
      }
      
        
    },
    setTitle() {
      this.title.name = '列表页';
      this.title.style = 'background: #58bc58;';   // 改变 头部Header 的背景颜色
    },
    details(event) {
        // console.log(event.currentTarget.className);
        sessionStorage.setItem('id',event.currentTarget.className);    // 商品的id
        this.$router.push('/details');
    },
    openLoading() {
      // console.log('开')
      this.show = true;
    },
    closeLoading() {
      // console.log('关')
      this.show = false;
    }
  },
  mounted() {
    this.setTitle();
    this.openLoading();
    this.getData();
  }
};
</script>
<style lang="less" scoped>
@import url("../../styles/main.less");

.list {
  
  .margin(50,0,50,0);  // 整体上下移 50px，给头部和底部留出位置

  .showBox {
    list-style: none;
    .w(350);
    // border: 1px solid #666;
    .br(10);
    .margin(10, 7, 10, 8);
    .padding(5, 5, 5, 5);
    overflow: hidden;

    h1 {
      .w(345);
      .h(30);
      .fs(18);
      .lh(30);
      .bg(#efefef);
      text-align: right;
      .padding(0,10,0,0);
    }

    li {
      .w(90);
      .h(200);
      border: 1px solid #999;
      .br(5);
      float: left;
      .margin(7, 7, 7, 7);
      .padding(5, 5, 5, 5);

      img {
        .w(90);
        .h(56);
      }

      .price {
        .w(90);
        .fs(14);
        .lh(26);
        font-weight: 900;
        color: #f00;

        &:before {
          content: "￥";
          // font-family: 宋体;
          .fs(14);
          .lh(26);
          color: #f00;
        }
      }

      .name {
        .w(90);
        .padding(5, 0, 5, 0);
        .fs(14);
        font-weight: 900;
        .lh(20);
        color: #123;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .desc {
        .w(90);
        .h(54);
        .fs(12);
        .lh(18);
        color: #666;
        .margin(0, 0, 5, 0);
        overflow: hidden;
        -webkit-line-clamp: 3;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }

      .hot {
        .w(80);
        text-align: right;
        .padding(0, 5, 0, 5);
        .fs(12);
        .lh(26);
        .margin(5, 0, 0, 0);
        color: #678;
      }
    }
  }

}
</style>