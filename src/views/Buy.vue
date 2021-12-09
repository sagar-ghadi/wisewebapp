<template>
  <div>
    <div class="container-fluid bg-dark about">
      <div class="py-2 container-width">
        <div class="row position-relative">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6">
            <div
              class="bg-shoe-img"
              :style="{
                'background-image':
                  'url(' + require('../assets/icons/shoe.png') + ')',
              }"
            ></div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-6">
            <div class="content-alignment">
              <h1 class="fst-italic font-size-3 fw-bold text-white">
                Buy <span class="text-vivid-orange">Women Shoe</span> <br />Now
              </h1>
              <p class="py-3 text-white opacity-75">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-2 container-width">
      <div>
        <FormCard></FormCard>
      </div>
    </div>
  </div>
</template>
<style scoped>
.about {
  opacity: 0.9;
}
.about .bg-shoe-img::before {
  content: "";
  background: linear-gradient(311deg, #ff5e00, #efb15a);
  height: 315px;
  width: 315px;
  display: inline-block;
  position: absolute;
  top: 19%;
  z-index: -5;
  left: 13%;
  border-radius: 50%;
  opacity: 0.8;
}
</style>
<script>
import FormCard from "@/components/Form.vue";
export default {
  name: "Buy",
  components: {
    FormCard,
  },
  data() {
    return {};
  },
};
</script>
