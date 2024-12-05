const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/anexcefet', {
    dialect: 'postgres',
    logging: console.log,
    define: {
        schema: 'public', // Substitua "meu_schema" pelo nome do seu schema
      }
  });

  module.exports = sequelize;