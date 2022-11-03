<template>
  <div id="app">
    <Header v-show="$route.meta.isHeaderShow"></Header>
      <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
}
</script>

<style scoped>
#app{
  margin:0;
  position: relative;
  left:0;
  width:100%;
}
</style>
