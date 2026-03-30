<template>
  <div
    class="container-fluid row align-items-center justify-content-center py-5"
  >
    <div class="col-md-4">
      <img src="../assets/Subscribe/image 2 (1).svg" alt="modelo" />
    </div>
    <div class="col-md-5">
      <div class="text-box">
        <h1 class="fw-bold h1 mb-3">Subscribe To Our Newsletter</h1>
        <p class="fs-5 lh-base textColor mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </p>
        <input
          type="email"
          v-model="email"
          class="form-control shadow py-4 ps-4 textColor fs-4"
        />
        <br />

        <div class="text-center">
          <button
            class="fs-5 py-3 px-5 bg-dark text-white rounded-3 border-0 shadow"
            type="button "
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </div>

    <div class="col-md-3">
      <img src="../assets/Subscribe/image 3 (1).svg" alt="modelo" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "michael@ymail.com",
    };
  },
};
</script>


<style scoped>
.textColor {
  color: #8a8a8a;
}

.form-control {
  border: none;
}
</style>