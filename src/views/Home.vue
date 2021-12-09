<template>
  <div class="container home">
    <div class="py-2">
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
        <div
          class="col-12 col-sm-12 col-md-6 col-lg-6 home-bg-dot-img"
          :style="{
            'background-image':
              'url(' + require('../assets/icons/dot.svg') + ')',
          }"
        >
          <div class="content-alignment">
            <h1 class="fst-italic font-size-3 fw-bold">
              New <span class="text-vivid-orange">Winter</span> <br />Arrivals
            </h1>
            <p class="py-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <button type="button" class="btn buy-btn rounded border-0">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-0 mb-lg-0">
          <Card
            imgSrc="1-shoe.png"
            cardTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            btnTitle="Buy Now"
            bgColor="linear-gradient(107deg, #ab0925, #f90000)"
            btnBgColor="#fff"
            btnTextColor="#db4d65"
          />
        </div>
        <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4 mb-lg-0">
          <Card
            imgSrc="2-shoe.png"
            cardTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            btnTitle="Buy Now"
            bgColor="linear-gradient(107deg, #b59c83, #f3c495)"
            btnBgColor="#fff"
            btnTextColor="#b59c83"
          />
        </div>
        <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-0 mb-lg-0">
          <Card
            imgSrc="3-shoe.png"
            cardTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            btnTitle="Buy Now"
            bgColor="linear-gradient(107deg, rgb(36 36 145), #112542)"
            btnBgColor="#fff"
            btnTextColor="#112542"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "Home",
  components: {
    Card,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.home-bg-dot-img {
  background-repeat: no-repeat;
  background-position: 67% 25%;
}
.buy-btn {
  padding: 12px 45px;
  background: linear-gradient(311deg, #ff5e00, #f1ca87);
  color: rgb(255 255 255 / 70%) !important;
}
@-webkit-keyframes buy-btn {
  15% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
  }
  30% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
  50% {
    -webkit-transform: translateY(3px);
    transform: translateY(3px);
  }
  65% {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
  }
  80% {
    -webkit-transform: translateY(2px);
    transform: translateY(2px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes buy-btn {
  15% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
  }
  30% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
  50% {
    -webkit-transform: translateY(3px);
    transform: translateY(3px);
  }
  65% {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
  }
  80% {
    -webkit-transform: translateY(2px);
    transform: translateY(2px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
.buy-btn:hover {
  -webkit-animation: buy-btn 1s ease;
  animation: buy-btn 1s ease;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}
.font-size-3 {
  font-size: 3.5rem;
}
.home .bg-shoe-img::before {
  content: "";
  background: linear-gradient(311deg, #ff5e00, #efb15a);
  height: 45%;
  width: 38.5%;
  display: inline-block;
  position: absolute;
  top: 30%;
  z-index: -1;
  left: 6.7%;
  border-radius: 15px;
}
</style>
