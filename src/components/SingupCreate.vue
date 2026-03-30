<template>
  <div
    class="container-fluid vh-100 d-flex align-items-center justify-content-center"
  >
    <div
      class="row shadow rounded overflow-hidden login-box justify-content-center"
    >
      <div class="col-md-6 p-0">
        <img
          src="../assets/Rectangle 19280.svg"
          alt="login"
          class="img-fluid w-100 h-100 cover"
        />
      </div>
      <div class="col-md-6 p-5 bg-white">
        <h2 class="text-center mb-4">Fasco</h2>
        <p class="text-center mb-4">Create Account</p>
        <div class="d-flex gap-3 mb-4">
          <button class="btn btn-outline-secondary w-50">
            <img src="../assets/login/image 939.svg" alt="gmail" />
            Sign up with Google
          </button>

          <button class="btn btn-outline-secondary w-50">
            <img src="../assets/login/image 940.svg" alt="email" />
            Sign up with Email
          </button>
        </div>
        <div class="text-center mb-4">
          <span class="text-muted"> - OR -</span>
        </div>

        <form action="#">
          <div class="mb-3 d-flex gap-4">
            <input
              type="text"
              class="form-control border-0 border-bottom"
              placeholder="First tName"
            /><input
              type="text"
              class="form-control border-0 border-bottom"
              placeholder="Last Name"
            />
          </div>

          <div class="mb-3 d-flex gap-4">
            <input
              type="email"
              class="form-control border-0 border-bottom"
              placeholder="Email Address"
            />
            <input
              type="number"
              class="form-control border-0 border-bottom"
              placeholder="Phone Number"
            />
          </div>
          <div class="mb-3 d-flex gap-4">
            <input
              type="password"
              class="form-control border-0 border-bottom"
              placeholder="Password"
            />
            <input
              type="password"
              class="form-control border-0 border-bottom"
              placeholder="Confirm Password"
            />
          </div>

          <button class="btn btn-dark w-100 mb-3 shadow my-4">
            Create Account
          </button>

          <div class="text-center">
            <RouterLink to="#" class="small text-dark text-decoration-none"
              >Already have an account?
              <router-link to="/SinginFasco" class="text-primary"
                >login</router-link
              >
            </RouterLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.colorText {
  color: #9d9d9d;
}
</style>