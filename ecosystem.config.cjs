const { configDotenv } = require("dotenv");

configDotenv();

module.exports = {
  apps: [
    {
      name: "tennis-court-api",
      script: "dist/main.js",
      port: 10010,
    },
  ],
};
