const {DataTypes} = require("sequelize");
const sequelize = require("../Config/database.js");
const Curso = require("../Models/curso.js");
const Aluno = require("../Models/aluno.js");

const Professor = sequelize.define('Professor',
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
        }
    },
    {
        schema: 'public', // Certifique-se de que este schema existe no banco
        charset: 'utf8'
    }
)

// Professor.hasMany(Curso, { foreignKey: 'professorId' });

// Professor.belongsToMany(Aluno,
//     {
//         through: 'AlunoProfessor',
//         onUpdate: 'CASCADE',
//         onDelete: 'CASCADE'
//     }
// );

module.exports = Professor;