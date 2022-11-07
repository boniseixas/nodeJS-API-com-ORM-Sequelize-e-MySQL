const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

// const pController = new PessoaController // não precisa criar um nova instancia de PessoaController, porque esse método foi declarado com estático na classe PessoaController

router
   .get('/pessoas', PessoaController.buscaPessoasAtivas)
   .get('/pessoas/todos', PessoaController.buscaTodasAsPessoas)
   .get('/pessoas/:id', PessoaController.buscaPessoaPorId)
   .post('/pessoas', PessoaController.criaPessoa)
   .put('/pessoas/:id', PessoaController.atualizaPessoa)
   .delete('/pessoas/:id', PessoaController.excluiPessoa)
   .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.buscaUmaMatricula)
   .post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
   .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
   .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
   .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.excluiMatricula)
   .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)

module.exports = router