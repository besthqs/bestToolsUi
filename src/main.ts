import { createApp } from "vue";

import App from "./App.vue";
import bestToolsUi from "../packages/index";

const app = createApp(App);

app.use(bestToolsUi);
app.mount("#app");
