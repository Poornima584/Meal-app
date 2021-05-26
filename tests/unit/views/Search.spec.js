import { shallowMount, createLocalVue } from "@vue/test-utils";
import Search from "@/views/Search.vue";
import Vuex from "vuex";

describe("Search", () => {
  let wrapper;
  const state = {
    searchResults: {
      strMeal: "French Omelette",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/yvpuuy1511797244.jpg",
      idMeal: "52915",
    },
  };
  const actions = {
    getSearchResults: jest.fn(),
  };
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    const store = new Vuex.Store({
      state,
      actions,
    });
    wrapper = shallowMount(Search, {
      localVue,
      store,
      data() {
        return {
          searchInput: "French Omelette",
        };
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
    expect(wrapper.html()).toContain('<div class="search">');
  });
  it("getSearchResults called when search button is clicked ", () => {
    wrapper.find("#searchBtn").trigger("click");
    expect(actions.getSearchResults).toHaveBeenCalled();
  });
});
