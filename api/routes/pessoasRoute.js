const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

// const pController = new PessoaController // não precisa criar um nova instancia de PessoaController, porque esse método foi declarado com estático na classe PessoaController

router.get('/pessoas', PessoaController.buscaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.buscaPessoaPorId)
router.post('/pessoas', PessoaController.criaPessoa)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.delete('/pessoas/:id', PessoaController.excluiPessoa)

module.exports = router