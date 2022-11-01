const database = require('../models')

class TurmaController {
   static async buscaTodasAsTurmas(req, res) {
      try {
         const todasAsTurmas = await database.Turmas.findAll()
         return res.status(200).json(todasAsTurmas)
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }

   static async buscaTurmaPorId(req, res) {
      const { id } = req.params
      try {
         const umaTurma = await database.Turmas.findOne( {
            where: {
               id: Number(id)
            }
         } )
         return res.status(200).json(umaTurma)
      } catch(error) {
         return res.status(500).json(error.message)
      }
   }

   static async criaTurma(req, res) {
      const novaTurma = req.body
      try {
         const criaNovaTurma = await database.Turmas.create(novaTurma)
         return res.status(200).json(criaNovaTurma)
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }

   static async atualizaTurma(req, res) {
      const { id } = req.params
      const atualizaRegistro = req.body
      try {
         await database.Turmas.update(atualizaRegistro, { where: { id: Number(id) }}
         )
         const turmaAtualizada = await database.Turmas.findOne( { where: { id: Number(id) }}
         )
         return res.status(200).json(turmaAtualizada)
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }

   static async excluiTurma(req, res) {
      const { id } = req.params
      try {
         await database.Turmas.destroy({ where: { id: Number(id) }})
         return res.status(200).json({ mensagem: `turma ${id} deletada!`})
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }
}

module.exports = TurmaController