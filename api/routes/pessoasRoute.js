const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

// const pController = new PessoaController // não precisa criar um nova instancia de PessoaController, porque esse método foi declarado com estático na classe PessoaController

router
   .get('/pessoas', PessoaController.buscaPessoasAtivas)
   .get('/pessoas/todos', PessoaController.buscaTodasAsPessoas)
   .get('/pessoas/:id', PessoaController.buscaPessoaPorId)
   .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.buscaUmaMatricula)
   .get('/pessoas/:estudanteId/matricula', PessoaController.buscaMatriculas)
   .get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.buscaMatriculasPorTurma)
   .get('/pessoas/matricula/lotada', PessoaController.buscaTurmasLotadas)
   .post('/pessoas', PessoaController.criaPessoa)
   .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)
   .post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
   .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
   .post('/pessoas/:estudanteId/cancela', PessoaController.cancelaTodasAsMatriculasDeUmEstudante)
   .put('/pessoas/:id', PessoaController.atualizaPessoa)
   .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
   .delete('/pessoas/:id', PessoaController.excluiPessoa)
   .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.excluiMatricula)

module.exports = router