import banco from '../config/banco.js'

const Aluno = banco.sequelize.define('alunos', {
    id: {
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: banco.Sequelize.STRING(100),
        allowNull: true,
    },
    telefone: {
        type: banco.Sequelize.STRING(20),
        allowNull: true,
    },
    email: {
        type: banco.Sequelize.STRING(100),
        allowNull: true,
    },
    nota: {
        type: banco.Sequelize.FLOAT,
        allowNull: true
    },
    status: {
        type: banco.Sequelize.STRING(20)
    }
});

Aluno.sync();

export default Aluno;