import Aluno from '../models/Aluno.js';

class AlunoController {

    index = async(req, res) => {
        let alunos = await Aluno.findAll();
        res.render('aluno/index', {alunos: alunos});
    }

    cadastrar = (req, res) => {
        res.render('aluno/cadastrar');
    }

    salvar = (req, res) => {
        if(req.body.nota >= 7){
            var status = 'APROVADO';
        }else{
            var status = 'REPROVADO'
        }

        let aluno = {
            name: req.body.name,
            telefone: req.body.telefone,
            email: req.body.email,
            nota: req.body.nota,
            //status: status,
        }
        Aluno.create(aluno).then(() => {
            console.log('Aluno cadastrado com sucesso!');
            res.redirect('/aluno');
        })
    }

}

export default new AlunoController();