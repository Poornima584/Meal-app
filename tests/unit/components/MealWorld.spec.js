import { shallowMount, createLocalVue } from "@vue/test-utils";
import MealWorld from "@/components/MealWorld.vue";
import BootstrapVue, { BIconJustifyLeft } from "bootstrap-vue";

describe("MealWorld", () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    wrapper = shallowMount(MealWorld, {
      localVue,
      propsData: {
        meal: {
          strMeal: "French Omelette",
          strMealThumb:
            "https://www.themealdb.com/images/media/meals/yvpuuy1511797244.jpg",
          idMeal: "52915",
        },
        cardWidth: 15,
      },
      mocks: {
        $router: {
          push: jest.fn(),
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
  it("it should call getMealDetails on clicking Get Details button", () => {
    const getMealDetailsBtn = wrapper.find("#getMealDetailsBtn");
    getMealDetailsBtn.trigger("click");
    const expectedRoute = {
      name: "MealDetails",
      params: {
        id: "52915",
      },
    };
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith(expectedRoute);
  });
});
