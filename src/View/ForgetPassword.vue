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
        <h2 class="text-center mb-4">FASCO</h2>
        <p class="text-center mb-4">Forget Password</p>

        <form action="#" @submit.prevent="forgotPassword">
          <div class="mb-3 d-flex gap-2">
            <input
              type="text"
              v-model="firstName"
              class="form-control border-0 border-bottom"
              placeholder="FirstName"
            /><input
              type="text"
              v-model="lastName"
              class="form-control border-0 border-bottom"
              placeholder="lastName"
            />
          </div>

          <div class="mb-3 d-flex gap-2">
            <input
              type="email"
              v-model="email"
              class="form-control border-0 border-bottom"
              placeholder="Email address"
            /><input
              type="number"
              v-model="number"
              class="form-control border-0 border-bottom"
              placeholder="Phone Number"
            />
          </div>

          <router-link to="#" class="btn btn-dark w-100 mb-3">
            Send Confirmation Code
          </router-link>

          <div class="text-center">
            <RouterLink to="/SinginFasco" class="small text-dark"
              >Already have an account? Login</RouterLink
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      number: "",
    };
  },
};
</script>

<style scoped>
.login-box {
  max-width: 900px;
}
.cover {
  object-fit: cover;
}
</style>


