const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()
router
   .get('/turmas', TurmaController.buscaTodasAsTurmas)
   .get('/turmas/:id', TurmaController.buscaTurmaPorId)
   .post('/turmas', TurmaController.criaTurma)
   .put('/turmas/:id', TurmaController.atualizaTurma)
   .delete('/turmas/:id', TurmaController.excluiTurma)
   .post('/turmas/:id/restaura', TurmaController.restauraTurma)

module.exports = router