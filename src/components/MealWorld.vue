<template>
  <div>
    <b-card
      :title="meal.strMeal"
      :img-src="meal.strMealThumb"
      :style="{ 'max-width': 19 + 'rem' }"
    ></b-card>
    <button class="getMealDetailsBtn" @click="$router.push({
        name: 'MealDetails',
        params: {id: meal.idMeal},
      })">
      Get Details
    </button>
  </div>
</template>
<script>
export default {
  name: "MealWorld",
  props: ["meal"],
};
</script>
<style scoped>
.card {
  margin:auto;
  height: 100%;
}
.getMealDetailsBtn {
  background-color: rgb(221, 25, 25);
  border: none;
  color: white;
  border-radius: 4px;
  margin-top: 10px;
}
</style>
