<template>


<div class=" container-fluid seccao-deals  bg-seccao-deals ">
<div class="container">
<div class="row justify-content-center  ">
<div class="col-md-6 text-start">
<h2 class="h2 fw-bold colorTitulo mb-4 " style="font-size: 46px;">Deals Of The Month</h2>
<p class="colorTexto mb-5 h5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>

<button class="btn btn-dark py-3 px-5 mb-5 shadow  border-0 ">Buy Now</button>
<p class="h2  fw-bold mb-4">Hurry, Before It’s Too Late!</p>

<div class="d-flex  gap-4">

    <div class="text-center ">
    <div class="rounded-3 bg-white shadow mb-4"> <img src="../assets/ofertas/02.svg" alt="" class="   img-fluid p-4 "></div>
     <div>Days</div>
   </div>
    <div class="text-center ">
    <div class="rounded-3 bg-white shadow mb-4"> <img src="../assets/ofertas/06.svg" alt="" class="   img-fluid p-4 "></div>
     <div>Hr</div>
   </div>
    <div class="text-center ">
    <div class="rounded-3 bg-white shadow mb-4"> <img src="../assets/ofertas/05.svg" alt="" class="   img-fluid p-4 "></div>
     <div>Mins</div>
   </div>
    <div class="text-center ">
    <div class="rounded-3 bg-white shadow mb-4"> <img src="../assets/ofertas/30.svg" alt="" class="   img-fluid p-4 "></div>
     <div>Sec</div>
   </div>
  
</div>

</div>


<div class="col-md-6  ">
<div class="d-flex gap-3 ">
    <img src="../assets/ofertas/image (2).svg" alt="" class="img-fluid">
    <img src="../assets/ofertas/image (3).svg" alt="" class="img-fluid">    </div>
  
</div>
</div>

</div>

</div>
</template>

<script> export default{

data(){

return{
    colorTitulo:"colorTitulo"
}

}
}</script>


<style scoped>

.colorTitulo{

    color:#484848;
}

.colorTexto{
    color: #8A8A8A;
}
.bg-seccao-deals{
   background-color: #FAFAFA;
   padding-top: 121px;
}
</style>


