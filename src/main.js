// main.js //

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import pinia from "./store";
import InputField from "./components/InputField.vue";
import Button from "./components/Button.vue";

const app = createApp(App);

app.component("InputField", InputField);
app.component("Button", Button);

app.use(Quasar, quasarUserOptions);
app.use(router);
app.use(pinia);
app.mount("#app");
