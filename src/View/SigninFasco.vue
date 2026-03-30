<template>
  <div
    class="container-fluid vh-100 d-flex align-items-center justify-content-center"
  >
    <div
      class="row shadow rounded overflow-hidden login-box justify-content-center"
    >
      <div class="col-md-6 p-0">
        <img
          src="../assets/login/Rectangle 19280.svg"
          alt="login"
          class="img-fluid w-100 h-100 cover"
        />
      </div>
      <div class="col-md-6 p-5 bg-white">
        <h2 class="text-center mb-4">Fasco</h2>
        <p class="text-center mb-4">Sing In To FASCO</p>
        <div class="d-flex gap-3 mb-4">
          <button class="btn btn-outline-secondary w-50">
            <img src="../assets/login/image 939.svg" alt="gmail" />
            Google
          </button>

          <button class="btn btn-outline-secondary w-50">
            <img src="../assets/login/image 940.svg" alt="email" />
            Email
          </button>
        </div>
        <div class="text-center mb-4">
          <span class="text-muted"> - OR -</span>
        </div>

        <form action="#">
          <div class="mb-3">
            <input
              type="email"
              class="form-control border-0 border-bottom"
              placeholder="Email"
            />
          </div>

          <div class="mb-3">
            <input
              type="password"
              class="form-control border-0 border-bottom"
              placeholder="password"
            />
          </div>

          <button class="btn btn-dark w-100 mb-3">Sign In</button>

          <button class="btn btn-outline-primary w-100 mb-3">
            Register Now
          </button>
          <div class="text-end">
            <RouterLink to="/ForgetPassworld" class="small"
              >Forget Password</RouterLink
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-box {
  max-width: 850px;
}
.cover {
  object-fit: cover;
}
</style>