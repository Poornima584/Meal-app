import { shallowMount, createLocalVue } from "@vue/test-utils";
import AppHeader from "@/components/AppHeader.vue";
import VueRouter from "vue-router";
import { routes } from "@/router/index";
import BootstrapVue from "bootstrap-vue";

describe("AppHeader", () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    const router = new VueRouter({ routes });
    wrapper = shallowMount(AppHeader, {
      localVue,
      router,
    });
  });
  afterEach(() => {
    wrapper.destroy();
  });

  it("is a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it("should render the correct markup", () => {
    expect(wrapper.html()).toContain('<div class="app-header">');
  });
});
