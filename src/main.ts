import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import DeliveryLayout from "./layouts/DeliveryLayout.vue";

import { createPinia } from "pinia";

const app = createApp(App);
app
  .use(router)
  .component("default-layout", DefaultLayout)
  .component("delivery-layout", DeliveryLayout)
  .use(createPinia())
  .mount("#app");
