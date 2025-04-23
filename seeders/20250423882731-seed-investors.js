"use strict";

const env = process.env.NODE_ENV || "development";

if (env === "development") {
  require("dotenv").config();
}

const data = require("./json/investors.json");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Investors",
      data.map((investor) => {
        investor.createdAt = new Date();
        investor.updatedAt = new Date();
        return investor;
      }),
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Investors", null, {});
  },
};
