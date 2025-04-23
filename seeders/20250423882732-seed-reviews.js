"use strict";

const env = process.env.NODE_ENV || "development";

if (env === "development") {
  require("dotenv").config();
}

const data = require("./json/review.json");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Reviews",
      data.map((review) => {
        review.createdAt = new Date();
        review.updatedAt = new Date();
        return review;
      }),
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Reviews", null, {});
  },
};
