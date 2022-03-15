'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('credit-plan', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      client_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      credit_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      payed: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      acc_id_repay: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      acc_id_main: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      close_credit: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      day_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('credit-plan');
  },
};
