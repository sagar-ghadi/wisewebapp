<template>
  <div class="billing-form">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-7 pe-md-3 pe-lg-3">
        <div>
          <b-card class="shadow rounded-3">
            <b-text>
              <form @submit.prevent="onSubmit">
                <div class="row">
                  <div class="col">
                    <div
                      :class="{ hasError: $v.form.fname.$error }"
                      class="mb-3"
                    >
                      <label>First Name</label>
                      <b-form-input
                        type="text"
                        class="input"
                        v-model="form.fname"
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div
                      :class="{ hasError: $v.form.lname.$error }"
                      class="mb-3"
                    >
                      <label>Last Name</label>
                      <b-form-input
                        type="text"
                        class="input"
                        v-model="form.lname"
                      />
                    </div>
                  </div>
                </div>
                <div :class="{ hasError: $v.form.email.$error }" class="mb-3">
                  <label>Email Address</label>
                  <b-form-input
                    type="text"
                    class="input"
                    v-model="form.email"
                  />
                </div>
                <div :class="{ hasError: $v.form.address.$error }" class="mb-3">
                  <label>Street Address</label>
                  <b-form-input
                    type="text"
                    class="input"
                    v-model="form.address"
                  />
                </div>
                <div :class="{ hasError: $v.form.blank.$error }" class="mb-3">
                  <b-form-input
                    type="text"
                    class="input"
                    v-model="form.blank"
                  />
                </div>
                <div class="row">
                  <div class="col">
                    <label>State/Province</label>
                    <v-select :options="options"></v-select>
                  </div>
                  <div class="col">
                    <div
                      :class="{ hasError: $v.form.city.$error }"
                      class="mb-3"
                    >
                      <label>City</label>
                      <b-form-input
                        type="text"
                        class="input"
                        v-model="form.city"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div
                      :class="{ hasError: $v.form.zipCode.$error }"
                      class="mb-3"
                    >
                      <label>Zip/Postal Code</label>
                      <b-form-input
                        type="number"
                        class="input"
                        v-model="form.zipCode"
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div
                      :class="{ hasError: $v.form.phoneNumber.$error }"
                      class="mb-3"
                    >
                      <label>Phone</label>
                      <b-form-input
                        type="number"
                        class="input"
                        v-model="form.phoneNumber"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check1"
                    name="option1"
                    value="something"
                    checked
                  />
                  <small>My billing and shipping address are the same </small>
                </div>
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check1"
                    name="option1"
                    value="something"
                    checked
                  />
                  <small>Create an account for later use</small>
                </div>
              </form>
            </b-text>
          </b-card>
        </div>
        <div>
          <b-card class="shadow rounded-3 mt-5">
            <b-text>
              <form @submit.prevent="onSubmit">
                <p class="fw-bold">Payment Method</p>
                <div
                  class="border p-2 rounded"
                  :class="{ activeBorder: selected === 'A' }"
                >
                  <div class="row mb-2 d-flex align-items-start">
                    <div class="col-auto">
                      <b-form-radio
                        v-model="selected"
                        name="some-radios"
                        value="A"
                        ><span class="ms-2 fw-bold">PayPal</span></b-form-radio
                      >
                    </div>
                    <div class="col">
                      <small
                        >You will be redirected to the PayPal website after
                        submitting your order</small
                      >
                    </div>
                    <div class="col-auto">
                      <div class="py-1 px-2 border rounded">
                        <img
                          src="../assets/icons/paypal.png"
                          class="img-fluid"
                          width="20"
                          height="20"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div class="mt-3">
                <div
                  class="border p-2 rounded"
                  :class="{ activeBorder: selected === 'B' }"
                >
                  <div class="row mb-4 d-flex align-items-start">
                    <div class="col">
                      <b-form-radio
                        v-model="selected"
                        name="some-radios"
                        value="B"
                        ><span class="ms-2 fw-bold"
                          >Pay with credit card</span
                        ></b-form-radio
                      >
                    </div>
                    <div class="col-auto">
                      <div class="">
                        <img
                          src="../assets/icons/visa.png"
                          class="me-2 border rounded"
                          width="50"
                          height="30"
                        />
                        <img
                          src="../assets/icons/mastercard.png"
                          class="img-fluid me-2 border rounded"
                          width="40"
                          height="25"
                        />
                        <img
                          src="../assets/icons/visa.png"
                          class="me-2 border rounded"
                          width="50"
                          height="30"
                        />
                        <img
                          src="../assets/icons/mastercard.png"
                          class="img-fluid border rounded"
                          width="40"
                          height="25"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row mb-2">
                    <div class="col-6">
                      <div
                        :class="{ hasError: $v.form.cardNumber.$error }"
                        class="mb-3"
                      >
                        <label>Card Number</label>
                        <b-form-input
                          type="text"
                          class="input"
                          v-model="form.cardNumber"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div
                        :class="{ hasError: $v.form.expDate.$error }"
                        class="mb-3"
                      >
                        <label>Expiration Date</label>
                        <b-form-input
                          type="text"
                          class="input"
                          v-model="form.expDate"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row mb-2 d-flex align-items-center">
                    <div class="col-6">
                      <div
                        :class="{ hasError: $v.form.cardSecurityCode.$error }"
                        class="mb-3"
                      >
                        <label>Card Security Code</label>
                        <b-form-input
                          type="text"
                          class="input"
                          v-model="form.cardSecurityCode"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <a href="#" style="text-decoration: none"
                        ><small>What is this?</small></a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex mt-3">
                <div class="flex-shrink-0">
                  <img
                    src="../assets/icons/lock1.png"
                    class="img-fluid"
                    width="20"
                    height="20"
                  />
                </div>
                <div class="flex-grow-1 ms-2">
                  <small class="fs-12"
                    >We protect your payment information using encryption to
                    provide bank-level security</small
                  >
                </div>
              </div>
            </b-text>
          </b-card>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-5 ps-md-5 ps-lg-5 mt-3 mt-md-0 mt-lg-0">
        <b-card class="shadow rounded-3 pb-0">
          <b-text>
            <div class="row mb-2">
              <div class="col">
                <p class="fw-bold">Billing Summary</p>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col">
                <p class="mb-0">Subtotal</p>
              </div>
              <div class="col-auto">
                <p class="mb-0">$3720.27</p>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col">
                <p class="mb-0">Discount</p>
              </div>
              <div class="col-auto">
                <p class="mb-0">-$749.99</p>
              </div>
            </div>
            <div class="row mb-0">
              <div class="col">
                <p class="mb-0">Warrenty(Platinum)</p>
              </div>
              <div class="col-auto">
                <p class="mb-0">-$259.99</p>
              </div>
            </div>
            <div class="text-primary mb-2"><small>Remove</small></div>
            <div class="row mb-2">
              <div class="col mb-2">
                <p class="mb-0">Shopping</p>
              </div>
              <div class="col-auto">
                <p class="mb-0">-$0.00</p>
              </div>
            </div>
            <div class="row border-bottom pb-3 mb-2">
              <div class="col">
                <p class="mb-0">Tax</p>
              </div>
              <div class="col-auto">
                <p class="mb-0">-$228.72</p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
                <p class="mb-0 fw-bold">Grand Total</p>
              </div>
              <div class="col-auto">
                <p class="mb-0 fw-bold">$3439.00</p>
              </div>
            </div>
            <b-form-textarea
              id="textarea"
              v-model="text"
              placeholder="Type here...."
              rows="2"
              max-rows="2"
              class="mb-3"
            ></b-form-textarea>
            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="checkbox"
                id="check1"
                name="option1"
                value="something"
                checked
              />
              <small
                >Please check to acknowledge our
                <span class="text-primary"
                  >Privacy &amp; Terms Policy</span
                ></small
              >
            </div>
            <div>
              <b-button class="w-100" variant="primary" @click="onSubmit()"
                >Pay $3439.00</b-button
              >
            </div>
            <div class="text-center mt-2">
              <img
                src="../assets/icons/nortan.jpg"
                class="img-fluid"
                width="100"
                height="100"
              />
            </div>
          </b-text>
        </b-card>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.activeBorder {
  border: 1px solid #0d6efd !important;
}
.billing-form {
  max-width: 900px;
  margin: 20px auto;
  label {
    font-size: 13px;
    font-weight: 700;
  }
  .card-header {
    font-size: 18px;
    font-weight: 700;
    text-align: center;
  }
}
.input {
  background-color: #f7f7f7;
  border: 1px solid rgb(199, 199, 199);
  padding: 0.3rem 0.5rem;
  border-radius: 6px;
  .hasError & {
    border-color: red;
  }
}

