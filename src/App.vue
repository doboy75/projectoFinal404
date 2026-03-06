<template>
  <NavBar></NavBar>
  <HomePageFasco></HomePageFasco>



  <router-view/>
</template>


<script>

import HomePageFasco from './components/HomePageFasco.vue'
import NavBar from './components/NavBar.vue';



export default {
  components: {
NavBar,HomePageFasco
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
