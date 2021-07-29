<template>
  <div class="container col-md-12">
    <p>
      Forget your password? |
      <span><a href="#" @click.prevent="show">reset</a></span>
    </p>
    <modal
      name="my-first-modal"
      width="500px"
      height="350px"
      style="top:50%;left:50%;transform:translate(-50%, -50%)"
    >
      <div
        class="container col-md-12 d-flex justify-content-center align-items-center flex-column"
        style="width:100%;height:100%"
      >
        <img
          src="../assets/images/reset_pass.svg"
          class="mb-3"
          alt=""
          style="width:150px"
        />
        <p style="color:black" class="text-left">
          We will give you link to reset your password, if we found your email
          in our database!.
        </p>
        <form @submit.prevent="handleResetPass" style="width:100%">
          <div class="form-group">
            <div
              class="d-inline-block d-flex align-items-center justify-content-between mt-3"
            >
              <label for="email" style="color:black">Email address</label>
              <input
                v-model="email"
                class="form-control"
                type="email"
                name="email"
                id="email"
                placeholder="youremail@mail.com"
                style="width:70%"
              />
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-primary mt-3">
              Reset password
            </button>
          </div>
        </form>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  name: "ModalResetPass",
  data() {
    return {
      email: ""
    };
  },
  methods: {
    show() {
      this.$modal.show("my-first-modal");
    },
    hide() {
      this.$modal.hide("my-first-modal");
    },
    handleResetPass() {
      let payload = this.email;
      this.$store.dispatch("generateResetPasswordLink", payload);
      this.hide();
    }
  },
  mount() {
    this.show();
  }
};
</script>

<style></style>
