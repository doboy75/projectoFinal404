<template>
  <div id="home" class="container-fluid">
    <div class="container">
      <div class="row gap-3 d-flex justify-content-center">
        <div class="col-md-3 rounded-3 bgColorCard padding-card">
          <div class="d-flex justify-content-center alturaFixa bgColorCard">
            <img
              src="../assets/image 2 28.svg"
              alt=""
              class="alturaFixa hidden img-fluid"
            />
          </div>
        </div>
        <div class="col-md-4 rounded-3">
          <div class="imgCorte">
            <div class="bgColorCard rounded-3">
              <img
                src="../assets/image.svg"
                :alt="imgDescricao1"
                class="imgCorte img-fluid"
              />
            </div>
            <div class="caixa-conteudos text-center">
              <h1 class="titulo-ultimate display-3">ULTIMATE</h1>
              <h1 class="titulo-sale display-1">SALE</h1>
              <p class="texto fs-6">NEW COLLECTION</p>

              <div class="btn btn-dark px-5 py-2 shadow">SHOP NOW</div>
            </div>
            <div class="rounded-3">
              <img
                src="../assets/image (1).svg"
                :alt="imgDescricao2"
                class="imgCorte img-fluid mt-5"
              />
            </div>
          </div>
        </div>
        <div class="col-md-3 rounded-3 bgColorCard padding-card">
          <div class="d-flex justify-content-center alturaFixa bgColorCard">
            <img
              src="../assets/image 227.svg"
              alt=""
              class="alturaFixa hidden img-fluid"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="container py-5">
      <div class="d-flex justify-content-between py-5">
        <img src="../assets/logos/logo.svg" :alt="marcasLogo" />
        <img src="../assets/logos/logo (1).svg" :alt="marcasLogo" />
        <img src="../assets/logos/logo (2).svg" :alt="marcasLogo" />
        <img src="../assets/logos/logo (3).svg" :alt="marcasLogo" />
        <img src="../assets/logos/logo (4).svg" :alt="marcasLogo" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      imgDescricao1: "foto de quatro modelos unidos",
      imgDescricao2: "foto de duas modelas unidas",
      marcasLogo: "logotipos de marcas",
    };
  },
};
</script>

<style scoped>
.alturaFixa {
  height: 550px;
}
.bgColorCard {
  background-color: #e0e0e0;
}

.padding-card {
  padding-top: 144px;
}

.titulo-ultimate {
  font-weight: 500;
  color: #484848;
  letter-spacing: -5.5%;
  margin-top: 17px;
}

.titulo-sale {
  font-size: 117px;
  font-weight: 500;
  color: transparent;
  -webkit-text-stroke: 2px #bbb;
  letter-spacing: -5.5%;
}

.texto {
  color: #484848;

  letter-spacing: 10%;
  font-weight: 300;
}
.imgCorte {
  width: 100%;
  height: auto;
}

.hidden {
  overflow: hidden;
}
</style>



