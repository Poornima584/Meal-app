<template>
  <div class="search">
    <h2>Search your favourite meal</h2>
    <div class="search-container">
      <form @submit.prevent>
        <input
          type="text"
          v-model="searchInput"
          placeholder="Search.."
          name="search"
        />
        <button
          id="searchBtn"
          @click="getSearchResults(searchInput), (searchInput = '')"
        >
          Search
        </button>
      </form>
      <div v-if="meals">
        <b-container>
          <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="4" align-h="center">
            <b-col id="my-col" v-for="meal in meals" :key="meal.idMeal">
              <meal-world :meal="meal"></meal-world>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div v-else>
        <h4>No Data Found</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MealWorld from "@/components/MealWorld.vue";

export default {
  name: "Search",
  components: {
    MealWorld,
  },
  data() {
    return {
      searchInput: "",
      meals: [],
    };
  },
  computed: {
    ...mapState(["searchResults"]),
  },
  methods: {
    async getSearchResults() {
      await this.$store.dispatch("getSearchResults", this.searchInput);
      this.meals = this.searchResults;
      this.searchInput = "";
    },
  },
};
</script>

<style scoped>
.search {
  min-height: 100%;
  padding-top: 60.67px;
  padding-bottom: 24px;
}
#getMealDetailsBtn {
  background-color: rgb(221, 25, 25);
  border: none;
  color: white;
  border-radius: 4px;
}
#searchBtn {
  background-color: rgb(221, 25, 25);
  border: none;
  color: white;
  border-radius: 4px;
  margin: 5px;
}
#my-col {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
