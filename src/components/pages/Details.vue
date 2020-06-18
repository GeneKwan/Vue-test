<template>
  <div class="details">
    <Header :getTitle="{...title}"></Header>
    <div class="goodsDetails">
      <img :src="goodsData.imgpath" alt :onerror="errorImg" @click="enlarge" />
      <p class="price">
        {{ goodsData.price }}
        <span class="cost">{{ cost }}</span>
      </p>
      <p class="name">{{ goodsData.name }}</p>
      <p class="desc">{{ goodsData.desc }}</p>
      <p class="hp">
        <span class="hot">销量：{{ goodsData.hot }}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="place">{{ places }}</span>
      </p>
    </div>

    <div class="collect">
      <img :src="imgPath" @click="collect" alt="收藏">
      <div class="tis" v-show="shows">
        {{ tis }}
      </div>
    </div>
    <button class="addCart" @click="addToCart">加入购物车</button>
    <button class="buyBtn" @click="buy">立即购买</button>

    <div class="dialog" v-show="show">   <!-- 弹窗提示 -->
      {{ msg }}
    </div>

    <Enlarge ref="enlarges">
      <!-- 点击全屏看图 -->
    </Enlarge>
  </div>
</template>

<script>
import Header from "../commons/Header.vue";
import Enlarge from "../commons/Enlarge.vue";

