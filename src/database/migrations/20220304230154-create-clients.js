'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clients', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      third_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_born: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sex: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      passport_series: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      passport_id: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      who_issued_the_passport: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_of_issue_of_the_passport: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      inspirational_passport_number: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      place_of_birth: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city_of_residence: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      residential_address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mobile_phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      home_phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      work_place: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      position: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      place_of_registration: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      address_of_residence: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      marital_status: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      citizenship: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      disability: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      retiree: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      salary: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      liable_for_military_service: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('clients');
  },
};
