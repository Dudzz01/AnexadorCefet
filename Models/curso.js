const {DataTypes} = require("sequelize");
const sequelize = require("../Config/database.js");
const Professor = require("../Models/professor.js");
const Aluno = require("../Models/aluno.js");


const Curso = sequelize.define('Curso',
    {
        id: 
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantidadeAlunos:
        {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cargaHoraria:
        {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        preRequisitos: 
        {
            type: DataTypes.STRING,
            allowNull: true
        },
        descricao:
        {
            type: DataTypes.STRING,
            allowNull: true
        },
        sala:
        {
            type: DataTypes.STRING,
            allowNull: true
        },
        horario:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        creditos:
        {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        professorId:
        {
            type:DataTypes.INTEGER,
            allowNull: false,
            references: 
            {
                model: Professor,
                key: "id"
            }
        }
    }
)

// Curso.belongsToMany(Aluno,
//     {
//         through: 'AlunoCurso',
//         onUpdate: 'CASCADE',
//         onDelete: 'CASCADE'
        
//     }
// )

// Curso.belongsTo(Professor, {foreignKey: 'professorId'});

module.exports = Curso;