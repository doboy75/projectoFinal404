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

        <form @submit.prevent="signin" action="#">
          <div class="mb-3">
            <input
              type="email"
              v-model="email"
              class="form-control border-0 border-bottom"
              placeholder="Email"
            />
          </div>

          <div class="mb-3">
            <input
              type="password"
              v-model="senha"
              class="form-control border-0 border-bottom"
              placeholder="password"
            />
          </div>

          <button class="btn btn-dark w-100 mb-3" :disabled="loading">
            {{ loading ? "Loading..." : "Sign In" }}
          </button>

          <RouterLink to="/singup" class="btn btn-outline-primary w-100 mb-3">
            Register Now
          </RouterLink>
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


<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      senha: "",
      loading: false,
      erros: [],
    };
  },
  methods: {
    async signin() {
      try {
        this.loading = true;
        const { data } = await axios.post(
          "http://localhost:3001/v1/api/auth/login",
          {
            email: this.email,
            password: this.senha,
          }
        );
        console.log(data);
        localStorage.setItem("access_token", data.access_token);
        this.$router.push("/");
      } catch (err) {
        console.log(err.message);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>


<style scoped>
.login-box {
  max-width: 850px;
}
.cover {
  object-fit: cover;
}
</style>