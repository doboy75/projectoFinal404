<template>
  <footer class="container-fluid border-top border-2">
    <div class="container py-5">
      <div class="d-flex justify-content-between">
        <h1 class="fs-1 brand logoColor">Fasco</h1>

        <ul class="footer-menu list-unstyled d-flex justify-content-end gap-4">
          <li class="footer-link">
            <RouterLink to="#" class="text-decoration-none fs-5 linkColor"
              >Support Center</RouterLink
            >
          </li>
          <li class="footer-link">
            <RouterLink to="#" class="text-decoration-none fs-5 linkColor"
              >Invoicing</RouterLink
            >
          </li>
          <li class="footer-link">
            <RouterLink to="#" class="text-decoration-none fs-5 linkColor"
              >Contract</RouterLink
            >
          </li>
          <li class="footer-link">
            <RouterLink to="#" class="text-decoration-none fs-5 linkColor"
              >Careers</RouterLink
            >
          </li>
          <li class="footer-link">
            <RouterLink to="#" class="text-decoration-none fs-5 linkColor"
              >Blog</RouterLink
            >
          </li>
          <li class="footer-link">
            <RouterLink to="#" class="text-decoration-none fs-5 linkColor"
              >FAQ,s</RouterLink
            >
          </li>
        </ul>
      </div>
      <div class="text-center pt-5">
        <RouterLink to="#" class="small linkColor text-decoration-none"
          >Copyright © 2022 Xpro . All Rights Reseved.
        </RouterLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.linkColor {
  color: #484848;
}
.logoColor {
  color: #484848;
}
</style>