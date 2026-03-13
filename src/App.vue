<template>
  <NavBar></NavBar>
  <HomePageFasco></HomePageFasco>
  <DealsMonth></DealsMonth>
  <NewsArrivals></NewsArrivals>
  <HugoBoss></HugoBoss>
  <FollowInstagram></FollowInstagram>
  <TestimonialFasco></TestimonialFasco>
  <SubscribeFasco></SubscribeFasco>
  <FooterFasco></FooterFasco>
  <FashionFAsco></FashionFAsco>


  

  <div> 
    
  </div>



  <router-view/>
</template>


<script>

import DealsMonth from './components/DealsMonth.vue';
import FashionFAsco from './components/FashionFAsco.vue';
import FollowInstagram from './components/FollowInstagram.vue';
import FooterFasco from './components/FooterFasco.vue';
import HomePageFasco from './components/HomePageFasco.vue'
import HugoBoss from './components/HugoBoss.vue';
import NavBar from './components/NavBar.vue';
import NewsArrivals from './components/NewsArrivals.vue';
import SubscribeFasco from './components/SubscribeFasco.vue';
import TestimonialFasco from './components/TestimonialFasco.vue';




export default {
  components: {
NavBar,HomePageFasco,DealsMonth,NewsArrivals,HugoBoss,FollowInstagram,TestimonialFasco,SubscribeFasco,FooterFasco,FashionFAsco
  },data(){

    return{
     

    }
  }
  
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



</style>
