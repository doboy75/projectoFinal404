<template>
  <div class="container d-flex justify-content-between mb-3">
    <h1 class="brand fw-bold">Shopping Cart</h1>
    <span>X</span>
  </div>

  <div class="container">
    <h2 class="muted text-color">
      Buy <span class="text-dark fw-bold">$122.35</span> More And Get
      <span class="text-dark fw-bold">Free Shipping</span>
    </h2>

    <div class="d-flex gap-3 mt-5 border-dark border-bottom pb-3">
      <img
        src="../assets/Nova pasta/Product Image (1).svg"
        alt="roupas"
        class="img-fluid img-principal"
      />

      <div>
        <h3>Denim jacket</h3>
        <p class="fs-3 text-color">color : Red</p>
        <Span class="text-dark fs-3 mb-2">$14.60</Span>
        <div class="py-2 px-4 bg-light fs-3 d-flex align-items-center">
          <button class="btn btn-outline-prmary fs-3">-</button>
          <span> 0{{ quantidade }}</span>
          <button class="btn btn-outline-prmary fs-3">+</button>
        </div>
      </div>
    </div>

    <div class="container altura">
      <div class="text-color fs-3">
        <input
          type="checkbox"
          class="form-check-input fs-3 border-dark border-2"
        />
        For <span class="text-dark">$10.00</span> Please Wrap the Product
      </div>
    </div>

    <div class="container pt-5">
      <div class="d-flex justify-content-between">
        <span class="text-dark fs-3 fw-bold">Subtotal</span>
        <span class="fs-3 text-dark fw-bold">$100.00</span>
      </div>
      <button
        class="btn btn-dark py-3 fs-5 rounded-3 border-none shadow mt-4 w-100"
      >
        Checkout
      </button>
      <div class="text-center pt-3">
        <span class="fs-3 border-bottom border-2 d-inline-block border-dark"
          >View Cart</span
        >
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      quantidade: 1,
    };
  },
};
</script>
<style scoped>
.text-color {
  color: #bababa;
}
.altura {
  padding-top: 225px;
  border-bottom: 1px solid #555;
  padding-bottom: 24px;
}
</style>