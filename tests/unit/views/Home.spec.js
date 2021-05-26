import { shallowMount, createLocalVue } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import Vuex from "vuex";

describe("Home", () => {
  let wrapper;
  const state = {
    randomMeal: {
      strMeal: "French Omelette",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/yvpuuy1511797244.jpg",
      idMeal: "52915",
    },
  };
  const actions = {
    getRandomMeal: jest.fn(),
  };
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    const store = new Vuex.Store({
      state,
      actions,
    });
    wrapper = shallowMount(Home, {
      localVue,
      store,
    });
  });
  afterEach(() => {
    wrapper.destroy();
  });
  it("is a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it("should render the correct markup", () => {
    expect(wrapper.html()).toContain('<div class="home">');
  });
  it(" getRandomMeal method", () => {
    wrapper.vm.getRandomMeal();
    expect(actions.getRandomMeal).toHaveBeenCalled();
  });
});
