<template>
<div class="container py-5">
    <div class="row">
        <div class="col-md-6 d-flex">
<div class="me-3">
    <ul class="list-unstyled">

        <li v-for="imagen in imagens" :key="imagen" class="mb-3">
            <img :src="imagen" alt="imagens de roupas" class="img-thumbnail thumb" @click="mudarImg(imagen)">

        </li>

    </ul>
</div>
<div>

    <img src="selecionarImage" alt="roupas" class="img-fluid img-principal">
</div>


        </div>

        <div class="col-md-6">

            <h5 class="text-muted">FASCO</h5>
            <h2> Denim Jacket</h2>
            <div>
               <img src="../assets/newsArrivals/Vector.svg" alt="estrelas">
               <img src="../assets/newsArrivals/Vector.svg" alt="estrelas">
               <img src="../assets/newsArrivals/Vector.svg" alt="estrelas">
               <img src="../assets/newsArrivals/Vector.svg" alt="estrelas">
               <img src="../assets/newsArrivals/Vector.svg" alt="estrelas">

            </div>
            <h4>$39.00 
                <span class="text-decoration-line-through fs-6">$55.00</span>
                <span class="badge -bg-danger">-30%</span>
            </h4>
            <div class="alert alert-danger py-2">
Hurry up! Sale ends in:{{ tempo }}
            </div>

            <div class="mb-3">
                <p class="fw-bold">Size</p>
                <button v-for="size in sizes" :key="size" class="btn btn-outline-dark me-2" :class="{active: tamanhoSelecionado===size}" @click=" selecionarTamanho(size)">{{ size }}</button>
            </div>
            <div class="mb-3">
<p class="fw-bold ">Color:</p>
<span v-for="core in cores" :key="core" class="color-circulo me-2" :style="{ background:core}" @click="selecionarCor(core)"></span>

            </div>

            <div class="d-flex align-items-center mb-3">

                <button class="btn btn-outline-secondary" @click="diminuir">-</button>
                <span class="mx-3">{{ quantidade }}</span>
                
                <button class="btn btn-outline-secondary" @click="aumentar">+</button>
            </div> 
            <button class="btn btn-dark w-100">Add To cart</button>
        </div>
    </div>


</div>

</template>

<script>export default{
    data(){
        return{
            imagens:[
               {img:new URL('../assets/newsArrivals/Images (1).svg', import.meta.url).href},
                {img:new URL('../assets/newsArrivals/Images (2).svg', import.meta.url).href},
                 {img:new URL('../assets/newsArrivals/Images (3).svg', import.meta.url).href},
                  {img:new URL('../assets/newsArrivals/Images (4).svg', import.meta.url).href},
                   {img:new URL('../assets/newsArrivals/Images (5).svg', import.meta.url).href},
            ],selecionarImage:{img:new URL('../assets/newsArrivals/Images (1).svg', import.meta.url).href}
            ,sizes:["S","M","L","XL"],
            tamanhoSelecionado:["M"],
            cores:["red","blue","pink"],
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

</style>