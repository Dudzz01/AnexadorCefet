const {DataTypes} = require("sequelize");
const sequelize = require('../Config/database');
const Professor = require('../Models/professor.js');
const Curso = require('../Models/curso.js');

const Aluno = sequelize.define('Aluno',
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
        matricula:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        senha:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        dataEntradaFaculdade:
        {
            type: DataTypes.STRING(6),
            allowNull: false
        }


    }

   
)

// Aluno.belongsToMany(Curso,
//     {
//         through: 'AlunoCurso',
//         onUpdate: 'CASCADE',
//         onDelete: 'CASCADE'
//     }
// )



// Aluno.belongsToMany(Professor,
//     {
//         through: 'AlunoProfessor',
//         onUpdate: 'CASCADE',
//         onDelete: 'CASCADE'
//     }
// )

module.exports = Aluno;