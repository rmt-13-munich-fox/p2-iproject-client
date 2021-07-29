<template>
  <div class="container">
    <div
      class="form-body d-flex justify-content-center align-items-center"
      style="height: 120vh;"
    >
      <div
        id="add-product-container"
        class="flex-row container-sm bg-light bg-gradient border border-3"
        v-for="detail in fetch"
        :key="detail.id"
      >
        <p class="fs-2 text-center text-uppercase">Edit Product</p>
        <form id="add-product-form" class="py-sm-2" @submit.prevent="onSubmit">
          <div class="form-floating">
            <label for="floatingTextarea" class="text-uppercase">
              username
            </label>
            <textarea
              class="form-control py-sm-2"
              placeholder="Username"
              v-model="detail.username"
            >
            </textarea>
          </div>
          <div class="form-floating">
            <label for="floatingTextarea2" class="text-uppercase">
              email
            </label>
            <textarea
              class="form-control py-sm-2"
              placeholder="Email"
              v-model="detail.email"
            ></textarea>
          </div>
          <div class="form-floating">
            <label for="floatingTextarea" class="text-uppercase">
              address
            </label>
            <textarea
              class="form-control py-2"
              placeholder="Address"
              id="price-product"
              v-model="detail.address"
            ></textarea>
          </div>
          <div class="form-floating">
            <label for="floatingTextarea" class="text-uppercase">
              quotes
            </label>
            <textarea
              class="form-control py-2"
              placeholder="quotes"
              id="price-product"
              v-model="detail.quotes"
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="formFile" class="form-label py-2"
              >Please Upload Image
            </label>
            <input
              class="form-control"
              type="file"
              id="image"
              @change.prevent="fileUpload($event)"
            />
          </div>
          <div class="col-12">
            <input
              type="submit"
              value="Submit"
              class="btn btn-primary"
              id="btn-submit-add"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Edit",
  data() {
    return {
      detail: {
        id: "",
        username: "",
        email: "",
        address: "",
        quotes: "",
        image: "",
      },
    };
  },
  methods: {
    ...mapActions(["fetchUser", "updateUser"]),
    fileUpload(event) {
      this.detail.image = event.target.files[0];
    },
    async onSubmit() {
      const edit = await this.updateUser(this.detail);
      if (edit) {
        this.$router.push("/profile");
      }
    },
  },
  computed: {
    ...mapState(["user"]),
    fetch() {
      this.detail = { ...this.user };
      // console.log(this.detail);
      return this.detail;
    },
  },
  created() {
    this.fetchUser();
  },
};
</script>

<style>
#success_message {
  display: none;
}
</style>
