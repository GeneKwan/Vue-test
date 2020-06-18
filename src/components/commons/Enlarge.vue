<template>
	<div class="enlarge">     <!-- 点击浏览大图 组件 -->
        
        <div class="mask" v-show="show" ref="mask" @click="change" @touchmove.prevent @mousewheel.prevent>
            
        </div>      
        <div class="large" v-show="show">
            <img :src="this.img_src" alt="MM" @click="close">
        </div>
	</div>
</template>

<script>

	export default {
		name: "enlarge",
		components: {
            
        },
		data() {
			return {
                img_src: '',
                show: false,
                g: 1
            };
		},
		methods: {
            enlarge (event) {
                this.show = true;
                var e = event || window.event;
                // console.log(e.target.src);
                this.img_src = e.target.src;

            },
            close () {
                this.show = false;
            },
            change () {                // 点击遮罩层改变遮罩层的背景颜色

                if(this.g == 1){
                    this.$refs.mask.style.background = 'rgba(250, 250, 250, 1)';
                    this.g = 2;
                }
                else {
                    this.$refs.mask.style.background = 'rgba(0, 0, 0, 0.8)';
                    this.g = 1;
                }
            }
		},
		mounted() {
			
		}
	};
</script>


<style lang="less" scoped>
    @import url("../../styles/main.less");

	.enlarge {
        
        .mask {
            position: fixed;
            .top(0);
            .bottom(0);
            .left(0);
            .right(0);
            z-index: 1;
            background: rgba(0, 0, 0, 0.8);
        }

        .large {
            position: fixed;
            .w(375);
            .h(240);
            .bg(#fff);
            top: 50%;
            left: 50%;
            transform:translateX(-50%) translateY(-50%);
            z-index: 10;

            img {
                .w(375);
                .h(240);
            }
        }
    }

</style>

