const sequelize = require('../Config/database');
const Professor = require('./professor');
const Curso = require('./curso');
const Aluno = require('./aluno');

Professor.hasMany(Curso, { foreignKey: 'professorId' });
Curso.belongsTo(Professor, { foreignKey: 'professorId' });

Professor.belongsToMany(Aluno, {
  through: 'AlunoProfessor',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
});
Aluno.belongsToMany(Professor, {
  through: 'AlunoProfessor',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
});

Curso.belongsToMany(Aluno, {
  through: 'AlunoCurso',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
});
Aluno.belongsToMany(Curso, {
  through: 'AlunoCurso',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
});

module.exports = {
  sequelize,
  Professor,
  Curso,
  Aluno,
};
