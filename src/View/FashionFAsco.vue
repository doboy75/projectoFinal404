

<template >
  <nav class="navbar navbar-expand-lg mb-5">
    <div class="container d-flex justify-content-between px-5" id="navegacao">
      <RouterLink to="" class="navbar-brand fs-2 fw-bold">FASCO</RouterLink>
      <ul class="navbar-nav align-items-center gap-4">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link custom-hove">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="" class="nav-link custom-hove">Shop</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/produtos" class="nav-link custom-hove"
            >Products</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink to="" class="nav-link custom-hove">Pages</RouterLink>
        </li>
      </ul>

      <div class="d-flex gap-3 justify-content-center align-items-center">
        <img src="../assets/fashion/Vector (2).svg" alt="" />
        <img src="../assets/fashion/Vector (3).svg" alt="" />
        <img src="../assets/fashion/Vector (4).svg" alt="" />
        <img src="../assets/fashion/Vector (5).svg" alt="" />
      </div>
    </div>
  </nav>

  <div class="container text-center py-5 mb-5">
    <h1 class="fs-1 mb-3">Fashion</h1>
    <div class="d-flex justify-content-center align-items-center gap-4">
      <div class="fs-5">home</div>
      <span
        ><img
          src="../assets/fashion/Vector (6).svg"
          alt="icone"
          class="img-fluid"
      /></span>
      <div class="fs-5">Fashion</div>
    </div>
  </div>

  <div class="container mt-5">
    <div class="row">
      <div class="col-md-3">
        <h1 class="fs-1 fw-bold mb-5">filter</h1>
        <h5 class="mb-4 fw-bold">size</h5>

        <div class="d-flex flex-wrap gap-3">
          <button
            v-for="size in sizes"
            :key="size.id"
            class="btn btn-outline-secondary"
          >
            {{ size }}
          </button>
        </div>
        <h5 class="my-4 fw-bold">colors</h5>
        <div class="d-flex flex-wrap gap-3">
          <span
            v-for="cor in cores"
            :key="cor.id"
            class="colorcirculo"
            :style="{ background: cor }"
          ></span>
        </div>

        <h5 class="fw-bold my-4">prices</h5>
        <div>
          <ul class="list-unstyled">
            <li v-for="price in prices" :key="price.id" class="mb-3">
              <RouterLink to="#" class="fs-6 text-decoration-none textColor">{{
                price
              }}</RouterLink>
            </li>
          </ul>
        </div>

        <div class="d-flex justify-content-between align-items-center">
          <h5 class="fw-bold my-4">Brands</h5>
          <span class="d-inline-block"
            ><img src="../assets/fashion/arrow-down.svg.svg" alt=""
          /></span>
        </div>

        <div class="d-flex flex-wrap gap-3">
          <p v-for="brand in brands" :key="brand.id" class="textColor">
            {{ brand }}
          </p>
        </div>

        <div class="d-flex justify-content-between align-items-center">
          <h5 class="fw-bold my-4">Collections</h5>
          <span class="d-inline-block"
            ><img src="../assets/fashion/arrow-down.svg.svg" alt=""
          /></span>
        </div>

        <ul class="list-unstyled">
          <li
            v-for="collection in collections"
            :key="collection.id"
            class="mb-3"
          >
            <RouterLink to="#" class="text-decoration-none textColor fs-6">
              {{ collection }}</RouterLink
            >
          </li>
        </ul>

        <h5 class="fw-bold my-4">Tags</h5>

        <div class="d-flex flex-wrap gap-3">
          <div v-for="tag in tags" :key="tag.id" class="textColor fs-6">
            {{ tag }}
          </div>
        </div>
      </div>

      <div class="col-md-9">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <div class="h5">
            Best selling
            <span
              ><img src="../assets/fashion/icone/Vector (7).svg" alt=""
            /></span>
          </div>
          <div class="d-flex align-items-center gap-2">
            <button class="btn btn-color">
              <img src="../assets/fashion/icone/Layer 1 (2).svg" alt="" />
            </button>

            <button class="btn btn-color">
              <img src="../assets/fashion/icone/Layer 1 (1).svg" alt="" />
            </button>

            <button class="btn btn-color">
              <img src="../assets/fashion/icone/Layer 1.svg" alt="" />
            </button>

            <button class="btn btn-color">
              <img src="../assets/fashion/icone/Layer 2.svg" alt="" />
            </button>

            <button class="btn btn-color">
              <img src="../assets/fashion/icone/SVG.svg" alt="" />
            </button>
          </div>
        </div>
        <div class="row">
          <div v-for="moda in fashion" :key="moda.id" class="col-md-4 mb-4">
            <div class="card border-0 rounded-0">
              <img :src="moda.image" :alt="descricaoImg" class="img-fluid" />
              <p class="fs-6 fw-bold mt-2">{{ moda.name }}</p>
              <p class="small fw-bold">${{ moda.price }}</p>
              <div class="d-flex gap-2 align-items-center">
                <span
                  v-for="core in moda.cor"
                  :key="core"
                  class="cores"
                  :style="{ background: core }"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <img src="" alt="" />

  <HugoBoss></HugoBoss>
  <FollowInstagram></FollowInstagram>
  <SubscribeFasco></SubscribeFasco>
  <FooterFasco></FooterFasco>
