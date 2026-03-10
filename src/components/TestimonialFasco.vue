<template>
    
<div class="container-fluid bgContainer my-5 padding-testimonial">

        <div class="container py-5 text-center">
        <h2 class="h3 fw-bold mb-4">This Is What Our Customers Say</h2>
        <p class="fs-5 textColor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis</p>
    </div>
<div class="container ">
    <div id="exempleCarousel" class="carousel slide "  data-bs-ride="carousel">
<div class="carousel-inner    shadow ">
    <div  v-for="(testimonial,index)  in depoimento" :key="testimonial.id" class="carousel-item " 
:class="{active:index===0}">
<div class="card border-0   rounded-3">
    <div class="row align-items-center py-5 ">
<div class="col-md-5">
    <img :src="testimonial.image" alt="#" class="img-fluid">

</div>
<div class="col-md-5 text-start">
    <p class=" h5 lh-base textPoimento textPoimento">{{ testimonial.text }}</p>
    <div class="text-warning my-4">
        <img src="../assets/newsArrivals/Vector.svg" alt="estrelas">
        <img src="../assets/newsArrivals/Vector.svg" alt="estrelas"><img src="../assets/newsArrivals/Vector.svg" alt="estrelas"><img src="../assets/newsArrivals/Vector.svg" alt="estrelas">
    </div>
     <div class="h2 fw-bold mb-3 ">{{ testimonial.name }}</div>

        <small class="h5 text-muted  ">{{ testimonial.job }}</small>

</div>

    </div>
</div>

    </div>
   
</div>


<button class="carousel-control-prev " type="button" data-bs-target="#exempleCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" arial-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
</button>

<button class="carousel-control-next " type="button" data-bs-target="#exempleCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" arial-hidden="true"></span>
    <span class="visually-hidden">next</span>
</button>
</div>
</div>
</div>
</template>


<script> export default{
    data(){
        return{
            depoimento:[
                {id:1,text:' You won t regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!',name:"James K.",job:"Traveler", image:new URL('../assets/Testemonial/image (13).svg', import.meta.url).href},
                 
                {id:2,text:' Items That I ordered were the best investment I ever made. I can t say enough about your quality service."',name:"Suzan B.",job:"UI Designer",image:new URL('../assets/Testemonial/image (14).svg', import.meta.url).href},
                
                {id:3,text:' “Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great.”',name:"Megen W.",job:"UI Designer",image:new URL('../assets/Testemonial/image (15).svg', import.meta.url).href}
            ]

            
        }
    }
}</script>

<style scoped>

.textColor{
    color: #8A8A8A;
}
.textPoimento{
    color: #484848;
}
.carousel-control-prev-icon,.carousel-control-next-icon{
  background-color: red;
    border-radius: 50%;
    padding: 17px;
   box-shadow:0 3px 10px rgba(0,0,0,0.2);

}

.padding-testimonial{
    padding-bottom: 144px;
}
.bgContainer{
    background-color: #FAFAFA;
}
</style>