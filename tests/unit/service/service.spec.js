import axios from "axios";
import {
  getRandomMeal,
  getMealDetailsById,
  getSearchResults,
} from "@/service/service";

jest.mock("axios");
const response = {
  data: {
    meals: [
      {
        strMeal: "French Omelette",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/yvpuuy1511797244.jpg",
        idMeal: "52915",
      },
    ],
  },
};

describe("service", () => {
  it("getRandomMeal", async () => {
    axios.get.mockImplementation(() => Promise.resolve(response));
    const meal = await getRandomMeal();
    expect(axios.get).toHaveBeenCalledWith(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    expect(meal).toEqual(response);
  });
  it("getMealDetailsById", async () => {
    axios.get.mockImplementation(() => Promise.resolve(response));
    const meal = await getMealDetailsById("52915");
    expect(axios.get).toHaveBeenCalledWith(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52915"
    );
    expect(meal).toEqual(response);
  });
  it("getSearchResults", async () => {
    axios.get.mockImplementation(() => Promise.resolve(response));
    const meal = await getSearchResults("French Omelette");
    expect(axios.get).toHaveBeenCalledWith(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=French Omelette"
    );
    expect(meal).toEqual(response);
  });
});
