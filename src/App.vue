<template>
  <div id="app">
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>

// import Header from './components/commons/Header.vue';
import Footer from './components/commons/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer
  },
  data() {
    return {
      title: ''
    };
  },
  methods: {
    
  },
  created() {
    
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
