import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import "./css/custom-style.css";
import i18n from "./i18n";
import "vue3-toastify/dist/index.css";
// import { initPush } from "./utils/capacitor/pushnotification/fcm.js";

// initPush();

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(i18n);

app.mount("#app");
