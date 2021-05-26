import Vue from "vue";
import Vuex from "vuex";
import {
  getRandomMeal,
  getMealDetailsById,
  getSearchResults,
} from "../service/service";

Vue.use(Vuex);

export const getters = {
  getIngredients(state) {
    const ingredientsList = [];
    const measureList = [];
    const ingredientsMeasureList = [];
    Object.entries(state.mealDetails)
    .forEach((detail) => {
      const [key, value] = detail;
      if (
        key.includes("strIngredient") &&
        value !== null &&
        value.trim() !== ""
      ) {
        ingredientsList.push(value);
      } else if (
        key.includes("strMeasure") &&
        value !== null &&
        value.trim() !== ""
      ) {
        measureList.push(value);
      }
    });
    ingredientsList.forEach((value, index) => {
      ingredientsMeasureList.push({
        id: index + 1,
        ingredient: value,
        measure: measureList[index],
      });
    });
    return ingredientsMeasureList;
  },
  getYoutubeUrl(state) {
    return state.mealDetails.strYoutube.replace("watch?v=", "embed/");
  },
};
export const mutations = {
  setRandomMeal(state, payload) {
    const [randomMeal] = payload;
    state.randomMeal = randomMeal;
  },
  setMealDetailsById(state, payload) {
    const [mealDetails] = payload;
    state.mealDetails = mealDetails;
  },
  setSearchResults(state, payload) {
    state.searchResults = payload;
  },
  setErrorMessage(state, payload) {
    state.erroMessage = payload;
  },
};
export const actions = {
  async getRandomMeal(context) {
    try {
      const response = await getRandomMeal();
      context.commit("setRandomMeal", response.data.meals);
    } catch (error) {
      context.commit("setErrorMessage", error.message);
    }
  },
  async getMealDetailsById(context, id) {
    try {
      const response = await getMealDetailsById(id);
      context.commit("setMealDetailsById", response.data.meals);
    } catch (error) {
      context.commit("setErrorMessage", error.message);
    }
  },
  async getSearchResults(context, searchInput) {
    try {
      const response = await getSearchResults(searchInput);
      context.commit("setSearchResults", response.data.meals);
    } catch (error) {
      context.commit("setErrorMessage", error.message);
    }
  },
};
export const state = {
  randomMeal: {},
  mealDetails: {},
  searchResults: [],
  erroMessage: ''
};
export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
});
