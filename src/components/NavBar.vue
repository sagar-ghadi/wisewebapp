<template>
  <div>
    <b-navbar toggleable="sm" class="px-4">
      <b-navbar-brand href="#">
        <img
          src="@/assets/icons/logoipsum.svg"
          class="d-inline-block align-top"
          alt="brandLogo"
        />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav class="ms-auto">
          <div v-for="item in navItem" :key="item">
            <router-link :to="item.routerLink">
              <b-nav-text class="me-4 text-dark">{{
                item.navItemName
              }}</b-nav-text>
            </router-link>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "navBar",
  props: ["navItem"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
