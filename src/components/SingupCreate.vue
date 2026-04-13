<template>
  <div
    class="container vh-100 d-flex align-items-center justify-content-center"
  >
    <div class="container row shadow rounded justify-content-center">
      <div class="col-md-5">
        <img
          src="../assets/Rectangle 19280.svg"
          alt="login"
          class="img-fluid"
        />
      </div>
      <div class="col-md-5 p-5">
        <h1 class="text-start mb-4">Fasco</h1>
        <p class="text-start mb-4">Create Account</p>
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
          <span class="text-muted fw-bold"> - OR -</span>
        </div>

        <form action="#" @submit.prevent="signup">
          <div class="mb-3 d-flex gap-4">
            <input
              type="text"
              v-model="firstname"
              class="form-control border-0 border-bottom"
              placeholder="First tName"
            /><input
              type="text"
              v-model="lastname"
              class="form-control border-0 border-bottom"
              placeholder="Last Name"
            />
          </div>

          <div class="mb-3 d-flex gap-4">
            <input
              type="email"
              v-model="email"
              class="form-control border-0 border-bottom"
              placeholder="Email Address"
            />
            <input
              type="number"
              v-model="number"
              class="form-control border-0 border-bottom"
              placeholder="Phone Number"
            />
          </div>
          <div class="mb-3 d-flex gap-4">
            <input
              type="password"
              v-model="password"
              class="form-control border-0 border-bottom"
              placeholder="Password "
            />
            <input
              type="password"
              v-model="confirmPassword"
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
        <p class="text-end pt-5 small">FASCO Terms & Conditions</p>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      number: "",
      password: "",
      confirmPassword: "",
      loading: false,
      erros: [],
    };
  },
  methods: {
    async signup() {
      try {
        this.loading = true;
        const { data } = await axios.post(
          "http://localhost:3001/v1/api/auth/signup",
          {
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
          }
        );
        console.log(data);
        localStorage.setItem("register_token", data.register_token);
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
.colorText {
  color: #9d9d9d;
}
.login-box {
  max-width: 850px;
}
.cover {
  object-fit: cover;
}
</style>