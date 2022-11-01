const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()
router
   .get('/niveis', NivelController.buscaTodosOsNiveis)
   .get('/niveis/:id', NivelController.buscaNivelPorId)
   .post('/niveis', NivelController.criaNivel)
   .put('/niveis/:id', NivelController.atualizaNivel)
   .delete('niveis/:id', NivelController.excluiNivel)

module.exports = router