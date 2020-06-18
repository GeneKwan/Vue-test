<template>
  <div class="home">
    <Header :getTitle="{...title}"></Header>
    <Banner></Banner>
    <div class="goodsLists">
      <div id="goodsList" v-for="(item,index) in goodsData" :key="index" @click="details($event)" :class="item.id">
        <div class="left">
          <img :src="item.imgpath" alt />
        </div>
        <div class="right">
          <p class="name">{{ item.name }}</p>
          <p class="desc">{{ item.desc }}</p>
          <p class="price">{{ item.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../commons/Header.vue";
import Banner from "../commons/Banner.vue";

export default {
  name: "home",
  components: {
    Header,
    Banner
  },
  data() {
    return {
      title: {
        name: "",
        style: ""
      },
      goodsData: [
        // {
        //   id: "ciub92na09pxrxm57ql3b6r2",
        //   name: "维生素C泡腾片",
        //   type: "1",
        //   desc:
        //     "VC泡腾片（增强免疫力）有助于减轻感冒症状的严重程度和持续时间，支持免疫功能，皮肤的健康和健康的抗氧化活性；含有的维生素C是形成胶原蛋白和肌肤弹性必不可少的，并可以帮助促进轻微伤口愈合过程；同时，它也是是一种抗氧化剂，这有助于支持健康的抗氧化活性，也有助于膳食铁的吸收。",
        //   imgpath:
        //     "https://assets.haituncun.com/media/catalog/product/f/b/fbaauspl30010007x3.jpg?imageView2/0/w/800/h/800",
        //   price: "350.00",
        //   hot: "1387",
        //   time: "2019-10-24 15:01:17",
        //   __v: 0
        // },
        // {
        //   id: "qm8n5cj4mdh3sfpv7rmg1upc",
        //   name: "婴儿沐浴露",
        //   type: "2",
        //   desc: "适合婴儿皮肤的沐浴露",
        //   imgpath:
        //     "http://assets.haituncun.com/media/catalog/product/f/b/fbacncos10060003.jpg?imageView2/0/w/800/h/800",
        //   price: "123.00",
        //   hot: "3232",
        //   time: "2019-10-24 15:04:38",
        //   __v: 0
        // }
      ]
    };
  },
  methods: {
    setTitle() {
      this.title.name = "首页";
      this.title.style = "background: #f60;"; // 改变 头部Header 的背景颜色
    },
    getData() {
      this.$axios
        .get("http://127.0.0.1:3000/goodslists/gets")
        .then(response => {
          // console.log(response.data.data);
          this.goodsData = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    details(event) {
        // console.log(event.currentTarget.className);
        sessionStorage.setItem('id',event.currentTarget.className);    // 商品的id
        this.$router.push('/details');
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

.home {
  .margin(50, 0, 50, 0); // 整体上下移 50px，给头部和底部留出位置

  .goodsLists {
    .w(355);
    .padding(10, 10, 10, 10);

    #goodsList {
      .w(355);
      .h(80);
      border: 1px solid #666;
      // .br(5);
      .margin(0, 0, 10, 0);

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
        .padding(2, 2, 2, 2);

        .name {
          .w(245);
          .h(24);
          .fs(18);
          font-weight: 900;
          .lh(24);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .desc {
          .w(245);
          .h(24);
          .fs(14);
          .lh(24);
          color: #666;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-indent: 1em;    // 文字内容缩进1个字符
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
