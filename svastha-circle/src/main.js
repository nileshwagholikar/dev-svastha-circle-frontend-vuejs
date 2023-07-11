import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

import "./style.scss";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 };
    },
});

const vuetify = createVuetify({
    components,
    directives,
});

createApp(App).use(vuetify).use(router).mount("#app");
