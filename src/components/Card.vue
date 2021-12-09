<template>
  <div class="px-2">
    <b-card
      :style="{ background: `${bgColor}` }"
      class="br-radius border-0 card-container c-pointer"
    >
      <b-text>
        <div class="d-flex">
          <div
            class="flex-shrink-0 card-shoe-img"
            :style="{
              'background-image':
                'url(' + require(`../assets/icons/${imgSrc}`) + ')',
            }"
          ></div>
          <div class="flex-grow-1 ml-35">
            <p class="text-white opacity-75 fs-14">{{ cardTitle }}</p>
            <div class="d-flex">
              <b-button
                type="button"
                class="btn ms-auto border-0 card-btn-buy"
                :style="{
                  background: `${btnBgColor}`,
                  color: `${btnTextColor}`,
                }"
                >{{ btnTitle }}</b-button
              >
            </div>
          </div>
        </div>
      </b-text>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "card",
  props: [
    "imgSrc",
    "cardTitle",
    "btnTitle",
    "bgColor",
    "btnBgColor",
    "btnTextColor",
  ],
  data() {
    return {};
  },
};
</script>
<style scoped>
.card-shoe-img {
  height: 130px;
  width: 130px;
  background-size: cover;
  position: absolute;
  top: 0;
  left: -8%;
  -webkit-transition-property: width, height;
  -webkit-transition-duration: 0.5s;
  transition-property: width, height;
  transition-duration: 0.5s;
}
.card-container:hover .card-shoe-img {
  width: 90px;
  height: 90px;
}
.card-container:hover .ml-35 {
  margin-left: 33%;
  transition-duration: 0.5s;
}
.card-container:hover .card-btn-buy {
  padding: 0.375rem 4rem;
  transition-duration: 2s;
}
.c-pointer {
  cursor: pointer;
}
.ml-35 {
  margin-left: 34%;
}
.br-radius {
  border-radius: 10px;
}
</style>