</template>


<script>
import FollowInstagram from "../components/FollowInstagram.vue";
import FooterFasco from "../components/FooterFasco.vue";
import HugoBoss from "../components/HugoBoss.vue";
import SubscribeFasco from "../components/SubscribeFasco.vue";

export default {
  components: { HugoBoss, FollowInstagram, SubscribeFasco, FooterFasco },

  data() {
    return {
      descricaoImg: "fotos de Modelos",
      /************ arrays****************************** */
      sizes: ["S", "M", "L", "XL"],
      cores: [
        "#FF6C6C",
        "#FF7629",
        "#FFF06C",
        "#9BFF6C",
        "#6CFF9E",
        "#6CFFDC",
        "#6CB9FF",
        "#6CB9FF",
        "#6CA7FF",
        "#6C7BFF",
        "#8A6CFF",
        "#8A6CFF",
        "#8A6CFF",
        "#FF6C6C",
      ],

      prices: ["$0-$50", "$50-$100", "$100-$150", "$150-$200", "$300-$400"],
      brands: ["Minimog", "Retrolie Brook", "Learts", "Vagabond", "Abby"],
      collections: [
        "All products",
        "Best sellers",
        "New arrivals",
        "Accessories",
      ],
      tags: [
        "Fashion",
        "Hats",
        "Sandal",
        "Belt",
        "Bags",
        "Snacker",
        "Denim",
        "Minimog,Vagabond",
        "sunglasses",
        "Beachwear",
      ],

      fashion: [
        {
          id: 1,
          name: "Rounded Red Hat",
          image: new URL(
            "../assets/fashion/49_ecfb9d65-a392-40b1-b9fb-f62e5a84f812.jpg.svg",
            import.meta.url
          ).href,
          price: 800,
          cor: ["#FFD700", "#000000"],
        },
        {
          id: 2,
          name: "Linen-blend Shirt",
          image: new URL("../assets/fashion/57.jpg.svg", import.meta.url).href,
          price: 1700,
          cor: ["#8DB4D2", "#FFD1DC"],
        },
        {
          id: 3,
          name: "Long-sleeve Coat",
          image: new URL("../assets/fashion/59.jpg.svg", import.meta.url).href,
          price: 10600,
          cor: ["#EBE6DB", "#C1E1C1"],
        },
        {
          id: 4,
          name: "Boxy Denim Hat",
          image: new URL(
            "../assets/fashion/Link ⏵ responsive-image.svg",
            import.meta.url
          ).href,
          price: 2500,
          cor: ["#C1E1C1", "#063E66"],
        },
        {
          id: 5,
          name: "Linen Plain Top",
          image: new URL(
            "../assets/fashion/Link ⏵ responsive-image.svg",
            import.meta.url
          ).href,
          price: 2500,
          cor: ["#C1E1C1", "#0000001A"],
        },
        {
          id: 6,
          name: "Oversized T-shirt",
          image: new URL(
            "../assets/fashion/52_bec0360d-64e5-4b79-bb88-9b2dc30f34a2.jpg.svg",
            import.meta.url
          ).href,
          price: 1100,
          cor: ["#FFD1DC", "#C6AEC7"],
        },
        {
          id: 7,
          name: "Polarised Sunglasses",
          image: new URL(
            "../assets/fashion/46_145a4ab0-7b97-409a-b049-3768fd0e7a10.jpg.svg",
            import.meta.url
          ).href,
          price: 1800,
          cor: ["#000000", "#836953", "#FFFFFF01"],
        },
        {
          id: 8,
          name: "Rockstar Jacket",
          image: new URL("../assets/fashion/45.jpg.svg", import.meta.url).href,
          price: 2200,
          cor: ["#C6AEC7", "#BEDCE3"],
        },
        {
          id: 9,
          name: "Dotted Black Dress",
          image: new URL(
            "../assets/fashion/44_df90161a-7172-4fac-869a-c6af02c86d12.jpg.svg",
            import.meta.url
          ).href,
          price: 2000,
          cor: ["#063E66", "#000000", "#000000"],
        },
      ],
    };
  },
};
</script>

<style scoped>
.custom-hove:hover {
  cursor: pointer;
  border-bottom: 2px solid #000;
  padding-bottom: 3px;
}
.colorcirculo {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid #0000001a;
}
.textColor {
  color: #8a8a8a;
}
.cores {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: inline-block;
  border: 1px solid #8a8a8a;
  cursor: pointer;
  background-color: #000;
}
.btn-color {
  background-color: #f2f2f2;
  border: none;
}
</style>