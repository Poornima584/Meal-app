import axios from "axios";

export function getRandomMeal() {
  return axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
}

export function getMealDetailsById(id) {
  return axios.get(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
}

export function getSearchResults(searchInput) {
  return axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
  );
}
