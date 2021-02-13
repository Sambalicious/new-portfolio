const withImages = require("next-images");

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === "development",
    register: true,
    scope: "/app",
    dest: "public",
    runtimeCaching,
    sw: "service-worker.js",
    //...
  },
  // pwa: {
  //   dest: "public",
  //   runtimeCaching,
  // },
});

module.exports = withImages(withPWA());
