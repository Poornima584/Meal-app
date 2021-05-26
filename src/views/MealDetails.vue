<template>
  <div class="meal-details">
    <b-row>
      <b-col sm>
        <b-img
          class="cropImg"
          :src="mealDetails.strMealThumb"
          alt="Responsive image"
        >
        </b-img>
        <h2>
          <b>{{ mealDetails.strMeal }}</b>
        </h2>
      </b-col>
      <b-col sm>
        <h3>List of ingredients</h3>
        <table class="table-bordered">
          <tr>
            <th>Ingredients</th>
            <th>Measures</th>
          </tr>
          <tr v-for="ingredient in getIngredients" :key="ingredient.id">
            <td>{{ ingredient.ingredient }}</td>
            <td>{{ ingredient.measure }}</td>
          </tr>
        </table>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h3>How to prepare the dish</h3>
        <p>{{ mealDetails.strInstructions }}</p>
        <h3>Watch how to cook {{ mealDetails.strMeal }}</h3>
        <iframe :src="getYoutubeUrl"></iframe>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "MealDetails",
  computed: {
    ...mapState(["mealDetails"]),
    ...mapGetters(["getIngredients", "getYoutubeUrl"]),
  },
  created() {
    this.getMealDetailsById(this.$route.params.id);
  },
  methods: {
    ...mapActions(["getMealDetailsById"]),
  },
};
</script>

<style scoped>
.meal-details {
  min-height: 100%;
  padding-top: 80.67px;
  padding-bottom: 24px;
  max-width: 98%;
  padding-left: 3%;
  }
table {
  width: 80%;
  margin: auto;
}
th {
  width: 50%;
  color: white;
  background-color: rgb(221, 25, 25);
}
.cropImg {
  width: 300px;
}
</style>
