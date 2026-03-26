<template>
<NavReutilizavel></NavReutilizavel>
<div class="container text-center py-5 mb-5 ">
        <h1 class="fs-1 mb-3 " >Shopping Cart</h1>
<div class="d-flex justify-content-center align-items-center gap-4 ">
    <div class="fs-6 ">home</div>
    <span ><img src="../assets/fashion/Vector (6).svg" alt="icone" class="img-fluid "></span>
    <div class="fs-6 ">You Shopping Cart</div>
</div>

</div>

<div class="container d-flex justify-content-between">
    <div>Product</div>
    <div>Price</div>
    <div>Quantity</div>
    <div>Total</div>
</div>
 <div class="d-flex  gap-3 mt-5 border-dark border-bottom border-top py-3">
    <img src="../assets/Nova pasta/Product Image (1).svg" alt="roupas" class="img-fluid img-principal">

    <div>
        <div>        <h3>Mini dress whith Rufled Straps</h3> </div>

        <p class="fs-5 text-color">Color : Red</p>
        <Span class="text-color fs-5 mb-2 border-dark border-bottom">Remove</Span>
      
    </div>
  
        </div>
           <div class="row">
<div class="col-md-7"></div>
            <div class=" col-md-5 text-color fs-5 border-dark border-bottom py-2"><input type="checkbox" class="form-check-input fs-3 border-dark border-2"> For <span class="text-dark">$10.00</span> Please Wrap the Product
            </div>

        </div>
        <div class="row ">
<div class="col-md-7"></div>
<div class="col-md-5">
          <div class="container pt-5">
            <div class=" d-flex justify-content-between ">
                  <span class="text-dark fs-6 fw-bold">Subtotal</span>
            <span class="fs-5 text-dark fw-bold">$100.00</span>
            </div>
<button class="btn btn-dark py-2 fs-5 rounded-3 border-none shadow mt-4 w-100">Checkout</button>
<div class="text-center pt-3"><span class="fs-5  border-bottom border-2 d-inline-block  border-dark" >View Cart</span> </div>
         

        </div>
</div>
        </div>

        

<SubscribeFasco></SubscribeFasco>
<FooterFasco></FooterFasco>
</template>

<script>

import FooterFasco from './FooterFasco.vue';
import NavReutilizavel from './NavReutilizavel.vue';
import SubscribeFasco from './SubscribeFasco.vue';



export default{
    components:{
        NavReutilizavel,SubscribeFasco,FooterFasco
    }

}
</script>

<style scoped>

.text-color{
    color: #BABABA;
}
</style>