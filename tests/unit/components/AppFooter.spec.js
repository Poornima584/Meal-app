import { shallowMount, createLocalVue } from "@vue/test-utils";
import AppFooter from "@/components/AppFooter.vue";

describe("AppFooter", () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    wrapper = shallowMount(AppFooter, {
      localVue,
    });
  });
  afterEach(() => {
    wrapper.destroy();
  });

  it("is a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it("should render the correct markup", () => {
    expect(wrapper.html()).toContain('<div class="app-footer">');
  });
});
