import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import utils from "@/assets/js/utils";

const app = createApp(App);
app.use(router);
app.mount("#app");

utils.loadThemeScrollBar();
utils.setDefaultTheme("purp");
utils.appendJs([
  `https://unicons.iconscout.com/release/v4.0.0/script/monochrome/bundle.js`,
  `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js`,
]);
utils.appendCss([
  `https://unicons.iconscout.com/release/v4.0.0/css/solid.css`,
  `https://unicons.iconscout.com/release/v4.0.0/css/line.css`,
  `https://unicons.iconscout.com/release/v4.0.0/css/thinline.css`,
  `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css`,
]);
