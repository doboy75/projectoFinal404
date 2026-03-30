

<template>
  <NavReutilizavel>
    <h2 class="brand mb-4">FASCO Demo Checkout</h2>
  </NavReutilizavel>

  <div class="container border-black border-bottom">
    <div class="row mt-5">
      <div class="col-md-6">
        <div class="d-flex justify-content-between align-items-center">
          <h2>Contact</h2>
          <small class="h5"
            >Have an account?
            <a href="#" class="text-primary text-decoration-none"
              >Create Account</a
            ></small
          >
        </div>
        <input
          type="email"
          placeholder="emaill Address"
          v-model="delivery.emailAddreess"
          class="mb-5 mt-3 form-control border-black border-2 p-3 rounded-0"
        />
        <label class="h2 mb-3" for="country">delivery</label>
        <select
          name="country"
          class="mb-4 form-select border-black border-2 p-3 rounded-0"
          v-model="delivery.country"
        >
          <option selected>country/Region</option>
          <option value="Angola">Angola</option>
          <option value="Portugal">Portugal</option>
          <option value="Espanha">Espanha</option>
        </select>
        <div class="row mb-4">
          <div class="col-md-6">
            <input
              type="text"
              placeholder="FirstName"
              v-model="delivery.firstName"
              class="form-control border-black border-2 p-3 rounded-0"
            />
          </div>
          <div class="col-md-6">
            <input
              type="text"
              placeholder="LastName"
              v-model="delivery.lastName"
              class="form-control border-black border-2 p-3 rounded-0"
            />
          </div>
        </div>
        <input
          type="text"
          placeholder="Address"
          v-model="delivery.address"
          class="mb-4 form-control border-black border-2 p-3 rounded-0"
        />
        <div class="row mb-4">
          <div class="col-md-6">
            <input
              type="text"
              placeholder="City"
              v-model="delivery.city"
              class="form-control border-black border-2 p-3 rounded-0"
            />
          </div>
          <div class="col-md-6">
            <input
              type="number"
              placeholder="Postal Code"
              v-model="delivery.postalCode"
              class="form-control border-black border-2 p-3 rounded-0"
            />
          </div>
        </div>
        <div class="form-check fs-4">
          <input
            type="checkbox"
            v-model="delivery.saveinfor"
            class="form-check-input rounded-0 border-black border-4"
          />
          <label class="form-check-label"> Save this info for future</label>
        </div>

        <!-- Pagamentos -->

        <h3 class="mt-5">Payment</h3>
        <select
          class="form-select rounded-0 border-black border-2 p-3"
          v-model="delivery.payment"
        >
          <option value="credit card">credit card</option>
          <option value="Multicaixa express">Multicaixa express</option>
          <option value="Visa Card">Visa Card</option>
        </select>
        <div class="d-flex justify-content-between align-items-center mt-4">
          <div>
            <input
              type="number"
              placeholder="Expiration Date"
              v-model="payment.expirationDate"
              class="form-control border-black border-2 p-3 rounded-0"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Segurity Code"
              v-model="payment.SegurityCode"
              class="form-control border-black border-2 p-3 rounded-0"
            />
          </div>
        </div>
        <input
          type="number"
          placeholder="card Hold Name"
          v-model="payment.cardHoldName"
          class="mb-3 mt-3 form-control border-black border-2 p-3 rounded-0"
        />
        <div class="form-check fs-4">
          <input
            type="checkbox"
            v-model="delivery.saveinfor"
            class="form-check-input rounded-0 border-black border-4"
          />
          <label class="form-check-label"> Save this info for future</label>
        </div>

        <button class="btn btn-dark w-100 my-3 shadow">Pay Now</button>

        <small class="text-center pb-5"
          ><a href="#" class="text-decoration-none text-black small d-block"
            >copyright 2022 FASCO .All rights Rasaved</a
          ></small
        >
      </div>

      <div class="col-md-6 ps-5">
        <div class="d-flex align-items-center gap-3">
          <img src="../assets/produtos/Rectangle 19265 (1).svg" alt="" />
          <div>
            <h3>Mini Dress With Ruffled Straps</h3>
            <div class="d-flex justify-content-between h4">
              <div>red</div>
              <div>{{ checkoutData.price }}</div>
            </div>
          </div>
        </div>

        <div class="d-flex gap-3 rounded-0 border-black border-2 my-4">
          <input
            type="text"
            placeholder="Discount code"
            v-model="checkoutData.discountCode"
            class="form-control rounded-0 border-none p-3 bg-white fs-4"
          />

          <button class="btn btn-dark btn-lg py-3 px-5 shadow">Apply</button>
        </div>

        <div class="d-flex justify-content-between">
          <div>Subtotal</div>
          <span>{{ checkoutData.subtotal }}</span>
        </div>
        <div class="d-flex justify-content-between my-4">
          <div>shipping</div>
          <span>{{ checkoutData.shipping }}</span>
        </div>
        <div class="d-flex justify-content-between">
          <div>Total</div>
          <span>{{ checkoutData.total }}</span>
        </div>
      </div>
    </div>
  </div>

  <SubscribeFasco></SubscribeFasco>
</template>

<script>
import SubscribeFasco from "@/components/SubscribeFasco.vue";
import NavReutilizavel from "./NavReutilizavel.vue";

export default {
  components: {
    NavReutilizavel,
    SubscribeFasco,
  },

  data() {
    return {
      delivery: [
        {
          emailAddreess: "",
          country: [""],
          firstName: "",
          lastName: "",
          address: "",
          city: "",
          postalCode: "",
          saveinfor: true,
          payment: [""],
        },
      ],

      payment: {
        SegurityCode: "",
        expirationDate: "",
        cardName: "",
        cardNumber: "",
        cardHoldName: "",
      },
      checkoutData: {
        price: "$100.00",
        discountCode: "",
        subtotal: "$100.00",
        shipping: "$40.00",
        total: "$140.00",
      },
    };
  },
};
</script>

<style scoped >
.bgColor {
  background-color: #f5f5f5;
}
</style>