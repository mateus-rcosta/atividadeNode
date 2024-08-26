'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>{
    await queryInterface.createTable('Enderecos',{
      ID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      CEP:{
          type: DataTypes.STRING,
          allowNull:false,
      },
      LOGRADOURO:{
          type: DataTypes.STRING,
          allowNull: false,
      },
      NUMERO:{
          type: DataTypes.STRING,
          allowNull: false,
      },
      COMPLEMENTO:{
          type: DataTypes.STRING,
      },
      BAIRRO:{
          type: DataType.STRING,
          allowNull: false,
      },
      CIDADE:{
          type: DataTypes.STRING,
          allowNull: false,
      },
      ESTADO:{
          type: DataTypes.STRING,
          allowNull: false,
      },
      MUNICIPIO_IBGE:{
          type: DataTypes.STRING,
          allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Enderecos');
  }
};
