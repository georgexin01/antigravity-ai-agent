import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.bakerygroup365.app",
  appName: "365 Bakery",
  webDir: "dist",
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
    CapacitorHttp: {
      enabled: true,
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
    Keyboard: {
      resizeOnFullScreen: true, // when the keyboard opens, the webview resizes — your popup and inputs move up automatically.
    },
  },
  // "server": {
  //   "url": "http://localhost:5173", // For development
  //   "cleartext": true
  // }
};

export default config;
