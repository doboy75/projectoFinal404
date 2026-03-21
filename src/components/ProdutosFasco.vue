<template>
    <NavReutilizavel></NavReutilizavel>

<div class="container py-5">
    <div class="row">
        <div class="col-md-6 d-flex">
<div class="me-3">
    <ul class="list-unstyled">

        <li v-for="imagen in imagens" :key="imagen" class="mb-3">
            <img :src="imagen.img" alt="imagens de roupas" class="img-thumbnail thumb" @click="mudarImg(imagen)">

        </li>

    </ul>
</div>
<div>

    <img src="../assets/35_056fa070-83a6-4279-8627-bbb11aace6e8.jpg (1).svg" alt="roupas" class="img-fluid img-principal">
</div>


        </div>

        <div class="col-md-6">

            <h5 class="text-muted text-color">FASCO</h5>
          <div class="d-flex justify-content-between">
              <h2> Denim Jacket</h2>    <img src="../assets/estrelas/Vector (4).svg" alt="estrelas">
          </div>
            <div class="mb-3">
               <img src="../assets/estrelas/Vector (3).svg" alt="estrelas">
               <img src="../assets/estrelas/Vector (3).svg" alt="estrelas">
               <img src="../assets/estrelas/Vector (3).svg" alt="estrelas">
               <img src="../assets/estrelas/Vector (3).svg" alt="estrelas">
               <img src="../assets/estrelas/Vector (4).svg" alt="estrelas">
              
               (3)

            </div>
            <h4 class="mb-4">$39.00 
                <span class="text-decoration-line-through fs-6 text-cor fs-3" >$59.00</span>
                <span class="text-white bg-danger fs-6 rounded-4 py-1 px-3 ms-2">SAVE -30%</span>
            </h4>
            <div class="mb-4 ">
                <span class="me-3"><img src="../assets/estrelas/Vector (5).svg" alt=""></span>
                <span class="text-color text-decoration-inline-block  ">24 people are viewing this right now</span>

            </div>
            <div class="alert alert-danger py-2">
Hurry up! Sale ends in:{{ tempo }}
            </div>

            <div class="mb-3">
                <p class="fw-bold fs-4">Size:M</p>
                <button v-for="size in sizes" :key="size" class="btn btn-outline-dark me-2" :class="{active: tamanhoSelecionado===size}" @click=" selecionarTamanho(size)">{{ size }}</button>
            </div>
            <div class="mb-3">
<p class="fw-bold fs-4 ">Color:Blue</p>
<span v-for="core in cores" :key="core" class="color-circulo me-2" :style="{ background:core}" @click="selecionarCor(core)"></span>

            </div>

            <div class="text-cor fs-4 mb-3">quantity</div>
            <div class="d-flex align-items-center gap-3 my-3">

             <div class="d-flex justify-content-center align-items-center  border fs-4 ">
                   <button class="btn fs-4 " @click="diminuir">-</button>
                <span class="mx-3">{{ quantidade }}</span>
                
                <button class="btn fs-4" @click="aumentar">+</button>
             </div>
                    <button class="btn btn-outline-secondary border-dark border-2 w-100">Add To cart</button>
            </div> 

            <div class="d-flex justify-content-between fs-5 border-dark border-bottom py-3 mb-4 ">
                <div><span ><img src="../assets/Nova pasta/Vector (6).svg" alt="seta"> Compare</span></div>
                  <div><span ><img src="../assets/Nova pasta/Vector (7).svg" alt="seta"> Ask a question</span></div>
                    <div><span ><img src="../assets/Nova pasta/Vector (8).svg" alt="seta"> Compare</span></div>
            </div>

            <div class=" py-2  "><img src="../assets/Nova pasta/Vector (9).svg" alt="logo"> <span class="fw-bold fs-5"> Estimated Delivery:</span> <div class="muted text-cor  ">Jul 30 .Aug 03</div></div>
            <div class=" py-2  "><img src="../assets/Nova pasta/Vector (10).svg" alt="logo"> <span class="fw-bold fs-5"> Free Shipping & returns:</span> <div class="muted text-cor  "> On all orders over $75</div></div>
               
            <div class="py-3 px-5 bg-light text-center mt-3">

                <span class="mb-2 text-decoration-inline-block"><img src="../assets/Nova pasta/trustbag.png.svg" alt=""></span>
                <h5 class="mt-2">Guarantee safe & segure checkout</h5>
            </div>
        
        </div>
    </div>


</div>



<HugoBoss></HugoBoss>
<DealsMonth></DealsMonth>
<SubscribeFasco></SubscribeFasco>
<FooterFasco></FooterFasco>




</template>

<script>
import DealsMonth from './DealsMonth.vue';
import FooterFasco from './FooterFasco.vue';
import HugoBoss from './HugoBoss.vue';
import NavReutilizavel from './NavReutilizavel.vue';
import SubscribeFasco from './SubscribeFasco.vue';
export default{

    components:{
        NavReutilizavel,HugoBoss,DealsMonth,SubscribeFasco,FooterFasco
    },
    data(){
        return{
            imagens:[
                
               {img:new URL('../assets/produtos/35h.jpg.svg', import.meta.url).href},
                {img:new URL('../assets/produtos/35_056fa070-83a6-4279-8627-bbb11aace6e8.jpg.svg', import.meta.url).href},
                 {img:new URL('../assets/produtos/35a_ec779b58-f23e-478c-b196-685009bbe4c6.jpg.svg', import.meta.url).href},
                  {img:new URL('../assets/produtos/35b_7e4a33fc-59f4-4a6e-88f8-030c501ae8ad.jpg.svg', import.meta.url).href},
                   {img:new URL('../assets/produtos/35c_a4f661f6-7857-43d8-8894-3ba193916223.jpg.svg', import.meta.url).href},
 {img:new URL('../assets/produtos/35e.jpg.svg', import.meta.url).href},

            ],selecionarImage:{img:new URL('../assets/produtos/35d.jpg.svg', import.meta.url).href}

            ,sizes:["M","L","XL","XXL"],
            tamanhoSelecionado:["M"],
            cores:["#8DB4D2","#000000","#FFD1DC"],
            corSelecionado:["red"],
            quantidade:1,
            tempo:"00,05:59"
        }
        
    },
    methods:{
        mudarImg(imagen){
            this.selecionarImage=imagen 
        },
        selecionarTamanho(size){
            this.tamanhoSelecionado=size
        },
        selecionarCor(core){
            this.corSelecionado=core
        },
        aumentar(){
            this.quantidade++
        },
        diminuir(){
            this.quantidade--
        }

    }
}</script>

<style scoped>

.img-principal{
    max-height: 500px;
}
.thum{
    width: 60px;
    cursor: pointer;
}

.color-circulo{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
    border: 2px solid #ccc;
}

.text-cor{
    color: #666666;
}

</style>