.hasError label {
  color: red;
}

.form-control:focus {
  box-shadow: none;
}
.btn-check:focus + .btn-secondary,
.btn-secondary:focus {
  box-shadow: none;
  border: 0 !important;
}
</style>
<script>
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  name: "FormCard",
  data() {
    return {
      selected: "A",
      form: {
        fname: "",
        lname: "",
        email: "",
        address: "",
        blank: "",
        city: "",
        zipCode: "",
        phoneNumber: "",
        cardNumber: "",
        expDate: "",
        cardSecurityCode: "",
      },
      show: true,
      options: ["Karanataka", "Maharashtra", "Uttar Pradesh", "Kerla"],
    };
  },
  validations: {
    form: {
      fname: { required, min: minLength(5) },
      lname: { required, min: minLength(5) },
      email: { required, email },
      address: { required },
      blank: {},
      city: { required },
      zipCode: { required, min: minLength(5) },
      phoneNumber: { required, min: minLength(10) },
      cardNumber: { required },
      expDate: { required },
      cardSecurityCode: { required },
    },
  },
  methods: {
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$error) return;
      this.billInfo();
    },
    billInfo() {
      var payloadData = {
          id:"",
          email:this.form.email,
          first_name:this.form.fname,
          last_name:this.form.lname,
          avatar:""
      }
      this.axios.post("https://reqres.in/api/users", payloadData).then((response) => {
        console.log(response);
      });
    },
  },
};
</script>
