import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueSetupExtend(), Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),],
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "https://genproduction.my/api",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  //   cors: true,
  // },
  // server: {
  //   host: "192.168.1.22", // This makes the server accessible externally
  //   port: 5173, // You can set the port here, or use the default
  // },
});