export default {
  name: "details",
  components: {
    Header,
    Enlarge
  },
  data() {
    return {
      title: {
        name: "",
        style: ""
      },
      errorImg: 'this.src="static/error.png"', // 图片无法加载时，显示默认图片
      id: "",
      goodsData: [],
      cost: "",
      places: "",
      show: false,
      msg: '成功添加至购物车！',
      timer: null,
      imgPath: 'static/unCollect.png',
      tis: '取消收藏',
      shows: false
    };
  },
  methods: {
    setTitle() {
      this.title.name = "详情页";
      this.title.style = "background: #f20;"; // 改变 头部Header 的背景颜色
    },
    enlarge() {
      this.$refs.enlarges.enlarge(); // 点击全屏看图
    },
    count() {
      this.cost = (
        parseInt(this.goodsData.price) + parseInt(this.goodsData.price * 0.1)
      ).toFixed(2); // 原价
    },
    place() {
      if (this.goodsData.type == "1") {
        this.places = "广东 广州";
      } else if (this.goodsData.type == "2") {
        this.places = "广东 深圳";
      }
    },
    getGoods() {
      this.id = sessionStorage.getItem("id");
      // console.log(this.id);

      let Obj = new URLSearchParams();
      Obj.append("id", this.id);

      this.$axios({
        url: "http://127.0.0.1:3000/goodslists/findById",
        method: "post",
        data: Obj,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
        .then(response => {
          // console.log(response.data.data[0]);
          this.goodsData = response.data.data[0];
          this.count();
          this.place();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    addToCart() {
      // console.log('添加商品到购物车');
      this.dialog();
      // console.log(this.goodsData);
      let cartData = JSON.parse(sessionStorage.getItem('cartData'));
      if( cartData == null ){
        let cartData = [];
        cartData.unshift(this.goodsData);    // 在数组的开头添加对象unshift(),在末尾添加push()
        sessionStorage.setItem('cartData',JSON.stringify(cartData));
      }
      else{
        cartData.unshift(this.goodsData);    // 在数组的开头添加对象unshift(),在末尾添加push()
        sessionStorage.setItem('cartData',JSON.stringify(cartData));
      }
      

    },
    buy() {
      // console.log('立即购买');
      // this.dialog();
      sessionStorage.setItem('countData',JSON.stringify(this.goodsData));
      this.$router.push('/count');

    },
    dialog() {
      this.show = true;
      setTimeout(() => {
        this.show = false;
      },3000);
    },
    collect() {
      if(this.imgPath == 'static/unCollect.png'){
        this.imgPath = 'static/collect.png';
        this.shows = true;
        this.tis = '已收藏';
        // sessionStorage.setItem('collect',1);
        setTimeout(() => {
          this.shows = false;
        },3000);
      }
      else{
        this.imgPath = 'static/unCollect.png';
        this.shows = true;
        this.tis = '取消收藏';
        // sessionStorage.setItem('collect',0);
        setTimeout(() => {
          this.shows = false;
        },3000);
      }
    },
    panduan() {
      // let num = sessionStorage.getItem('collect');
      // // console.log(num);
      // if(num == 1){
      //   this.imgPath = 'static/collect.png';
      // }
      // else{
      //   this.imgPath = 'static/unCollect.png';
      // }
    }
  },
  mounted() {
    this.setTitle();
    this.getGoods();
    // this.panduan();
  },
  beforeDestroy () {
    clearInterval(); // 销毁定时器
  }
};
</script>
<style lang="less" scoped>
@import url("../../styles/main.less");

.details {
  .margin(50, 0, 50, 0); // 整体上下移 50px，给头部和底部留出位置

  .goodsDetails {
    .w(355);
    .padding(10, 10, 10, 10);
    .fs(16);
    .h(800);

    img {
      .w(355);
      .h(225);
      .margin(0, 0, 10, 0);
    }

    .price {
      .w(355);
      .fs(22);
      .lh(36);
      font-weight: 900;
      color: #f00;

      &:before {
        content: "￥";
        // font-family: 宋体;
        .fs(20);
        .lh(36);
        color: #f00;
      }
    }

    .cost {
      .w(55);
      .fs(18);
      .lh(36);
      color: #666;
      text-decoration: line-through;
      text-decoration-color: #000;

      &:before {
        content: "￥";
        // font-family: 宋体;
        .fs(16);
        .lh(36);
        color: #666;
      }
    }

    .name {
      .w(345);
      .padding(5, 0, 5, 0);
      .fs(20);
      font-weight: 900;
      .lh(36);
      color: #123;
      // overflow: hidden;
      // text-overflow: ellipsis;
      // white-space: nowrap;
    }

    .desc {
      .w(355);
      // .h(78);
      .fs(16);
      .lh(26);
      color: #666;
      .margin(0, 0, 10, 0);
      // overflow: hidden;
      // -webkit-line-clamp: 3;
      // text-overflow: ellipsis;
      // display: -webkit-box;
      // -webkit-box-orient: vertical;
    }

    .hp {
      .w(330);
      text-align: right;
      .padding(0, 15, 0, 10);
      .fs(16);
      .lh(36);
      .margin(5, 0, 0, 0);
      color: #345;

      .hot {
        .w(100);
      }
    }
  }
  .collect {
    .w(42);
    .h(42);
    .fs(20);
    .lh(42);
    color: #111;
    position: fixed;
    .bottom(54);
    .left(35);

    img {
      .w(30);
      .h(30);
      .margin(6,6,6,6);
    }

    .tis {
      .w(80);
      .h(30);
      .fs(16);
      .lh(30);
      border: 1px solid #999;
      .br(3);
      .bg(#000);
      opacity: 0.8;
      color: #fff;
      text-align: center;
      position: absolute;
      .top(-32);
      .left(-20);

    }
  }
  .buyBtn {
    .w(120);
    .h(42);
    .br(3);
    border: 1px solid #f60;
    .bg(#f60);
    .fs(20);
    .lh(42);
    color: #fff;
    position: fixed;
    .bottom(54);
    .right(5);
    &:active {
      background: #eb0e07 !important;
      color: #fcf3f3fa !important;
    }
  }
  .addCart {
    .w(150);
    .h(42);
    .br(3);
    border: 1px solid #e01028;
    .bg(#e01028);
    .fs(20);
    .lh(42);
    color: #fff;
    position: fixed;
    .bottom(54);
    .right(135);
    &:active {
      background: #ce8301 !important;
      color: #fcf3f3fa !important;
    }
  }
  .dialog {
    position: fixed;
    top: 70%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    .bg(#000);
    opacity: 0.8;
    z-index: 6;
    .w(200);
    .h(80);
    .br(5);
    .fs(22);
    .lh(80);
    color: #fff;
    .padding(0,5,0,10);
    text-align: center;
    border: 1px solid #999;
  }
}
</style>