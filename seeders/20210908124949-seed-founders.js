'use strict';

const env = process.env.NODE_ENV || 'development'

if (env === 'development') {
  require('dotenv').config()
}

let hashPassword = require('../helpers/passwordHashingSeeder.js')

const data = require("./json/founders.json");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert(
      "Founders",
      data.map((ele) => {
        ele.password = hashPassword(ele.password);
        ele.createdAt = new Date();
        ele.updatedAt = new Date();
        return ele;
      })
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete("Founders", null, {});
  }
};
