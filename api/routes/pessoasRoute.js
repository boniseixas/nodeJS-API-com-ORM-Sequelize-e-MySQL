const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

// const pController = new PessoaController // não precisa criar um nova instancia de PessoaController, porque esse método foi declarado com estático na classe PessoaController

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)

module.exports = router