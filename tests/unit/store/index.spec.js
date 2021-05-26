import { getters } from "@/store/index";
import { mutations } from "@/store/index";
import { getRandomMeal } from "@/service/service";
import { getMealDetailsById } from "@/service/service";
import { getSearchResults } from "@/service/service";
import { actions } from "@/store/index";

jest.mock("@/service/service", () => ({
  getRandomMeal: jest.fn(),
  getMealDetailsById: jest.fn(),
  getSearchResults: jest.fn(),
}));

describe("store", () => {
  const state = {
    mealDetails: {
      idMeal: "52915",
      strMeal: "French Omelette",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/yvpuuy1511797244.jpg",
      strYoutube: "https://www.youtube.com/watch?v=qXPhVYpQLPA",
      strIngredient1: "Eggs",
      strIngredient2: "Butter",
      strIngredient3: "",
      strIngredient4: "",
      strMeasure1: "3",
      strMeasure2: "2 knobs",
      strMeasure3: "",
      strMeasure4: "",
    },
  };

  it("should return ingredient and measure List", () => {
    const ingredientsMeasureList = getters.getIngredients(state);
    expect(ingredientsMeasureList).toEqual([
      { id: 1, ingredient: "Eggs", measure: "3" },
      { id: 2, ingredient: "Butter", measure: "2 knobs" },
    ]);
  });
  it("should return modified youtube url", () => {
    const youtubeUrl = getters.getYoutubeUrl(state);
    expect(youtubeUrl).toBe("https://www.youtube.com/embed/qXPhVYpQLPA");
  }),
    it("add random meal to state", () => {
      const state = {
        randomMeal: {},
      };
      const randomMeal = [
        {
          strMeal: "French Omelette",
          strMealThumb:
            "https://www.themealdb.com/images/media/meals/yvpuuy1511797244.jpg",
          idMeal: "52915",
        },
      ];
      mutations.setRandomMeal(state, randomMeal);
      expect(state).toEqual({
        randomMeal: {
          strMeal: "French Omelette",
          strMealThumb:
            "https://www.themealdb.com/images/media/meals/yvpuuy1511797244.jpg",
          idMeal: "52915",
        },
      });
    });
  it("add meal details to state", () => {
    const state = {
      mealDetails: {},
    };
    const mealDetails = [
      {
        strMeal: "French Omelette",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/yvpuuy1511797244.jpg",
        idMeal: "52915",
      },
    ];
    mutations.setMealDetailsById(state, mealDetails);
    expect(state).toEqual({
      mealDetails: {
        strMeal: "French Omelette",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/yvpuuy1511797244.jpg",
        idMeal: "52915",
      },
    });
  });
  it("add search result", () => {
    const state = {
      searchResults: [],
    };
    const searchResults = [{ strMeal: "French Omelette" }];
    mutations.setSearchResults(state, searchResults);
    expect(state).toEqual({
      searchResults: [{ strMeal: "French Omelette" }],
    });
  });
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

  it("get Random Meal", async () => {
    const context = {
      commit: jest.fn(),
    };
    getRandomMeal.mockImplementation(() => Promise.resolve(response));
    await actions.getRandomMeal(context);
    expect(context.commit).toHaveBeenCalledWith(
      "setRandomMeal",
      response.data.meals
    );
  });

  it("get Meal Details By Id", async () => {
    const context = {
      commit: jest.fn(),
    };
    getMealDetailsById.mockImplementation(() => Promise.resolve(response));
    await actions.getMealDetailsById(context);
    expect(context.commit).toHaveBeenCalledWith(
      "setMealDetailsById",
      response.data.meals
    );
  });
  it("get search results", async () => {
    const context = {
      commit: jest.fn(),
    };
    getSearchResults.mockImplementation(() => Promise.resolve(response));
    await actions.getSearchResults(context, "French Omelette");
    expect(context.commit).toHaveBeenCalledWith(
      "setSearchResults",
      response.data.meals
    );
  });
});
