'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async t => {
      await queryInterface.createTable(
        'stuff',
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.DataTypes.INTEGER,
          },
          name: {
            allowNull: false,
            type: Sequelize.DataTypes.STRING,
          },
          cabinet_id: {
            allowNull: false,
            type: Sequelize.DataTypes.INTEGER,
          },
          expired_at: {
            allowNull: false,
            type: Sequelize.DataTypes.DATE,
          },
          category: {
            type: Sequelize.DataTypes.STRING
          },
          created_at: {
            allowNull: false,
            type: Sequelize.DataTypes.DATE,
          },
          modified_at: {
            allowNull: false,
            type: Sequelize.DataTypes.DATE,
          },
        },
        {
          transaction: t
        }
      )
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('stuff');
  }
};
