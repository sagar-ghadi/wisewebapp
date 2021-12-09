<template>
  <div id="app">
    <div class="container-fluid" v-bind:style="{ background: navBarColor }">
      <NavBar :navItem="navItemsObject"></NavBar>
    </div>
    <router-view />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      navItemsObject: [
        {
          navItemName: "Home",
          routerLink: "/",
        },
        {
          navItemName: "Buy",
          routerLink: "/buy",
        },
      ],
      currentRouteName: "",
    };
  },
  computed: {
    navBarColor() {
      if (this.$route.path === "/buy") {
        return "#383b3f";
      }
      return "#fff";
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none !important;
}
.highlight {
  color: white !important;
  background-color: #383b3f;
  width: 100% !important;
  max-width: 100% !important;
}
.highlight .navbar-text {
  color: #fff !important;
}
</style>
