<template>
  <div>
    <div class="text-start ps-1 pt-5">
      <h1>
        Checkout <i class="fa fa-shopping-cart" style="font-size: 36px"></i>
      </h1>
    </div>
    <!-- Table -->
    <div id="my-table">
      <div class="row mt-5 ps-1">
        <div class="col-5 text-start">
          <h2>Item</h2>
        </div>
        <div class="col-3">
          <h2>Qty</h2>
        </div>
        <div class="col-3">
          <h2>Price</h2>
        </div>
        <div class="col-1">
          <h2>Opt</h2>
        </div>
      </div>
      <div class="overflow">
        <div v-for="food in orders" :key="food.id" class="row mt-3 ps-1 mb-2">
          <div class="col-5 text-start">
            <h5>{{ food.name }}</h5>
          </div>
          <div class="col-3">
            <h5>{{ food.quantity }}</h5>
          </div>
          <div class="col-3">
            <h5>{{ food.price * food.quantity }}</h5>
          </div>
          <div class="col-1">
            <a @click="(event) => handleDeleteItem(event, food)">
              <i class="fas fa-trash-alt" style="color: red"></i
            ></a>
          </div>
        </div>
      </div>
      <div>
        <div class="row mt-3 mt-5">
          <div class="col-5 text-start"></div>
          <div class="col-3">
            <h3><strong>Total Price</strong></h3>
          </div>
          <div class="col-4">
            <div class="row">
              <div class="col-7 text-end">
                <h3>
                  <strong>{{ sumTotal }}</strong>
                </h3>
              </div>
              <div class="col-5">
                <h3>IDR</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3 mt-1">
          <div class="col-2 text-start"></div>
          <div class="col-6 text-end">
            <h3><strong>Convert Currency</strong></h3>
          </div>
          <div class="col-4">
            <div class="row">
              <div class="col-7 text-end">
                <h3>
                  <strong>{{ convertedCurrency }}</strong>
                </h3>
              </div>
              <div class="col-5">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  @change="(event) => handleCurrency(event, sumTotal)"
                >
                  <option value="idr" selected>IDR</option>
                  <option value="usd">USD</option>
                  <option value="eur">EUR</option>
                  <option value="gbp">GBP</option>
                  <option value="sgd">SGD</option>
                  <option value="cny">CNY</option>
                  <option value="jpy">JPY</option>
                  <option value="myr">MYR</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3 mt-1">
          <div class="col-2 text-start"></div>
          <div class="col-6 text-end">
            <h3><strong>Customer Name</strong></h3>
          </div>
          <div class="col-4">
            <div class="row">
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="inputName"
                  v-model="customerName"
                />
              </div>
              <div class="col-5"></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="row">
          <div class="col-4 text-end">
            <button
              class="btn btn-danger ms-5"
              id="btn-cancel"
              @click.prevent="cancelCart"
            >
              Cancel
            </button>
          </div>
          <div class="col-8 text-end">
            <button
              class="btn btn-success"
              id="btn-checkout"
              @click.prevent="checkoutOrder"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- End Table -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import Swal from "sweetalert2";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default {
  name: "Checkout",
  data() {
    return {
      customerName: "",
    };
  },
  computed: {
    ...mapState(["orders", "histories", "convertedCurrency"]),
    sumTotal() {
      const summation = this.orders;
      return summation.reduce(
        (sum, cur) => (sum += cur.price * cur.quantity),
        0
      );
    },
  },

  methods: {
    generatePDF() {
      const doc = new jsPDF();
      let bodyData = [];
      let temp = [];
      this.orders.forEach((el, i) => {
        temp.push(el.name, el.quantity, el.quantity * el.price);
      });
      let array = [];
      let counter = 1;
      for (let i = 0; i < temp.length; i += 1) {
        array.push(temp[i]);
        if (counter % 3 === 0) {
          bodyData.push(array);
          array = [];
        }
        counter++;
      }

      let timestamp = new Date().getTime();
      let time = new Date();
      doc.text("FoxCash", 20, 30);
      doc.text(`Invoice No. ${timestamp}`, 20, 40);
      doc.text(time.toLocaleDateString(), 20, 50);
      doc.text(this.customerName, 20, 60);
      doc.line(10, 65, 200, 65);
      doc.autoTable({
        margin: { top: 75, left: 20, right: 20 },
        head: [["Item", "Qty", "Price"]],
        body: bodyData,
      });
      doc.autoPrint({ variant: "non-conform" });
      doc.save(`invoice${timestamp}.pdf`);
    },

    checkoutOrder() {
      if (!this.orders.length) {
        Swal.fire({
          position: "center",
          icon: "info",
          title: "Please insert food",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      if (this.customerName === "") {
        Swal.fire({
          position: "center",
          icon: "info",
          title: "Please insert customer name",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      if (this.customerName !== "" && this.orders.length) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Order success!",
          showConfirmButton: false,
          timer: 1500,
        });
        this.generatePDF();
        this.$store.dispatch("postCheckout", {
          custOrder: this.orders,
          custName: this.customerName,
        });
        this.customerName = "";
      }
    },

    cancelCart() {
      this.$store.commit("RESET_ORDER");
    },

    handleDeleteItem(event, menu) {
      let newMenu = this.orders.filter((el) => el.id !== menu.id);
      this.$store.commit("FILTER_ORDER", newMenu);
    },

    handleCurrency(event, total) {
      let convertCur = event.target.value;
      this.$store.dispatch("currencyChange", { convertCur, total });
    },
  },
  created() {
    this.$store.dispatch("fetchCustomerFood");
  },
};
</script>

<style scoped>
h1 {
  font-weight: 900;
}

#btn-cancel {
  width: 100% !important;
  height: 60px !important;
  border-radius: 50px !important;
  margin-bottom: 100px !important;
}

#btn-checkout {
  width: 80% !important;
  height: 60px !important;
  border-radius: 50px !important;
  margin-bottom: 100px !important;
}

.overflow {
  height: 55vh;
  overflow: scroll;
}

h2 {
  font-weight: 500;
}
</style>