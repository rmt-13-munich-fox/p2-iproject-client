<template>
  <div>
    <div class="row">
      <div class="col-8">
        <div class="container mt-5">
          <div class="row text-start mb-4">
            <div class="col-3">
              <h1>Product List</h1>
            </div>
          </div>
          <CardMenu> </CardMenu>
        </div>
      </div>
      <div
        class="col-4 ps-5 me-0 position-sticky top-0 end-0 vh-100 pe-5"
        id="checkoutPage"
      >
        <Checkout></Checkout>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardMenu from "../components/CardMenu.vue";
import Checkout from "../components/Checkout.vue";

export default {
  name: "Home",
  components: {
    CardMenu,
    Checkout,
  },
  created() {
    if (!localStorage.access_token) {
      this.$store.commit("LOGIN_STATUS", false);
    } else {
      this.$store.commit("LOGIN_STATUS", true);
    }
  },
};
</script>

<style scoped>
#checkoutPage {
  background-color: rgb(255, 255, 255);
  margin: 0;
}
h1 {
  font-weight: 600;
}
</style>
