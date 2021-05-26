import { shallowMount, createLocalVue } from "@vue/test-utils";
import MealDetails from "@/views/MealDetails.vue";
import Vuex from "vuex";

describe("MealDetails", () => {
  let wrapper;
  const state = {
    mealDetails: {
      strMeal: "French Omelette",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/yvpuuy1511797244.jpg",
      idMeal: "52915",
    },
  };
  const getters = {
    getIngredients: () => [
      { id: 1, ingredient: "Eggs", measure: "3" },
      { id: 2, ingredient: "Butter", measure: "2 knobs" },
    ],
    getYoutubeUrl: () => "https://www.youtube.com/embed/qXPhVYpQLPA",
  };
  const actions = {
    getMealDetailsById: jest.fn(),
  };
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    const store = new Vuex.Store({
      state,
      getters,
      actions,
    });
    wrapper = shallowMount(MealDetails, {
      localVue,
      store,
      mocks: {
        $route: {
          params: { id: "52915" },
        },
      },
    });
  });
  afterEach(() => {
    wrapper.destroy();
  });
  it("is a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it("should render the correct markup", () => {
    expect(wrapper.html()).toContain('<div class="meal-details">');
  });
  it(" get meal details by id method", () => {
    wrapper.vm.getMealDetailsById("52915");
    expect(actions.getMealDetailsById).toHaveBeenCalled();
  });
});
