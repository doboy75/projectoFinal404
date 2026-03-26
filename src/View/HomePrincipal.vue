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

</template>

<script> 
import SubscribeFasco from '../components/SubscribeFasco.vue';
import TestimonialFasco from '../components/TestimonialFasco.vue';
import HomePageFasco from '../components/HomePageFasco.vue'
import HugoBoss from '../components/HugoBoss.vue';
import NavBar from '../components/NavBar.vue';
import NewsArrivals from '../components/NewsArrivals.vue';
import FollowInstagram from '../components/FollowInstagram.vue';
import FooterFasco from '../components/FooterFasco.vue';
import DealsMonth from '../components/DealsMonth.vue';
export default{
    components:{NavBar,HomePageFasco,DealsMonth,NewsArrivals,HugoBoss,FollowInstagram,TestimonialFasco,SubscribeFasco,FooterFasco


    }
}</script>