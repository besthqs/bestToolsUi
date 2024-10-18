import { App } from "vue";
import buWaterLoading from "./buWaterLoading.vue";

export { buWaterLoading };

const install = function (app: App) {
  app.component("buWaterLoading", buWaterLoading);
};

export default install;
