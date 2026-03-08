<template>

<section class="newsArrivals container-fluid padding-top ">

    <div class="container text-center">
<div class="mb-5">
    <h1 class="display-5 fw-bold mb-4">New Arrivals</h1>
<p class="text-arrivals colorText h5 lh-base ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis <br>ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>


</div>
    </div>
    <div class="container pb-5">

        <div  class="d-flex justify-content-center gap-4">
             
                  <div class="colorText  py-3 px-5  p rounded-2 bg-btn" >Men’s Fashion</div>
                    <div class="colorText  py-3 px-5  p rounded-2 bg-dark text-white shadow" >Women’s Fashion</div>
                     <div class="colorText  py-3 px-5  p rounded-2 bg-btn" >Women Accessories</div>
                        <div class="colorText  py-3 px-5  p rounded-2 bg-btn" >Men Accessories</div>
                          <div class="colorText  py-3 px-5  p rounded-2 bg-btn" >Discount Deals</div>
        </div>
    </div>

    <div class="container pt-3   ">

        <div class="row gap-5  justify-content-center ">


            <div class="col-md-3  shadow rounded-2  " v-for="produto in cardArrivals" :key="produto.id">

<div class="card border-0 py-2 px-3 bg-white   h-100">

<img :src="produto.image" alt="img" class="img-fluid">
    <div class="card-body">
        <div class="d-flex justify-content-between align-item-center">
<div class="fw-bold  " > {{ produto.name }}</div>
<div>
<img src="../assets/newsArrivals/Vector.svg" alt="estrelas">
<img src="../assets/newsArrivals/Vector.svg" alt="estrelas">
<img src="../assets/newsArrivals/Vector.svg" alt="estrelas">
<img src="../assets/newsArrivals/Vector.svg" alt="estrelas">
<img src="../assets/newsArrivals/Vector.svg" alt="estrelas">

</div>
        </div>


    <div class="text-start">
            <div class="small colorText "> Al Karam</div>
        <div class="small py-4 colorText fw-bold small">(4.1k) Customer Reviews</div>
    </div>

                <div class="d-flex justify-content-between align-items-center">

<div class="fw-bold">{{ produto.price }}</div>

<div class="text-danger">Almost Sold Out</div>
           </div>
    </div>
</div>
       </div>
   </div>
<div class="text-center pt-5 ">
    
   <button class=" btn btn-dark text-white py-3 px-5 shadow rounded-3">
    View More
   </button>
</div>

    </div>

    

</section>

</template>
<script>

export default{

    data(){
        return{
             cardArrivals:[
        {id:1,name:"shiny dress",price:"$ 95.50",image:new URL('../assets/newsArrivals/Images.svg', import.meta.url).href},
        {id:2,name:"Long Dress",price:"$ 95.50", image:new URL('../assets/newsArrivals/Images (1).svg', import.meta.url).href},
        {id:3,name:"Full Sweater",price:"$ 95.50", image:new URL('../assets/newsArrivals/Images (2).svg', import.meta.url).href},
        {id:4,name:"White Dress",price:"$ 95.50", image:new URL('../assets/newsArrivals/Images (3).svg', import.meta.url).href},
        {id:5,name:"Colorful Dress",price:"$ 95.50", image:new URL('../assets/newsArrivals/Images (4).svg', import.meta.url).href},
        {id:6,name:"White Shirt",price:"$ 95.50", image:new URL('../assets/newsArrivals/Images (5).svg', import.meta.url).href},
      ] 


        }
    }


}</script>

<style scoped>

.colorText{
    color:#8A8A8A;
}

.bg-btn{
    background-color: #FAFAFA;
}

.padding-top{
       padding-top: 141px;
}
</style>