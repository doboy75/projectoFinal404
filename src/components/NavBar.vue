<script setup lang="js">
import { RouterLink } from 'vue-router';

</script>

<template>
<nav class="navbar navbar-expand-lg   px-4  margemButtom">
<div class="container d-flex justify-content-between  px-5" id="navegacao">
  
  <RouterLink to="" class="navbar-brand fs-2 fw-bold ">FASCO</RouterLink>

<ul class="navbar-nav align-items-center gap-4">
    <li class="nav-item"><a href="#home" class="nav-link">Home</a></li>
      <li class="nav-item"><a href="#deals" class="nav-link">Deals</a></li>
        <li class="nav-item"><a href="#newarrivals" class="nav-link">New Arrivals</a></li>
        <li class="nav-item"><RouterLink to="#" class="nav-link">Packages</RouterLink></li> 
            <li class="nav-item"><RouterLink to="/SigninFasco" class="nav-link">Sign in </RouterLink></li>
             <li class="nav-item"><button class="btn btn-dark px-4 py-2 shadow">Sign up</button></li>
</ul>
<!-- <ul class="navbar-nav align-items-center gap-4">
    <li class="nav-item"><RouterLink to="" class="nav-link">Home</RouterLink></li>
      <li class="nav-item"><RouterLink to="" class="nav-link">Deals</RouterLink></li>
        <li class="nav-item"><RouterLink to="" class="nav-link">New Arrivals</RouterLink></li>
          <li class="nav-item"><RouterLink to="" class="nav-link">Packages</RouterLink></li>
            <li class="nav-item"><RouterLink to="/SigninFasco" class="nav-link">Sign in </RouterLink></li>
             <li class="nav-item"><button class="btn btn-dark px-4 py-2 shadow">Sign up</button></li>
</ul> -->
</div>
</nav>
  <router-view/>
</template>



<style scoped>

.margemButtom{

  margin-bottom: 56px;
}

</style>