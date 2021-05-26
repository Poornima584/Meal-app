<template>
  <div class="home">
    <meal-world :meal="randomMeal"></meal-world>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import MealWorld from "../components/MealWorld.vue";

export default {
  name: "Home",
  components: {
    MealWorld,
  },
  computed: {
    ...mapState(["randomMeal"]),
  },
  created() {
    this.getRandomMeal();
  },
  methods: {
    ...mapActions(["getRandomMeal"]),
  },
};
</script>

<style scoped>
.home {
  min-height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 53px;
}
</style>
