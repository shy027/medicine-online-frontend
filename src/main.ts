/*
 * @Author: shy 1533103845@qq.com
 * @Date: 2024-11-23 21:02:22
 * @LastEditors: shy 1533103845@qq.com
 * @LastEditTime: 2024-11-24 18:44:12
 * @FilePath: \medicine-online-frontend\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";
import "virtual:windi.css";
import "swiper/css";
// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");
