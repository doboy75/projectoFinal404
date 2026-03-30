<script setup lang="js">
import { RouterLink } from 'vue-router';

</script>

<template>
  <nav class="navbar navbar-expand-lg px-4 margemButtom">
    <div class="container d-flex justify-content-between px-5" id="navegacao">
      <RouterLink class="navbar-brand fs-2 fw-bold">FASCO</RouterLink>

      <ul class="navbar-nav align-items-center gap-4">
        <li class="nav-item">
          <a href="#home" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a href="#deals" class="nav-link">Deals</a>
        </li>
        <li class="nav-item">
          <a href="#newarrivals" class="nav-link">New Arrivals</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Packages</a>
        </li>
        <li class="nav-item">
          <RouterLink to="/SinginFasco" class="nav-link">Sign in </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/ForgetPassworld"></RouterLink
          ><button class="btn btn-dark px-4 py-2 shadow">Sign up</button>
        </li>
      </ul>
    </div>
  </nav>
</template>



<style scoped>
.margemButtom {
  margin-bottom: 56px;
}
</style>