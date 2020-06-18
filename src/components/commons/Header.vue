<template>
	<div class="header" :style="getTitle.style">
        <div class="back" @click="back">
            <img src="static/back2.png" alt="返回">
        </div>
        <div class="title">
            {{ getTitle.name }}
        </div>
        <div class="menu" @click="more">
            <img src="static/share.png" alt="菜单">
        </div>
        <div class="menus" v-show="show">    <!-- 菜单展开栏 -->
            <div class="bubbleTail"></div>  <!-- 弹框的尖角 -->
            <p>分享一下</p>
            <p>问题帮助</p>
            <p></p>
        </div>
        <div class="mask" v-show="show" @click="close" @touchmove.prevent @mousewheel.prevent></div>     <!-- 遮罩层 -->
	</div>
</template>

<script>
	export default {
		name: "header",
        components: {},
        props: {
            getTitle: {
                type: Object,    // 接收父组件传过来的信息（name,style）（名字，样式）
                default:{}
            }
        },
		data() {
			return {
                show: false
            };
		},
		methods: {
            setTitle () {
                // console.log(this.getTitle);
            },
            back() {
                this.$router.go(-1);  // 跳回上一个页面
            },
            more () {                // 点击展开菜单栏
                this.show = !this.show;
            },
            close () {
                this.show = false;
            }
		},
		mounted() {
			this.setTitle();
		}
	};
</script>


<style lang="less" scoped>
	@import url("../../styles/main.less");

	.header {
        .w(375);
        .h(50);
        // .bg(#f50);
        position: fixed;
        z-index: 10000;
        .top(0);
        .left(0);
        .right(0);
        div {
            float: left;
            .fs(26);
            .lh(50);
            text-align: center;
            font-weight: 900;
        }
        .back,.menu {
            .w(48);
            .h(50);
            // .bg(#ddd);
        }
        .title {
            .w(279);
            .h(50);
            .fs(22);
        }

        img {
            .w(30);
            .h(30);
            .margin(10,9,10,9);
        }

        .menus {
            position: absolute;
            top: 60px;
            right: 3px;
            .w(100);
            .h(160);
            .bg(#fff);
            .br(3);
            .padding(20,10,20,10);
            box-shadow: 0 2px 2px 0 #999;
            z-index: 10;

            .bubbleTail {
                position: absolute;
                bottom: 99%;
                .right(2);
                width: 0;
                height: 0;
                border-width: 10px;
                border-style: solid;
                border-color: transparent;
                border-bottom-width: 10px;
                border-bottom-color: currentColor;
                color: #fff;
            }

            p {
                .h(30);
                .fs(14);
                .lh(30);
                border-top: 1px dashed #dedede;
                color: #666;
                
                &:active {
                    .bg(#eee);
                }
            }
        }

        .mask {
            position: fixed;
            .top(0);
            .right(0);
            .bottom(0);
            .left(0);
            z-index: 9;
            // .bg(#fff);
        }
    }

</style>

