<template>
  <div class="back">
                      <!-- 刷新当前页面时中间跳转的空白页 -->    

  </div>
</template>

<script>

export default {
  name: "back",
  components: {
    
  },
  data() {
    return {
      
    };
  },
  methods: {
    goBack() {
        // console.log('刷新当前页面');
        this.$router.replace({
            path: sessionStorage.getItem("path"),     // path: '/test'
            name: sessionStorage.getItem("path").slice(1)      // '/test' 删掉‘/’ 'test'
        })
    }
  },
  created() {
      this.goBack();
  },
  mounted() {
    
  },
  beforeDestroy() {}
};
</script>

<style lang='less' scoped>
@import url("../../styles/main.less");



</style>
