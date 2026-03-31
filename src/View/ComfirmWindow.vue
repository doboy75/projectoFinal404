<template>
  <div
    class="container-fluid vh-100 d-flex align-items-center justify-content-center"
  >
    <div
      class="row shadow rounded overflow-hidden login-box justify-content-center p-5"
    >
      <div class="col-md-6 p-0">
        <img
          src="../assets/login/Rectangle 19280.svg"
          alt="login"
          class="img-fluid w-100 h-100 cover"
        />
      </div>
      <div class="col-md-6 p-5 bg-white border border-2">
        <h1 class="text-start mb-4 pb-5">FASCO</h1>
        <p class="text-start mb-4 mt-5 fw-bold">Enter The Confirmation Code</p>

        <form action="#">
          <input
            type="number"
            class="form-control border-0 border-bottom mb-3"
            placeholder="Confirmation Code"
          />

          <button class="btn btn-dark w-100 mb-3 shadow">
            Recover Account
          </button>

          <div class="text-center">
            <small class="small text-dark"
              >Didn't receive Confirmation Code?
              <router-link to="#" class="text-decoration-none"
                >Resend Now</router-link
              ></small
            >
          </div>
        </form>
        <a
          href="#"
          class="pt-5 text-end mt-5 small text-decoration-none d-block text-black"
          >FASCO Terms & Conditions</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-box {
  max-width: 900px;
}
.cover {
  object-fit: cover;
}
</style>