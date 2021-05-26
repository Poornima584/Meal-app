<template>
  <div class="app-header">
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand>Meal</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item id="home" to="/">Home</b-nav-item>
          <b-nav-item id="search" to="/search">Search</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "AppHeader",
};
</script>
<style scoped>
a {
  color: #5c6268;
  margin: 4px;
}
a:hover {
  color: #b2b5b8;
  text-decoration: none;
}
.router-link-exact-active {
  color: #ffffff;
}
</style>
