module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: ["http://localhost:1337", "https://anotherdomain.com"],
      headers: "*",
    },
  },
};

module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
