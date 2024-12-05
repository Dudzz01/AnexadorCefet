const express = require("express");


const app = express();

function inicializarAplicacao()
{
    console.log("Aplicacao Inicializada");
}


const { sequelize, Professor, Curso, Aluno } = require("../Models/associacoes.js");

(async () => {
    try {
      console.log('Sincronizando o banco de dados...');
      await sequelize.sync({ alter: true }); // Cria as tabelas na ordem correta
      console.log('Tabelas criadas com sucesso!');
    } catch (error) {
      console.error('Erro ao sincronizar tabelas:', error);
    } finally {
      await sequelize.close(); // Fecha a conexão
    }
  })();



app.listen(4000, inicializarAplicacao);

