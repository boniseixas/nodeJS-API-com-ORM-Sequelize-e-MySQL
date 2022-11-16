// const database = require('../models')

const Services = require('../services/Services')
const niveisServices = new Services('Niveis')

class NivelController {
   static async buscaTodosOsNiveis(req, res) {
      try {
         const todosOsNiveis = await niveisServices.buscaTodosOsRegistros()
         return res.status(200).json(todosOsNiveis)
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }

   static async buscaNivelPorId(req, res) {
      const { id } = req.params
      try {
         const umNivel = await database.Niveis.findOne( {
            where: {
               id: Number(id)
            }
         } )
         return res.status(200).json(umNivel)
      } catch(error) {
         return res.status(500).json(error.message)
      }
   }

   static async criaNivel(req, res) {
      const novoNivel = req.body
      try {
         const criaNovoNivel = await database.Niveis.create(novoNivel)
         return res.status(200).json(criaNovoNivel)
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }

   static async atualizaNivel(req, res) {
      const { id } = req.params
      const atualizaRegistro = req.body
      try {
         await database.Niveis.update(atualizaRegistro, { where: { id: Number(id) }}
         )
         const nivelAtualizado = await database.Niveis.findOne( { where: { id: Number(id) }}
         )
         return res.status(200).json(nivelAtualizado)
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }

   static async excluiNivel(req, res) {
      const { id } = req.params
      try {
         await database.Niveis.destroy({ where: { id: Number(id) }})
         return res.status(200).json({ mensagem: `nivel ${id} deletado!`})
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }

   static async restauraNivel(req, res) {
      const { id } = req.params
      try {
         await database.Niveis.restore( { where: { id: Number(id) } } )
         return res.status(200).json({ mensagem: `nivel ${id} restaurado`})
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }
}

module.exports = NivelController