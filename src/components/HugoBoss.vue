<template>
  <div class="container-fluid padding_y mt-5">
    <div class="row bgColor">
      <div class="col-md-5">
        <img
          src="../assets/hugoBoss/image (5).svg"
          :alt="descricao"
          class="img-fluid"
        />
      </div>
      <div class="col-md-7 paddingEsquerda text-start bg_img bgColor py-5">
        <small class="textColor">Women Collection</small>
        <h2 class="h1 fw-bold my-3">Peaky Blinders</h2>

        <p class="border-bottom border-dark d-inline-block p mb-3">
          DESCRIPTION
        </p>
        <p class="textColor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Scelerisque duis.
        </p>

        <div class="d-flex gap-3 align-items-center">
          <p class="textColor pt-3">size:</p>
          <p class="bg-dark px-3 py-1 text-white my-3 rounded-3">
            {{ size.tamanho }}
          </p>
        </div>
        <p class="fw-bold h3 mb-4">{{ size.preco }}</p>

        <button class="btn btn-dark py-2 px-4 shadow">Buy Now</button>
      </div>
    </div>

    <div class="container-fluid py-5">
      <div class="d-flex justify-content-between px-5">
        <div class="d-flex justify-content-center gap-2">
          <span><img src="../assets/hugoBoss/icon (1).svg" alt="tools" /></span>
          <div class="text-start lh-sm gap-0">
            <p class="h5">High Quality</p>
            <p class="small smallColor">crafted from top materials</p>
          </div>
        </div>
        <div class="d-flex justify-content-center gap-2">
          <span><img src="../assets/hugoBoss/icon.svg" alt="tools" /></span>
          <div class="text-start lh-sm">
            <p class="h5">Warrany Protection</p>
            <p class="small smallColor">Over 2 years</p>
          </div>
        </div>
        <div class="d-flex justify-content-center gap-2">
          <span
            ><img src="../assets/hugoBoss/Vector (1).svg" alt="tools"
          /></span>
          <div class="text-start lh-sm">
            <p class="h5">Free Shipping</p>
            <p class="small smallColor">Order over 150 $</p>
          </div>
        </div>
        <div class="d-flex justify-content-center gap-2">
          <span
            ><img
              src="../assets/hugoBoss/2891214031638194523 1.svg"
              alt="tools"
          /></span>
          <div class="text-start lh-sm">
            <p class="h5">24 / 7 Support</p>
            <p class="small smallColor">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      descricao: "modelo da hugoboss",

      size: { tamanho: "M", preco: "$100.00" },
    };
  },
};
</script>


<style scoped>
.textColor {
  color: #767676;
}
.bg_img {
  background-image: url("../assets/hugoBoss/bg.svg");
  background-size: cover;
}
.bgColor {
  background-color: #f8f8f8;
}
.paddingEsquerda {
  padding-left: 17rem;
  padding-right: 17rem;
}
/* .padding_y {
  padding: 12rem 0;
} */
.smallColor {
  color: #484848;
}
</style>