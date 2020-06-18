<template>
  <div class="count">
    <Header :getTitle="{...title}"></Header>
    <div class="goodsLists">
      <div class="goodsList" v-for="(item,index) in goodsData" :key="index">
        <div class="left">
          <img :src="item.imgpath" alt="" />
        </div>
        <div class="right">
          <p class="name">
            {{ item.name }}
          </p>
          <p class="price">
            {{ item.price }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Header from '../commons/Header.vue';

export default {
  name: "count",
  components: {
    Header
  },
  data() {
    return {
      title: {
          name: '',
          style: ''
      },
      goodsData: []
    };
  },
  methods: {
    setTitle() {
      this.title.name = '结算页';
      this.title.style = 'background: #392cee;color: #efefef;';   // 改变 头部Header 的背景颜色
    },
    getData() {
      this.goodsData.push(JSON.parse(sessionStorage.getItem('countData')));
      console.log(JSON.parse(sessionStorage.getItem('countData')))
    }
  },
  mounted() {
    this.setTitle();
    this.getData();
  }
};
</script>
<style lang="less" scoped>
@import url("../../styles/main.less");

.count {
  
  .margin(50,0,50,0);  // 整体上下移 50px，给头部和底部留出位置

  .goodsLists {
    .w(355);
    .padding(10,10,10,10);

    .goodsList {
      .w(355);
      .h(80);
      border: 1px solid #666;
      // .br(5);
      .margin(0,0,10,0);

      .left {
        float: left;
        .w(100);
        .h(80);
        .bg(#fff);

        img {
          .w(100);
          .h(80);
        }
      }
      .right {
        float: right;
        .w(241);
        .h(76);
        .bg(#fff);
        .padding(2,2,2,2);

        .name {
          .w(245);
          .h(48);
          .fs(18);
          font-weight: 900;
          .lh(24);
          overflow: hidden;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
        .price {
          .w(245);
          .h(30);
          .fs(16);
          .lh(26);
          font-weight: 900;
          color: #f00;

          &:before {
            content: "￥";
            // font-family: 宋体;
            .fs(16);
            .lh(26);
            color: #f00;
          }
        }
      }
    }

  }
}
</style>